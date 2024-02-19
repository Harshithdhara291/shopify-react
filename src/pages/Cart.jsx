import { useState } from "react";
import styled from "styled-components";

export default function Cart() {
  const [cartList, setCartList] = useState([
    {
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breat",
      discountPercentage: "85",
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
      discountPercentage: "85",
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
      <ItemsContainer>
        {cartList.map((each) => {
          return (
            <li key={each._id}>
              <div>
                <img src={each.image} alt="not-found" />
                <div>
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>
              <div>
                <h2>{each.title}</h2>
                <p>{each.para}</p>
                <SimilarPriceCont>
                    <h5>₹ {each.price}</h5>
                    <p>₹{orgPrice}</p>
                    <h6>{discountPercentage}% off</h6>
                  </SimilarPriceCont>
              </div>
            </li>
          );
        })}
      </ItemsContainer>

      <PriceContainer></PriceContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f3f6;
`;
const ItemsContainer = styled.ul``;
const PriceContainer = styled.div``;

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