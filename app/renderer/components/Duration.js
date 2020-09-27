import React from 'react';

export default function Duration({ className, seconds, showMs }) {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds, showMs)}
    </time>
  );
}

function format(seconds, showMs) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (showMs) {
    const ms = invpad(date.getUTCMilliseconds());
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}:${ms}`;
    }
    return `${mm}:${ss}:${ms}`;
  } else {
    console.log("ok:"+`${hh}:${pad(mm)}:${ss}`)
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  }
}

function pad(string) {
  return ('0' + string).slice(-2);
}

function invpad(string) {
  return (string + '0').slice(0, 2);
}
