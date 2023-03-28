import React from "react";
import ChangeObj from "./ChangeObj";

export default function ExChangeObj() {
  const pororoArr = [
    {
      name: "뽀로로",
      age: "5",
      nickNmae: "사고뭉치",
    },
    {
      name: "루피",
      age: "4",
      nickNmae: "공주님",
    },
    {
      name: "크롱이",
      age: "5",
      nickNmae: "장난꾸러기",
    },
  ];
  return (
    <div>
      <ChangeObj objArr={pororoArr} />
    </div>
  );
}
