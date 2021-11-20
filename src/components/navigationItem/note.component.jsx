import { Box, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';

import { navigationItem } from './note.module.scss';

const Note = ({ data }) => {
    const { title, tags } = data;

    return (
        <li>
            <Box as="button" className={navigationItem}>
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
