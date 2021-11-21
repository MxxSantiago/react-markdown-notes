import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';

import SearchIcon from '../icons/SearchIcon.component';

const SearchTask = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<SearchIcon color="#5B5F5E" />} />
            <Input
                variant="filled"
                placeholder="Search"
                borderRightRadius="0"
            />
        </InputGroup>
    );
};

export default SearchTask;
