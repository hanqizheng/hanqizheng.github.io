import React, { useCallback, useEffect, useState } from 'react';

import './Test.css';
import arrow from './arrow.svg'

const Test = ({
  height = 150,
  width = 150,
  spotColor = 'red',
}) => {
  const [hueDegree, setHueDegree] = useState(0);
  const [preHueDegree, setPreHueDegree] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    console.log(document.querySelector('#dragBar').getBoundingClientRect().y);
    setPreHueDegree(document.querySelector('#dragBar').getBoundingClientRect().y);
  }, []);

  const handleMouseEvent = (e) => {
    setIsMouseDown(e.type === 'mousedown')
  }

  const handleMouseMove = useCallback((e) => {
    if (isMouseDown) {
      const degOffset = e.clientY - preHueDegree;
      setPreHueDegree(e.clientY);
      if (hueDegree + degOffset >= 360) {
        setHueDegree(360);
        setIsMouseDown(false);
        return;
      }
      if (hueDegree + degOffset <= 0) {
        setHueDegree(0);
        setIsMouseDown(false);
        return;
      }
      setHueDegree(hueDegree + degOffset);
    }
  }, [preHueDegree, hueDegree, isMouseDown]);

  return (
    <div
      className="buttonBody"
      style={{ height, width }}
    >
      <img className="img" src={arrow} alt=""/>
      <div
        className="spot"
        style={{
          top: '20%',
          left: '15%',
          backgroundColor: spotColor,
        }}
      />
      <div
        className="spot1"
        style={{
          top: '60%',
          left: '10%',
          backgroundColor: spotColor,
        }}
      />
      <div
        className="spot3"
        style={{
          top: '20%',
          left: '50%',
          backgroundColor: spotColor,
        }}
      />
      <div id="dragBar" className="dragBar" onMouseMove={handleMouseMove}>
        <div
          id="dragSpot"
          className="dragSpot"
          style={{ top: hueDegree }}
          onMouseDown={handleMouseEvent}
          onMouseUp={handleMouseEvent}
          onMouseLeave={() => setIsMouseDown(false)}
        />
        <span className="dragText">{`${hueDegree}px`}</span>
      </div>
    </div>
  )
}

export default Test;