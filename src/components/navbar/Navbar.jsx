import { useIsSmallDevice } from '../../hooks/useIsSmallDevice';

import Sidebar from '../sidebar/Sidebar.component';

import { navbar } from './navbar.module.scss';

const Navbar = () => {
    const isSmallDevice = useIsSmallDevice();

    return (
        <nav className={navbar}>
            {!isSmallDevice ? <Sidebar /> : <p>header</p>}
        </nav>
    );
};

export default Navbar;
