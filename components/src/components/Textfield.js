import React, { useRef } from "react";
import styled from "styled-components";

const Input = styled.div`
  padding: 10px;
  margin: 20px;

  .textfield {
    position: relative;
  }

  .textfield > input {
    border: none;
    padding: 16px 14px;
  }
  .textfield > input:focus {
    outline: none;
  }

  input::placeholder {
    font-size: 16px;
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }

  span {
    position: absolute;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
    color: #007fff;
    opacity: 0;
    transition: all 0.35s;
    top: 30%;
    left: 9px;
  }

  /* outline */
  .textfield_outlined > input {
    border: 1px solid #666;
    border-radius: 5px;
  }
  .textfield_outlined > input:focus {
    box-sizing: border-box;
    border: 2px solid #007fff;
  }
  .textfield_outlined > span {
    /* top: -8px;
    left: 10px; */
    background-color: #fff;
  }

  /* standard */
  .textfield_standard > input {
    border-bottom: 1px solid #666;
  }
  .textfield_standard > input:focus {
    border-bottom: 2px solid #007fff;
  }

  /* filled */
  .textfield_filled > input {
    border-bottom: 1px solid #666;
    background-color: #f7f7f7;
  }
  .textfield_filled > input:focus {
    border-bottom: 2px solid #007fff;
  }
`;

const Textfield = ({ type, text }) => {
  const spanRef = useRef(null);
  const onFocus = () => {
    spanRef.current.style.opacity = 1;
    spanRef.current.style.top = "-5px";
    spanRef.current.style.left = "8px";
  };

  const onBlur = () => {
    spanRef.current.style.opacity = 0;
    spanRef.current.style.top = "30%";
    spanRef.current.style.left = "9px";
  };
  return (
    <Input>
      <div className={["textfield", `textfield_${type}`].join(" ")}>
        <input placeholder={text} onFocus={onFocus} onBlur={onBlur} />
        <span ref={spanRef}>{text}</span>
      </div>
    </Input>
  );
};

export default Textfield;
