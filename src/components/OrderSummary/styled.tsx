import styled from "styled-components"


export const OrderSummaryContent = styled( 'div' )`
  width: 500px;
  height: 500px;
  background: rgb(100, 149, 237);
  
  h2 {
    font-family: MONOSPACE;
    font-size: 23px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 40px auto 10px auto;
  }
  .order-summary {
    padding: 20px;
    margin: 20px auto;
    max-width: 400px;
  }
  .checkout-btn {
    margin: 30px auto auto auto;
    width: 200px;
    height: 50px;
    font-family: MONOSPACE;
    font-size: 17px;
    color: #000000;
    font-weight: bold;
  }

  p {
    margin: 0;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
  }

  p span {
    font-family: MONOSPACE;
    font-size: 17px;
    color: #FFFFFF;
    line-height: 2.5;
  }

  .balance {
    border-top: 2px solid black;
  }
`
