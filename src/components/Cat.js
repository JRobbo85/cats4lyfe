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
                <p>Breed: {entireCat.name}</p>
                <p>Lifespan: {entireCat.life_span} years</p>
                <p>Origin: {entireCat.origin}</p>
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
    margin-top:10vh;
    box-shadow:3px 3px black;
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
    flex-direction:column;
    margin-left:2vw;
    font-size:1.3em;
    line-height:1vh;
    border-style:ridge;
    border-weight:2px;
    border-color:gray;
    width:73%;
    padding:10px;
    text-shadow: 2px 2px black;
`

const Price_Details = styled.div `
display:flex;
color:#dbefe1;
font-family: 'Poppins', sans-serif;
flex-direction:column;
margin-left:1vw;
margin-top:7vh;
text-shadow: 2px 2px black;
font-weight:bold;

`

const Button = styled.button `
    font-family: 'Poppins', sans-serif;
    color:#dbefe1;
    text-shadow: 2px 2px black;
    background-color:transparent;
    border: 2px solid black;

    border-radius: 2em;
    font-size: medium;
    padding-right: 1em;

`

