import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(11);
  const [count1, setCount1] = useState(false);
  const [count2, setCount2] = useState(false);
  const [count3, setCount3] = useState(false);
  const [second, setSecond] = useState(4);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);
      if (count >= 8 && count <= 11) {
        setCount1(true);
        setCount2(false);
        setCount3(false);
        setSecond(count - 7);
      }
      if (count >= 6 && count <= 7) {
        setCount1(true);
        setCount2(true);
        setCount3(false);
        if (count >= 6 && count <= 7) {
          setSecond(count - 5);
        }
      }
      if (count >= 2 && count <= 5) {
        setCount1(false);
        setCount2(false);
        setCount3(true);
        setSecond(count - 1);
      }
      if (count === 2) {
        setCount(12);
      }
      setCount((prev) => prev - 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <div className="traffic-light">
        <div className={`time1 ${count1 ? "color1" : ""}`}></div>
        <div className={`time2 ${count2 ? "color2" : ""}`}></div>
        <div className={`time3 ${count3 ? "color3" : ""}`}></div>
      </div>
      <p
        style={{
          color:
            count + 1 >= 8 && count + 1 <= 11
              ? "#ff0000"
              : count + 1 >= 2 && count + 1 <= 5
              ? "#00ff00"
              : (count + 1 >= 6 && count + 1 <= 7) ||
                (count + 1 <= 1 && count + 1 >= 0)
              ? "#ffff00"
              : "",
          fontSize: "40px",
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
      >
        {second}
      </p>
    </div>
  );
}

export default App;
