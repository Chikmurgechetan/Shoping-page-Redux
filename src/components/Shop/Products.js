import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
   
const DUMMY_Arry = [{
  id:"c1",
  price: 120,
  title : "A Good BAG",
  description : "A Bag carry the all the grocerys" 
},
{
  id:"c2",
  price: 500,
  title : "A Phone",
  description : "A Phone is Very useFull for now Technology" 
},
{
  id:"c3",
  price: 100,
  title : "A Book",
  description : "A Book Redaing is Very good Practice" 
}
]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      { DUMMY_Arry.map(product => (
          
        <ProductItem
          key={product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))  }
      </ul>
    </section>
  );
};

export default Products;
