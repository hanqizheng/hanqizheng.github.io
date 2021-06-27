import React, { useState, useCallback } from 'react';
import Scrollbar from './Scrollbar';


import "./TestBody.css";

function App() {
  const [topOffset, setTopOffset] = useState(0);
  const testData = new Array(50).fill('item');


  const handleScroll = (e) => {
    setTopOffset(e.target.scrollTop);
  }

  const handleScrollTo = useCallback((offset) => {
    const $Element = document.querySelector('#testContainer');
    if ($Element) {
      $Element.scrollTop = offset;
    }
  }, []);

  return (
    <div className="container">
      <div id="testContainer" className="testContainer" onScroll={handleScroll}>
        <Scrollbar
          topOffset={topOffset}
          scrollbarContainerHeight={300}
          scrollbarRealHeight={50 * 50}
          handleScrollTo={handleScrollTo}
        />
        <div className="testBody">
          {testData.map((item, index) => (
            <div key={index} className="testItem">{`${item} - ${index}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
