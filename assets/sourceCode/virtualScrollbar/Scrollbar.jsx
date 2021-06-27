import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';

import "./scrollbar.css"

const Scrollbar = ({
  scrollbarContainerHeight,
  scrollbarRealHeight,
  topOffset,
  handleScrollTo,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startDragPosition, setStartDragPosition] = useState(0);
  const [startDragOffset, setStartDragOffset] = useState(0);

  let timeoutRef = useRef();

  const handleMouseUp = useCallback(() => {
    if (isMouseDown) {
      setIsMouseDown(false);
    }
  }, [isMouseDown]);

  const handleMouseMove = useCallback((e) => {
    if (isMouseDown) {
      const $Element = document.getElementById('scrollbar-dragger-container');
      if ($Element) {
        let tempOffset = 0;
        tempOffset = e.pageY - startDragPosition;
        // 在根据比例关系计算出应该在纵向top偏移多少
        let tempScrollTop =
          (tempOffset * scrollbarRealHeight) / scrollbarContainerHeight;
        // dragger的实际偏移量 = 拖拽产生的偏移量 + 原本dragger的偏移量
        tempScrollTop += startDragOffset;
        if (tempScrollTop < 0) {
          tempScrollTop = 0;
        }
        // TODO: 说实话是算出来的，不知道为什么减的正好是一个container的高度
        if (tempScrollTop > scrollbarRealHeight - scrollbarContainerHeight) {
          tempScrollTop = scrollbarRealHeight - scrollbarContainerHeight;
        }
        // 记得加上已有的纵向偏移
        handleScrollTo(tempScrollTop);
      }
    }
  }, [isMouseDown, handleScrollTo, scrollbarRealHeight, startDragOffset, startDragPosition, scrollbarContainerHeight]);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseUp, handleMouseMove]);

  useEffect(() => {
    setIsShow(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsShow(false);
    }, 1000);
  }, [topOffset]);

  const draggerHeight = useMemo(() => {
    /**
     *  scrollbarContainerHeight                 x
     *  ------------------------   =   ----------------------
     *   scrollbarRealHeight          scrollbarContainerHeight
     */
    return Math.pow(scrollbarContainerHeight, 2) / scrollbarRealHeight;
  }, [scrollbarContainerHeight, scrollbarRealHeight]);

  const draggerTop = useMemo(() => {
    /**
     *             x                      currentTopOffset
     *  -----------------------     =   --------------------
     *  scrollbarContainerHeight        scrollbarRealHeight
     */
    return (topOffset * scrollbarContainerHeight) / scrollbarRealHeight;
  }, [topOffset, scrollbarContainerHeight, scrollbarRealHeight]);

  const handleMouseOutScrollbar = () => {
    if (!isMouseDown) {
      setIsHover(false);
    }
  }

  const handleMouseDown = (e) => {
    setStartDragOffset(topOffset);
    setStartDragPosition(e.pageY);
    setIsMouseDown(true);
  }

  return (
    <div
      className="scrollbar-viewer"
      style={{ height: scrollbarContainerHeight }}
    >
      <div
        id="scrollbar-dragger-container"
        className="scrollbar-container"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={handleMouseOutScrollbar}
      >
        <div
          className={classNames("scrollbar-dragger", {
            "scrollbar-dragger-show": isShow,
            "scrollbar-dragger-show-hover": isHover,
          })}
          style={{ height: draggerHeight, top: draggerTop }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
}

export default Scrollbar;
