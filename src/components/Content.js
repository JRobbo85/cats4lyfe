import styled from 'styled-components'
import Cat from './Cat'



const Content = () => {
// comment to test
    return (
        <Container>
           <Cat />
            <Cat/>
            <Cat/>



        </Container>
    )
}

export default Content;

const Container = styled.div`
    background-color:#DBEFE1;
`