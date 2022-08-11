import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import styled from "styled-components";

const steps = [
  {
    id: "1",
    message: "제가 생각한 숫자가 무엇일까요오~?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "숫자 1", trigger: "4" },
      { value: 2, label: "숫자 2", trigger: "3" },
      { value: 3, label: "숫자 3", trigger: "3" },
    ],
  },
  {
    id: "3",
    message: "틀렸습니다🙅🏻 다시 도전하세요!",
    trigger: "2",
  },
  {
    id: "4",
    message: "맞았어요~! 똑똑이~!🎉",
    end: true,
  },
];

const BOT_URL =
  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72";
const USER_URL =
  "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6567875f017800001.png?type=thumb&opt=C72x72";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Bot>
      <div className={`chatbot ${isOpen ? "isOpen" : ""}`}>
        <ChatBot
          steps={steps}
          botAvatar={BOT_URL}
          userAvatar={USER_URL}
          headerTitle={"kanghyew0n"}
        />
      </div>

      <a className={`chatBtn ${isOpen ? "smallBtn" : ""}`} onClick={handleOpen}>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
        </svg>
      </a>
    </Bot>
  );
};

export default Chat;

const Bot = styled.div`
  .chatbot {
    position: absolute;
    bottom: 64px;
    right: 64px;
    transform: scale(0);
    transform-origin: right bottom;
    transition: transform 0.3s ease 0s;
    z-index: 200;
    .rsc-container {
      background: #fff;
    }
    .rsc-header {
      background: rgba(252, 252, 252, 0.8);
      color: #999;
      padding-left: 20px;
    }
    /* .rsc-ts-image-container {
      background: transparent;
      box-shadow: none;
    }
    .rsc-ts-image {
      width: 24px;
      height: 24px;
    } */
    .rsc-ts-bot .rsc-ts-bubble {
      background: rgba(0, 0, 0, 0.05);
      color: #000;
    }
    .rsc-ts-bubble {
      border-radius: 10px;
      font-weight: 500;
      max-width: 100%;
    }
    .vmYlS.rsc-ts-image-container {
      box-shadow: none;
    }
    .rsc-os {
      display: flex;
      justify-content: space-around;
      text-align: center;
    }
    .rsc-os-option-element {
      background-color: #fff;
      border: 1px solid #ddd;
      color: #666;
      box-shadow: none;
    }
  }

  .isOpen {
    transform: scale(1);
  }
  .chatBtn {
    height: 56px;
    width: 56px;

    position: fixed;
    right: 32px;
    bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #007fff;
    border-radius: 100%;
    box-shadow: rgb(0 0 0 / 15%) 0px 12px 24px 0px;
    fill: rgb(255, 255, 255);

    transform: scale(1);
    transform-origin: right bottom;
    transition: transform 0.3s ease 0s;
    z-index: 100;
    cursor: pointer;
  }

  .smallBtn {
    transform: scale(0.5);
    fill: #007fff;
  }
`;
