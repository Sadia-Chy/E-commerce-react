import React from 'react';
import Navigation from './Navigation';import data from './Products.json'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import image from '../Components/image.jfif'
import Button from '@mui/material/Button';

export default function Categories() {
  return (
    <>
    <Navigation/>
    <div  class="mx-20 mt-5 grid grid-cols-5 gap-y-10 gap-x-20 drop-shadow-xl">
    {data.products.data.items.map((item)=>{
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
            image={image}
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
    
  
    
  
  </div>
    </>
  );
}
