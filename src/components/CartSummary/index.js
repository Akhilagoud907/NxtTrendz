// Write your code here
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItem = cartList.reduce((acc, item) => acc + item.quantity, 0)
      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      const cartItem = cartList.length
      return (
        <div>
          <h1>Order Total:Rs {totalAmount}/-</h1>
          <p>{totalItem} items in cart</p>
          <button>Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
