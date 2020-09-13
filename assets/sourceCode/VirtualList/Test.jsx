import React, { useState, useEffect, useMemo } from 'react';

import { ROW_HEIGHT, BUFFER } from './constant';
import './test.css';

function mockData() {
  const tempData = [];
  for (let i = 0; i < 100; i++) {
    tempData.push({ label: `item${i}`, value: i });
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

  const startOffset = useMemo(() => {
    return ~~(currentTop / ROW_HEIGHT) * ROW_HEIGHT;
  }, [currentTop]);

  // 下偏移量，需要让总高度始终等于dataSource.length * rowHeight，要不然滚动条会异常
  const endOffset = useMemo(() => {
    return data.length * ROW_HEIGHT - startOffset - (endIndex - startIndex) * ROW_HEIGHT;
  }, [data, startOffset, startIndex, endIndex]);

  return (
    <div id="vt" className={"body"} onScroll={(e) => onScroll(e)}>
      <div style={{ paddingTop: startOffset }}></div>
      {showData.map((item) => (
        <dir
          className="item"
          style={{ backgroundColor: item.value % 2 === 0 ? '#cccccc' : '#f5f5f5' }}
          key={`${item.value}`}
        >
          {`${item.label}：${item.value}`}
        </dir>
      ))}
      <div style={{ paddingBottom: endOffset }}></div>
    </div>
  );
}
export default Test;