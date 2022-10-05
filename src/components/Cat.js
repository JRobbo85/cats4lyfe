import styled from 'styled-components' 


const Cat = () => {



    return (
        <Container>
            <Image src ={require('./assets/Cats4Lyf_logo.png')} />
            <Cat_Details>
                <p>Breed:</p>
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