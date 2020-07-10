import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const InfiniteScroll = (myRef, callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const component = ReactDOM.findDOMNode(myRef.current);
    // console.log(component);
    component.addEventListener('scroll', handleScroll);
    return () => component.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // console.log('okokok');
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {
    const component = ReactDOM.findDOMNode(myRef.current);
    // console.log('On scroll');
    // console.log(component.scrollHeight);
    // console.log(component.scrollTop);
    // console.log(component.clientHeight);
    // console.log(component.offsetHeight);
    // console.log(window.pageYOffset);
    // console.log(window.innerHeight);
    // console.log(component.getBoundingClientRect().bottom);
    if (component.scrollHeight != component.scrollTop + component.clientHeight || isFetching)
      return;
    // console.log('On va ici');
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default InfiniteScroll;
