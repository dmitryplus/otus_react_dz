import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ListElementProps {
    fileName: string
}

export const FileListElement: FC<ListElementProps> = ({ fileName }) => {
    return <p><Link to={`/view/${fileName}`}>{fileName}</Link></p>
}
