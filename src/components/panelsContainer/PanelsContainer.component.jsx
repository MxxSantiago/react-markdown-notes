import { useCallback, useState } from 'react';

import React from 'react';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';
import PanelsFooter from '../panelsFooter/PanelsFooter.component';

import { Box } from '@chakra-ui/layout';

import {
    panelsContainer,
    panelsContainerViewOn,
    panelsContainerViewOff,
} from './panels-container.module.scss';

const IViews = {
    ON: 'on',
    OFF: 'off',
    SPLITTED: 'splitted',
};
const { ON, OFF, SPLITTED } = IViews;

const PanelsContainer = () => {
    const [view, setView] = useState(SPLITTED);
    const [doc, setDoc] = useState('# Hello, World!!');

    const handleDocChange = useCallback((newDoc) => {
        setDoc(newDoc);
    }, []);

    const panelsStructure = () => {
        if (view === SPLITTED) {
            return `${panelsContainer}`;
        }

        if (view === ON) {
            return `${panelsContainer} ${panelsContainerViewOn}`;
        }

        if (view === OFF) {
            return `${panelsContainer} ${panelsContainerViewOff}`;
        }
    };

    return (
        <Box className={panelsStructure()}>
            {view === SPLITTED ? (
                <>
                    <Editor onChange={handleDocChange} initialDoc={doc} />
                    <Preview document={doc} />
                </>
            ) : view === ON ? (
                <Preview document={doc} />
            ) : (
                <Editor onChange={handleDocChange} initialDoc={doc} />
            )}

            <PanelsFooter view={view} setView={setView} IViews={IViews} />
        </Box>
    );
};

export default PanelsContainer;
