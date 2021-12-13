import { useDisclosure } from '@chakra-ui/hooks';

import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';

import { BsPencilSquare } from 'react-icons/bs';

import SearchTask from '../searchTask/SearchTask.component';
import AddTaskModal from '../addTaskModal/AddTaskModal.component';

import { navigationHeader } from './navigation-header.module.scss';

const NavigationHeader = ({ visibleNotes, setVisibleNotes }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className={navigationHeader}>
            <Heading as="h2" size="lg" mb="3">
                Notes
            </Heading>
            <Box d="flex">
                <SearchTask setVisibleNotes={setVisibleNotes} />
                <IconButton
                    p="4"
                    onClick={onOpen}
                    icon={<BsPencilSquare />}
                    borderRadius="0"
                />
                <AddTaskModal
                    isOpen={isOpen}
                    onClose={onClose}
                    setVisibleNotes={setVisibleNotes}
                />
            </Box>
        </div>
    );
};

export default NavigationHeader;
