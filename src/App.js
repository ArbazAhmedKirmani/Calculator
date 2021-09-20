import React, { useState } from 'react';
import './App.css';
import Btn from './Component/Btn';
import { bracketCounter, OperatorFunction } from './Functions/Operators';

const App = () => {
    /**
     * State variables
     */
    const [oldResult, setOldResult] = useState('')
    const [result, setResult] = useState('')

    const operator = ['+', '-', '/', '*']

    /**
     * Set the value of input field on buttons click
     * @param {string} param0 
     */
    const handleClick = ({ target: { name } }) => {
        if (operator.includes(result.slice(-1)) && operator.includes(name))
            /** Hold Last Operator */
            setResult(result)
        else
            /* fetch final string */
            setResult(OperatorFunction(name, result))
    }

    /**
     * Clear the input screen
     */
    const clearText = () => {
        setResult('')
    }

    /**
     * Clear the last saved answer
     */
    const clearAnswer = () => {
        setOldResult('')
    }

    /**
     * Delete last one number at a time
     */
    const deleteText = () => {
        setResult(result.slice(0, -1))
    }

    /**
     * To check weather the brakets are well placed in the string 
     * To find the calculated value
     */
    const handleEqual = () => {
        /* Checking Condition for '(' and ')' */
        if (bracketCounter(result) === 0)
            try {
                /** Checking, If last digit is operator */
                if (operator.includes(result.slice(-1))) {
                    setResult('')
                    setOldResult(eval(result.slice(0, -1)).toString())
                } else {
                    /* Perform Calculation */
                    setResult('')
                    setOldResult(eval(result).toString())
                }
            } catch (error) {
                alert('Something wrong with the equation')
            }
        else
            alert('Make sure brackets are closed')
    }

    /**
     * For adding the last answer in current equation
     */
    const addAnswer = () => {
        if (operator.includes(result.slice(-1)) || result.slice(-1) === '(' || result.slice(-1) === '')
            setResult(result + oldResult)
        else if (oldResult === '')
        alert('Answer is NULL')
        else
            alert('Answer can be used after an Operator')
    }

    return (
        <div id='container' className='container'>
            {/* Screen */}
            <div>
                <input type='text' name='result' placeholder='0' value={result || 0} disabled={true} />
                <span className='small-result'><b style={{ fontSize: 16, color: 'darkgray' }}>= &nbsp;</b>{oldResult || 0}</span>
            </div>
            {/* \ Screen */}

            {/* Buttons */}
            <Btn id='C' className='symbol-btn' title='C' name='C' onClick={clearText} />
            <Btn id='CE' className='symbol-btn' title='CE' name='CE' onClick={deleteText} />
            <Btn id='(' className='symbol-btn' title='(' name='(' onClick={handleClick} />
            <Btn id=')' className='symbol-btn' title=')' name=')' onClick={handleClick} />
            <Btn id='cans' className='symbol-btn' title='CE - Ans.' name='cans' onClick={clearAnswer} style={{ width: 'Calc(40% - 6px)' }} />
            <Btn id='ans' className='symbol-btn' title='Ans.' name='ans' onClick={addAnswer} style={{ width: 'Calc(35% - 6px)' }} />
            <Btn id='/' className='symbol-btn' title='&divide;' name='/' onClick={handleClick} />
            <Btn id='7' className='number-btn' title='7' name='7' onClick={handleClick} />
            <Btn id='8' className='number-btn' title='8' name='8' onClick={handleClick} />
            <Btn id='9' className='number-btn' title='9' name='9' onClick={handleClick} />
            <Btn id='*' className='symbol-btn' title='x' name='*' onClick={handleClick} />
            <Btn id='4' className='number-btn' title='4' name='4' onClick={handleClick} />
            <Btn id='5' className='number-btn' title='5' name='5' onClick={handleClick} />
            <Btn id='6' className='number-btn' title='6' name='6' onClick={handleClick} />
            <Btn id='-' className='symbol-btn' title='-' name='-' onClick={handleClick} />
            <Btn id='1' className='number-btn' title='1' name='1' onClick={handleClick} />
            <Btn id='2' className='number-btn' title='2' name='2' onClick={handleClick} />
            <Btn id='3' className='number-btn' title='3' name='3' onClick={handleClick} />
            <Btn id='+' className='symbol-btn' title='+' name='+' onClick={handleClick} />
            <Btn id='0' className='number-btn' title='0' name='0' onClick={handleClick} />
            <Btn id='.' className='number-btn' title='.' name='.' onClick={handleClick} />
            <Btn id='equal' className='symbol-btn' title='=' name='=' onClick={handleEqual} style={{ width: 'Calc(50% - 6px)' }} />
            {/* \ Buttons */}
        </div>
    );
};


export default App;