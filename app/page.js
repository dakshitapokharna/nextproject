import Image from "next/image";
import myimage from "/public/myimage.png";
import "./globals.css";

const home = () => {
  return (
    <div className="home">
      <div>
        <div className="navbar">
          <ul className="navbar-nav" id="navbar-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="text-overlay">
        <Image src={myimage} alt="myimage" className="myimage" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
      </div>
      <div className="text-overlay2">
        <h1 className="text">Hey!</h1>
        <h3>I am Dakshita</h3>
        <h3>Software Developer</h3>

        
        
        <button class="custom-btn btn-7">
          <span>Read More</span>
        </button>
      </div>

      <div>
        <h1 className="title">Welcome to Space Blogs</h1>
        <div className="buttonContainer">
          <a href="#" className="btnBigRed">
            BLOG1
          </a>
          <a href="#" className="btnBigRed">
            BLOG2
          </a>
          <a href="#" className="btnBigRed">
            BLOG3
          </a>
        </div>
      </div>
    </div>
  );
};

export default home;


