const { invoicesArr, getInvoices } = require('../models/invoices.model');

function httpGetAllInvoices(req, res){
    console.log(invoicesArr)
    return res.status(200).json(invoicesArr)
}

module.exports = {
    httpGetAllInvoices
}