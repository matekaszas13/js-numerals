import { useState } from "react";
import "./App.css";

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

  const [inputValue, setInputValue] = useState<string>("");

  const [finalResult, setFinalResult] = useState<string>("");

  function convertThousands(number: number): string {
    if (number >= 1000) {
      return (
        convertHundreds(Math.floor(number / 1000)) +
        " thousand " +
        convertHundreds(number % 1000)
      );
    } else {
      return convertHundreds(number);
    }
  }

  function convertHundreds(number: number): string {
    if (number > 99) {
      return (
        ones[Math.floor(number / 100)] + " hundred " + convertTens(number % 100)
      );
    } else {
      return convertTens(number);
    }
  }

  function convertTens(number: number): string {
    if (number < 10) {
      return ones[number];
    } else if (number >= 10 && number < 20) {
      return teens[number - 10];
    } else if (number % 10 !== 0) {
      return (
        tens[Math.floor(number / 10)] + "-" + ones[Math.floor(number % 10)]
      );
    } else {
      return tens[Math.floor(number / 10)];
    }
  }

  function convert(number: number): string {
    if (number === 0) {
      return "zero";
    } else {
      return convertThousands(number);
    }
  }

  function addAndWordAfterHundreds(): string {
    const inputValueAsNumber: number = parseInt(inputValue!);
    let strArr: string[] = convert(inputValueAsNumber).split(" ");
    let result = strArr.filter((e) => e);
    if (inputValueAsNumber > 100 && inputValueAsNumber % 2 !== 0) {
      result.splice(result.length - 1, 0, "and");
    }
    for (let index: number = 0; index < result.length; index++) {
      if (
        result[index] === "hundred" &&
        result[index + 1] !== "thousand" &&
        result[index + 1] !== "and" &&
        index !== result.length - 1
      ) {
        result.splice(index + 1, 0, "and");
      }
    }
    return result.join(" ");
  }

  return (
    <div>
      <div className="header">
        <h2>
          Convert your number into it's textual representation between 0-999999
        </h2>
      </div>

      <div className="main">
        <input
          className="convertInput"
          data-testid="input"
          type="text"
          value={inputValue}
          placeholder="Your number goes here"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="convertBtn"
          data-testid="convert"
          onClick={() => {
            if (!isNaN(+inputValue) && parseInt(inputValue) < 1000000) {
              setFinalResult(addAndWordAfterHundreds());
              addAndWordAfterHundreds();
              setInputValue("");
            } else {
              alert("Please provide a valid number between 0 and 999999");
              setInputValue("");
            }
          }}
        >
          convert
        </button>
      </div>
      <div className="result">
        <span data-testid="result" style={{ marginLeft: 30 }}>
          {finalResult}
        </span>
      </div>
    </div>
  );
}

export default App;
