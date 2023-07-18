import React from 'react';
import { ScaleBlock } from './ScaleBlock';

interface CalculatorProps {
    result: string;
}

export const Calculator: React.FC<CalculatorProps> = ({
    result,
}: CalculatorProps) => {
    return (
        <div>
            <div className='buttons-row'></div>
            <div className='buttons-row'></div>
            <div className='buttons-row'></div>
            <h5 data-testid='calculator-result'>{result}</h5>
        </div>
    );
};
