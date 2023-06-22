import React, { Dispatch, SetStateAction } from 'react';
import { Button } from './Button';
import { ScaleSize } from '../Types';
import * as Styles from './styles';

const needFontSizes: ScaleSize[] = [
    1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2,
];

interface PanelProps {
    onScaleSizeChange: Dispatch<SetStateAction<ScaleSize>>;
}

export const Panel: React.FC<PanelProps> = ({
    onScaleSizeChange,
}: PanelProps) => {
    return (
        <Styles.Toolbox>
            {needFontSizes.map((fontSize) => (
                <Button
                    key={fontSize.toString()}
                    label={fontSize}
                    onChildScaleSizeChange={onScaleSizeChange}
                />
            ))}
        </Styles.Toolbox>
    );
};
