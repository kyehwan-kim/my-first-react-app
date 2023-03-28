import React from "react";
import ListChild from "./ListChild";
import Modal from "./Modal";

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      content: "state 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      content: "Lv0 정복하기!",
    },
    {
      title: "한강 놀러가기",
      content: "놀러가서 경품타기",
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <Modal />
      {dataArr.map((el, index) => {
        return <ListChild title={el.title} content={el.content} key={index} />;
      })}
      ;
      <Modal />
    </div>
  );
}
