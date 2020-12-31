import React from "react";
import Sdata from "./Sdata";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt="myPic" className="card__image" />
      <div className="card__info">
        <span>{props.title}</span>
        <h4>{props.sName}</h4>
        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <div className="cards">
      {Sdata.map((value, index) => {
        return (
          <Card
            imgSrc={value.imgSrc}
            title={value.title}
            sName={value.sName}
            link={value.link}
          />
        );
      })}
    </div>
  );
}
