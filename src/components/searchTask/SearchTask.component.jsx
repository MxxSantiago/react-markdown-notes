import { useEffect, useState } from 'react';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';

import { IoSearchOutline } from 'react-icons/io5';
import useNotes from '../../hooks/useNotes';

const SearchTask = ({ setVisibleNotes }) => {
    const { notes } = useNotes();
    const [search, setSearch] = useState('');

    const handleChange = ({ target }) => {
        setSearch(target.value);
    };

    useEffect(() => {
        const results = notes.notes.filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())
        );

        setVisibleNotes(results);
    }, [search]);

    return (
        <InputGroup>
            <InputLeftElement children={<IoSearchOutline color="#5B5F5E" />} />
            <Input
                variant="filled"
                value={search}
                placeholder="Search"
                borderRightRadius="0"
                onChange={handleChange}
            />
        </InputGroup>
    );
};

export default SearchTask;
