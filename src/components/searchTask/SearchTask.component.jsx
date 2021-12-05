import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';

import { IoSearchOutline } from 'react-icons/io5';

const SearchTask = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<IoSearchOutline color="#5B5F5E" />} />
            <Input
                variant="filled"
                placeholder="Search"
                borderRightRadius="0"
            />
        </InputGroup>
    );
};

export default SearchTask;
