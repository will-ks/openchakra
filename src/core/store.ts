import { init } from '@rematch/core'
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { createWrapper, MakeStore } from 'next-redux-wrapper'

import { ComponentsStateWithUndo, initComponents } from './models/components'
import { AppState, initApp } from './models/app'
import filterUndoableActions from '~utils/undo'
import { Ocho } from '~core/Ocho'

export type RootState = {
  app: AppState
  components: ComponentsStateWithUndo
}

const version = parseInt(process.env.NEXT_PUBLIC_VERSION || '1', 10)

const persistConfig = {
  key: `openchakra_v${version}`,
  storage,
  whitelist: ['present'],
  version,
  throttle: 500,
}

const persistPlugin = {
  onStoreCreated(store: any) {
    if (typeof process == 'undefined' || process.browser) {
      persistStore(store)
    }
  },
}

function createStoreConfig(ocho: Ocho) {
  const components = initComponents(ocho)
  const app = initApp(ocho)

  const storeConfig = {
    models: {
      app,
      components,
    },
    redux: {
      // @ts-ignore
      combineReducers: (reducers) => {
        return combineReducers({
          ...reducers,
          components: persistReducer(
            persistConfig,
            undoable(reducers.components, {
              limit: 10,
              filter: filterUndoableActions,
            }),
          ),
        })
      },
    },
    plugins: [persistPlugin],
  }
  return storeConfig
}

// function initStore(ocho: Ocho) {
//   // @ts-ignore
//   const makeStore: MakeStore<RootState> = () => init(createStoreConfig(ocho))
//   return createWrapper<RootState>(makeStore)
// }

export { createStoreConfig }
