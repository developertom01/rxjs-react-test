import "./styles.css";
import { from } from "rxjs";
import { useEffect, useState } from "react";

export default function App() {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    const numbers$ = from([0, 1, 2, 3, 4, 5]);

    const nums = [];
    numbers$.subscribe((res) => {
      nums.push(res);
    });
    setNumbers(nums);
  }, []);
  return (
    <div className="App">
      <h1>
        {numbers.map((e) => (
          <p>{e} </p>
        ))}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
