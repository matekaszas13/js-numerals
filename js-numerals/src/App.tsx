import { useState } from "react";

function App() {
  const ones: string[] = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const tens: string[] = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const [inputValue, setInputValue] = useState<number>();

  function convert(number: number) {
    console.log(ones[number]);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(parseInt(event.target.value))}
      />
      <button onClick={() => convert(inputValue!)}>convert</button>
    </div>
  );
}

export default App;
