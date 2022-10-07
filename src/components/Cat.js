import styled from 'styled-components' 
import {faker} from '@faker-js/faker'

const Cat = ({entireCat}) => {
const value = faker.commerce.price(50, 100, 2, '£')
console.log(entireCat)
    return (
        <Container>
            {/* <img src={entireCat.image.url} /> */}
            {/* <Image src ={require('./assets/Cats4Lyf_logo.png')} /> */}
            <Cat_Details>
                <p>Breed: {entireCat.name}</p>
                <p>Lifespan: {entireCat.life_span} years</p>
                <p>Origin: {entireCat.origin}</p>
            </ Cat_Details>
            <Price_Details>
                <p>Price: {value}</p>
                <Button>Add To cart</Button>
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
    
`

const Image = styled.img`
    width: 8vw;
    height:8vw;
    margin-left:1.5vh;
    border-style:solid;
    border-weight:2px;
    

`

const Cat_Details = styled.div`
    display:flex;
    font-family: 'Poppins', sans-serif;
    color:#dbefe1;
    flex-direction:column;
    margin-left:2vw;
    font-size:1.2em;
    line-height:1vh;
    border-style:solid;
    border-weight:2px;
    border-color:red;
    width:73%;
`

const Price_Details = styled.div `
display:flex;
color:#dbefe1;
font-family: 'Poppins', sans-serif;
flex-direction:column;
margin-left:1vw;
margin-top:7vh;

`

const Button = styled.button `
    background-color:transparent;
    border: 2px solid black;
    padding: 1vw;
    
`

