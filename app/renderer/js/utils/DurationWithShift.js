import React from 'react';
import Duration from './Duration';

const DurationWithShift = (props) => {
  let seconds = props.seconds;
  let showMs = props.showMs;
  let shift = props.shift;
  let newTime = seconds - shift;
  let sign = newTime >= 0 ? "+" : "-";
  return (<div>{sign} <Duration seconds={Math.abs(newTime)} showMs={showMs} /></div>);
}

const timeWithShift = (time,shift) => {
  return time - shift;
}

module.exports = {
  DurationWithShift,
  timeWithShift,
};
