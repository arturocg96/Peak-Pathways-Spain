import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db.ts";
import type { Mountain, CartItem } from "../types";

export const useCart = () => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    try {
      const parsedCart = localStorageCart ? JSON.parse(localStorageCart) : [];
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Error al parsear el carrito de localStorage:", error);
      return [];
    }
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(() => initialCart());

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  // Sincronizar carrito con localStorage cada vez que el carrito cambia
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function addToCart(item: Mountain) {
    const itemExists = cart.findIndex((mountain) => mountain.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) {
        return;
      }
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      const newItem: CartItem = { ...item, quantity: 1 };      
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id: Mountain["id"]) {
    setCart(cart.filter((mountain) => mountain.id !== id));
  }

  function increaseQuantity(id: Mountain["id"]) {
    const updatedCart = cart.map((mountain) => {
      if (mountain.id === id && mountain.quantity < MAX_ITEMS) {
        mountain.quantity++;
      }
      return mountain;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id: Mountain["id"]) {
    const updatedCart = cart.map((mountain) => {
      if (mountain.id === id && mountain.quantity > MIN_ITEMS) {
        mountain.quantity--;
      }
      return mountain;
    });

    setCart(updatedCart);
  }

  function cleanCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  // Estados derivados
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (total, mountain) => total + mountain.price * mountain.quantity,
        0
      ),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    isEmpty,
    cartTotal,
  };
};
