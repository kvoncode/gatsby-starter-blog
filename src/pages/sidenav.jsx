import React from "react"

const Sidenav = () => {
  return (
    <>
      <a href="#sidenav-open">Open</a>
      <button
        href="#"
        id="#sidenav-close"
        title="Close menu"
        aria-label="Close Menu"
      >
        Close
      </button>
      <aside id="#sidenav-open">Hidden text</aside>
    </>
  )
}

export default Sidenav
