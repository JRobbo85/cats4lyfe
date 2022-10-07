import styled from 'styled-components'


const Header = () => {
  return (
    <Headerwrap>
      <img
        src={require("./images/Cats4Lyf_logo.png")}
        alt="Cat logo"
        id="catLogo"
      ></img>
      <h1>Cats</h1>
      <h1>4</h1>
      <h1>Lyfe </h1>
    </Headerwrap>
  );
};

export default Header;

// CSS for Header component

const Headerwrap = styled.div`
width: 10%;
background: #181133;
`;
