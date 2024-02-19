import styled from "styled-components"
import { LiaOpencart } from "react-icons/lia";

export default function NavbarUnAuth() {
  return (
    <Navbar>
      <h1>SHOPIFY APP <LiaOpencart/></h1>
    </Navbar>
  )
}

const Navbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Bottom box shadow */
    padding: 1rem 0;
    h1{
        font-size: 2rem;
        font-family: cursive;
    }
`