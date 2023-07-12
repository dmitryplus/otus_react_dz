import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilesList } from '../Redux/files';


export const Start: FC = () => {

    const filesList = useSelector(state => state.files.files);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (!filesList.length) {
            dispatch(updateFilesList());
        }
    }, [filesList]);


    return <p>Start</p>;
};
