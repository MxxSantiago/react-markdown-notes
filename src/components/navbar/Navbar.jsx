import { useIsSmallDevice } from '../../hooks/useIsSmallDevice';

import Sidebar from '../sidebar/Sidebar.component';

import { useBoolean } from '@chakra-ui/hooks';

import { Box } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';

import { CgMenu } from 'react-icons/cg';

import { navbar } from './navbar.module.scss';

const Navbar = () => {
    const [flag, setFlag] = useBoolean();
    const isSmallDevice = useIsSmallDevice();

    return (
        <nav className={navbar}>
            {!isSmallDevice ? (
                <Sidebar />
            ) : (
                <Box w="100vw">
                    <Box bg="gray.700" w="100%" h="100%">
                        <IconButton
                            bg="gray.700"
                            borderRadius="0"
                            icon={<CgMenu />}
                            _focus={'box-shadow: none;'}
                            onClick={setFlag.toggle}
                        />
                    </Box>
                    {flag ? <Sidebar setFlag={setFlag} /> : null}
                </Box>
            )}
        </nav>
    );
};

export default Navbar;
