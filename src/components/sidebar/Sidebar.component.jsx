import { useDisclosure } from '@chakra-ui/hooks';
import { IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

import Navigation from '../navigation/Navigation.component';

import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';

import { sidebar, openSidebar, sidebarButton } from './sidebar.module.scss';

const Sidebar = ({ setFlag }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            bg="gray.800"
            className={isOpen ? sidebar : `${sidebar} ${openSidebar}`}
        >
            {!isOpen ? <Navigation setFlag={setFlag} /> : null}
            <IconButton
                borderRadius="0"
                className={sidebarButton}
                color="#fff"
                colorScheme="customGray"
                h="100%"
                icon={
                    !isOpen ? <CgChevronDoubleLeft /> : <CgChevronDoubleRight />
                }
                onClick={onToggle}
            />
        </Box>
    );
};

export default Sidebar;
