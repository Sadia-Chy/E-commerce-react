import React from 'react';
import data from '../Pages/Products.json'

import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ProductList() {
  
  const { products } = useSelector(state => state.product);
  return (
    <>
    <div  class="mx-20 mt-5 grid grid-cols-5 gap-y-10 gap-x-20 drop-shadow-xl">
    {products.map((item)=>{
      return(
        <>
          <Card sx={{ maxWidth: 245 }} class="grid gap-y-0.5 grid-rows-1 place-items-center border rounded-md shadow-sm shadow-stone-300">
          <CardHeader
            titleTypographyProps={{variant:'h8' }}
            title={item.name}
          />
          <CardMedia
            component="img"
            class="w-28 h-28"
            image={item.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" class="font-sans ">
              <p>$ {item.price}</p>
            </Typography>
          </CardContent>
          <CardActions disableSpacing >
            <Button color="secondary">Buy</Button>
            <Button color="warning">Add To Cart</Button>
            </CardActions>
          </Card>
          
        </>
      )
    }
    )}
    
    {/* <CardHeader
      
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="100"
      image={data.products.data.items.name}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {data.products.data.items.name}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      
    </CardActions> */}
    
  
  </div>
    </>
  );
}
