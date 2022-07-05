import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import classes from "./Invoice.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../data/state/DataContext";
import  EditInvoiceModal  from "../../modals/EditInvoiceModal";

export const Invoice = () => {
  const { activeInvoice, setActiveInvoice, index, deleteInvoice, markAsPaid, setIndex } = useContext(DataContext);

  const [show, setShow] = useState(false);
  const { createdAt, paymentDue } = activeInvoice;
  const ca = new Date(createdAt);
  const pd = new Date(paymentDue);
  console.log(index);
  const invoice = JSON.parse(sessionStorage.getItem('activeInvoice'))
  console.log(invoice)
  return (
    <div className={classes.invoice}>
      <Sidebar />
      <div className={classes.invoicecontent}>
        <div className={classes.goback}>
          <Link to="/">
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.342.886L2.114 5.114l4.228 4.228"
                stroke="#9277FF"
                stroke-width="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
            go back
          </Link>
        </div>
        <div className={classes.invoiceheader}>
          <div className={classes.status}>
            <h3>Status</h3>
            {invoice.status === "paid" ? (
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
            <button onClick={() => setShow(!show)} className={classes.edit} title="edit">
              edit
            </button>
              <EditInvoiceModal activeInvoice={activeInvoice}  show={show} setShow={setShow}/>
            <Link to="/">
            <button onClick={() => deleteInvoice(activeInvoice.id)} className={classes.delete} title="delete">
              Delete
            </button>
          </Link>
            <button onClick={() => markAsPaid(activeInvoice.id)} className={classes.mark} title="mark as paid">
              Mark as paid
            </button>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.address}>
            <div className={classes.addressheader}>
              <h3>#{invoice.id}</h3>
              <p>{invoice.description}</p>
            </div>
            <div className={classes.sender}>
              <h4>{invoice.senderAddress.street}</h4>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </div>
          </div>
          <div className={classes.billing}>
            <div>
              <div className={classes.idc}>
                <div className={classes.id}>Invoice Date</div>
                <div>{ca.toDateString()}</div>
              </div>
              <div className={classes.pdc}>
                <div className={classes.pd}>Payment Due</div>
                <div>{pd.toDateString()}</div>
              </div>
            </div>
            <div className={classes.billto}>
              <h5>Bill To</h5>
              <p>{invoice.clientName}</p>
              <p>{invoice.clientAddress.street}</p>
              <p>{invoice.clientAddress.city}</p>
              <p>{invoice.clientAddress.country}</p>
              <p>{invoice.clientAddress.postCode}</p>
            </div>
            <div className={classes.email}>
              <h5>Sent to</h5>
              <h5>{invoice.clientEmail}</h5>
            </div>
          </div>
          <div className={classes.items}>
            <div className={classes.itemtitles}>
              <div>
                <div>Items Name</div>
              </div>
              <div className={classes.row}>
                <div>QTY</div>
                <div>Price</div>
                <div>Total</div>
              </div>
            </div>
            {invoice.items.map((item) => {
              return (
                <div className={classes.item} key={item.id}>
                  <div>
                    <div>{item.name}</div>
                  </div>
                  <div className={classes.row}>
                    <div>{item.quantity}</div>
                    <div>${item.price}</div>
                    <div>${item.total}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.amountdue}>
            <div className={classes.adtitle}>Amount Due</div>
            <div className={classes.adtotal}>${invoice.total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
