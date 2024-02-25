import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";
import { FaShoppingCart  } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetailPage() {
    const location = useLocation()
    const productDetails = location.state;
    const [data, setData] = useState([]);
    console.log(productDetails)
    const {_id,image,title,description,rating,price,category,ratingCount,orgPrice,discount} = productDetails;
    
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://shopify-backend-ah7e.onrender.com/products"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);

    const navigate = useNavigate();
    const navigateToDetailPage = (product) => {
      navigate(`/products/${product._id}`, { state: product });
    };

    const similarProductsList = data.filter((each)=>{
      // console.log(id,each._id)
      return each.category === category && each._id !== _id
    })

    // console.log(category, similarProductsList)

  return (
    <Container>
      <ProductContainer>
        <ProductImageContainer>
          <img src={image} alt="not-found" />
          
        </ProductImageContainer>
        <ProductDetailsContainer>
          <h1>{title}</h1>
          <Rating>
            <h5>
              {rating} <FaStar />
            </h5>
            <p>{ratingCount} Ratings</p>
          </Rating>
          <PriceCont>
            <h5>₹ {price}</h5>
            <p>₹{orgPrice}</p>
            <h6>{discount}% off</h6>
          </PriceCont>
          <p>{description}</p>
          <h4>Category : <span>{category}</span></h4>
          <ButtonsCont>
            <button className="add-to-cart-btn"><FaShoppingCart />ADD TO CART</button>
            <button className="buy-now-btn"><AiFillThunderbolt/>BUY NOW</button>
          </ButtonsCont>
        </ProductDetailsContainer>
      </ProductContainer>
      <SimilarProductsContainer>
        <h1>SIMILAR PRODUCTS</h1>
      <ProductsCont>
          <ul>
            {similarProductsList.map((product) => {
              return (
                <ProductItem key={product.id}>
                  <div className="link-cont"
                  onClick={() => navigateToDetailPage(product)}>
                    <img src={product.image} alt="not-found" />
                    <h1>{product.title}</h1>
                  </div>
                  <SimilarRating>
                    <h5>
                      {product.rating} <FaStar />
                    </h5>
                    <p>({product.ratingCount})</p>
                  </SimilarRating>
                  <SimilarPriceCont>
                    <h5>₹ {product.price}</h5>
                    <p>₹{product.orgPrice}</p>
                    <h6>{product.discount}% off</h6>
                  </SimilarPriceCont>
                </ProductItem>
              );
            })}
          </ul>
      </ProductsCont>
      </SimilarProductsContainer>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #F1F3F6;
`
const ProductContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* border: 1px solid red; */
  background-color: #fff;
  padding: 3rem 0;
`
const ProductImageContainer = styled.div`
  width: 22%;
  /* border: 1px solid red; */
  img{
    width: 99%;
    height: 22rem;
    border: 1px solid #ebebeb;
  }
`
const ProductDetailsContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .6rem;
  /* border: 1px solid red; */
  h1{
    font-size: 1.4rem;
    font-weight: 400;
  }
  p{
    color: #5c5c5c;
  }
  h4{
    font-size: 1.5rem;
    font-weight: 600;
    span{
      color: #7c7c7c;
    }
  }
`
const ButtonsCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 0;
    width: 55%;
    .add-to-cart-btn{
      width: 48%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      background-color: #FF9F00;
      color: #fff;
      border: none;
      font-weight: 600;
      border-radius: 3px;
      &:hover{
        background-color: #f19500;
      }
    }
    .buy-now-btn{
      width: 48%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      background-color: #FB641B;
      color: #fff;
      border: none;
      font-weight: 600;
      border-radius: 3px;
      &:hover{
        background-color: #fc7633;
      }
  }
`

const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid red; */
  h5 {
    margin: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #388e3c;
    color: #fff;
    padding: 4px;
    border-radius: 4px;
    font-size: .8rem;
    margin-right: 0.6rem;
    gap: 5px;
    &:hover {
      cursor: default;
    }
  }
  p {
    margin: 0px;
    color: #878787;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const PriceCont = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  align-items: flex-end;
  padding: 9px 0;
  h5 {
    margin: 0px;
    color: #141414;
    border-radius: 4px;
    font-size: 2rem;
    font-weight: 700;
    /* margin-right: 0.6rem; */
    &:hover {
      cursor: default;
    }
  }
  p {
    margin: 0px;
    color: rgb(135, 135, 135);
    font-size: 1.3rem;
    font-weight: 400;
    text-decoration: line-through;
    font-style: italic;
  }
  h6{
    color: green;
    margin: 0px;
    font-size: 1.3rem;
  }
`;

const SimilarProductsContainer = styled.div`
  background-color: #fff;
  min-height: 10rem;
  margin-top: 2rem;
  padding: 2rem;
  h1{
    font-size: 1.3rem;
    font-weight: 700;
  }
`

const ProductsCont = styled.div`
  /* width: 100%; */
  background-color: #fff;
  border-radius: 4px;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-x: auto;
    /* white-space: nowrap; */
    gap: .8rem;
    padding-left: 0px;
  }
`;

const ProductItem = styled.li`
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 15rem;
  height: 23rem;
  padding: 1.5rem 1.2rem;
  margin: .5rem 1rem 0 0;
  /* border: 1px solid red; */
  .link-cont:hover h1 {
    color: #235bf5;
    cursor: pointer;
  }

  img {
    height: 13rem;
    width: 12rem;
    align-self: center;
    &:hover {
      cursor: pointer;
    }
  }
  h1 {
    font-size: 1rem;
    color: #212121;
    font-weight: 400;
    margin: 0px;
    margin: 4px 0;
    
  }
  p {
    color: #b5b5b5;
    max-height: 3rem;
    overflow-y: hidden;
    overflow-x: hidden;
    margin: 0px;
    &:hover {
      cursor: default;
    }
  }
`;

const SimilarRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  h5 {
    margin: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #388e3c;
    color: #fff;
    padding: 4px;
    border-radius: 4px;
    font-size: .8rem;
    margin-right: 0.6rem;
    &:hover {
      cursor: default;
    }
  }
  p {
    margin: 0px;
    color: #878787;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const SimilarPriceCont = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
  width: 100%;
  h5 {
    margin: 0px;
    color: #141414;
    padding: 4px;
    border-radius: 4px;
    font-size: 1rem;
    /* margin-right: 0.6rem; */
    &:hover {
      cursor: default;
    }
  }
  p {
    margin: 0px;
    color: rgb(135, 135, 135);
    font-size: 1em;
    font-weight: 400;
    text-decoration: line-through;
    font-style: italic;
  }
  h6{
    color: green;
    margin: 0px;
  }
`;