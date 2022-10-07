import Cat from "./Cat"
import { useState, useEffect } from "react"
import styled from "styled-components";

const Content = ({setBasket , basket}) => {
const [catData, setCatData] = useState([])  


useEffect(() => {
    async function fetchCatData() {
        const response = await fetch("https://api.thecatapi.com/v1/breeds/?api_key=live_Tt7xdd37BnW9MoqD2zlLy1dg8C9qPlKLdxNXGoNylalEBw39TaM7CbOYfkfhdSo1")
        const data = await response.json()
        setCatData([...data])
        console.log([...data])
    } 
    fetchCatData()
}, [] )

    return (
        <Div>
            {catData.map((cat, index) => (
                <Cat key={index} entireCat={cat} setBasket={setBasket} basket={basket}/>
            ))}

        </Div>
    )
}

export default Content;


const Div = styled.div `
    background-color:#DBEFE1;
    margin-right:1vw;
`

