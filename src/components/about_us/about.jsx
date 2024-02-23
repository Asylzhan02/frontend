import "./about.css";
import { useNavigate } from "react-router-dom";

const About = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">{props.about}</h2>

        <p className="bio-text">{props.main_texts}</p>

        <button className="button-text" onClick={() => navigate('/redactor/')}>{props.button_text}</button>
      </div>
    </div>
  );
};

export default About;
