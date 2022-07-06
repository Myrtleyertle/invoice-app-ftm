import { useContext, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Button, Form } from "react-bootstrap";
import classes from "../App.module.css";
import { DataContext } from "../data/state/DataContext";

export const ModalOverlay = (props) => {
  const data = useContext(DataContext);
  const { submitNewInvoice } = data;
  const [list, setList] = useState([]);
  const [newItem , setNewItem] = useState()
  const addNewItem = (e) => {
    e.preventDefault();
    const newList = [...list, newItem];
    setList(newList);
  };
  return (
    <div className={classes.modaloverlay}>
      <div className={classes.offcanvas}>
        <div className={classes.btnheader}>
          <h1>New Invoice</h1>
        </div>
        <h5 className={classes.billfrom}>Bill From</h5>
        <div className={classes.form}>
          <Form
            id="new-invoice"
            method="post"
            onSubmit={(e) => submitNewInvoice(e)}
          >
            <div className={classes.street}>
              <label className={classes.formLabel} htmlFor="senderAddress">Street Address</label>
              <input
                id="street"
                type="text"
                name="senderAddress"
                className={classes.forminput}
                placeholder="Enter street address"
              />
            </div>
            <div className={classes.senderAddress}>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className={classes.forminput}
                  placeholder="Enter City"
                />
              </div>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="postCode">Post Code</label>
                <input
                  id="postCode"
                  type="text"
                  name="postCode"
                  className={classes.forminput}
                  placeholder="Enter Post Code"
                />
              </div>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="country">Country</label>
                <input
                  id="country"
                  className={classes.forminput}
                  type="text"
                  placeholder="Enter Country"
                />
              </div>
            </div>
            <h5 className={classes.billto}>Bill To</h5>
            <div className={classes.frow}>
              <label className={classes.formLabel} htmlFor="clientName">Client Name</label>
              <input
                id="clientName"
                type="text"
                name="clientName"
                className={classes.forminput}
                placeholder="Enter Client Name"
              />
            </div>
            <div className={classes.frow}>
              <label className={classes.formLabel} htmlFor="clientEmail">Client's Email</label>
              <input
                id="clientEmail"
                type="text"
                name="clientEmail"
                className={classes.forminput}
                placeholder="e.g.email@example.com"
              />
            </div>
            <div className={classes.frow}>
              <label className={classes.formLabel} htmlFor="clientAddress">Client's Address</label>
              <input
                id="clientAddress"
                type="text"
                className={classes.forminput}
                placeholder="Enter Client's Address"
              />
            </div>
            <div className={classes.clientAddress}>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="clientCity">City</label>
                <input
                  id="clientCity"
                  name="clientCity"
                  className={classes.forminput}
                  type="text"
                  placeholder="Enter City"
                />
              </div>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="clientPostcode">Postal Code</label>
                <input
                  id="clientPostCode"
                  type="text"
                  className={classes.forminput}
                  name="billPostCode"
                  placeholder="Enter Postal Code"
                />
              </div>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="clientCountry">Country</label>
                <input
                  id="clientCountry"
                  className={classes.forminput}
                  type="text"
                  name="clientCountry"
                  placeholder="Enter Country"
                />
              </div>
            </div>
            <div className={classes.datepayment}>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="invoiceDate">Invoice Date</label>
                <input
                  id="invoiceDate"
                  className={classes.forminput}
                  type="date"
                  name="invoiceDate"
                  placeholder="Enter Invoice Date"
                />
              </div>
              <div className={classes.frow}>
                <label className={classes.formLabel} htmlFor="paymentTerms">Payment Terms</label>
                <select
                  id="paymentTerms"
                  name="paymentTerms"
                  className={classes.forminput}
                  title="Invoice Terms"
                >
                  <option value="1">Net 1 Day</option>
                  <option value="7">Net 7 Days</option>
                  <option value="14">Net 14 Days</option>
                  <option value="30">Net 30 Days</option>
                </select>
              </div>
            </div>
            <label className={classes.formLabel} htmlFor="description">Project Description</label>
            <input
              type="text"
              id="description"
              className={classes.forminput}
              name="description"
              placeholder="Enter Project Description"
            />
            <div className={classes.list}>
              <label className={classes.formLabel} htmlFor="listName">Name</label>
              <label className={classes.formLabel} htmlFor="quantity">Quantity</label>
              <label className={classes.formLabel} htmlFor="price">Price</label>
              <label className={classes.formLabel} htmlFor="total">Total</label>
            </div>
            {list.map((item, index) =>  (
    <div className={classes.list}>
      <input
        id="listName"
        type="text"
        className={classes.forminput}
        name="listName"
        placeholder="Enter Item Name"
      />
      <input
        id="quantity"
        type="text"
        className={classes.forminput}
        name="quantity"
        placeholder="Enter Item Quantity"
      />
      <input
        name="price"
        id="price"
        className={classes.forminput}
        type="text"
        placeholder="Enter Item Price"
      />
      <input
        id="total"
        name="total"
        type="text"
        className={classes.forminput}
        placeholder="Enter Item Total"
      />
    </div>
  ))}
            <Button onClick={() => addNewItem()}>Add Item</Button>
            <div className={classes.btns}>
              <Button
                onClick={() => props.setShow(!props.show)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "grey",
                }}
              >
                discard
              </Button>
              <div>
                <Button variant="light">Save to draft</Button>
                <Button type="submit" variant="light">
                  Save & Send
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
const Backdrop = (props) => {
  return (
    <div
      onClick={() => props.setShow(!props.show)}
      className={classes.backdrop}
    ></div>
  );
};
const NewInvoiceModal = ({ show, setShow }) => {
  return (
    <Fragment>
      {show
        ? ReactDOM.createPortal(
            <Backdrop show={show} setShow={setShow} />,
            document.getElementById("modal-root")
          )
        : null}
      {show
        ? ReactDOM.createPortal(
            <ModalOverlay show={show} setShow={setShow} />,
            document.getElementById("modal-root")
          )
        : null}
    </Fragment>
  );
};

export default NewInvoiceModal;
