import styled from "styled-components"


export const ProductContent = styled( 'div' )`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 340px;
  margin: 40px;
  border-radius: 14px;

  .product-img {
    height: 200px;
    width: 200px;
    margin: 10px;
  }

  .product-title {
    font-family: MONOSPACE;
    text-align: center;
    font-size: 14px;
  }
  .product-price {
    font-family: MONOSPACE;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
  .add-to-cart-btn {
    font-family: MONOSPACE;
    text-align: center;
    font-size: 14px;
    width: 150px;
    height: 40px;
    color: white;
    background: cornflowerblue;
  }
`
