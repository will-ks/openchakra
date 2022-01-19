import React, {createContext, useContext} from "react";
import ComponentDefinitions from "~core/ComponentDefinitions";


type ComponentDefinitionsProviderProps = {
  children: React.ReactNode,
  definitions : ComponentDefinitions,
}

const ComponentDefinitionsContext = createContext<ComponentDefinitions>({} as ComponentDefinitions)
function ComponentDefinitionsProvider({ definitions, children} : ComponentDefinitionsProviderProps) {
 return (
    <ComponentDefinitionsContext.Provider value={definitions}>
        {children}
    </ComponentDefinitionsContext.Provider>
  )
}

function useComponentDefinitions() {
  return useContext(ComponentDefinitionsContext)
}

export {
  ComponentDefinitionsProvider,
  useComponentDefinitions
}
