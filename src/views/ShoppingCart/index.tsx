import OrderSummary from "../../components/OrderSummary";
import ProductSummary from "../../components/ProductSummary";
import { useAppSelector } from "../../store";
import { cartSelector } from "../../store/slices/cart.slice";
import { ShoppingCartWrapper } from "./styled";

const ShoppingCart = ( ) => {
  const { cart } = useAppSelector( cartSelector )


  
  return (
    <ShoppingCartWrapper>
      <h3>YOUR CART SUMMARY</h3>
      <div className="summary-container">
        <div className="product-list-summary">
        {cart.map( ( product: any ) => <ProductSummary {...product} /> )}
        </div>
        <div>
          <OrderSummary/>
        </div>
      </div>
    </ShoppingCartWrapper>
  )
}

export default ShoppingCart
