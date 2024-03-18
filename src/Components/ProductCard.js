import React from "react";
import { Button, Card } from "react-bootstrap";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const ProductCard = ({ name, price, imgURL, id }) => {
  const {getQuantitiy, addNewCartItem, increaseQuantity, decreaseQuantity, removeItems} = useShoppingCart();
  const count = getQuantitiy(id)
  return (
    <Card className="mb-3">
      <Card.Img
        src={imgURL}
        variant="top"
        alt="Error ..."
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <h4>{name}</h4>
          <span className="text-muted">{FormatCurrency(price)}</span>
        </Card.Title>

        {count === 0 ? (
          <Button onClick={()=>{addNewCartItem(id)}} variant="primary" className="w-100 mt-5">
            Add To Cart
          </Button>
        ) : (
          <div className="mt-4 d-flex flex-column justify-content-evenly align-items-center">
            <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
              <Button onClick={()=>{increaseQuantity(id)}} variant="primary" size="md">+</Button>
              <h5>{count} in cart</h5>
              <Button onClick={()=>{decreaseQuantity(id)}} variant="primary" size="md">-</Button>
            </div>
            <Button onClick={()=>{removeItems(id)}} variant="danger" className="w-50">Remove</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
