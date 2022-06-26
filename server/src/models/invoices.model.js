const data = require("../data/data.json");
const invoices = new Map();
const randomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const random = Math.floor(Math.random() * letters.length);
    return letters[random];
}
const randomNumber = () => {
    const numbers = "0123456789";
    const random = Math.floor(Math.random() * numbers.length);
    return numbers[random];
}

let lastestId = randomLetter() + randomLetter() + randomNumber() + randomNumber() + randomNumber() + randomNumber();
console.log(lastestId);
invoices.set(data[0].id, data[0])
invoices.set(data[1].id, data[1])
invoices.set(data[2].id, data[2])
invoices.set(data[3].id, data[3])
invoices.set(data[4].id, data[4])
invoices.set(data[5].id, data[5])
invoices.set(data[6].id, data[6])
function addNewInvoice(invoice) {
  let id = lastestId
  invoices.set(id, Object.assign(invoice, { id: lastestId }));
  console.log(invoices);
}
function removeInvoice(id) {
  invoices.delete(id);
}

function getAllInvoices() {
  return Array.from(invoices.values());
}
function getInvoice(id){
  return invoices.get(id)
}
function markAsPaid(id){
  invoices.set(id, Object.assign(invoices.get(id), { status: 'paid' }));
  console.log(invoices.get(id));
}
function editInvoice(id, invoice) {
  invoices.set(id, Object.assign(invoices.get(id), invoice));
}

module.exports = {
  addNewInvoice,
  getAllInvoices,
  removeInvoice,
  markAsPaid,
  editInvoice,
};
