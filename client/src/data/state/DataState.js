import React, { useCallback, useReducer } from 'react';
import { httpAddNewInvoice, httpGetInvoices, httpDeleteInvoice, httpEditInvoice, httpMarkAsPaid, httpGetInvoice } from './requests';
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


export const DataState = (props) => {
    const initialState = {
        invoices: [],
        activeInvoice: {},
        filter: '',
    }
    const [state, dispatch] = useReducer(dataReducer, initialState);

   const getInvoices = useCallback(async () => {
       const invoices = await httpGetInvoices();
       console.log(invoices)
       dispatch({
        type: GET_INVOICES,
        payload: invoices
       })
   }, [])
   
   React.useEffect(() => {
       getInvoices();
       }, [getInvoices])
   
    const setActiveInvoice = (index) => {
        const invoice = state.invoices[index];
        dispatch({ type: SET_ACTIVE_INVOICE, payload: invoice });
    }
    const setFilter = (e) => {
        dispatch({ type: SET_FILTER , payload: e.target.value});
    }
    const submitNewInvoice = useCallback(async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const clientEmail = data.get('clientEmail');
        const clientName = data.get('clientName');
        const senderAddress = data.get('senderAddress');
        const street = data.get('street');
        const paymentTerms = data.get('paymentTerms');
        const paymentDue = data.get('paymentDue');
        const description = data.get('description');
        const total = data.get('total');
        const country = data.get('country');
        const city = data.get('city');
        const postCode = data.get('postCode');
        const billCity = data.get('billCity');
        const billCountry = data.get('billCountry');
        const billPostCode = data.get('billPostCode');
        const listName = data.get('listName');
        const quantity = data.get('quantity');
        const price = data.get('price');
        const status = data.get('status');
        const createdAt = data.get('createdAt');
        const items = data.getAll('items');
        const invoice = { 
            clientName,
            senderAddress,
            clientEmail,
            createdAt,
            city,
            postCode,
            billCity,
            billCountry,
            billPostCode,
            listName,
            quantity,
            price,
            status,
            total,
            country,
            description,
            items,
            paymentDue,
            paymentTerms,
            street,
        }
        
        console.log(invoice)
        const response = await httpAddNewInvoice(invoice);

        const success = response.ok
        console.log(success)
        if(success){
            getInvoices()
        } else {
            return response.json(500).catch(error => {
                console.log(error)
            })

        }

    }, [getInvoices])

    const deleteInvoice = useCallback(async (id) => {
        const response = await httpDeleteInvoice(id);
        const success = response.ok
        if(success){
            getInvoices()
        } else {
            return response.json(500).catch(error => {
                console.log(error)
            })
        
        }
    }, [getInvoices])
    const editInvoice = useCallback(async (e, id) => {

        e.preventDefault();
        const data = new FormData(e.target);
        const clientEmail = data.get('clientEmail');
        const clientName = data.get('clientName');
        const senderAddress = data.get('senderAddress');
        const street = data.get('street');
        const paymentTerms = data.get('paymentTerms');
        const paymentDue = data.get('paymentDue');
        const description = data.get('description');
        const total = data.get('total');
        const country = data.get('country');
        const city = data.get('city');
        const postCode = data.get('postCode');
        const billCity = data.get('billCity');
        const billCountry = data.get('billCountry');
        const billPostCode = data.get('billPostCode');
        const listName = data.get('listName');
        const quantity = data.get('quantity');
        const price = data.get('price');
        const status = data.get('status');
        const createdAt = data.get('createdAt');
        const items = data.getAll('items');
        const invoice = { 
            clientName,
            senderAddress,
            clientEmail,
            createdAt,
            city,
            postCode,
            billCity,
            billCountry,
            billPostCode,
            listName,
            quantity,
            price,
            status,
            total,
            country,
            description,
            items,
            paymentDue,
            paymentTerms,
            street,
        }
        
        const response = await httpEditInvoice(id, invoice);
        const success = response.ok
        if(success){
            getInvoices()
        } else {
            return response.json(500).catch(error => {
                console.log(error)
            })
        
        }
    }, [getInvoices])
    const markAsPaid = useCallback(async (id) => {
        const response = await httpMarkAsPaid(id);
        const success = response.ok
        if(success){
            getInvoices()
        } else {
            return response.json(500).catch(error => {
                console.log(error)
            })
            
        }
    }, [getInvoices])

   const getInvoice = useCallback(async (id) => {
        const response = await httpGetInvoice()
        const success = response.ok
        if(success){
            dispatch({
                type: GET_INVOICES,
                payload: response
            })
        } else {
            return response.json(500).catch(err => {
                console.log(err)
            })
        }
    },  [])
    return (
        <DataContext.Provider value={{
            invoices: state.invoices,
            client: state.client,
            activeInvoice: state.activeInvoice,
            filter: state.filter,
            setFilter,
            getInvoices,
            getInvoice,
            setActiveInvoice,
            submitNewInvoice,
            deleteInvoice,
            editInvoice,
            markAsPaid
        }}>
            {props.children}
        </DataContext.Provider>
    )
}