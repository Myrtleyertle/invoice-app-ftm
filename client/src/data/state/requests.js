const URL = "http://localhost:7000";
async function httpGetInvoices() {
  const response = await fetch(`${URL}/invoices`);
  return await response.json();
 
}

async function httpAddNewInvoice(invoice) {
    console.log(invoice)
    try{
      return await fetch(`${URL}/invoices`, {
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
      return await fetch(`${URL}/invoices/${id}`, {
       method: 'delete',
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
async function httpEditInvoice(id, invoice) {
    try{
      return await fetch(`${URL}/invoices/${id}`, {
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
async function httpMarkAsPaid(id, status) {
    try{
      return await fetch(`${URL}/invoices/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
       })

    }
    catch(error){
      console.log(error)
      return{
        ok: false
      }
    }
  
}
async function httpGetInvoice(id){
  try{
    return await fetch(`${URL}/invoices/${id}`,{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(id)
    })
  } catch(error) {
    console.log(error)
    return{
      ok: false
    }
  }
}
export { httpGetInvoices, httpAddNewInvoice, httpDeleteInvoice, httpEditInvoice, httpMarkAsPaid, httpGetInvoice  };
