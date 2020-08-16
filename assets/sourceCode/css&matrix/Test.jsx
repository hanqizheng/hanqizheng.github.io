import React, { useState } from 'react';
import "./test.css";

const Test = () => {

  const [matrix1, setMatrix1] = useState([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ])
  const [matrix2, setMatrix2] = useState([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ])
  const [matrix3, setMatrix3] = useState([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ])

  const getRandomAngle = (start, end) => {
    return Math.floor(Math.random() * (end - start) + start) / 10;

  }


  const mouseHoverIn = () => {
    const random1 = getRandomAngle(1, 4);
    const random2 = getRandomAngle(1, 4);
    const random3 = getRandomAngle(1, 4);

    const temp1 = [
      Math.cos(random1), -Math.sin(random1), 0, 0,
      Math.sin(random1), Math.cos(random1), 0, 0,
      0, 0, 1, 0,
      0, 0, 60, 1
    ];
    const temp2 = [
      Math.cos(random2), -Math.sin(random2), 0, 0,
      Math.sin(random2), Math.cos(random2), 0, 0,
      0, 0, 1, 0,
      0, 0, 120, 1
    ];
    const temp3 = [
      Math.cos(random3), -Math.sin(random3), 0, 0,
      Math.sin(random3), Math.cos(random3), 0, 0,
      0, 0, 1, 0,
      0, 0, 180, 1
    ];

    setMatrix1(temp1);
    setMatrix2(temp2);
    setMatrix3(temp3);
  }

  const mouseHoverOut = () => {
    const temp = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]
    setMatrix1([...temp]);
    setMatrix2([...temp]);
    setMatrix3([...temp]);
  }

  return (
    <div className="body">
      <div
        className="cardGroup"
        onMouseEnter={mouseHoverIn}
        onMouseOut={mouseHoverOut}
      >
        <div className="item"
          style={{
            backgroundColor: '#a3daac',
            transform: `matrix3d(${matrix1})`,
          }}
        ></div>

        <div className="item"
          style={{
            backgroundColor: '#9edff3',
            transform: `matrix3d(${matrix2})`,
          }}
        ></div>
        <div className="item"
          style={{
            backgroundColor: '#f3ed9e',
            transform: `matrix3d(${matrix3})`,
          }}
        ></div>

      </div>
    </div>
  );
}

export default Test;