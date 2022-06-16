const URL = 'http://localhost:7000'
async function httpGetInvoices(){
    const response = await fetch(`${URL}/invoices`)
    return response.json();
}
export{
    httpGetInvoices,
}