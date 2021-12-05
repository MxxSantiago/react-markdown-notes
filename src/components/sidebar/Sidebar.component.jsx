import { useDisclosure } from '@chakra-ui/hooks';
import { IconButton } from '@chakra-ui/button';

import Navigation from '../navigation/Navigation.component';

import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';

import { sidebar, openSidebar, sidebarButton } from './sidebar.module.scss';

const data = [
    {
        title: 'POO Java programming',
        tags: [
            {
                title: 'Exercises',
                color: 'pink',
            },
            {
                title: 'Java',
                color: 'red',
            },
        ],
    },
    {
        title: 'Javascript algorithm',
        tags: [
            {
                title: 'Javascript',
                color: 'yellow',
            },
        ],
    },
    {
        title: 'Next.js new update',
        tags: [
            {
                title: 'Javascript',
                color: 'yellow',
            },
            {
                title: 'Study',
                color: 'cyan',
            },
        ],
    },
    {
        title: 'Algebra homework',
        tags: [
            {
                title: 'Algebra',
                color: 'gray',
            },
            {
                title: 'Homework',
                color: 'blue',
            },
        ],
    },
    {
        title: 'Shopping list',
        tags: [
            {
                title: 'To Do',
                color: 'green',
            },
        ],
    },

    {
        title: 'POO Java programming',
        tags: [
            {
                title: 'Exercises',
                color: 'pink',
            },
            {
                title: 'Java',
                color: 'red',
            },
        ],
    },
    {
        title: 'Javascript algorithm',
        tags: [
            {
                title: 'Javascript',
                color: 'yellow',
            },
        ],
    },
    {
        title: 'Next.js new update',
        tags: [
            {
                title: 'Javascript',
                color: 'yellow',
            },
            {
                title: 'Study',
                color: 'cyan',
            },
        ],
    },
    {
        title: 'Algebra homework',
        tags: [
            {
                title: 'Algebra',
                color: 'gray',
            },
            {
                title: 'Homework',
                color: 'blue',
            },
        ],
    },
    {
        title: 'Shopping list',
        tags: [
            {
                title: 'To Do',
                color: 'green',
            },
        ],
    },
];

const Sidebar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <div className={isOpen ? sidebar : `${sidebar} ${openSidebar}`}>
            {!isOpen ? <Navigation items={data} /> : null}
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
        </div>
    );
};

export default Sidebar;
