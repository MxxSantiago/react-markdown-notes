import React from 'react';

import useNotes from '../../hooks/useNotes';

import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/react';

import {
    IoEyeOutline,
    IoEyeOffOutline,
    IoSettingsOutline,
    IoSaveOutline,
} from 'react-icons/io5';
import { CgScan, CgCopy, CgTrash, CgSoftwareDownload } from 'react-icons/cg';

import { panelsFooter, panelsFooterIcon } from './panels-footer.module.scss';

const PanelsFooter = ({ setView, IViews, doc }) => {
    let { notes, activeNote, deleteNote } = useNotes();

    const { ON, OFF, SPLITTED } = IViews;

    const saveNoteContent = () => {
        activeNote.content = doc.toString();
    };

    return (
        <Box bg="gray.700" className={panelsFooter}>
            <div>
                {notes.notes.length > 1 ? (
                    <Tooltip label="Delete note">
                        <IconButton
                            bg="gray.700"
                            className={panelsFooterIcon}
                            icon={<CgTrash />}
                            onClick={() => deleteNote(notes.activeNote)}
                        />
                    </Tooltip>
                ) : null}
                <Tooltip label="Copy content to clipboard">
                    <IconButton
                        bg="gray.700"
                        className={panelsFooterIcon}
                        icon={<CgCopy />}
                    />
                </Tooltip>
                <Tooltip label="Download .md file">
                    <IconButton
                        bg="gray.700"
                        className={panelsFooterIcon}
                        icon={<CgSoftwareDownload />}
                    />
                </Tooltip>
                <Tooltip label="Save changes">
                    <IconButton
                        colorScheme="green"
                        variant="outline"
                        border="none"
                        className={panelsFooterIcon}
                        icon={<IoSaveOutline />}
                        onClick={saveNoteContent}
                    />
                </Tooltip>
            </div>
            <div>
                <Tooltip label="Toggle views">
                    <IconButton
                        bg="gray.700"
                        className={panelsFooterIcon}
                        icon={<CgScan />}
                        onClick={() => setView(SPLITTED)}
                    />
                </Tooltip>
                <Tooltip label="Hide preview">
                    <IconButton
                        bg="gray.700"
                        className={panelsFooterIcon}
                        icon={<IoEyeOffOutline />}
                        onClick={() => setView(OFF)}
                    />
                </Tooltip>
                <Tooltip label="Hide editor">
                    <IconButton
                        bg="gray.700"
                        className={panelsFooterIcon}
                        icon={<IoEyeOutline />}
                        onClick={() => setView(ON)}
                    />
                </Tooltip>
                <Tooltip label="Settings" placement="top-start">
                    <IconButton
                        bg="gray.700"
                        className={panelsFooterIcon}
                        icon={<IoSettingsOutline />}
                    />
                </Tooltip>
            </div>
        </Box>
    );
};

export default PanelsFooter;
