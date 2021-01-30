import React from "react"
import styled from "styled-components"

const CloseMenu = styled.button`
  background-color: red;
  border: 1px solid red;
`

const SideNav = styled.aside`
  background-color: green;

  @media (max-width: 540px) {
    visibility: hidden;
    background-color: purple;
  }
`

const Sidenav = () => {
  return (
    <>
      <a href="#sidenav-open">Open</a>
      <CloseMenu
        href="#"
        id="#sidenav-close"
        title="Close menu"
        aria-label="Close Menu"
      >
        Close
      </CloseMenu>
      <SideNav id="#sidenav-open">Hidden text</SideNav>
    </>
  )
}

export default Sidenav
