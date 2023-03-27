function Inline() {
  const styleObj = { fontSize: "32px", backgroundColor: "orange" };
  // JSX 문법을 시작한다는 {} 와 그 안에 객체 타입으로 전달을 해야하기 때문에 JS를 선어하는 {}안에 요소들을 작성
  return <div style={styleObj}>Inline Style</div>;
}

export default Inline;
