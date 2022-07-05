const axios = require('axios')
const URL = "http://localhost:7000";
const getInvoices = axios.get(`${URL}`)

async function httpGetAllInvoices(){
  return await axios.get(`${URL}/invoices`)
}
async function httpAddNewInvoice(invoice) {
    console.log(invoice)
    try{
      return await axios.post(`${URL}/invoices`, {
       method: 'post',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(invoice)

      })

    } catch(error){
      console.log(error)
      return{
        ok: false
      }
    }
    
}
async function httpDeleteInvoice(id) {
    try{
      return await axios.delete({
       method: 'delete',
       url: `${URL}/invoices/${id}`
      })

    }
    catch(error){
      console.log(error)
      return{
        ok: false
      }
    }

}
async function httpEditInvoice(id, invoice) {
    try{
      return await axios.put(`${URL}/invoices/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice, id)
       })

    }
    catch(error){
      console.log(error)
      return{
        ok: false
      }
    }
  
}
async function httpMarkAsPaid(id) {
  console.log(id)
    try{
      return await fetch(`${URL}/invoices/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        }
        })


    }
    catch(error){
      console.log(error)
      return{
        ok: false
      }
    }
  
}

export { httpGetAllInvoices, httpAddNewInvoice, httpDeleteInvoice, httpEditInvoice, httpMarkAsPaid  };
