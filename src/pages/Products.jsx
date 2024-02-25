/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function Products() {
  const [data, setData] = useState([]);
  const [showCategory, setShowCategory] = useState(true);
  const [showRating, setShowRating] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://shopify-backend-ah7e.onrender.com/products"
      );
      setData(response.data);
      setLoading(false);
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

  return (
    <Container>
      <FiltersCont>
        <h1>Filters</h1>
        <FilterItem>
          <div>
            <h1>CATEGORY</h1>
            <button onClick={() => setShowCategory(!showCategory)}>
              {showCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {showCategory && (
            <ul>
              <li>
                <input type="checkbox" />
                <label>Men's Clothing</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Women's Clothing</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Electronics</label>
              </li>
              <li>
                <input type="checkbox" />
                <label>Jewellery</label>
              </li>
            </ul>
          )}
        </FilterItem>
        <FilterItem>
          <div>
            <h1>RATING</h1>
            <button onClick={() => setShowRating(!showRating)}>
              {showRating ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {showRating && (
            <ul>
              <li>
                <input type="radio" />
                <label>
                  4 <FaStar className="star" /> & above
                </label>
              </li>
              <li>
                <input type="radio" />
                <label>
                  3 <FaStar className="star" /> & above
                </label>
              </li>
              <li>
                <input type="radio" />
                <label>
                  2 <FaStar className="star" /> & above
                </label>
              </li>
              <li>
                <input type="radio" />
                <label>
                  1 <FaStar className="star" /> & above
                </label>
              </li>
            </ul>
          )}
        </FilterItem>
        <FilterItem>
          <div>
            <h1>PRICE</h1>
            <button onClick={() => setShowPrice(!showPrice)}>
              {showPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {showPrice && (
            <ul>
              <li>
                <input type="radio" />
                <label>Low to High</label>
              </li>
              <li>
                <input type="radio" />
                <label>High to Low</label>
              </li>
            </ul>
          )}
        </FilterItem>
      </FiltersCont>
      <ProductsCont>
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <ul>
            {data.map((product) => {
              return (
                <ProductItem key={product.id}>
                  <div
                    className="link-cont"
                    onClick={() => navigateToDetailPage(product)}
                  >
                    <img src={product.image} alt="not-found" />
                    <h1>{product.title}</h1>
                  </div>

                  <p className="prod-description">{product.description}</p>
                  <Rating>
                    <h5>
                      {product.rating} <FaStar />
                    </h5>
                    <p>({product.ratingCount})</p>
                  </Rating>
                  <PriceCont>
                    <h5>₹ {product.price}</h5>
                    <p>₹{product.orgPrice}</p>
                    <h6>{product.discount}% off</h6>
                  </PriceCont>
                </ProductItem>
              );
            })}
          </ul>
        )}
      </ProductsCont>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f3f6;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 10px;
`;
const FiltersCont = styled.div`
  position: sticky;
  top: 14%;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  border-radius: 4px;
  width: 22%;
  /* min-height: 85vh; */
  height: fit-content;
  padding: 0;
  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 1rem;
  }
`;

const FilterItem = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 1rem;
    border-top: 1px solid #dbdbdb;
    h1 {
      font-size: 1rem;
      margin: 0px;
    }
    button {
      background: none;
      border: none;
    }
  }
  ul {
    list-style-type: none;
    li {
      margin: 5px 0;
      .star {
        color: gold;
      }
      label {
        margin-left: 8px;
      }
    }
  }
`;

const ProductsCont = styled.div`
  border: 1px solid #eeeeee;
  width: 75%;
  background-color: #fff;
  min-height: 100vh;
  border-radius: 4px;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.8rem;
    padding-left: 0px;
  }
`;

const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 15rem;
  height: 30rem;
  padding: 1.5rem 1.2rem;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Box shadow on hover */
  }
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
  .prod-description{
    width: 100%;
    text-wrap: wrap;
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

const Rating = styled.div`
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
    font-size: 0.8rem;
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

const PriceCont = styled.div`
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
  h6 {
    color: green;
    margin: 0px;
  }
`;
