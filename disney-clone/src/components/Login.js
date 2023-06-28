import styled from "styled-components";

// import './Logincss.css';   -> create a file Logincss.css inside contents, 
/*
Container{
    overflow: hidden;
    display: flex;
}
*/

const Login = (props) => {
    return (
        // the className = "Container" is just an example of how you can also use external css
        // <Container className="Container">

        <Container>
            <Content>
                <LogoDiv>
                    <LogoOne src="/images/cta-logo-one.svg" alt=""  />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Stream thousands of TV episodes and movies from across the Disney library, including its Pixar, Star Wars, and Marvel shows and films, along with exclusive TV series and movies.</Description>
                    <LogoTwo src="/images/cta-logo-two.png" alt=""  />
                </LogoDiv>
                <BgImage />
            </Content>
        </Container>
    );
};


const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    font-size: 32px;
`;

const Content = styled.div`
    margin-bottom: 100vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display:flex;
    justify-content: center; /* horizontally center  */
    align-items: center;  /* verticsly center  */
    flex-direction: column;
    padding: 80x 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const LogoDiv=styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* when you add align-items, it will be added in a top to bottom manner not left to right  */
    flex-direction: column;
`;

const LogoOne=styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp=styled.button`
    font-weight: bold;
    font-size: 18px;
    background-color: #0063e5;
    border: 1px solid transparent;
    border-radius:4px;
    color:#f9f9f9;
    width: 100%;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    padding:16.5px 0 ;
    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`;

const Description=styled.p`
    text-align: center;
    columns: hsla(0,0%,95.3%,1);
    font-size: 15px;
    margin:  0 0 24px;
    line-height: 1.5;
`;

const LogoTwo=styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    width: 100%;
`;

export default Login;


