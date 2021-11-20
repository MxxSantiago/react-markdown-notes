import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Heading } from '@chakra-ui/react';

import SearchIcon from '../icons/SearchIcon.component';

import { navigationHeader } from './navigation-header.module.scss';

const NavigationHeader = () => {
    return (
        <div className={navigationHeader}>
            <Heading as="h2" size="lg" mb="3">
                Notes
            </Heading>
            <InputGroup>
                <InputLeftElement children={<SearchIcon color="#5B5F5E" />} />
                <Input variant="filled" placeholder="Search" />
            </InputGroup>
        </div>
    );
};

export default NavigationHeader;
