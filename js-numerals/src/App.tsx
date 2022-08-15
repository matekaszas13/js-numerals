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
    let strArr: string[] = convert(inputValue!).split(" ");
    let result = strArr.filter((e) => e);
    result.splice(result.length - 1, 0, "and");
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
      <input
        type="text"
        onChange={(event) => setInputValue(parseInt(event.target.value))}
      />
      <button
        onClick={() => {
          setFinalResult(addAndWordAfterHundreds());
          addAndWordAfterHundreds();
        }}
      >
        convert
      </button>
      <span style={{ marginLeft: 30 }}>{finalResult}</span>
    </div>
  );
}

export default App;
