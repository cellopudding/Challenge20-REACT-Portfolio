import React from 'react';
import CelloPic from "../../images/CelloPic.png";
import "./home.css"

export default function Home() {
  return (
    <div className='cellopic' style={{backgroundImage:`url(${CelloPic})`}}>
      <div>
        <h1>Somethere here</h1>
      </div>
    </div>
  );
}
