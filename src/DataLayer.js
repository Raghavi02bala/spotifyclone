import React, {createContext, useContext, useReducer} from "react";


export const DataLayerContext = createContext();

// the children that we are trying to use here, is the component that has been passed inside
// the DataLayer, here it is , the whole <App/> componenet itself, lies inside DataLayer.
export const DataLayer = ({ initialState, reducer, children}) =>(
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// create context layer.
export const useDataLayerValue = () => useContext(DataLayerContext);

