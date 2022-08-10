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

  const teens: string[] = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const [inputValue, setInputValue] = useState<number>();

  function convertHundreds(number: number): string {
    if(number > 99){
      return ones[Math.floor(number / 100)] + " hundred and " + convertTens(number % 100);
    } else {
      return convertTens(number);
    }
  }

  function convertTens(number: number): string {
    if (number < 10) {
      return ones[number];
    } else if (number > 10 && number < 20) {
      return teens[number - 10];
    } else {
      return (
        tens[Math.floor(number / 10)] + "-" + ones[Math.floor(number % 10)]
      );
    }
  }

  function convert(number: number): string {
    if (number === 0) {
      return "zero";
    } else {
      return convertHundreds(number);
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(parseInt(event.target.value))}
      />
      <button onClick={() => console.log(convert(inputValue!))}>convert</button>
    </div>
  );
}

export default App;
