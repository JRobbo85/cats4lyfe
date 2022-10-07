import { Faker } from "@faker-js/faker"
import styled from 'styled-components'
import { useState } from 'react'


const Cart = ({ basket }) => {

    const values = []


    const addUp = () => {
        let sum = 0
        for (let i = 0; i < values.length; i++) {
            sum += values[i]
        }
        return sum
    }
    return (
        <CartTab>
            <p>Cart</p>
            <CatInBasket>
                {basket.map((item, index) => {
                    values.push(parseInt(item.price))
                    return (
                        <div>

                            <Image src={item.image.url} />
                            <p>{item.name}</p>
                            <p>£{item.price}</p>
                        </div>)
                })}
            </CatInBasket>
            <TotalCost>
                <p>Total: £{addUp()}.00</p>
            </TotalCost>
            <Checkout>Checkout</Checkout>
        </CartTab>
    )
}

export default Cart



const CartTab = () => styled.div`
border: 1px solid red;
`

const CatInBasket = styled.div`
border: 1px solid yellow;
`

const Image = styled.image`
width: 4vw;
`

const TotalCost = styled.div`
border: 1px solid blue;

`
const Checkout = styled.button`
border: 1px solid green;

`
