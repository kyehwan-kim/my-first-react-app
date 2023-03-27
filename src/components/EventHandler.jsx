function EventHandler() {
  function alertFunc() {
    alert("클릭됨!");
  }
  return (
    <div>
      <span onClick={alertFunc}>클릭1!</span>;
      <span
        onClick={() => {
          alert("클릭됨!");
        }}
      >
        클릭2!
      </span>
      ;
      <span
        onClick={() => {
          let num = 10;
          num += 5;
          console.log(num);
        }}
      >
        숫자계산
      </span>
      ;
    </div>
  );
}

export default EventHandler;
