import React, { useRef } from 'react';

import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/tag';
import { Button } from '@chakra-ui/button';
import { Select } from '@chakra-ui/react';

const TagIntegrator = ({ tags, setTags }) => {
    const input = useRef();
    const selector = useRef();

    const colors = [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'pink',
        'gray',
        'cyan',
    ];

    const addNewTag = (event) => {
        event.preventDefault();

        let tagTitle = input.current.value;
        const tagColor = selector.current.value;

        if (!tagTitle.trim().length) return;

        const newTag = {
            title: tagTitle,
            color: tagColor,
            id: Date.now(),
        };

        setTags((currentTags) => [...currentTags, newTag]);
        input.current.value = '';
    };

    const removeTag = (selectedTagId) => {
        const newTags = tags.filter((tag) => tag.id !== selectedTagId);
        setTags(newTags);
    };

    return (
        <div>
            <Box as="form" d="flex" onSubmit={addNewTag}>
                <Input
                    borderBottomRadius="0"
                    borderRight="none"
                    borderRightRadius="0"
                    isRequired
                    placeholder="Tag title"
                    spellCheck={false}
                    ref={input}
                />
                <Select
                    borderRadius="0"
                    flexBasis="40%"
                    ref={selector}
                    placeholder="Color"
                    isRequired
                >
                    {colors.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </Select>
                <Button
                    type="submit"
                    borderLeftRadius="0"
                    borderBottomRightRadius="0"
                    children="Add"
                    colorScheme="green"
                />
            </Box>
            <Box
                bg="gray.600"
                borderRadius="md"
                borderTopRadius="0"
                mt="0"
                pt="2"
                pb="1"
                px="4"
                userSelect="none"
            >
                {tags.length ? (
                    tags.map(({ title, color, id }, index) => (
                        <Tag
                            colorScheme={color}
                            id={id}
                            key={index}
                            mb="1"
                            mr="1"
                            variant="solid"
                        >
                            <TagLabel children={title} />
                            <TagCloseButton onClick={() => removeTag(id)} />
                        </Tag>
                    ))
                ) : (
                    <Text
                        children={'Enter a tag'}
                        color="blue.100"
                        isTruncated
                        mb="1"
                    />
                )}
            </Box>
        </div>
    );
};

export default TagIntegrator;
