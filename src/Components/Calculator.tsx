import React from 'react';
import { Button } from './Button';

interface CalculatorProps {
    result: string;
}

export const Calculator = ({ result }: CalculatorProps) => {
    return (
        <div>
            <div className='buttons-row'>
                <Button label={'7'} />
                <Button label={'8'} />
                <Button label={'9'} />
            </div>
            <div className='buttons-row'>
                <Button label={'4'} />
                <Button label={'5'} />
                <Button label={'6'} />
            </div>
            <div className='buttons-row'>
                <Button label={'1'} />
                <Button label={'2'} />
                <Button label={'3'} />
            </div>
            <p data-testid='calculator-result'>{result}</p>
        </div>
    );
};
