import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
const ReactDOM = require('react-dom');

const NavBar = (props) =>{
  const barWidth = props.barWidth;
  const barHeight = props.barHeight;
  const max = props.max;
  const current = props.current;
  const setCurrent = props.setCurrent;
  const formatter = props.formatter;
  const additionalBars = props.additionalBars;
  const color = props.color;

  const ref = useRef(null);
  const [move, setMove] = useState(false);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);
  const [inside, setInside] = useState(false);
  const [posX, setPosX] = useState("0");
  const [mainBarX, setMainBarX] = useState(null);
  const [mainBarY, setMainBarY] = useState(null);

  const changeCurrentBarSize = (e) => {
    let width = computePos(e);
    setCurrent(computePercentage(width));
    setWidth(computePos(e));
  }

  useEffect(() => {
    setWidth(dataToWidth(current));
  },[current]);

  useEffect(() => {
    const domNode1 = ReactDOM.findDOMNode(ref.current);
    setMainBarX(domNode1.getBoundingClientRect().left);
    setMainBarY(domNode1.getBoundingClientRect().top);
  });

  const dataToWidth = (data) => {
    return data*barWidth/max;
  }

  const computePercentage = (currentWidth) => {
    return (currentWidth/barWidth)*max;
  }

  const computePos = (e) => {
    const cursorX = e.pageX;
    let newPos;
    if (cursorX){
      if (cursorX - mainBarX < 0){
        newPos = 0;
      }
      else if(cursorX - mainBarX > barWidth){
        newPos = barWidth;
      }
      else{
        newPos = cursorX - mainBarX;
      }
      return newPos;
    }
    else{
      return "0";
    }
  }

  const changeIndicatorInfos = (e) => {
    setPosX(computePos(e));
  }

  const handleMouseEnter = (e) => {
    //console.log("handleEnter");
    setActive(true);
    setInside(true);
  };

  const handleMouseLeave = (e) => {
    //console.log("handleLeave");
    setInside(false);
    if (!down){
      setActive(false);
    }
  };

  const handleDown= (e) => {
    //console.log("handleDown");
    setDown(true);
  };

  const handleUp = (e) => {
    setUp(e);
  };

  const handleMove = (e) => {
    setMove(e);
  };

  useEffect(() => {
    if (down){
      changeCurrentBarSize(move)
    }
  }, [down]);

  useEffect(() => {
    setDown(false);
    if(!inside){
      setActive(false);
    }
  }, [up]);

  useEffect(() => {
    //console.log("handleMove:",active)

    if (mainBarY-move.pageY > 15 && !down){
      setInside(false);
      setActive(false);
    }
    if (active){
      changeIndicatorInfos(move);
    }
    if (down){
      changeCurrentBarSize(move)
    }

  }, [move]);

  useEffect(() => {
    window.addEventListener('mouseup', handleUp);
    return () => window.removeEventListener("mouseup", handleUp);
  }, []);


  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const Indicator =  () => {
    return ( active ?
      <MainPositionIndicator style={{left:posX}}>
        {formatter(computePercentage(posX))}
      </MainPositionIndicator> : null);
  }

  const Cursor =  () => {
    return ( active ?
      <MainPositionCursor barHeight={barHeight} style={{left:width-10}} />: null);
  }

  const MainNavBar = () => {
    return (
      <NavBarStyle style={{background:color,width:width,zIndex:10}}/>
    );
  }

  const AdditionalNavBars = () => {
    return (
      additionalBars.map((data,key) => {
        return ( <NavBarStyle key={key} style={{background:data.color,width:dataToWidth(data.current),zIndex:5}}/>);
      })
    );
  }

  let preparedComponent =
    <NavBarContainerStyle
      onMouseDown={handleDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <NavBarBackStyle
        barHeight={barHeight}
        active={active}
        style={{width:barWidth}}>
        <Indicator />
        <Cursor />
        <MainNavBar/>
        <AdditionalNavBars />
      </NavBarBackStyle>
    </NavBarContainerStyle>

  return (preparedComponent)
};

const MainPositionCursor = styled.div`
  position: absolute;
  bottom: ${props => props.barHeight - 10}px;
  background-color: var(--title-background);
  color: var(--background-primary);
  padding: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 20;
`;

const MainPositionIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  background-color: var(--title-background);
  color: var(--background-primary);
  padding: 5px;
  font-size: 10px;
  border-radius: 4px;
  transform: translate(-50%);
`;

const NavBarContainerStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 30px;
  justify-content: center;
  z-index: 50;
`;

const NavBarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 4px;
`;

const NavBarBackStyle = styled.div`
  position: relative;
  height:${props => props.active ? props.barHeight*2 : props.barHeight}px;
  background-color: var(--text-intermediate);
  display: flex;
  border-radius: 4px;
`;

export default NavBar;
