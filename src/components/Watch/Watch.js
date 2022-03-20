import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () => {
        const newStep = steps + 1
        setSteps(newStep)
        // console.log(steps)
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{ border: '2px solid purple', padding: '10px', margin: '20px' }}>
            <h2>This is my smart watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>De dour...</button>
            <Display name="Xiaomi" steps={steps}></Display>
        </div>
    );
};

export default Watch;