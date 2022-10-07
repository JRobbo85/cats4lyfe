
import Header from './components/Header'
import Content from './components/Content'
import Cart from './components/Cart'
import styled from 'styled-components' 
import {useState} from 'react'



function App() {


  const [basket, setBasket] = useState([])


  return (

    <Div>
      <Header />
      <Content setBasket = {setBasket} basket={basket} />
      <Cart basket={basket} />
    </Div>

  );
}

export default App;


const Div = styled.div `
  display:flex;

`