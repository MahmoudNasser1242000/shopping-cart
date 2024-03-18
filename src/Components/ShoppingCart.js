import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import ShoppingCartItems from "./ShoppingCartItems";
import ProductItems from "../data/ProductItems.json";
import FormatCurrency from "./FormatCurrency";

const ShoppingCart = ({ hide, show }) => {
  const { cartItems } = useShoppingCart();
  let price = 0;
  cartItems.map((item) => {
    if (item.quantity !== 0) {
      price += Number(item.quantity) * Number(ProductItems[item.id - 1].price);
    }
  });
  return (
    <Offcanvas show={show} onHide={hide} backdrop="static" placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => {
          return item.quantity !== 0 ? (
            <ShoppingCartItems key={item.id} {...item} />
          ) : (
            ""
          );
        })}

        {price !== 0 ? (
          <div className="d-flex justify-content-end mt-4">
            {FormatCurrency(price)}
          </div>
        ) : (
          <h4>No Products Now</h4>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
