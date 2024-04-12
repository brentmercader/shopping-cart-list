import { useAppSelector } from "../../store";
import { cartSelector } from "../../store/slices/cart.slice";
import { ProductContent } from "./styled";


interface ProductProps {
  id: number,
  image: string,
  title: string,
  price: string
  onClick: () => void
}
const Product = ( {image, title, price, onClick } : ProductProps ) => {
  useAppSelector(cartSelector)
  
  
  
  return (
    <ProductContent>
      <img className="product-img" src={image} alt={title}/>
      <span className="product-title">{title}</span>
      <span className="product-price">${price}</span>
      <button className="add-to-cart-btn" onClick={onClick}>ADD TO CART</button>
    </ProductContent>
  )
}

export default Product
