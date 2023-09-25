import React from "react"
import './styles.css'




function Home() {
  return (
    <div>
     <div class="container">
        <nav>
            <img src="./image/logo.png" alt="logo" id="logo"/>

            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Recipe</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <img src="./image/bar.png" alt="menubar" id="menu-img"/>
        </nav>

        <div className="main">
            <div class="col">
                <h1>Foodies welcome here<br/>Something hot. Something tasty. Good food. Good mood. · You' ...</h1>
                <a href="">Order Now</a>
            </div>

            <div class="col">
                <img src="./image/pic2.png" alt="" class="feature-img"/>
                <img src="./image/pic4.png" alt="" class="thumbnail-img"/>
            </div>
        </div>

    </div>
    <footer>
        <p>Source : Easy tutorial</p>

    </footer>
    </div>
    

  )
}

export default Home
