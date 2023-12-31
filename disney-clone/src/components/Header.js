import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useEffect } from "react";

//dispatch will allow us to dispatch action to store(src->app->store)
//selector allows us to retrive from store
import {useDispatch,useSelector} from "react-redux";
import {selectUserName,selectUserPhoto,setUserLoginDetails,setSignOutState,} from "../features/user/userSlice";
import { useNavigate } from 'react-router-dom';

const Header= (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // use selector takes info froms store 
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    //adding react hooks so that when user logs in -> taken to home page
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            navigate('/home');
          }
        });
      }, [userName]); //dependency : userNAme , the function authStateChanged only works when userName is updated




      //sign in sign out authentication
      const handleAuth = () => {
        if (!userName) {
          auth.signInWithPopup(provider).then((result) => {
              setUser(result.user);
            })
            .catch((error) => {
              alert(error.message);
            });
        } 
        else if (userName) {
          auth.signOut().then(() => {
              dispatch(setSignOutState());
              navigate('/');
            })
            .catch((err) => alert(err.message));
        }
      };




    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };

    
    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney" />
            </Logo>



            {/* if there is no username, show login button, else show user image. THIS IS THE TERNARY OPERATOR   */}
            {!userName ? (
            <Login onClick={handleAuth}>Login</Login>
            
            ) : (
            <>
            <NavMenu>
                <a href="/home">
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
                </a>
                <a>
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
                </a>
                <a>
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span>WATCHLIST</span>
                </a>
                <a>
                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                <span>ORIGINALS</span>
                </a>
                <a>
                <img src="/images/movie-icon.svg" alt="MOVIES" />
                <span>MOVIES</span>
                </a>
                <a>
                <img src="/images/series-icon.svg" alt="SERIES" />
                <span>SERIES</span>
                </a>
            </NavMenu>
            <SignOut>
                <UserImg src={userPhoto} alt={userName} />
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
            </>
      )}
        </Nav>
    );
}

const Nav=styled.div`
    /* when you scroll the header should stay fixed */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display:flex ;
    justify-content: space-between;
    align-items: center;
    padding:0 36px;
    z-index: 3;
`;



const Logo=styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width:100%;
    }
`;


const NavMenu=styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12 px;

        img{
            height: 20px;
            min-width:20px;
            width: 20px;
            z-index: auto;
        }

        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space:nowrap;
            position: relative;
            margin-right: 20px;
            margin-left: 2px;

            &:before{
                background-color: rgb(249,249,249);
                bottom: -6px;
                content: '';
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }


        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
                cursor: pointer;
            }
        }
    }


    /* if it is below specified width, the menu options are not displayed  */
    @media (max-width:768px){
        display: none;
    }
`;


const Login=styled.a`
    background-color: rgb(0,0,0,0);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transform: all .2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        cursor: pointer;
        border-color: transparent;
    }
`;

const UserImg=styled.img`
    height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 55px;
  right: -15px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  width: 75px;
  //hidden unless hover
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;




export default Header;