import useNotes from '../../hooks/useNotes';

import { Box, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';

import { note, selectedNote } from './note.module.scss';

const Note = ({ data }) => {
    const { notes, changeActiveNote } = useNotes();

    const { title, tags, id } = data;

    const isSelected = () => {
        if (notes.activeNote === id) {
            return selectedNote;
        }

        return note;
    };

    return (
        <li>
            <Box
                as="button"
                bg="gray.800"
                className={isSelected()}
                onClick={() => changeActiveNote(id)}
            >
                <b>{title}</b>
                <Box mt="3">
                    {tags.map((tag, index) => (
                        <Tag
                            size="sm"
                            key={index}
                            variant="solid"
                            colorScheme={tag.color}
                            mr="1"
                        >
                            <Text isTruncated children={tag.title} />
                        </Tag>
                    ))}
                </Box>
            </Box>
        </li>
    );
};

export default Note;
