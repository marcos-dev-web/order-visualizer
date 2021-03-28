import React, { useState, useEffect } from "react";

import Input from '../Application/Input';
import Controllers from '../Application/Controllers';
import Visualizer from '../Application/Visualizer';

import "./style.css";

function Application() {
  const [rects, setRects] = useState([]);
  const [widthRect, setWidthRect] = useState(25);
  const [valueInput, setValueInput] = useState('');

  function handleInput(value) {
    setValueInput(value);
    const numberOfRects = Number.parseInt(value);
    if (numberOfRects >= 2) {
      if (numberOfRects <= 20 || numberOfRects === 0) {
        return setWidthRect(25);
      } else if (numberOfRects < 30) {
        setWidthRect(20);
      } else if (numberOfRects >= 30) {
        setWidthRect(10);
      } else if (numberOfRects >= 60) {
        setWidthRect(4);
      } else if (numberOfRects >= 80) {
        setWidthRect(2);
      }
    }
  }

  function orderArray () {
    const lengthArray = rects.length;
    let arrayToOrder = rects;
    let j = 0;

    while (j < (lengthArray - 1) * 2) {
      for (let i = 0; i < lengthArray - 1; i++) {
        let hOld = arrayToOrder[i].height;
        let hNow = arrayToOrder[i + 1].height;
        if (higherNumber(hOld, hNow)) {
          arrayToOrder[i].height = hNow;
          arrayToOrder[i + 1].height = hOld;
        }
      }
      j++;
    }
    setRects([...arrayToOrder]);
  };

  function generateArray() {
    let lengthInputTyped;
    if (valueInput.length > 0) {
      lengthInputTyped = Number.parseInt(valueInput);

      if (lengthInputTyped < 2) {
        lengthInputTyped = 20;
        return;
      }
    } else {
      lengthInputTyped = 20;
    }

    let arr = [];
    
    for (let i = 0; i < lengthInputTyped; i++) {
      arr.push({
        height: randomMinMax(100, 500),
      });
    }

    setRects(arr);
  }

  useEffect(generateArray, [valueInput]);

  return (
    <main className="main">
      <Input changeValueInput={handleInput}/>
      <Controllers generateArray={generateArray} orderArray={orderArray}/>
      <Visualizer array={rects} widthRect={widthRect}/>
    </main>
  )
}

//functions
function randomMinMax(min, max) {
  return Math.floor(min + Math.random() * (max - min) - 1);
}

function higherNumber(a, b) {
  return a > b;
}

export default Application;