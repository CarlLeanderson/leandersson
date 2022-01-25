import React, { useEffect } from "react";
import "../style/project.css";
import ReactPlayer from "react-player";
import "aos/dist/aos.css";
import Aos from "aos";
import Vimeo from "@u-wave/react-vimeo";

const Project = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="project-container">
      <div className="project-content">
        <h2>{props.props.title}</h2>
        <p>{props.props.tag}</p>

        {props.props.videourl !== "" ? (
          <div className="gotvideo">
            <Vimeo responsive={true} video={props.props.videourl} autoplay />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="project-info">
        <h3 className="h3">{props.props.title}</h3>
        <span className="text-muted">{props.props.type}</span>
        <p>{props.props.description}</p>
        <h4>What I did</h4>
        <ul className="list-unstyled list-line mb-5">
          {props.props.techlist.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
        {props.props.links.length === 0 ? (
          ""
        ) : (
          <div>
            <h4>Links</h4>
            {props.props.links.map((x) => (
              <a href={x.link}>{x.linktitle}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
