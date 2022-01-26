import { createModel } from '@rematch/core'
import { ComponentType, Ocho } from '~core/Ocho'

type Overlay = undefined | { rect: DOMRect; id: string; type: ComponentType }

export type AppState = {
  showLayout: boolean
  showCode: boolean
  inputTextFocused: boolean
  overlay: undefined | Overlay
}

// app iss synamically initialized, so that we may configure it from ocho
let app: ReturnType<typeof initApp> = {} as any
export function initApp(ocho: Ocho) {
  const a = createModel({
    state: {
      showLayout: true,
      showCode: false,
      inputTextFocused: false,
      overlay: undefined,
    } as AppState,
    reducers: {
      toggleBuilderMode(state: AppState): AppState {
        return {
          ...state,
          showLayout: !state.showLayout,
        }
      },
      toggleCodePanel(state: AppState): AppState {
        return {
          ...state,
          showCode: !state.showCode,
        }
      },
      toggleInputText(state: AppState): AppState {
        return {
          ...state,
          inputTextFocused: !state.inputTextFocused,
        }
      },
      setOverlay(state: AppState, overlay: Overlay | undefined): AppState {
        return {
          ...state,
          overlay,
        }
      },
      'components/deleteComponent': (state: AppState): AppState => {
        return {
          ...state,
          overlay: undefined,
        }
      },
      '@@redux-undo/UNDO': (state: AppState): AppState => {
        return {
          ...state,
          overlay: undefined,
        }
      },
    },
  })
  app = a
  return a
}

export default app
