import React, { useState, useEffect } from 'react';

const handler = (moviesData, setItemsToAdd) => {
  const handleNumberPerLine = () => {
    // console.log('INNER');
    // console.log(window.innerWidth);
    const number = Math.floor((window.innerWidth - 20) / 170);
    const lastLineItems = moviesData.length % number;
    // console.log('length:', moviesData.length);
    // console.log('numberperline:', number);
    // console.log('to add', number - lastLineItems);
    setItemsToAdd(lastLineItems === 0 ? 0 : number - lastLineItems);
  };

  useEffect(() => {
    handleNumberPerLine();
  }, [moviesData]);
};

module.exports = {
  handler,
};
