import React, {
    useCallback,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';
import { Button } from './Button';
import { BlockFontSize } from '../types/fontSize';

const needFontSizes: BlockFontSize[] = [
    1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2,
];

interface PanelProps {
    onFontSizeChange: Dispatch<SetStateAction<BlockFontSize>>;
}

export const Panel: React.FC<PanelProps> = ({
    onFontSizeChange,
}: PanelProps) => {
    return (
        <div className='buttons-row'>
            {needFontSizes.map((fontSize) => (
                <Button
                    key={fontSize.toString()}
                    label={fontSize}
                    onChildFontSizeChange={onFontSizeChange}
                />
            ))}
        </div>
    );
};
