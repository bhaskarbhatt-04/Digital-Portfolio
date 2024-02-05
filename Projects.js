import React from "react";
import "./Projects.css";
import im1 from './Photos/Flora.png';
import im2 from './Photos/Stock.jpg';
import im3 from './Photos/bicep.jpg';
import im4 from './Photos/port.png';
import im5 from './Photos/digit.png';
import im6 from './Photos/brain.jfif';
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
    <div className="bgm">
      <div className="boxes1">
        <div className="card" style={{ width: "18rem" }}>
          <img src={im2} className="card-img-top" height={165} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Stock analyzer and Predictor</h5>
            <p className="card-text">
              <p>
                An application that analyzes past market trends based on the
                stock prizes and sentimental analysis on the news headlines.
              </p>
              <p>that further predicts the future market trends.</p>
              <p>
                The database is scraped using a web scrapper and algorithm used
                is LSTM and VADER.
              </p>
            </p>
          </div>
          <div className="card-body">
            <Link to="https://github.com/bhaskarbhatt-04?tab=repositories" target="blank" className="card-link">
              Github
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={im3} className="card-img-top" height={165}  alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bicep Curl Tracker</h5>
            <p className="card-text">
              <p>
                Built an AI application that keeps the track of biceps curls doe
                by a person in a video input through webcam.
              </p>
              <p>
                Application is built using python language and outputs the total
                curl counts with
              </p>
              <p>the angle of the hands edges and the correct posture.</p>
            </p>
          </div>
          <div className="card-body">
            <Link to="https://github.com/bhaskarbhatt-04?tab=repositories" target="blank" className="card-link">
              Github
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={im5} className="card-img-top" height={165} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Optical Digit Recognition</h5>
            <p className="card-text">
              <p>
                An AI application that detects the handwritten digit in an input
                image.
              </p>
              <p>
                Predicts the value in it and displays the value on the output
                screen.
              </p>
              <p>
                Database used is MNIST dataset is chosen from Kaggle and
                algorithm used is Deep CNN.
              </p>
            </p>
          </div>
          <div className="card-body">
            <Link to="https://github.com/bhaskarbhatt-04?tab=repositories" target="blank" className="card-link">
              Github
            </Link>
          </div>
        </div>
      </div>

      <div className="boxes2">
        <div className="card" style={{width: "18rem" }}>
          <img src={im1} className="card-img-top" height={250} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Florapedia</h5>
            <p className="card-text">
              <p>
                Developed an application that classifies the image of input
                flowers into five different categories.
              </p>
              <p>and predicts its name. It is based on Deep Learning.</p>
              <p>
                The algorithm used to detect and predict flower's className is deep
                CNN.
              </p>
            </p>
          </div>
          <div className="card-body">
            <Link to="https://github.com/bhaskarbhatt-04?tab=repositories" target="blank" className="card-link">
              Github
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={im6} className="card-img-top" height={250} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cerebral Tumor Detection</h5>
            <p className="card-text">
              <p>
                An AI application that takes an MRI image of brain as input and
                detects whether there is Tumoror not.
              </p>
              <p>
                It is based on Deep Learning , an additional GUI is built to
                upload images of choice.
              </p>
              <p>
                Model training is done on a large dataset from Kaggle and
                lgorithm used to built the model is Deep CNN.{" "}
              </p>
            </p>
          </div>
          <div className="card-body">
            <Link to="https://github.com/bhaskarbhatt-04?tab=repositories" target="blank" className="card-link">
              Github
            </Link>
          </div>
        </div>

        <div className="card" style={{width:"18rem"}}>
          <img src={im4} className="card-img-top" height={250}  alt="..." />
          <div className="card-body">
            <h5 className="card-title">Digital-Portfolio</h5>
            <p className="card-text">
              <p>
                Web based single page resposive website that has all information
                about me including contact details.
              </p>
              <p>Website is built using Reactjs.</p>
            </p>
          </div>
          <div className="card-body">
            <Link to="https://github.com/bhaskarbhatt-04?tab=repositories" target="blank" className="card-link">
              Github
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
