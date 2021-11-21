import { useDisclosure } from '@chakra-ui/hooks';

import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';

import SearchTask from '../searchTask/SearchTask.component';
import AddIcon from '../icons/AddIcon.component';

import { navigationHeader } from './navigation-header.module.scss';
import AddTaskModal from '../addTaskModal/AddTaskModal.component';

const NavigationHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className={navigationHeader}>
            <Heading as="h2" size="lg" mb="3">
                Notes
            </Heading>
            <Box d="flex">
                <SearchTask />
                <IconButton
                    onClick={onOpen}
                    icon={<AddIcon />}
                    borderRadius="0"
                />
                <AddTaskModal isOpen={isOpen} onClose={onClose} />
            </Box>
        </div>
    );
};

export default NavigationHeader;
