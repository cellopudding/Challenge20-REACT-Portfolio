import React from 'react';
import CelloPic from "../../images/CelloPic.png";
import "./home.css"

export default function Home() {
  return (
    <div className='cellopic' style={{backgroundImage:`url(${CelloPic})`}}>
      <div>
        <h1>Lonnie Root</h1>
        <h3>Musican, Full Stack Developer. Welcome to my page.</h3>
      </div>
    </div>
  );
}
