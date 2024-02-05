import "./About.css";
import image from "./IMG_2959-01.jpeg";
function About() {
  return (
    <div className="head1">
      <h1>About me</h1>
      <h4>My Introduction</h4>

      <div className="about-img-text">
        <img className="about-img" src={image} alt=".."></img>
        <div className="about-text">
          <p>I belong to Rudrapur city, Uttarakhand.</p>
          <p> The city is what we say a blend</p>
          <p>
            of industrial and agricultural land. I have completed my schooling
            from
          </p>
          <p>
            Rudrapur itself and I am pursuing Bachelor's in Computer Science and{" "}
          </p>
          <p> Engineering, from Graphic Era University, Dehradun.</p>
          <p>I am a passionate coder and a web developer.</p>
          <p>Apart from this I am an AI/ML enthusiast.</p>
        </div>
      </div>
    </div>
  );
}
export default About;
