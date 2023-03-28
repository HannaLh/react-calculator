import React, {useState} from "react";
import "./calculate.css";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    const inputNum = (e) => {
        const input = e.target.value;
        if (num === 0) {
        setNum(input);
        } else {
        setNum(num + input);
        }
    }

    const clear = () => {
        setNum(0);
    }

    const porcentage = () => {
        setNum(num / 100);
    }

    const squareRoot = ()=> {
        setNum(Math.sqrt(num))
    }

    const exponentiation = () => {
        setNum(num * num);
    }

    const backspace = () => {
        setNum(num.slice(0, -1))
    }

    const changeSign = () => {
        if (num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }
    const operatorHandler = (e) => {
        const operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum("");
    }

    const calculate = () => {
        if (operator === "/") {
        setNum(parseFloat(oldnum) / parseFloat(num));
        } else if (operator === "X") {
        setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operator === "-") {
            console.log(oldnum)
            console.log(num)
            console.log(oldnum-num)
        setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operator === "+") {
        setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="screen">{num}</h1>
                <button className="btn light-gray" onClick={clear}>C</button>
                <button className="btn light-gray" onClick={exponentiation}>
                    <p>X<sup>2</sup></p>
                </button>
                <button className="btn light-gray" onClick={porcentage}>%</button>
                <button className="btn orange" onClick={operatorHandler} value="/">
                /
                </button>
                <button className="btn light-gray" onClick={inputNum} value={7}>
                7
                </button>
                <button className="btn light-gray" onClick={inputNum} value={8}>
                8
                </button>
                <button className="btn light-gray" onClick={inputNum} value={9}>
                9
                </button>
                <button className="btn orange" onClick={operatorHandler} value="X">
                X
                </button>
                <button className="btn light-gray" onClick={inputNum} value={4}>
                4
                </button>
                <button className="btn light-gray" onClick={inputNum} value={5}>
                5
                </button>
                <button className="btn light-gray" onClick={inputNum} value={6}>
                6
                </button>
                <button className="btn orange" onClick={operatorHandler} value="-">
                -
                </button>
                <button className="btn light-gray" onClick={inputNum} value={1}>
                1
                </button>
                <button className="btn light-gray" onClick={inputNum} value={2}>
                2
                </button>
                <button className="btn light-gray" onClick={inputNum} value={3}>
                3
                </button>
                <button className="btn orange" onClick={operatorHandler} value="+">
                +
                </button>
                <button className="btn light-gray" onClick={inputNum}>
                0
                </button>
                <button className="btn light-gray" onClick={inputNum} value={"."}>
                ,
                </button>
                <button className="btn light-gray" onClick={squareRoot} value={"&#8730;"}>
                &#8730;
                </button>
                <button className="btn orange" onClick={calculate}>
                =
                </button>
                <button className="btn backspace" onClick={backspace}>
                del
                </button>
                <button className="btn orange" onClick={changeSign}>
                -/+
                </button>
            </div>
        </div>
    );
}
