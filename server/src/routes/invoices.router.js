const express = require('express');
const { httpEditInvoice,httpGetAllInvoices, httpAddNewInvoice, httpDeleteInvoice, httpMarkAsPaid, httpGetInvoice } = require('./invoices.controller');
const invoicesRouter = express.Router();

invoicesRouter.get('/', httpGetAllInvoices)
invoicesRouter.post('/', httpAddNewInvoice)
invoicesRouter.get('/:id', httpGetInvoice)
invoicesRouter.delete('/:id', httpDeleteInvoice)
invoicesRouter.put('/:id', httpEditInvoice)
invoicesRouter.put('/:id', httpMarkAsPaid)

module.exports = invoicesRouter;