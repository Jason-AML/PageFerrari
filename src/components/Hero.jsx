import video from "../assets/videoFerrari.mp4";
import "../components/Hero.css";
export const Hero = ({ title, content }) => {
  return (
    <section className="hero">
      <video src={video} autoPlay muted loop></video>
      <div className="hero-content d-flex">
        <a className="hero-link" href="#">
          <i className="bxr  bx-arrow-right-stroke-square"></i>
        </a>
        <div className="hero-text">
          <h1 className="title">{title}</h1>
          <p className="content">{content}</p>
        </div>
      </div>
    </section>
  );
};
