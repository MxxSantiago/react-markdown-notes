import useNotes from '../../hooks/useNotes';

import { IconButton, Tooltip, useBoolean, useToast } from '@chakra-ui/react';

import { IoSaveOutline } from 'react-icons/io5';

const SaveChangesButton = ({ document }) => {
    let { activeNote } = useNotes();
    const toast = useToast();

    const [flag, setFlag] = useBoolean();

    const saveNoteContent = () => {
        activeNote.content = document.toString();

        toast({
            title: 'Changes saved!!',
            status: 'success',
            duration: 1250,
            isClosable: true,
            position: 'top-right',
        });

        setFlag.toggle();

        setTimeout(() => {
            setFlag.toggle();
        }, 1500);
    };

    return (
        <Tooltip label="Save changes">
            <IconButton
                disabled={flag}
                border="none"
                borderRadius="0"
                colorScheme="green"
                icon={<IoSaveOutline />}
                onClick={saveNoteContent}
                variant="outline"
                _focus={'box-shadow: none'}
            />
        </Tooltip>
    );
};

export default SaveChangesButton;
