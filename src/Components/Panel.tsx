import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './Button';
import { BlockFontSize } from '../types/fontSize';

export const Panel = ({ onFontSizeChange}) => {
    const [childFontSize, setChildFontSize] = useState<BlockFontSize>(1);

    const needFontSizes: BlockFontSize[] = [
        1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2,
    ];

    return (
        <div className='buttons-row'>
            {needFontSizes.map((fontSize) => (
                <Button
                    label={fontSize}
                    onChildFontSizeChange={onFontSizeChange}
                />
            ))}
        </div>
    );
};
