import React from "react";
import "./Calculator.css";

const Calculator = () => {
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }

  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  }

  return (
    <div className="Calculator">
      <div class="calculator">
        <input type="text" id="display" disabled />
        <div class="buttons">
          <button onclick="clearDisplay()">C</button>
          <button onclick="appendToDisplay('(')">(</button>
          <button onclick="appendToDisplay(')')">)</button>
          <button onclick="deleteLast()">DEL</button>

          <button onclick="appendToDisplay('7')">7</button>
          <button onclick="appendToDisplay('8')">8</button>
          <button onclick="appendToDisplay('9')">9</button>
          <button onclick="appendToDisplay('/')">/</button>

          <button onclick="appendToDisplay('4')">4</button>
          <button onclick="appendToDisplay('5')">5</button>
          <button onclick="appendToDisplay('6')">6</button>
          <button onclick="appendToDisplay('*')">*</button>

          <button onclick="appendToDisplay('1')">1</button>
          <button onclick="appendToDisplay('2')">2</button>
          <button onclick="appendToDisplay('3')">3</button>
          <button onclick="appendToDisplay('-')">-</button>

          <button onclick="appendToDisplay('0')">0</button>
          <button onclick="appendToDisplay('.')">.</button>
          <button onclick="calculate()">=</button>
          <button onclick="appendToDisplay('+')">+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
