//import logo from './logo.svg';
import './App.css';
import Form from './com/components/Form';
import Votacion from './com/components/Votacion';
import imaga1 from './img/a1.jpg'
import imaga2 from './img/a2.jpg'
import imaga3 from './img/a3.jpg'

function App() {
  return (
    <>
      <p className='parrafo'>Hola Mundo </p>
      <h1>es un titulo</h1>
      <Form></Form>
      <section className='ordenar'>
      <Votacion titulo="Votacion de imagen de samurai vs dragon" descripcion="La imagen es de un samurai queb lucha contra un dragon " imagenk={imaga1}></Votacion>
      <Votacion titulo="Votacion de imagen de samurai vs dragon" descripcion="La imagen es de un samurai queb lucha contra un dragon " imagenk={imaga2}></Votacion>
      <Votacion titulo="Votacion de imagen de samurai vs dragon" descripcion="La imagen es de un samurai queb lucha contra un dragon " imagenk={imaga3}></Votacion>
      </section>
    </>
  );
}

export default App;
