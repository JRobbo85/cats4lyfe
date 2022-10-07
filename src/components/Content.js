import Cat from "./Cat"
import { useState, useEffect } from "react"

const Content = () => {
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
        <div>
            {catData.map((cat, index) => (
                <Cat key={index} entireCat={cat} />
            ))}
        </div>
    )
}

export default Content;