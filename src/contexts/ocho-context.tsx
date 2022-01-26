import React, { createContext, useContext } from 'react'
import { Ocho } from '~core/Ocho'
// import Ocho from '~core/Ocho'

type OchoProviderProps = {
  children: React.ReactNode
  ocho: Ocho
}

const OchoContext = createContext<Ocho>({} as Ocho)
function OchoProvider({ ocho, children }: OchoProviderProps) {
  return <OchoContext.Provider value={ocho}>{children}</OchoContext.Provider>
}

function useOcho() {
  return useContext(OchoContext)
}

export { OchoProvider, useOcho }
