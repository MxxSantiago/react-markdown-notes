import useNotes from '../../hooks/useNotes';

import { IconButton, Tooltip } from '@chakra-ui/react';

import { IoSaveOutline } from 'react-icons/io5';

const SaveChangesButton = ({ document }) => {
    let { activeNote } = useNotes();

    const saveNoteContent = () => {
        activeNote.content = document.toString();
    };

    return (
        <Tooltip label="Save changes">
            <IconButton
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
