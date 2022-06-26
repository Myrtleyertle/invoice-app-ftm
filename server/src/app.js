const express = require('express')

const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const app = express()
const invoicesRouter = require('./routes/invoices.router')
app.use(cors({
    origin: ["http://localhost:3001", "http://localhost:3000"]
}))
app.use(morgan('combined'));
app.use(express.json());
app.use('/invoices', invoicesRouter)
app.use(express.static(path.join(__dirname, '..', 'public')))
app.get('/*',  (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})
module.exports = app;