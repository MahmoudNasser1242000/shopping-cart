import React from "react";
import { Card, Button } from "react-bootstrap";
import ProductItems from "../data/ProductItems.json";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const ShoppingCartItems = ({ quantity, id }) => {
  const { removeItems } = useShoppingCart();
  return (
    <Card className="d-flex flex-row justify-content-between align-items-center border-0 mb-4">
      <Card.Img
        src={ProductItems[id - 1].imgURL}
        style={{ width: "7rem", height: "7rem", objectFit: "cover" }}
        alt="Error ..."
      />
      <Card.Body className="mt-3 d-flex justify-content-between">
        <Card.Title className="d-flex flex-column justify-content-between">
          <span>{ProductItems[id - 1].name}</span>
          <span className="text-muted">{quantity}</span>
        </Card.Title>

        <div>
          <span className="px-3">
            {FormatCurrency(quantity * ProductItems[id - 1].price)}
          </span>
          <Button onClick={()=>{removeItems(ProductItems[id - 1].id)}} variant="outline-danger" size="sm">
            &#10005;
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShoppingCartItems;
