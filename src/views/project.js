import React, { useEffect } from "react";
import "../style/project.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Vimeo from "@u-wave/react-vimeo";
import GifPlayer from "react-gif-player";

const Project = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="project-container">
      <div className="project-content">
        <h2>{props.data.title}</h2>
        <p>{props.data.tag}</p>
        {props.data.img && (
          <div className=".project-img">
            <GifPlayer gif={props.data.img} still={props.data.still} />
          </div>
        )}
        {props.data.videourl && (
          <div className="gotvideo">
            <Vimeo responsive={true} video={props.data.videourl} />
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
