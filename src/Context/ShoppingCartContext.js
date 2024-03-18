import React, { createContext, useState, useContext, useEffect } from "react";

export const ShoppingCartProvider = createContext({});

const initialState = localStorage.getItem("cartitems")? JSON.parse(localStorage.getItem("cartitems")) : []
const ShoppingCartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartItems))
  }, [cartItems])
  

  const getQuantitiy = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const addNewCartItem = (id) => {
    setCartItems((prev) => {
      if (cartItems.find((item) => item.id === id)) {
        return [... prev.filter((item) => item.none !== "true"), { id, quantity: 1, none: 'false' }];
      } else {
        return [...prev, { id, quantity: 1, none: 'false' }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          if (item.quantity !== 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return {
              ...item,
              quantity: 0,
              none: 'true',
            }
          }
        } else {
          return item;
        }
      })
    );
  };

  const removeItems = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartProvider.Provider
      value={{
        cartItems,
        getQuantitiy,
        addNewCartItem,
        increaseQuantity,
        decreaseQuantity,
        removeItems,
      }}
    >
      {children}
    </ShoppingCartProvider.Provider>
  );
};

export default ShoppingCartContext;

export const useShoppingCart = () => {
  return useContext(ShoppingCartProvider);
};
