import React, { useCallback, useReducer } from 'react';
import { httpAddNewInvoice, httpGetAllInvoices, httpDeleteInvoice, httpEditInvoice, httpMarkAsPaid } from './requests';
import { DataContext } from './DataContext';
import { dataReducer } from './dataReducer';
import {
    GET_INVOICES,
    SET_FILTER,
    SET_ACTIVE_INVOICE,
    SET_INDEX

} from '../type';

export const DataState = (props) => {
    const initialState = {
        invoices: [],
        activeInvoice: {},
        filter: '',
        index: 0
    }
    const [state, dispatch] = useReducer(dataReducer, initialState);

   const getInvoices = useCallback(async () => {
       const {data}  = await httpGetAllInvoices();
       console.log(data)
       dispatch({
        type: GET_INVOICES,
        payload: data
       })
   }, [])
   
    const setActiveInvoice = (index) => {
        const invoice = state.invoices[index];
        sessionStorage.setItem('activeInvoice', JSON.stringify(invoice));
        const invc = JSON.parse(sessionStorage.getItem('activeInvoice'));
        dispatch({ type: SET_ACTIVE_INVOICE, payload: invc });
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
            console.log('no')
        
        }
    }, [getInvoices])
    const setIndex = (id) =>{
        dispatch({ type: SET_INDEX, payload: id })
    }
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
            console.log('nope')
            
        }
    }, [getInvoices])

    const getInvoice = () => {
        if(sessionStorage.getItem('activeInvoice') === null || sessionStorage.getItem('activeInvoice') === undefined){
            const invc = JSON.parse(sessionStorage.getItem('activeInvoice'));
            dispatch({ type: SET_ACTIVE_INVOICE, payload: invc });
        } else {
            const invc = JSON.parse(sessionStorage.getItem('activeInvoice'));
            dispatch({ type: SET_ACTIVE_INVOICE, payload: invc });
        }
    }
   
    return (
        <DataContext.Provider value={{
            invoices: state.invoices,
            client: state.client,
            activeInvoice: state.activeInvoice,
            filter: state.filter,
            setFilter,
            getInvoices,
            setActiveInvoice,
            submitNewInvoice,
            deleteInvoice,
            editInvoice,
            markAsPaid,
            setIndex,
            index: state.index,
            getInvoice
        }}>
            {props.children}
        </DataContext.Provider>
    )
}