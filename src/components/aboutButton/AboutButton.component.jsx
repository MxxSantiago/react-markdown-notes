import { IconButton, Tooltip, useDisclosure } from '@chakra-ui/react';

import { IoHelpCircleOutline } from 'react-icons/io5';
import AboutModal from '../aboutModal/AboutModal.component';

const AboutButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Tooltip label="About" placement="top-start">
                <IconButton
                    borderRadius="0"
                    bg="gray.700"
                    icon={<IoHelpCircleOutline />}
                    onClick={onOpen}
                    _focus={'box-shadow: none'}
                />
            </Tooltip>
            <AboutModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default AboutButton;
