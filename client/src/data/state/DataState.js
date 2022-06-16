import React, { useReducer } from 'react';
import { DataContext } from './DataContext';
import { dataReducer } from './dataReducer';
import {
    GET_INVOICES,
    ADD_INVOICE,
    DELETE_INVOICE,
    SET_FILTER,
    SET_ACTIVE_INVOICE,
    ADD_NEW_ITEM,

} from '../type'
import { httpGetInvoices } from './requests';
export const DataState = (props) => {
    const newInvoice ={
        id: "",
        clientAddress: {
            street: "",
            city: "",
            country: "",
            postalCode: "",
        },
        clientEmail: "",
        clientName: "",
        createdAt: "",
        description: "",
        items: [],
        paymentDue: "",
        paymentTerms: "",
        senderAddress: {
            street: "",
            city: "",
            country: "",
            postalCode: "",
        },
        status: "",
        total: null,

    }
    const initialState = {
        invoices: [],
        activeInvoice: {},
        client: {
            clientName: '',
            clientAddress: '',
        },
        newInvoice: newInvoice,
    }
    const [state, dispatch] = useReducer(dataReducer, initialState);
   
    
   const getInvoices = async () => {
       const invoices = await httpGetInvoices();
       console.log(invoices)
       const parsedInvoices = JSON.parse(invoices)
       console.log(parsedInvoices)
       dispatch({
        type: GET_INVOICES,
        payload: parsedInvoices
       })
   }

    const setActiveInvoice = (index) => {
        const invoice = state.invoices[index];
        dispatch({ type: SET_ACTIVE_INVOICE, payload: invoice });
    }
    const addInvoice = (invoice) => {
        dispatch({ type: ADD_INVOICE, payload: invoice, payload2: newInvoice })
    }
    return (
        <DataContext.Provider value={{
            invoices: state.invoices,
            client: state.client,
            activeInvoice: state.activeInvoice,
            newInvoice: state.newInvoice,
            getInvoices,
            setActiveInvoice,
            addInvoice,
        }}>
            {props.children}
        </DataContext.Provider>
    )
}