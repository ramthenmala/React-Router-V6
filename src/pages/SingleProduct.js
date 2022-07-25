import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  console.log('SingleProduct', productId);
  return (
    <section className='section product'>
      <Link to='/products'>Back to products</Link>

      <h2>single product {productId}</h2>

    </section>
  );
};

export default SingleProduct;
