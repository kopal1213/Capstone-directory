import {React, useState, useEffect} from 'react';
import Category from "./Category";
import Filter from "./Filter"
import Layout from "../Products/Layout";
import {
  Grid
} from "@mui/material";
import "./product.css";
import { useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import axios from 'axios';
import Box from '@mui/material/Box';
import {toast} from 'react-hot-toast'
import SearchAppBar from '../Products/Appbar';
import Footer from '../Products/Footer';

export default function Product() {

  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart)
  const [products , setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [dialogType, setDialogType] = useState("");
  const [deleteAction, setDeleteAction] = useState(false);

  useEffect(() => {
    async function searchProducts() {
      try {
       
        const res = await axios.get(`http://localhost:3001/api/v1/products`); 
        setProducts(res.data);
      } catch (ex) {
        toast.error("Failed to fetch products.");
      }
    }

    searchProducts();
  }, []);

  useEffect(() => {
    
  }, [deleteAction, selectedProduct._id, selectedProduct.name]);

  return (
    <>
    <SearchAppBar/>

    <Grid className="body" container spacing={2}>
        <Grid item xs={2} >
          <Category/>
          <Filter/>
        </Grid>

        <Grid item xs={10}>
          {/* mapping*/}

       {/* Cards */}
      <Box
          m={2}
          flexWrap="wrap"
          display="flex"
          justifyContent="space-evenly"
          width="95%"
        >
          {products.map((product) => (
            <ProductCard
              key={product._id}
              data={product}
              onDelete={() => {
                setSelectedProduct(product);
                setDialogType("delete");
              }}
              onEdit={() =>
                window.location.href = `/modify-product/${product._id}`
              }
              onBuy={() =>
                window.location.href =`/show/${product._id}`
              }
            />
          ))}
        </Box>

        </Grid>
        </Grid>
{/* 
      <Grid className="body" container spacing={2}>
        <Grid item xs={3} >
          <Category/>
          <Filter/>
        </Grid>

        <Grid item xs={9}> */}
          {/* mapping*/}

         {/* <div className="bodyItem">
           
            //     return (
            //       <>
            //         <Card className="card" key={item.id}>
            //           <CardActionArea>
            //             <CardMedia >
            //               <img
            //                 className="image"
            //                 style={{width: 200,
            //                         height: 200,
            //                         marginLeft: 90,
            //                         marginRight: 90}}
            //                 src={item.imageURL}
            //                 alt={item.name}
            //               />
            //             </CardMedia>
            //           </CardActionArea>
            //           <CardContent
            //           style={{display:"flex",
            //           justifyContent:"space-between",
            //           alignItems:"center"}}
            //            >
            //           <Typography gutterBottom variant="h6" component="h2">
            //           {item.name.length > 30 ? item.name.substring(0,30) : item.name}
            // </Typography>
            // <Typography gutterBottom variant="h6" component="h2">
            //   ₹ {item.price}
            // </Typography>
            // {/* <Typography style={{display:"flex"}} variant="p" component="h6">
            //   {item.description > 60 ? item.description.substring(0,60) : item.description}
            // </Typography> */}
           {/* //           </CardContent>
            //           <CardActions>
            //             <Button
            //             fullWidth
            //               variant="contained"
            //               style={{ backgroundColor: "#FFD700", margin: 5, color: "#000" }}
            //               href="/cart"
            //             >
            //               {" "}
            //               Buy Now{" "}
            //             </Button>
            //             {cart.some((x) => x.id === item.id) ? 
            //             (
            //               <Button
            //               fullWidth
            //                 variant="contained"
            //                 style={{ backgroundColor: "#FEBE10", margin: 5, color: "#000" }}
            //                 onClick={() => addItemToCart(item)}
            //               >
            //                 {" "}
            //                 Remove From Cart
            //               </Button>
            //             ):(
            //               <Button
            //             fullWidth
            //               variant="contained"
            //               style={{ backgroundColor: "#FEBE10", margin: 5, color: "#000" }}
            //               onClick={() => addItemToCart(item)}
            //             >
            //               {" "}
            //               Add To Cart
            //             </Button>

            //             )}
                        
            //           </CardActions>
            //         </Card>
            //       </>
            //     );
             
          </div> */}
        {/* </Grid>
      </Grid> */}
    <Footer/>
    </>
  );
}
