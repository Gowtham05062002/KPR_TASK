import React from 'react';
import data from '../data';
import Card from './Card';
import './style/horscroll.css';

const HorScroll = () => {
  return (
    <>
      {data.store.map(info => (
        <div className="horScrolls" key={info.category}>
          <h2 style={{textAlign:'center',textTransform:'capitalize'}}>GENRE : {info.category}</h2>
          <div className="scroll-wrapper">
            <Card category={info.category} />
          </div>
        </div>
      ))}
    </>
  );
};

export default HorScroll;
