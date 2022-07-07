import classes from "./Invoices.module.css";
import { useContext, useState } from "react";
import { DataContext } from "../../data/state/DataContext";
import NewInvoiceModal from "../../modals/NewInvoiceModal";
import { Link } from "react-router-dom";
import { Invoice } from "./Invoice";
export const Invoices = () => {
  const [show, setShow] = useState(false);
  const data = useContext(DataContext);
  const { invoices, setFilter, setIndex, filter, setActiveInvoice } = data;
  const filteredInvoices = invoices.filter((invoice) => {
    if (filter === "") {
      return invoice;
    } else if (invoice.status.toLowerCase().includes(filter.toLowerCase())) {
      return invoice;
    }
  });
  const Invoices = filteredInvoices.map((invoice, index) => {
    return (
      <Link
        className={classes.link}
        to={`/Invoice/${invoice.id}`}
        onClick={() => {
          setActiveInvoice(index);
        }}
      >
        <div className={classes.invoices} key={index}>
          <div className={classes.id}>#{invoice.id}</div>
          <div className={classes.clientName}>{invoice.clientName}</div>
          <div className={classes.createdAt}>{invoice.createdAt}</div>
          <div className={classes.total}>${invoice.total}</div>
          <div className={classes.status}>
            {invoice.status === "paid" ? (
              <div className={classes.paid}>
                <div className={classes.greencircle}></div>Paid
              </div>
            ) : invoice.status === "pending" ? (
              <div className={classes.pending}>
                <div className={classes.orangecircle}></div>Pending
              </div>
            ) : (
              <div className={classes.draft}>
                <div className={classes.darkcircle}></div>Draft
              </div>
            )}
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#7C5DFA"
                stroke-width="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className={classes.background}>
      <div className={classes.invoicesheader}>
        <div>
          <div className={classes.headertitle}>Invoices</div>
          <div className={classes.subtitle}>
            There are {invoices.length} total invoices
          </div>
        </div>
        <div className={classes.selectbtngroup}>
          <span>Filter by:</span>
          <select
            className={classes.select}
            title="filter"
            onChange={(event) => {
              setFilter(event);
            }}
            name="filter"
          >
            <option value="">All</option>
            <option value="draft">Draft</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>

          <button className={classes.invbtn} onClick={() => setShow(!show)}>
            <span className={classes.plus}>+</span> New Invoice{" "}
          </button>
          <NewInvoiceModal show={show} setShow={setShow} />
        </div>
      </div>
      <div className={classes.invoiceslist}>{Invoices}</div>
    </div>
  );
};
