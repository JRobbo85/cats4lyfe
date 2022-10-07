import styled from 'styled-components' 
import {faker} from '@faker-js/faker'
import {useEffect, useState} from 'react'




const Cat = ({entireCat, setBasket, basket}) => {
    const [value, setValue] = useState(0)

    useEffect (() => {
        setValue(faker.commerce.price(50, 100, 2)) 

}, [])
    


const addToBasket = () => {
    const temp = [...basket]
    entireCat.price = value
    console.log(entireCat)
    temp.push(entireCat)
    setBasket(temp)
    
}


    return (
        <Container>

            {entireCat.image && <Image src = {entireCat.image.url} />}

            <Cat_Details>
                <Details1>
                <p>Breed: {entireCat.name}</p>
                <p>Lifespan: {entireCat.life_span} years</p>
                <p>Origin: {entireCat.origin}</p>
                </Details1>
                <Details2>
                    <p>Description: {entireCat.description}</p>
                </Details2>
            </ Cat_Details>
            <Price_Details>
                <p>Price: £{value}</p>
                <Button onClick={addToBasket}>Add To cart</Button>

            </Price_Details>
        </Container>
    )
}

export default Cat;

const Container = styled.div`
    display: flex;
    align-items:center;
    background-color: #6d8b85;
    width: 70vw;
    height: 20vh;
    margin-left:15vw;
    margin-top:6vh;
    margin-right:3vw;
    box-shadow:3px 3px black;
    position: relative;
    top: 0;
    transition: top ease 0.5s;


    &:hover {
        top: -10px; 
        box-shadow:3px 5px black;

`

const Image = styled.img`
    width: 8vw;
    height:8vw;
    margin-left:1.5vh;

    border-style:ridge;
    border-color:gray;
    border-weight:3px;
    box-shadow:2px 2px black;


`

const Cat_Details = styled.div`
    display:flex;
    font-family: 'Poppins', sans-serif;

    font-weight:bold;
    color:#dbefe1;
    flex-direction:row;
    margin-left:2vw;
    font-size:1.3em;
    line-height:2vh;
    justify-content:space-between;
    width:73%;
    padding:10px;
    text-shadow: 1.5px 1.5px black;

`

const Price_Details = styled.div `
display:flex;
color:#dbefe1;
font-family: 'Poppins', sans-serif;
flex-direction:column;
margin-left:1vw;
margin-top:7vh;
margin-right:1vw;
text-shadow: 2px 2px black;
font-weight:bold;

`

const Button = styled.button `
    font-family: 'Poppins', sans-serif;
    color:#dbefe1;
    text-shadow: 2px 2px black;
    background-color:transparent;
    border: 2px solid black;
    box-shadow:2px 2px black;
    border-radius: 2em;
    font-size: medium;
    padding-right: 1em;
 

`

const Details1 = styled.div `
        display:flex;
        flex-direction:column;
`

const Details2 = styled.div `
        display:flex;
        width: 70%;
        line-height: 2.5vh;
        margin-left:1vw;
`

