import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import "./product.css";
import { Box, IconButton } from "@mui/material";
import { DataArrayRounded, Delete } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";

export default function ProductCard({
  data,
  onDelete,
  onEdit,
  onBuy,
  isAdmin,
}) {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemToCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const RootCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(1),
    width: 345,
    margin: 20,
  }));

  const Media = styled(CardMedia)(({ theme }) => ({
    height: 200,
  }));

  const Content = styled(CardContent)(({ theme }) => ({
    height: 150,
    overflowY: "auto",
  }));

  return (
    <>
      <RootCard>
        <CardActionArea>
          <Media
            component="img"
            alt={data.name}
            src={data.imageURL}
            title={data.name}
          />
          <Content>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="h6" component="h2">
                {data.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                ₹ {data.price}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description}
            </Typography>
          </Content>
        </CardActionArea>
        <CardActions>
          <Box display="flex" width="100%" alignItems="center">
            <Button
              size="medium"
              fullWidth
              style={{ backgroundColor: "#FFD700", color: "#000",margin: 4 }}
              variant="contained"
              onClick={onBuy}
            >
              Buy Now
            </Button>
          </Box>
            {cart.find((x) => data.id === x.id) ? (
              <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "#FEBE10", color: "#000" ,margin: 4}}
                onClick={() => removeItemToCart(data)}
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                size="medium"
                fullWidth
                style={{ backgroundColor: "#FEBE10", color: "#000" ,margin: 4}}
                variant="contained"
                onClick={() => addItemToCart(data)}
              >
                Add To Cart
              </Button>
            )}

          {isAdmin && (
            <Box>
              <IconButton onClick={onEdit}>
                <Edit />
              </IconButton>
              <IconButton onClick={onDelete}>
                <Delete />
              </IconButton>
            </Box>
          )}
        </CardActions>
      </RootCard>

      {/* <Card className="card" key={item.id}>
                       <CardActionArea>
                         <CardMedia >
                           <img
                             className="image"
                             style={{width: 200,
                                     height: 200,
                                     marginLeft: 90,
                                     marginRight: 90}}
                             src={item.imageURL}
                             alt={item.name}
                           />
                         </CardMedia>
                       </CardActionArea>
                       <CardContent
                       style={{display:"flex",
                       justifyContent:"space-between",
                       alignItems:"center"}}
                        >
                       <Typography gutterBottom variant="h6" component="h2">
                       {item.name.length > 30 ? item.name.substring(0,30) : item.name}
             </Typography>
             <Typography gutterBottom variant="h6" component="h2">
               ₹ {item.price}
             </Typography>
             {/* <Typography style={{display:"flex"}} variant="p" component="h6">
               {item.description > 60 ? item.description.substring(0,60) : item.description}
             </Typography> */}
      {/*} </CardContent>
                       <CardActions>
                         <Button
                         fullWidth
                           variant="contained"
                           style={{ backgroundColor: "#FFD700", margin: 5, color: "#000" }}
                           href="/cart"
                         >
                           {" "}
                           Buy Now{" "}
                         </Button>
                         {cart.some((x) => x.id === item.id) ? 
                         (
                           <Button
                           fullWidth
                             variant="contained"
                             style={{ backgroundColor: "#FEBE10", margin: 5, color: "#000" }}
                             onClick={() => addItemToCart(item)}
                           >
                             {" "}
                             Remove From Cart
                           </Button>
                         ):(
                           <Button
                         fullWidth
                           variant="contained"
                           style={{ backgroundColor: "#FEBE10", margin: 5, color: "#000" }}
                           onClick={() => addItemToCart(item)}
                         >
                           {" "}
                           Add To Cart
                         </Button>

                         )}
                        
                       </CardActions>
                     </Card>  */}
    </>
  );
}
