import { useMemo } from "react";

export default function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, cleanCart }) {

  //State derivado
  const isEmpty = useMemo ( () => cart.length === 0, [cart]);
  const cartTotal = useMemo ( () => cart.reduce((total, mountain) => total + mountain.price * mountain.quantity, 0), [cart]);

  return (
    <header className="py-4 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (

                    <>
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((Mountain) => (
                        <tr key={Mountain.id}>
                          <td>
                            <img
                              className="img-fluid"
                              src={`./img/${Mountain.image}.jpg`}
                              alt="imagen montaña"
                            />
                          </td>
                          <td>{Mountain.name}</td>
                          <td className="fw-bold">{Mountain.price} €</td>
                          <td className="flex align-items-start gap-4">
                            <button type="button" className="btn btn-dark" onClick={()=>decreaseQuantity(Mountain.id)}>
                              -
                            </button>
                            {Mountain.quantity}
                            <button type="button" className="btn btn-dark" onClick={()=>increaseQuantity(Mountain.id)}>
                              +
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-danger" type="button" onClick={()=>removeFromCart(Mountain.id)}>
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                <p className="text-end">
                Total pagar: <span className="fw-bold">${cartTotal}</span>
                </p>
                </>
                )}

               
                <button className="btn btn-dark w-100 mt-3 p-2" onClick={()=>cleanCart}>
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
