import { useRef, useState } from 'react';

import useNotes from '../../hooks/useNotes';

import TagIntegrator from '../tagIntegrator/TagIntegrator.component';

import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/modal';
import { Divider } from '@chakra-ui/layout';

const AddTaskModal = ({ isOpen, onClose, setVisibleNotes }) => {
    const { notes } = useNotes();

    const { addNewNote } = useNotes();
    const [tags, setTags] = useState([]);
    const input = useRef();

    const addNote = (event) => {
        event.preventDefault();

        const noteTitle = input.current.value;

        if (!noteTitle.trim().length || !tags.length) {
            alert('You need to enter a title and at least one tag.');
            return;
        }

        const newNote = {
            content: '',
            id: Date.now(),
            tags: tags,
            title: noteTitle,
        };

        addNewNote(newNote);

        setVisibleNotes([...notes.notes, newNote]);

        input.current.value = '';
        setTags([]);
    };

    return (
        <Modal
            size="xl"
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent mx="5">
                <ModalHeader bg="gray.600">Create a new note</ModalHeader>
                <Divider />
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl mt={2}>
                        <FormLabel>Title</FormLabel>
                        <Input
                            ref={input}
                            placeholder="Note title"
                            spellCheck={false}
                        />
                    </FormControl>
                    <FormControl mt={8}>
                        <FormLabel>Tags</FormLabel>
                        <TagIntegrator tags={tags} setTags={setTags} />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={addNote}>
                        Create
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddTaskModal;
