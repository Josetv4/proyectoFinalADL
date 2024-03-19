import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const arrayProducts = [
    {
        name: 'Medicamento A',
        image: 'url_de_la_imagen_aqui',
        description: 'Descripción del medicamento A.',
        format: 'formato de presentaciholaón',
        price: 10.990,
    },

];

const Category = () => {
    const { id } = useParams();
    //const [products,setProducts] = useState(null);
    return (
        <>
            {arrayProducts.map((product, i) =>
                <ProductCard key={i} product={product} />
            )}
        </>
    );
};
export default Category;
