import React from 'react';

import { useEffect, useState } from 'react';

import useNotes from '../../hooks/useNotes';

import Editor from '../editor/Editor';
import Preview from '../preview/Preview';
import PanelsFooter from '../panelsFooter/PanelsFooter.component';

import { Box } from '@chakra-ui/layout';

import { usePanelsStructure } from './usePanelsStructure';

const PanelsContainer = () => {
    const { notes, activeNote } = useNotes();

    const [IViews, view, setView, getPanelsStructure] = usePanelsStructure();

    const [doc, setDoc] = useState(activeNote.content);

    //(CM componentWillReceiveProps is debounced)
    const [value, setValue] = useState(1);

    useEffect(() => {
        setValue((val) => val + 1);
        setDoc(activeNote.content);
    }, [notes.activeNote]);

    return (
        <Box className={getPanelsStructure()}>
            {view === IViews.SPLITTED ? (
                <>
                    <Editor key={value} setDoc={setDoc} initialDoc={doc} />
                    <Preview document={doc} />
                </>
            ) : view === IViews.ON ? (
                <Preview document={doc} />
            ) : (
                <Editor key={value} setDoc={setDoc} initialDoc={doc} />
            )}

            <PanelsFooter
                view={view}
                setView={setView}
                IViews={IViews}
                doc={doc}
            />
        </Box>
    );
};

export default PanelsContainer;
