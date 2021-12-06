import React from 'react';

import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

import {
    IoEyeOutline,
    IoEyeOffOutline,
    IoSettingsOutline,
} from 'react-icons/io5';
import { CgScan, CgCopy, CgTrash, CgSoftwareDownload } from 'react-icons/cg';

import { panelsFooter, panelsFooterIcon } from './panels-footer.module.scss';

const PanelsFooter = ({ setView, IViews }) => {
    const { ON, OFF, SPLITTED } = IViews;

    return (
        <Box bg="gray.700" className={panelsFooter}>
            <div>
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgTrash />}
                    title="Delete note"
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgCopy />}
                    title="Copy content to clipboard"
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgSoftwareDownload />}
                    title="Download .md file"
                />
            </div>
            <div>
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgScan />}
                    onClick={() => setView(SPLITTED)}
                    title="Toggle views"
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<IoEyeOffOutline />}
                    onClick={() => setView(OFF)}
                    title="Hide preview"
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<IoEyeOutline />}
                    onClick={() => setView(ON)}
                    title="Hide editor"
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<IoSettingsOutline />}
                    title="Settings"
                />
            </div>
        </Box>
    );
};

export default PanelsFooter;
