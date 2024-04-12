import { useAppDispatch, useAppSelector } from "../../store";
import { cartSelector, setCart } from "../../store/slices/cart.slice";
import { ProductContent } from "./styled";
import trashImg from "../../assets/trash.png"

interface ProductProps {
  id: number,
  image: string,
  title: string,
  price: string,
  quantity?: string,
  onClick: () => void
}
const ProductSummary = ( {id, image, title, price, quantity, onClick } : ProductProps ) => {
  const { cart } = useAppSelector( cartSelector )
  const dispatch = useAppDispatch()

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item: { id: number; quantity: number; }) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    dispatch(setCart(updatedCart));
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item: { id: number; quantity: number; }) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    dispatch(setCart(updatedCart));
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item: { id: number; }) => item.id !== id);
    dispatch(setCart(updatedCart));
  };
  
  const getTotalPrice = (price: any, quantity: any) => {
    return (price * quantity).toFixed(2);
  };
  
  return (
    <ProductContent>
      <img className="product-img" src={image} alt={title}/>
      <div className="order-detail">
        <span className="product-title">{title}</span>
        <span className="product-quantity">{quantity} items</span>
        <div className="action-container">
          <button className="action-btn" onClick={()=> {decreaseQuantity(id)}}>-</button>
          <span> {quantity}</span>
          <button className="action-btn" onClick={()=> {increaseQuantity(id)}}>+</button>
        </div>
      </div>
      <div className="action-price">
        <img className="delete-item" onClick={()=> {removeFromCart(id)}} src={trashImg} alt={title}/>
        <span className="product-price">${getTotalPrice(price, quantity)}</span>
      </div>
    </ProductContent>
  )
}

export default ProductSummary
