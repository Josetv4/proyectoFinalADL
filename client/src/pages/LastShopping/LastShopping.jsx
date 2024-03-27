import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard"

const LastShopping = () => {


  const lastShopping = [
    {
      id: 1,
      fecha: "2024-03-25",
      imagen: "url_de_la_imagen_1",
      descripcion: "Descripción del producto 1",
      precio: "$10.99"
    },
    {
      id: 2,
      fecha: "2024-03-24",
      imagen: "url_de_la_imagen_2",
      descripcion: "Descripción del producto 2",
      precio: "$15.49"
    },
    {
      id: 3,
      fecha: "2024-03-23",
      imagen: "url_de_la_imagen_3",
      descripcion: "Descripción del producto 3",
      precio: "$8.25"
    }
  ];

  return (
    <>
     <main>
        <h2>Ultimas compras </h2>
        <ShoppingCard shopping={lastShopping}/>
      </main>
    
    </>
  );
};

export default LastShopping;
