import React, { useContext } from 'react'
import { Sidebar } from '../../components/Sidebar'
import classes from './Invoice.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../data/state/DataContext';



export const Invoice = () => {

  const { activeInvoice } = useContext(DataContext)
  console.log(activeInvoice)
  return (
    <div className={classes.invoice}>
      <Sidebar />
      <div className={classes.invoicecontent}>
        <div>
          <Link to="/">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" stroke-width="2" fill="none" fillRule="evenodd" /></svg>
            go back
          </Link>
        </div>
        <div className={classes.invoiceheader}>
          <div className={classes.status}>
            <h3>Status</h3>
            {activeInvoice.status === "paid" ? (
            <div className={classes.paid}>
              <div className={classes.greencircle}></div>Paid
            </div>
          ) : activeInvoice.status === "pending" ? (
            <div className={classes.pending}>
              <div className={classes.orangecircle}></div>Pending
            </div>
          ) : (
            <div className={classes.draft}>
              <div className={classes.darkcircle}></div>Draft
            </div>
          )}
          </div>
          <div>
            <button title='edit'>Edit</button>
            <button title='delete'>Delete</button>
            <button title='mark as paid'>Mark as paid</button>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.address}>
            <div>
              <h3>Invoice #{activeInvoice.id}</h3>
              <p>{activeInvoice.description}</p>
            </div>
            <div>
              <h3>{activeInvoice.senderAddress.street}</h3>
              <p>{activeInvoice.senderAddress.city}</p>
              <p>{activeInvoice.senderAddress.country}</p>
              <p>{activeInvoice.senderAddress.postCode}</p>
            </div>
          </div>
          <div className={classes.billing}>
            <div>
              <div>
                <h3>Invoice Date</h3>
                <p>{activeInvoice.createdAt}</p>
              </div>
              <div>
                <h3>Payment Due</h3>
                <p>{activeInvoice.paymentDue}</p>
              </div>
            </div>
            <div>
              <h4>Bill To</h4>
              <h2>{activeInvoice.clientName}</h2>
              <p>{activeInvoice.clientAddress.street}</p>
              <p>{activeInvoice.clientAddress.city}</p>
              <p>{activeInvoice.clientAddress.country}</p>
              <p>{activeInvoice.clientAddress.postCode}</p>
            </div>
            <div>
              <h4>Sent to</h4>
              <h2>{activeInvoice.clientEmail}</h2>
            </div>
          </div>
          <div className={classes.items}>
            <div className={classes.item}>
              {activeInvoice.items.map((item) => {
                return (
                  <div key={item.id}>
                    <p>{item.description}</p>
                    <p>{item.quantity}</p>
                    <p>{item.price}</p>
                    </div>
                    );
                    })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

