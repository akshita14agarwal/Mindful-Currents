import React from 'react';
import {Button, Table, TableHead, TableCell, TableBody, TableRow, styled} from '@mui/material';

import {Link, useSearchParams} from 'react-router-dom';

import{categories} from '../../constants/data';
const styledTable = styled(Table)`
border: 1px solid rgba(224, 224, 224, 1);

`
const styledButton = styled(Button)`
margin: 20px;
width: 85%
background: #6495ED;
color: #fff;

`

const styledLink = styled(Link)`
    text-decoration: none;
    color: inehrit;

`
const Categories = ()=>{

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return(
        <>
        <styledLink to ={`/create?category=${category || ''}`} > 
        <styledButton variant="contained"> Create Blog</styledButton>


         </styledLink>
        <styledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <styledLink to ='/'>
                        All Categories
                        </styledLink>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>{            
                categories.map(category => (
                    <TableRow key={category.id}  >
                <TableCell>
                    <styledLink to ={`/?category=${category.type}`}>
                    {category.type}
                    </styledLink> 
                </TableCell>
                </TableRow>

                ))
            }
                
            </TableBody>
        </styledTable>
        </>

    )

}
 export default Categories;