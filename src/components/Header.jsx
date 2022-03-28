import React from 'react'

export const Header = () => {
  const changeTheme = () => {
    const html = document.querySelector("html");
    if(html.getAttribute("data-theme") === "dark"){
      html.setAttribute("data-theme", "light")
    }
    else{
      html.setAttribute("data-theme", "dark")
    }
  }
  return (
    <header className="header">
        <h1>Where in the world?</h1>
        <p onClick={changeTheme}>
            <i className="fa-moon"></i>
            Dark Mode
        </p>
    </header>
  )
}
