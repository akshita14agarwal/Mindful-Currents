import React from 'react';


import {AppBar, Toolbar, Typography,styled} from '@mui/material';

 import { Link } from 'react-router-dom';


// 6 times F is white and 3 zeroes are black
const Component = styled(AppBar)`
     background: #FFFFFF; 
     color: #000 ;
`
// child alignment changed by changing alignment of parent 
const Container = styled(Toolbar)`  
    justify-content: center;
    & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
    }
 `

const Header = () => {
    return(
        
        <Component>
            <Container>
                <Link to ='/'> HOME</Link>
                <Link to ='/about'> ABOUT</Link>
                <Link to='/contact'> CONTACT</Link>
                <Link to ='/login'> LOGOUT</Link>



            </Container>
        </Component>
       
    
    )
}
export default Header;