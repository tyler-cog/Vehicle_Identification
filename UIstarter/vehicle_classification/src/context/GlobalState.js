import {createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
    carData: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch]  = useReducer(appReducer, initialState);

    function addAllData(carData) {
        dispatch({
            type: "ADD_ALL_DATA",
            payload: carData,
        });
    }

    return (
        <GlobalContext.Provider
         value = {{
            carData: state.carData,
            addAllData,
         }}
         >
            {children}
            </GlobalContext.Provider>
    );
};