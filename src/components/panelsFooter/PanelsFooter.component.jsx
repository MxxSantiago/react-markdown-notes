import DeleteNoteButton from '../deleteNoteButton/DeleteNoteButton.component';
import CopyContentButton from '../copyContentButton/CopyContentButton.component';
import DownloadFileButton from '../downloadFileButton/DownloadFileButton.component';
import SaveChangesButton from '../saveChangesButton/SaveChangesButton.component';

import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/react';

import {
    IoEyeOutline,
    IoEyeOffOutline,
    IoSettingsOutline,
} from 'react-icons/io5';
import { CgScan } from 'react-icons/cg';

import { panelsFooter, panelsFooterIcon } from './panels-footer.module.scss';

const PanelsFooter = ({ setView, IViews, doc }) => {
    const { ON, OFF, SPLITTED } = IViews;

    return (
        <Box bg="gray.700" className={panelsFooter}>
            <div>
                <DeleteNoteButton />
                <CopyContentButton document={doc} />
                <DownloadFileButton document={doc} />
                <SaveChangesButton document={doc} />
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
