const fs = require('fs')
const path = require('path')

const invoicesArr = [];

function getInvoices(){
    return new Promise((resolve, reject) => {
        console.log(__dirname)
        const filename = __dirname + '/../data/data.json'
        fs.createReadStream(filename)
            .on('data', (data) => {
                console.log(data)
                const parsedInvoices = JSON.parse(data)
                console.log(parsedInvoices)
                const invoices = JSON.stringify(parsedInvoices)
                console.log(invoices)
                invoicesArr.push(invoices)
            })
            .on('err', (err) => {
                console.log(err)
                reject(err)
            })
            .on('end', () => {
                resolve();
            })
    })
}

module.exports = {
    invoicesArr,
    getInvoices
}