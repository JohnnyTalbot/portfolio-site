import React from 'react';

interface MyComponentProps{
  size: number;
}

function Line({size}: MyComponentProps) {
  return (
    size == 1 ? 
      <svg width="336px" height="9px" viewBox="0 0 336 9" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{
        flexShrink: 0,
      }}>
        <line x1="14.5478" y1="1.72463" x2="335.686" y2="1.72463" stroke="#1C1C1C" strokeWidth="3"/>
        <line y1="6.73026" x2="321.138" y2="6.73026" stroke="#404040" strokeWidth="3"/>
      </svg>
    : size == 2 ?
    <svg width="283px" height="9px" viewBox="0 0 283 9" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{
      flexShrink: 0,
    }}>
      <line x1="13.2951" y1="2.0514" x2="282.295" y2="2.0514" stroke="#1C1C1C" strokeWidth="3"/>
      <line x1="0.504761" y1="7.10075" x2="269.505" y2="7.10075" stroke="#404040" strokeWidth="3"/>
    </svg>
    : size == 3 ?
    <svg width="135px" height="8px" viewBox="0 0 135 8" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{
      flexShrink: 0,
    }}>
      <line x1="11.6859" y1="1.49391" x2="134.686" y2="1.49391" stroke="#1C1C1C" strokeWidth="3"/>
      <line x1="0.687912" y1="6.49834" x2="123.688" y2="6.49834" stroke="#404040" strokeWidth="3"/>
    </svg>
    :
    <svg width="63px" height="9px" viewBox="0 0 63 9" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{
      flexShrink: 0,
    }}>
      <line x1="9.68549" y1="2.43915" x2="62.6855" y2="2.43915" stroke="#1C1C1C" strokeWidth="3"/>
      <line x1="0.6875" y1="7.44237" x2="53.6875" y2="7.44237" stroke="#404040" strokeWidth="3"/>
    </svg>
  )
}

export default Line
