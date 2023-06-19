import React from 'react';

export const Calculator = () => {

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                первая строка цифр
            </div>
            <div className="board-row">
                вторая строка цифр
            </div>
            <div className="board-row">
                третья строка цифр
            </div>
        </div>
    );
};
