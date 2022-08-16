import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  expect(queryByTestId("convert")).toBeTruthy();
  expect(queryByPlaceholderText("Your number goes here")).toBeTruthy();
});

describe("Input value", () => {
  test("updates on change", () => {
    const { queryByPlaceholderText } = render(<App />);

    const convertInput = queryByPlaceholderText(
      "Your number goes here"
    ) as HTMLInputElement;

    fireEvent.change(convertInput!, { target: { value: "123" } });
    expect(convertInput!.value).toBe("123");
  });
});

test("convert 7", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  const convertInput = queryByPlaceholderText("Your number goes here");

  const convertBtn = queryByTestId("convert");

  const finalResult = queryByTestId("result");

  fireEvent.change(convertInput!, { target: { value: 7 } });

  fireEvent.click(convertBtn!);

  expect(finalResult!.innerHTML).toBe("seven");
});

test("convert 42", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  const convertInput = queryByPlaceholderText("Your number goes here");

  const convertBtn = queryByTestId("convert");

  const finalResult = queryByTestId("result");

  fireEvent.change(convertInput!, { target: { value: 42 } });

  fireEvent.click(convertBtn!);

  expect(finalResult!.innerHTML).toBe("forty-two");
});

test("convert 1999", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  const convertInput = queryByPlaceholderText("Your number goes here");

  const convertBtn = queryByTestId("convert");

  const finalResult = queryByTestId("result");

  fireEvent.change(convertInput!, { target: { value: 1999 } });

  fireEvent.click(convertBtn!);

  expect(finalResult!.innerHTML).toBe(
    "one thousand nine hundred and ninety-nine"
  );
});

test("convert 2001", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  const convertInput = queryByPlaceholderText("Your number goes here");

  const convertBtn = queryByTestId("convert");

  const finalResult = queryByTestId("result");

  fireEvent.change(convertInput!, { target: { value: 2001 } });

  fireEvent.click(convertBtn!);

  expect(finalResult!.innerHTML).toBe("two thousand and one");
});

test("convert 17999", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  const convertInput = queryByPlaceholderText("Your number goes here");

  const convertBtn = queryByTestId("convert");

  const finalResult = queryByTestId("result");

  fireEvent.change(convertInput!, { target: { value: 17999 } });

  fireEvent.click(convertBtn!);

  expect(finalResult!.innerHTML).toBe(
    "seventeen thousand nine hundred and ninety-nine"
  );
});

test("convert 100001", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  const convertInput = queryByPlaceholderText("Your number goes here");

  const convertBtn = queryByTestId("convert");

  const finalResult = queryByTestId("result");

  fireEvent.change(convertInput!, { target: { value: 100001 } });

  fireEvent.click(convertBtn!);

  expect(finalResult!.innerHTML).toBe("one hundred thousand and one");
});

test("convert 342251", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<App />);

  const convertInput = queryByPlaceholderText("Your number goes here");

  const convertBtn = queryByTestId("convert");

  const finalResult = queryByTestId("result");

  fireEvent.change(convertInput!, { target: { value: 342251 } });

  fireEvent.click(convertBtn!);

  expect(finalResult!.innerHTML).toBe(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );
});
