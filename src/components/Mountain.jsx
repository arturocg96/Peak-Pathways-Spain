export default function Mountain() {
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src="./public/img/mountain_01.jpg"
          alt="imagen montaña"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">Aneto</h3>
        <p>
        La montaña más alta de los Pirineos, ubicada en el Parque Natural Posets-Maladeta, famosa por su glaciar y vistas espectaculares. Altura: 3404 m
        </p>
        <p className="fw-black text-primary fs-3">250 €</p>
        <button type="button" className="btn btn-dark w-100">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
