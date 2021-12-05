import React from 'react';

import { useBoolean } from '@chakra-ui/hooks';
import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

import {
    IoEyeOutline,
    IoEyeOffOutline,
    IoSettingsOutline,
} from 'react-icons/io5';
import { CgScan, CgCopy, CgTrash, CgSoftwareDownload } from 'react-icons/cg';

import { panelsFooter, panelsFooterIcon } from './panels-footer.module.scss';
import { useEffect } from 'react';

const PanelsFooter = ({ view, setView, IViews }) => {
    const { ON, OFF, SPLITTED } = IViews;

    return (
        <Box bg="gray.700" className={panelsFooter}>
            <div>
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgTrash />}
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgCopy />}
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgSoftwareDownload />}
                />
            </div>
            <div>
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<CgScan />}
                    onClick={() => setView(SPLITTED)}
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<IoEyeOffOutline />}
                    onClick={() => setView(OFF)}
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<IoEyeOutline />}
                    onClick={() => setView(ON)}
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={<IoSettingsOutline />}
                />
            </div>
        </Box>
    );
};

export default PanelsFooter;
