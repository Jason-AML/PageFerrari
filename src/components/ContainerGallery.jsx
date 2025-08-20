import "./Gallery.css";
import { useEffect, useRef } from "react";
import {
  animate,
  scroll,
} from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";
export const ContainerGallery = ({ items }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const itemsDOM = containerRef.current.querySelectorAll(".img-container");

    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-${(itemsDOM.length - 1) * 100}vw)`],
      }),
      { target: containerRef.current }
    );
  }, []);
  return (
    <>
      <section className="img-group-container" ref={containerRef}>
        <div>
          <ul className="img-group">
            {items.map(({ image, number, text, autor }, index) => (
              <li className="img-container" key={index}>
                <div className="slide">
                  <img src={image} alt={`Slide ${number}`} />
                  <h3>{number}</h3>
                </div>
                <div className="slide-info">
                  <p className="img-description">
                    {text}
                    <br />
                    {autor && <em>{autor}</em>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
