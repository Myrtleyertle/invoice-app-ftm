const express = require('express');
const { httpGetAllInvoices } = require('./invoices.controller');
const invoicesRouter = express.Router();

invoicesRouter.get('/', httpGetAllInvoices)

module.exports = invoicesRouter;