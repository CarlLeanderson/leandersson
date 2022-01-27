import React, { useEffect, useState, useLayoutEffect } from "react";
import "../style/project.css";
import "aos/dist/aos.css";
import Aos from "aos";
import ReactPlayer from "react-player/lazy";
import GifPlayer from "react-gif-player";

const Project = (props) => {
  const [width] = useWindowSize();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function useWindowSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  return (
    <div data-aos="fade-up" className="project-container">
      <div className="project-content">
        <h2>{props.data.title}</h2>
        <p>{props.data.tag}</p>
        {props.data.img && (
          <div style={width <= 1100 ? { width: "100%" } : { width: "80%" }}>
            <GifPlayer gif={props.data.img} still={props.data.still} />
          </div>
        )}
        {props.data.videourl && (
          <div id="gotvideo-div" className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width={width <= 1100 ? "100%" : "80%"}
              height="100%"
              url={props.data.videourl}
              fallback={<></>}
              light={true}
            />
          </div>
        )}
      </div>
      <div className="project-info">
        <h3 className="h3">{props.data.title}</h3>
        <span className="">{props.data.type}</span>
        <p>{props.data.description}</p>
        <h4>What I did</h4>
        <ul className="">
          {props.data.techlist.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
        {props.data.links.length === 0 ? (
          ""
        ) : (
          <div>
            <h4>Links</h4>
            {props.data.links.map((x, index) => (
              <a key={index} href={x.link}>
                {x.linktitle}
                <br />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
