import Cat from "./Cat"
import { useState, useEffect } from "react"

const Content = () => {
const [counter, setCounter] = useState(0)
const [catData, setCatData] = useState()  


useEffect(() => {
    async function fetchCatData() {
        const response = await fetch("https://api.thecatapi.com/v1/breeds/?api_key=live_Tt7xdd37BnW9MoqD2zlLy1dg8C9qPlKLdxNXGoNylalEBw39TaM7CbOYfkfhdSo1")
        const data = await response.json()
        setCatData(data)
    } 
    fetchCatData()
},[])

    return (
        <div>
            {/* <Cat name={data[0 + (counter)].name}/>
            <Cat name={data[0 + (counter + 1)].name}/>
            <Cat name={data[0 + (counter + 2)].name}/> */}
            <button>More Cats!</button>
        </div>
    )
}

export default Content;