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
import { Tooltip } from '@chakra-ui/react';

const PanelsFooter = ({ setView, IViews }) => {
    const { ON, OFF, SPLITTED } = IViews;

    return (
        <Box bg="gray.700" className={panelsFooter}>
            <div>
                <Tooltip label="Delete note">
                    <IconButton
                        bg="gray.700"
                        className={panelsFooterIcon}
                        icon={<CgTrash />}
                    />
                </Tooltip>
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
