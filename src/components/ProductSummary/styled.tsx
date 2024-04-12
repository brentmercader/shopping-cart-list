import styled from "styled-components"


export const ProductContent = styled( 'div' )`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 650px;
  height: 250px;
  margin: 40px;
  margin-bottom: 80px;
  border-bottom: 1px solid black;
  padding-bottom: 20px;

  .product-img {
    height: 120px;
    width: 120px;
    margin: 10px;
  }

  .order-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    .product-title, .product-quantity, .action-btn{
      max-width: 250px;
      font-family: MONOSPACE;
      text-align: center;
      font-size: 14px;
      line-height: 1.5;
      margin: 5px
    }
    .product-quantity {
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    .action-container {
      margin-top: 20px;
      border: solid 1px black;
      span {
        font-family: MONOSPACE;
        text-align: center;
        font-size: 14px;
        margin-right: 2px;
      }
      .action-btn {
        background: none;
        border: none;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  .delete-item {
    width: 30px;
    height: 30px;
  }

  .action-price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    min-width: 100px;
}
    .product-price {
      font-family: MONOSPACE;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 28px;
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
