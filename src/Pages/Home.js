import React from 'react';
import { useEffect, useState } from "react";
import Navigation from './Navigation';
import Navigation2 from './Navigation2'
import data from './Products.json'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import image from '../Components/image.jfif'


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ProductList from '../Components/ProductList'

import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';



export default function Home() {
  const token =  localStorage.getItem("token")
  // const [isLoggedIn,setIsLoggedIn] = useState(false)

  // if(token){
  //   setIsLoggedIn(true)
  // }


  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //   fetch(`./Products.json`)
  //     .then((response) => response.json())
  //     .then((actualData) => {
  //       console.log(actualData);
  //       setData(actualData.data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <>
      {/* <div>{data.products.data.items.map((item) => {
          return <div key={item.id} value={item.id}>{item.name} {item.price}$</div>
        })}
      </div> */}
      {token ?<Navigation/> : <Navigation2/>}
      {/* <div class='w-max h-67'>
        <img src={logo} />
      </div> */}
      <ProductList/>
          
        </>
      )
    }

