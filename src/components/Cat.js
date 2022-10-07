import styled from 'styled-components' 


const Cat = ({name}) => {



    return (
        <Container>
            <Image src ={require('./assets/Cats4Lyf_logo.png')} />
            <Cat_Details>
                <p>Breed: {name}</p>
                <p>Temperament:</p>
                <p>Origin: </p>
            </ Cat_Details>
            <Price_Details>
                <p>Price:</p>
                <button>Add To cart</button>
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
border-style:solid;
border-weight:2px;
border-color:green;
`

