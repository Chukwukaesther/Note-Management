import React from 'react';
import './style/Hero.css';


const Hero = () => {

    return(

        <div className="heroSection">
            <div className="left">
                <h1>HELLO</h1>
                <h1>MY</h1>
                <h1>BOOK</h1>
                <div>
                    <h1>search for my book</h1>
                    <input type="text" placeholder="search for my book..."/>
                </div>
            </div>
            <div className="right">
                <img src='https:img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?t=st=1726835328~exp=1726838928~hmac=8ad4555a50b7f71e622cb59353faf3fbb8ac4281bf94aed99e11c991583cbd30&w=900'/>
            </div>
        </div>





    );

}

export default Hero;