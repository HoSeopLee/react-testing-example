import React, { useEffect, useState, useRef } from 'react';

const BUTTON_TEXT = {
  NORMAL: '버튼이 눌려지지 않았다.',
  CLICKED: '버튼이 방금 눌렸다.',
};

const Button = () => {
  const [message, setMessage] = useState('버튼이 눌려지지 않았다.');
  const timer = useRef();
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);
  const click = () => {
    setMessage(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMessage(BUTTON_TEXT.NORMAL);
    }, 5000);
  };
  return (
    <div>
      <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>
        button
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Button;
