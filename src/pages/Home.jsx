import styled from "styled-components"
import data from "../data/data.json"

export default function Home() {
  return (
    <HomeMain>
      <div className="category-section">
          <ul>
            {
              data.categories.map(item=>{
                return(
                  <li key={item.id}>
                      <a href={`#${item.categoryName}`}><img src={item.categoryImage} className="cate-image-pro" alt="not found"  />
                      <h3>{item.categoryName}</h3></a>
                  </li>
                )
              })
            }
          </ul>
      </div>
      <div className="categories-section" id="Grecory" >
          <h3>Best of Grocery</h3>
          <ul>
          {
                data.grocery.map(item=>{
                  return(
                    <li key={item.id}>
                        <img src={item.image} className="image-pro" alt="not found" />
                        <h4>{item.title}</h4>
                        <p>From ₹{item.price}</p>
                    </li>
                  )
                })
              }
              
          </ul>
      </div>
      <div className="categories-section" id="Electronics" >
          <h3>Best of Electronics</h3>
          <ul>
          {
                data.electronics.map(item=>{
                  return(
                    <li key={item.id}>
                        <img src={item.image} className="image-pro" alt="not found" />
                        <h4>{item.title}</h4>
                        <p>From ₹{item.price}</p>
                    </li>
                  )
                })
              }
              
          </ul>
      </div>
      <div className="categories-section" id="Clothing" >
          <h3>Best of Clothing</h3>
          <ul>
          {
                data.clothing.map(item=>{
                  return(
                    <li key={item.id}>
                        <img src={item.image} className="image-pro" alt="not found" />
                        <h4>{item.title}</h4>
                        <p>From ₹{item.price}</p>
                    </li>
                  )
                })
              }
              
          </ul>
      </div>
      <div className="categories-section" id="Sports & Outdoors" >
          <h3>Best of Sports & Outdoors</h3>
          <ul>
          {
                data.sports.map(item=>{
                  return(
                    <li key={item.id}>
                        <img src={item.image} className="image-pro" alt="not found" />
                        <h4>{item.title}</h4>
                        <p>From ₹{item.price}</p>
                    </li>
                  )
                })
              }
              
          </ul>
      </div>
      <div className="categories-section" id="Home & Kitchen" >
          <h3>Best of Home & Kitchen</h3>
          <ul>
          {
                data.homekitchen.map(item=>{
                  return(
                    <li key={item.id}>
                        <img src={item.image} className="image-pro" alt="not found" />
                        <h4>{item.title}</h4>
                        <p>From ₹{item.price}</p>
                    </li>
                  )
                })
              }
              
          </ul>
      </div>
    </HomeMain>
  )
}

const HomeMain = styled.div`
    background-color: rgb(241,243,245);
    min-height: 100vh;
    padding: 2rem 2rem 2rem 2rem;

.category-section{
    background-color: #fff;
    border-radius: 6px;
    padding: 1rem 0;
    margin-bottom:2rem;
}

.category-section ul{
    list-style-type: none;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.category-section ul li{
    margin-right: 1.6rem;
    cursor: pointer;
}

.category-section ul li a{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.category-section ul li img{
    height: 5rem;
    width: 8rem;
    border-radius: 5px;
}

.category-section ul li h3{
    text-decoration: none;
    margin: 0px;
    margin-top: 15px;
    color: #111013;
    font-weight: 550;
    font-size: 1rem;
    text-align: center;
    /* border: 1px solid red; */
}

.corousel-section{
    width: 100%;
    height: 16rem;
    margin: 1.5rem 0;
}

.corousel-img{
    width: 100%;
    height: 100%;
}

.carousel-item {
    height: 15rem;
    width: 100%;
    border-radius: 4px;
}

.categories-section{
    background-color: #fff;
    border-radius: 6px;
    padding: 1rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;

}

.categories-section h3{
    color: #111013;
    font-weight: 500;
    font-size: 1.7rem;
}

.categories-section ul{
    list-style-type: none;
    list-style-type: none;
    margin:0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* flex-wrap: wrap; */
    overflow-x: auto;
    white-space: nowrap;
    /* border: 1px solid red; */
    padding: 1rem 0 1rem 1rem;
}

.categories-section ul li{
    border: 2px solid #E0E0E0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    height: 18rem;
    border-radius: 4px;
    margin-right: 1.5rem;
}

.cate-image-pro{
    height: 9rem;
    width: 11rem;
    transition: transform 0.3s ease;
    cursor: pointer; 
}

.image-pro{
    height: 9rem;
    width: 11rem;
    transition: transform 0.3s ease;
    cursor: pointer; 
}

.image-pro:hover{
    transform: scale(1.1);
}

.categories-section ul li h4{
    color: #434146;
    font-size: 1rem;
    margin: 0px;
}

.categories-section ul li p{
    color: #1d1c1f;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0px;
}
::-webkit-scrollbar {
    width: 0px;
}

@media (max-width:991px) {
    .category-section ul{
        list-style-type: none;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .category-section ul li{
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        /* margin-right: 1.6rem; */
        cursor: pointer;
        width: 6rem;
    }
    .category-section ul li img{
        height: 3rem;
        width: 4rem;
        border-radius: 5px;
    }
    .category-section ul li h3 {
        text-decoration: none;
        margin: 0px;
        /* margin-top: 15px; */
        color: #111013;
        font-weight: 550;
        font-size: 10px;
    }

    .corousel-section{
        height: 8rem;
    }

    .carousel-item{
        height: 7.5rem;
    }

    .corousel-img{
        width: 100%;
        height: 6rem;
        margin: 1.5rem 0;
    }
    .categories-section{
        padding: 9px;
    }
    .categories-section ul li{
        height: 14rem;
    }
    .categories-section h3{
        font-size: 1rem;
        margin: 0;
    }
    .image-pro{
        height: 6rem;
        width: 8rem;
    }
    
}
`