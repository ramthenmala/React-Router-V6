import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  console.log('SingleProduct', productId);
  const product = products.find(product => product.id === productId);
  const {name} = product
  return (
    <section className="section product">
      <Link to="/products">Back to products</Link>

      <h2>single product {name}</h2>
    </section>
  );
};

export default SingleProduct;
