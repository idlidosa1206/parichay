import React from "react";
import "./Home.css";
import Card from "./Card.js";

// Import the images
import peopleImage from "../img/people.jpg";
import jobImage from "../img/job.jpg";
import donateImage from "../img/donate.jpg";
import healthImage from "../img/health.jpg";
import chatImage from "../img/chat.png";

const Home = () => {
  return (
    <>
      <div className="start">
        <div className="container">
          <div className="img-wrapper">
            {/* Use the imported image */}
            <img src={peopleImage} alt="h" className="back-img" />
          </div>
          <div className="back-text">
            <a href="https://git.io/typing-svg">
              <img
                id="svg"
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&pause=1000&color=F70606&center=true&vCenter=true&random=false&width=435&lines=Parichay%3A+Embrace+your+Identity"
                alt="Typing SVG"
              />
            </a>
            <h3>
              Guiding principle, inspiring individuals to navigate life's
              complexities with confidence and integrity.{" "}
            </h3>
            <a href="/register">
              <button id="signup-btn">Create/ Visit your profile</button>
            </a>
          </div>
        </div>

        <div className="flex-container1">
          <Card
            image={donateImage}
            text1="Ask For Help"
            text2="Reach out to like minded people for help in terms of funds, donations and so on."
            type="donate" // Specify the type for the donate card
          />
          <Card
            image={chatImage}
            text1="Community Chat"
            text2="Chat with your community, express your views and thoughts and build connections."
            type="chat" // Specify the type for the chat card
          />
        </div>
        <div className="flex-container1">
          <Card
            image={healthImage}
            text1="Seek healthcare facilities"
            text2="Get healthcare facilities based on your search, contact doctors and healthcare organizations."
            type="health" // Specify the type for the health card
          />

          <Card
            image={jobImage}
            text1="Find Jobs"
            text2="Track Jobs according to your preference and get latest updates."
            type="position" // Specify the type for the job card
          />
        </div>
      </div>
    </>
  );
};

export default Home;