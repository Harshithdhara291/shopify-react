import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { MdVerifiedUser } from "react-icons/md";

export default function Cart() {
  const [cartList, setCartList] = useState([
    {
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breat",
      discount: "85",
      image: "https://m.media-amazon.com/images/I/61MakEoLvDL._SY741_.jpg",
      orgPrice: 4014,
      price: "599",
      rating: "4.1",
      ratingCount: 3020,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      _id: "65a8cf1aa9807c7b7e217c39",
    },
    {
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breat",
      discount: "85",
      image: "https://m.media-amazon.com/images/I/61MakEoLvDL._SY741_.jpg",
      orgPrice: 4014,
      price: "599",
      rating: "4.1",
      ratingCount: 3020,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      _id: "65a8cf1aa9807c7b7e217c39",
    },
  ]);

  return (
    <Container>
      <div className="cart-items-container">
        <ItemsContainer>
          {cartList.map((each) => {
            return (
              <EachItem key={each._id}>
                <div className="image-quant-cont">
                  <img src={each.image} alt="not-found" />
                  <QuantityButtons>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </QuantityButtons>
                </div>
                <ProductDetails>
                  <div>
                    <h2>{each.title}</h2>
                    <SimilarRating>
                      <h5>
                        {each.rating} <FaStar />
                      </h5>
                      <p>({each.ratingCount})</p>
                    </SimilarRating>
                    <PriceCont>
                      <h5>₹ {each.price}</h5>
                      <p>₹{each.orgPrice}</p>
                      <h6>{each.discount}% off</h6>
                    </PriceCont>
                  </div>
                  <button>REMOVE</button>
                </ProductDetails>
              </EachItem>
            );
          })}
        </ItemsContainer>
        <div className="place-order-cont">
          <button>PLACE ORDER</button>
        </div>
      </div>
      <PriceContainer>
        <div className="items-price-cont">
          <h3 className="price-details-head">PRICE DETAILS</h3>
          <div className="price-discount-total">
            <div>
              <p>Price (2 items)</p>
              <p>₹1,098</p>
            </div>
            <div>
              <p>Discount</p>
              <p className="discount-amount">− ₹670</p>
            </div>
            <div>
              <p>Delivery Charges</p>
              <p className="discount-amount">
                <span>₹40</span> Free
              </p>
            </div>
          </div>
          <div className="total-amount-container">
            <h2>Total Amount</h2>
            <h2>₹428</h2>
          </div>
          <h3 className="save-head">You will save ₹670 on this order</h3>
        </div>
        <div className="safe-secure-container">
          <h2>
            <MdVerifiedUser style={{color:"grey"}} />
          </h2>
          <h3 className="bottom-head">
            Safe and Secure Payments. Easy returns. 100% Authentic products.
          </h3>
        </div>
      </PriceContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f3f6;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 1.5rem 1rem;
  .cart-items-container {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 65%;
    border: 1px solid #c7c7c7b9;
    border-radius: 4px;
    .place-order-cont {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1.5rem 4rem 1.5rem 1.5rem;
      background-color: #fff;
      box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      button {
        background-color: #fb641b;
        border: none;
        padding: 0.8rem 4.2rem;
        font-size: 1.1rem;
        font-weight: 600;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
`;
const ItemsContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  margin-bottom: 0px;
`;

const EachItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  padding: 1rem;
  width: 100%;
  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child {
    border-bottom: none;
  }
  .image-quant-cont {
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      height: 8rem;
      width: 7rem;
    }
  }
`;

const ProductDetails = styled.div`
  /* border: 1px solid red; */
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  div {
    height: 2.2rem;
    /* border: 1px solid #b12d2d; */
  }
  button {
    background: none;
    border: none;
    color: #202020;
    font-size: 1.25rem;
    font-weight: 600;
    &:hover {
      color: #2e39e0;
    }
  }
`;

const QuantityButtons = styled.div`
  /* border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  p {
    margin: 0;
    border: 1px solid #dbdbdb;
    width: 40%;
    text-align: center;
  }
  button {
    background: none;
    border: none;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    padding: 0 8px;
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

const SimilarRating = styled.div`
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

const PriceContainer = styled.div`
  width: 30%;
  cursor: context-menu;
  .items-price-cont {
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #dbdbdb;
    padding: 10px 1rem;
    .save-head {
      font-size: 1.2rem;
      font-weight: 600;
      color: #4a984e;
      margin: 1rem 0;
    }
    .price-details-head {
      font-size: 1.3rem;
      color: #858585;
      padding-bottom: 5px;
      border-bottom: 1px solid #dbdbdb;
    }
    .price-discount-total {
      border-bottom: 1px dashed #dbdbdb;
      padding-bottom: 0rem;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .discount-amount {
          color: #4a984e;
          font-weight: 600;
          span {
            color: #858585;
            text-decoration: line-through;
          }
        }
      }
    }
    .total-amount-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0 0.5rem 0;
      border-bottom: 1px dashed #dbdbdb;
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
  .safe-secure-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  /* border: 1px solid red; */
    .bottom-head {
    width: 90%;
      color: #858585;
      font-size: 1rem;
    }
  }
`;
