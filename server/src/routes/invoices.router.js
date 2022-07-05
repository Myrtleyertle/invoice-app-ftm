const express = require('express');
const { httpEditInvoice,httpGetAllInvoices, httpAddNewInvoice, httpDeleteInvoice, httpMarkAsPaid, httpGetInvoice } = require('./invoices.controller');
const invoicesRouter = express.Router();
const invoiceEditRouter = express.Router();

invoicesRouter.get('/', httpGetAllInvoices)
invoicesRouter.get('/:id', httpGetInvoice)
invoicesRouter.post('/', httpAddNewInvoice)
invoicesRouter.delete('/:id', httpDeleteInvoice)
invoicesRouter.put('/:id', httpMarkAsPaid)
invoiceEditRouter.put('/:id', httpEditInvoice)
module.exports = invoicesRouter;