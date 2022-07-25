import { Link } from 'react-router-dom';
import productList from '../data';

const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        {productList.map((product) => (
          <Link to={product.id} key={product.id}>
            <div>{product.name}</div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Products;
