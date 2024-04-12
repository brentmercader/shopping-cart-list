import styled from "styled-components"


export const ShoppingCartWrapper = styled( 'div' )`

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: MONOSPACE;
    font-size: 39px;
    font-weight: bold;
    color: cornflowerblue;
    margin: 40px auto 10px auto;

  }
  .summary-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 100px;
  }
  .product-list-summary {
  }
  .go-to-cart {
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    background: cornflowerblue;
    width: 150px;
    height: 40px;
    margin: 10px 10px 10px auto;
  }
  .cart-text {
    font-family: MONOSPACE;
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
  }

  .cart-counter {
    font-family: MONOSPACE;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
    background: red;
    color: #FFFFFF;
    border-radius: 24px;
    width: 22px;
    height: 22px;
    margin-left: 5px;
    line-height: 1.6;
    border: 1px solid rgb(118, 118, 118);
  }
`
