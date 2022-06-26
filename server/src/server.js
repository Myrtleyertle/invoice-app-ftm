const http = require('http');
const cluster = require('cluster')
const app = require('./app');
const { getAllInvoices } = require('./models/invoices.model');

const server = http.createServer(app)
const PORT = process.env.PORT || 7000

async function startServer(){
    await getAllInvoices()
    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })

}
startServer()
