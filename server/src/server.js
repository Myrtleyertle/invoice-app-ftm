const http = require('http');

const app = require('./app');
const { getInvoices } = require('./models/invoices.model');

const server = http.createServer(app)
const PORT = process.env.PORT || 7000

async function startServer(){
    await getInvoices()
    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })

}
startServer()