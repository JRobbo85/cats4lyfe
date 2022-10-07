import styled from "styled-components";


const Header = () => {
  return (
    <Headbanner>
      <Img
        src={require("./assets/Cats4Lyf_logo.png")}
        alt="Cat logo"
        id="catLogo"
      ></Img>
      <Headtext>
        <h1>Cats</h1>
        <h1>4</h1>
        <h1>Lyfe</h1>
      </Headtext>
    </Headbanner>
  );
};

export default Header;


const Headbanner = styled.div`
width: 25vh;
height: 100vh;
position: fixed;
background-color:#1d617a;
`

const Img = styled.img`
heigth: 17vh;
width: 17vh;
padding: 5vh;
display: flex;
justify-content: center;
`

const Headtext = styled.div`
text-align: center;
font-size: xx-large;
`