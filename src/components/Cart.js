
import {Faker} from "@faker-js/faker"

const Cart = () =>{
    return (
        <div id="cartTab">
            <p>Cart</p>
            <div id="catInBskt">
                <p>add cat thingy here</p>
            </div>
            <div id="totalCost">
                <p>Total:{Faker}</p>
            </div>
            <button id="checkout">Checkout</button>
        </div>
    )
}

export default Cart