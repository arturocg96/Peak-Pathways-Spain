import { useState } from "react";

import Header from "./components/Header";
import Mountain from "./components/Mountain";
import { db } from "./data/db";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {

    const itemExists = cart.findIndex((mountain) => mountain.id === item.id);
    
    setCart(prevCart => [...prevCart, item]);
  }

  return (
    <>
      <Header />

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
