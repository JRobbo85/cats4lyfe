import {Faker} from "@faker-js/faker"
import styled from 'styled-components' 
import {useState} from 'react'


const Cart = ({basket}) =>{

const values = []


const addUp = () => {
    let sum = 0
    for (let i = 0; i < values.length; i++){
    sum += values[i]
    }
return sum 
}
    return (
        <div id="cartTab">
            <p>Cart</p>
            <div id="catInBskt">
            {basket.map((item, index) => {
                values.push(parseInt(item.price))
                return (
            <div>
                
            <Image src = {item.image.url} />
            <p>{item.name}</p>
            <p>£{item.price}</p>
            </div>)
})}
            </div>
            <div id="totalCost">
                <p>Total: £{addUp()}.00</p>
            </div>
            <button id="checkout">Checkout</button>
        </div>
    )
}

export default Cart



const Image = styled.img `
    width: 4vw;
`