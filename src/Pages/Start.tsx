import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetData, updateFilesList } from '../Redux/files';
import { FileListElement } from '../Components/FileListElement';

export const Start: FC = () => {

    const filesList = useSelector(state => state.files.files);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(resetData());
    }, []);

    useEffect(() => {
        if (!filesList.length) {
            dispatch(updateFilesList());
        }
    }, [filesList]);


    return (
        <>
            <p>Список файлов:</p>
            {filesList.map((fileName, index) => <FileListElement fileName={fileName} key={index} />)}
        </>);
};
