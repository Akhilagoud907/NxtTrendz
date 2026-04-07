// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

import CartContext from '../../context/CartContext'

class CartSummary extends Component {
  state = {
    paymentMethod: '',
    isOrderPlaced: false,
  }

  onChangePayment = event => {
    this.setState({paymentMethod: event.target.value})
  }

  onConfirmOrder = () => {
    this.setState({isOrderPlaced: true})
  }

  render() {
    const {paymentMethod, isOrderPlaced} = this.state

    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value

          const totalItem = cartList.reduce(
            (acc, item) => acc + item.quantity,
            0,
          )

          const totalAmount = cartList.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0,
          )

          return (
            <div className="cart-summary-container">
              <h1 className="order-total">Order Total: Rs {totalAmount}/-</h1>
              <p className="items-count">{totalItem} Items in cart</p>

              <Popup
                modal
                trigger={<button className="checkout-btn">Checkout</button>}
              >
                {close => (
                  <div>
                    {isOrderPlaced ? (
                      <>
                        <h2 className="success-text">
                          Your order has been placed successfully
                        </h2>
                        <button className="close-btn" onClick={close}>
                          Close
                        </button>
                      </>
                    ) : (
                      <>
                        <h2 className="payment-heading">
                          Select Payment Method
                        </h2>

                        <div className="payment-options">
                          <label className="payment-option">
                            <input type="radio" disabled /> Card
                          </label>

                          <label className="payment-option">
                            <input type="radio" disabled /> Net Banking
                          </label>

                          <label className="payment-option">
                            <input type="radio" disabled /> UPI
                          </label>

                          <label className="payment-option">
                            <input type="radio" disabled /> Wallet
                          </label>
                          <label className="payment-option">
                            <input
                              type="radio"
                              name="payment"
                              value="COD"
                              onChange={this.onChangePayment}
                            />
                            Cash on Delivery
                          </label>
                        </div>

                        <div className="summary-box">
                          <p className="summary-text">
                            Total Items: {totalItem}
                          </p>
                          <p className="summary-text">
                            Total Price: Rs {totalAmount}
                          </p>
                        </div>

                        <button
                          className="confirm-btn"
                          disabled={paymentMethod !== 'COD'}
                          onClick={this.onConfirmOrder}
                        >
                          Confirm Order
                        </button>

                        <button className="close-btn" onClick={close}>
                          Close
                        </button>
                      </>
                    )}
                  </div>
                )}
              </Popup>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default CartSummary
