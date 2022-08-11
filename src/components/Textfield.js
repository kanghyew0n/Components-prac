import React, { useRef, useState } from "react";
import styled from "styled-components";

// input 창 입력되면 span 유지되도록! 해보기

const Textfield = ({ type, text }) => {
  const spanRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onFocus = () => {
    spanRef.current.style.top = "-5px";
    spanRef.current.style.left = "8px";
    spanRef.current.style.color = "#007fff";
    spanRef.current.style.fontSize = "12px";
  };

  const onBlur = (e) => {
    if (e.target.value) {
      spanRef.current.style.color = "#666";
      return;
    }
    spanRef.current.style.top = "30%";
    spanRef.current.style.left = "9px";
    spanRef.current.style.color = "#666";
    spanRef.current.style.fontSize = "14px";
  };

  return (
    <>
      <Input>
        <div className={["textfield", `textfield_${type}`].join(" ")}>
          <input onChange={handleChange} onFocus={onFocus} onBlur={onBlur} />
          <span ref={spanRef}>{text}</span>
        </div>
        <div className="inputValue">{inputValue}</div>
        {/* inputValue => 테스트용  */}
      </Input>
    </>
  );
};

export default Textfield;

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
    font-size: 14px;
    color: #666;
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

  /*테스트용*/
  .inputValue {
    background-color: lightyellow;
    padding: 10px;
    margin-top: 20px;
    height: 40px;
    font-size: 14px;
  }
`;
