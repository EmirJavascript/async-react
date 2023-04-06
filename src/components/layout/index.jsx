import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components";

const Nav = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;
  
  & .active {
    color: red;
  }
`
export const Layout = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </Nav>

      <Outlet />
    </div>
  )
}

// Вместо Outlet вставляются нужные, в зависимости от запроса, дочерние компонеты