import React from "react";
import ReactDOM from "react-dom";
import { Offcanvas, Button, Form, Dropdown } from "react-bootstrap";
import classes from "../pages/invoices/Invoices.module.css";
export const ModalOverlay = (props) => {
  return (
    <React.Fragment>
      <button
        onClick={() => props.setShow(!props.show)}
        className={classes.invbtn}
      >
        <span className={classes.plus}>+</span> New Invoice{" "}
      </button>
      <Offcanvas className={classes.offcanvas} show={props.show}>
        <Offcanvas.Header>
          <Offcanvas.Title>New Invoice</Offcanvas.Title>
          <button
            onClick={() => props.setShow(!props.show)}
            style={{ border: "none" }}
          >
            X
          </button>
        </Offcanvas.Header>
        <div className={classes.billform}>Bill From</div>
        <Offcanvas.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="email" placeholder="Enter street address" />
            </Form.Group>
            <div className={classes.Address}>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" placeholder="Enter Postal Code" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" />
              </Form.Group>
            </div>
          </Form>
          <div>
            <div className={classes.billform}>Bill To</div>
            <Form>
              <Form.Group>
                <Form.Label>Client Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Client Name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Client's Email</Form.Label>
                <Form.Control type="text" placeholder="e.g.email@example.com" />
              </Form.Group>
              <div className={classes.Address}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter City" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Postal Code" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>
              </div>
              <div className={classes.Address}>
                <Form.Group>
                  <Form.Label>Invoice Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter Invoice Date" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Payment Terms</Form.Label>
                <select className="form-control"  title="Invoice Terms">
                    <option>Net 1 Day</option>
                    <option>Net 7 Days</option>
                    <option>Net 14 Days</option>
                    <option>Net 30 Days</option>
                </select>
                </Form.Group>
              </div>
            </Form>
          </div>
          <Form>
              <Form.Group>
                <Form.Label>Project Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Project Description" />
                </Form.Group>
          </Form>
          <div>Item List</div>
            <Form>
                <div className={classes.Address}>

                <Form.Group>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Item Quantity</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Quantity" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Item Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Price" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Item Total</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Total" />
                </Form.Group>
                </div>
                <Button variant='light'>+ Add New Item</Button>
            </Form>
            <Button variant='light'>
                Cancel
                </Button>
            <Button variant='light'>
                Save & Send
                </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const NewInvoiceModal = (props) => {
  const [show, setShow] = React.useState(false);
  return (
    <React.Fragment>
      {show
        ? ReactDOM.createPortal(
            <Backdrop show={show} setShow={setShow} />,
            document.getElementById("modal-root") 
          )
        : null}
      <ModalOverlay show={show} setShow={setShow} />
    </React.Fragment>
  );
};

export default NewInvoiceModal;
