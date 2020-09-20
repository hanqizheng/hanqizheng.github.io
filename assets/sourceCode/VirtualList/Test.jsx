import React, { useState, useEffect, useMemo } from 'react';

import { ROW_HEIGHT, BUFFER } from './constant';
// import './test.css';

// step 4
import './test2.css';

function mockData() {
  const tempData = [];
  for (let i = 0; i < 1000; i++) {
    tempData.push({
      label: `item${i}`,
      value: i,
      color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
  }
  return tempData;
}

const Test = () => {
  const [data] = useState(mockData());
  const [currentTop, setCurrentTop] = useState(0);
  const [rowCount, setRowCount] = useState(0); // 需要渲染的DOM量

  const onScroll = (e) => {
    const { scrollTop } = e.target;

    window.requestAnimationFrame(() => {
      setCurrentTop(scrollTop);
    });
  };

  // 算需要展示的元素个数
  useEffect(() => {
    const ele = document.getElementById('vt');
    const vtStyle = window.getComputedStyle(ele);

    const tempRowCount =
      Math.ceil(Number(/[0-9]*(?=px)/.exec(vtStyle.height)[0]) / ROW_HEIGHT) + BUFFER;
    setRowCount(tempRowCount);
  }, []);

  // 算展示元素的起始位置
  const startIndex = useMemo(() => {
    return ~~(currentTop / ROW_HEIGHT);
  }, [currentTop]);

  // 算展示元素的终止位置
  const endIndex = useMemo(() => {
    return startIndex + rowCount;
  }, [startIndex, rowCount]);

  // 根据起始终止位置截取要显示的数据
  const showData = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [startIndex, endIndex, data]);

  return (
    <div
      id="vt"
      className="body"
      onScroll={(e) => onScroll(e)}
    >
      <div className="bodyContainer" style={{ height: data.length * ROW_HEIGHT }}>
        {showData.map((item) => (
          <div
            className="item"
            style={{ backgroundColor: item.color, top: item.value * ROW_HEIGHT }}
            key={`${item.value}`}
          >
            {`${item.label}：${item.value}`}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Test;