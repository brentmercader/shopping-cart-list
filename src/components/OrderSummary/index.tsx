import { useAppDispatch, useAppSelector } from "../../store";
import { cartSelector } from "../../store/slices/cart.slice";
import { OrderSummaryContent } from "./styled";



const OrderSummary = ( ) => {
  const { cart } = useAppSelector( cartSelector )
  const getTotalPrice = () => {
    return cart.reduce((total: number, item: {  price: number;  quantity: number; }) => total + (item.price * item.quantity), 0);
  };
  const getCartTotalQuantity = () => {
    return cart.reduce((total: number, item : any) => total + item.quantity, 0);
  };
  
  return (
    <OrderSummaryContent>
      <div className="order-summary">
        <h2>YOUR ORDER SUMMARY</h2>
        <p><span>Subtotal ({getCartTotalQuantity()} Items)</span> <span>$10.00</span></p>
        <p><span>Shipping Discount</span> <span>-$0.00</span></p>
        <p><span>Shipping & Handling</span> <span>$0.00</span></p>
        <p><span>Tax (Calculated at checkout)</span> <span>$0.00</span></p>
        <p className="balance"><span>Balance</span> <span>${getTotalPrice().toFixed(2)}</span></p>
        <div style={{display: 'flex'}}><button className="checkout-btn">CHECKOUT</button></div>
     </div>
    </OrderSummaryContent>
  )
}

export default OrderSummary
