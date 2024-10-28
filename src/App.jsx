import Header from "./components/Header";
import Mountain from "./components/Mountain";

function App() {
    return (
      <>

        <Header />        
  
        <main className="container-xl mt-5">
          <h2 className="text-center">Nuestras Montañas</h2>
  
          <div className="row mt-5">
              <Mountain />
          </div>
        </main>
  
        <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">Peak Pathways Spain - Todos los derechos Reservados</p>
          </div>
        </footer>
      </>
    );
  }
  
  export default App;
  