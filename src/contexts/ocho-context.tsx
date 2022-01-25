import React, { createContext, useContext } from 'react'
import Ocho from '~core/Ocho'

type OchoProviderProps = {
  children: React.ReactNode
  definitions: Ocho
}

const OchoContext = createContext<Ocho>({} as Ocho)
function OchoProvider({ definitions, children }: OchoProviderProps) {
  return (
    <OchoContext.Provider value={definitions}>{children}</OchoContext.Provider>
  )
}

function useOcho() {
  return useContext(OchoContext)
}

export { OchoProvider, useOcho }
