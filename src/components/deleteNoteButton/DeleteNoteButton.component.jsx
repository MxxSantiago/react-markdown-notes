import useNotes from '../../hooks/useNotes';

import {
    Badge,
    Button,
    IconButton,
    Portal,
    useDisclosure,
} from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react';

import { CgTrash } from 'react-icons/cg';

const DeleteNoteButton = () => {
    let { notes, deleteNote } = useNotes();

    const { onOpen, onClose, isOpen } = useDisclosure();

    const deleteActiveNote = () => {
        onClose();
        deleteNote(notes.activeNote);
    };

    return (
        <>
            {notes.notes.length > 1 ? (
                <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                    <PopoverTrigger>
                        <IconButton
                            border="none"
                            borderRadius="0"
                            colorScheme="red"
                            icon={<CgTrash />}
                            variant="outline"
                            _focus={'box-shadow: none'}
                        />
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent
                            _focus="box-shadow: none"
                            width="min-content"
                        >
                            <PopoverArrow />
                            <PopoverHeader>
                                <Badge colorScheme="red">
                                    Are you sure you want to delete it?
                                </Badge>
                            </PopoverHeader>
                            <PopoverBody d="flex" justifyContent="space-around">
                                <Button
                                    colorScheme="red"
                                    onClick={deleteActiveNote}
                                >
                                    Delete note
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
            ) : null}
        </>
    );
};

export default DeleteNoteButton;
