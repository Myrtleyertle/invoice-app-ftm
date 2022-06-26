const {editInvoice, getAllInvoices, addNewInvoice, removeInvoice, markAsPaid } = require('../models/invoices.model');

function httpGetAllInvoices(req, res){
    return res.status(200).json(getAllInvoices())
}
function httpAddNewInvoice(req, res){
    const invoice = req.body;
    console.log(invoice)
    if(!invoice.clientName ){
        return res.status(400).json({
            error: 'incorrect or missing values'
        })
    }
    invoice.senderAddress = {
        street: invoice.street,
        city: invoice.city,
        postCode: invoice.postCode,
        country: invoice.country,
    }
    invoice.clientAddress = {
        street: invoice.billStreet,
        city: invoice.billCity,
        postCode: invoice.billPostCode,
        country: invoice.billCountry,
    }
    invoice.createdAt = invoice.invoiceDate || new Date();
    invoice.status = 'Pending';
    invoice.paymentDue = new Date(invoice.createdAt + invoice.paymentTerms);
    console.log(invoice.paymentDue)
    addNewInvoice(invoice)
    res.status(201).json(invoice)

}
function httpDeleteInvoice(req, res){
    const id = req.params.id;
    removeInvoice(id)
    res.status(200).json({
        message: 'invoice deleted'
    })
}
function httpEditInvoice(req, res){
    const id = req.params.id;
    const invoice = req.body;
    console.log(invoice)
    if(!invoice.clientName ){
        return res.status(400).json({
            error: 'incorrect or missing values'
        })
    }
    invoice.senderAddress = {
        street: invoice.street,
        city: invoice.city,
        postCode: invoice.postCode,
        country: invoice.country,
    }
    invoice.clientAddress = {
        street: invoice.billStreet,
        city: invoice.billCity,
        postCode: invoice.billPostCode,
        country: invoice.billCountry,
    }
    invoice.createdAt = invoice.invoiceDate || new Date();
    invoice.status = 'Pending';
    invoice.paymentDue = new Date(invoice.createdAt + invoice.paymentTerms);
    console.log(invoice.paymentDue)
    editInvoice(id,invoice)
    res.status(201).json(invoice)

}
function httpMarkAsPaid(req, res){
    const id = req.body;
    console.log(id)
    markAsPaid(id)
    res.status(200).json({
        message: 'invoice marked as paid'
    })
}
function httpGetInvoice(req, res){
     const id = req.params.id;
     const invoice = getInvoice(id)
        res.status(200).json(invoice) 
}
module.exports = {
    httpGetAllInvoices,
    httpAddNewInvoice,
    httpDeleteInvoice,
    httpEditInvoice,
    httpMarkAsPaid,
    httpGetInvoice
}