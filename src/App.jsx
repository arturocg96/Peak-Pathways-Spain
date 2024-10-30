import { useState, useEffect } from "react";

import Header from "./components/Header";
import Mountain from "./components/Mountain";
import { db } from "./data/db";

function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data] = useState(db);
  const [cart, setCart] = useState(()=> initialCart());

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function addToCart(item) {
    const itemExists = cart.findIndex((mountain) => mountain.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) {
        return;
      }
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }


  }

  function removeFromCart(id) {
    setCart(cart.filter((mountain) => mountain.id !== id));
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((mountain) => {
      if (mountain.id === id && mountain.quantity < MAX_ITEMS) {
        mountain.quantity++;
      }
      return mountain;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
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
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestras Montañas</h2>

        <div className="row mt-5 justify-content-center">
          {data.map((mountain) => (
            <Mountain
              key={mountain.id}
              mountain={mountain}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Peak Pathways Spain - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
