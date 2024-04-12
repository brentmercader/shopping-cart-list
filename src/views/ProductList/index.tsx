import { useEffect, useState } from "react";
import { ProductBoxContainer, ProductListWrapper } from "./styled"
import axios from "axios";
import Product from "../../components/Product";
import { useAppDispatch, useAppSelector } from "../../store";
import { cartSelector, setCart } from "../../store/slices/cart.slice";
import { Link } from "react-router-dom";

const ProductList = ( ) => {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector( cartSelector )
  const [products, setProducts] = useState([]);

  // Get sample products list via fakestore api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Emit click event from child component and handle add to cart logic
  const handleAddToCart = (product: any) => {
    let newCart = [...cart]
    const existingProductIndex = newCart.findIndex((item) => item.id === product.id);
     // Check if the product already exists in the cart

    if (existingProductIndex !== -1) {
      // If the product already exists, create a copy of the existing product
      // with the quantity incremented by 1
      const updatedCart = cart.map((item: any, index: number) =>
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      // Update the cart state with the updated cart
      dispatch(setCart(updatedCart))
    } else {
      // If the product does not exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
      dispatch(setCart([...cart, { ...product, quantity: 1 }]))

    }

  }

  const getCartTotalQuantity = () => {
    return cart.reduce((total: number, item : any) => total + item.quantity, 0);
  };

  
  return (
    <ProductListWrapper>
      <h3>PRODUCT COLLECTIONS</h3>
      <Link to="/cart" className="go-to-cart">
        <span className="cart-text">GO TO CART </span>
        <span className="cart-counter">{getCartTotalQuantity()}</span>
      </Link>  
      <ProductBoxContainer>
        {/* Loop products fetched via the fake store api */}
        {products.map( ( product: any ) => <Product {...product} onClick={()=> {handleAddToCart(product)}}/> )}
      </ProductBoxContainer>
    </ProductListWrapper>
  )
}

export default ProductList
