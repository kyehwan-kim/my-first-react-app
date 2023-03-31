import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return '망했어요';

    const data = await resFetch.json();
    console.log(data);
    // 화살표 뒤에 중가로{}가 없다는 것은 리턴 값이 붙어 있다는 의미
    setDataArr((cur) => data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={el.name}
          />
        );
      })}
    </>
  );
}
