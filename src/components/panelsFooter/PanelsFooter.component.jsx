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

const PanelsFooter = () => {
    const [flag, setFlag] = useBoolean();

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
                />
                <IconButton
                    bg="gray.700"
                    className={panelsFooterIcon}
                    icon={!flag ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    onClick={setFlag.toggle}
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
