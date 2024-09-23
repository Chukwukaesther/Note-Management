import React from "react";
import './style/NavBar.css'
const Navbar = () => {

    return(
        <div className="NavBar">
            <img src='https://img.freepik.com/premium-photo/stack-colorful-books_1207614-22471.jpg?w=740'/>
            <h1>NOTE MANAGEMENT SYSTEM</h1>
            <div className=" nav-bar">
                <ul>
                    <button>About</button>
                    <button>services</button>
                    <button>Features</button>
                    <button>About Us</button>
                    <button>Sign In</button>

                </ul>
            </div>

        </div>


    );

}
export default Navbar
