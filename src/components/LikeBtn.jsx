import React, { useState } from "react";

export default function LikeBtn() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <h1>{like}</h1>
      <h1
        onClick={() => {
          setLike((cur) => cur + 1);
        }}
      >
        {like >= 10 ? "😎" : "👍🏻"}
      </h1>
    </div>
  );
}
