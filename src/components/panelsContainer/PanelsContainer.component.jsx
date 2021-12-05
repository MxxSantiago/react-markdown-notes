import { useCallback, useState } from 'react';

import React from 'react';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

import { Box } from '@chakra-ui/layout';

import { panelsContainer } from './panels-container.module.scss';
import PanelsFooter from '../panelsFooter/PanelsFooter.component';

const PanelsContainer = () => {
    const [doc, setDoc] = useState('# Hello, World!!');

    const handleDocChange = useCallback((newDoc) => {
        setDoc(newDoc);
    }, []);

    return (
        <Box className={panelsContainer}>
            <Editor onChange={handleDocChange} initialDoc={doc} />
            <Preview document={doc} />
            <PanelsFooter />
        </Box>
    );
};

export default PanelsContainer;
