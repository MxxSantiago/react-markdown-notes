import React from 'react';

import { Select } from '@chakra-ui/select';
import { Box } from '@chakra-ui/layout';

const FilterByTag = ({ tags = [] }) => {
    return (
        <Box px="4" py="3">
            <Select placeholder="tag">
                {tags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </Select>
        </Box>
    );
};

export default FilterByTag;
