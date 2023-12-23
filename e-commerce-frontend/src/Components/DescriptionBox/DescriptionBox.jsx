import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          NexKart is an e-commerce platform which aims to make the shopping experience for Gen-z's more fun and
          engaging. With a diverse range of products and a user-friendly interface, NexKart caters to the dynamic 
          preferences and lifestyles of the Gen Z demographic. Our platform is designed to seamlessly integrate the 
          latest trends, cutting-edge technology, and social connectivity to provide an immersive and personalized 
          shopping journey. 
        </p>
        <p>
        Whether you're searching for the latest fashion trends, tech innovations, or lifestyle inspirations, 
        NexKart is your go-to destination. Join us in redefining the e-commerce experience for Gen Z—where 
        shopping is not just a transaction, but a celebration of individuality, innovation, and community. 
        Explore NexKart and embrace the future of online shopping tailored to the unique spirit of the Gen Z generation.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
