import { useDisclosure } from '@chakra-ui/hooks';
import { Button } from '@chakra-ui/button';

import Navigation from '../navigation/Navigation.component';
import ClosedIcon from '../icons/ClosedIcon.component';
import OpenIcon from '../icons/OpenIcon.component';

import { sidebar, sidebarButton } from './sidebar.module.scss';

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
        <div className={sidebar}>
            {!isOpen ? <Navigation items={data} /> : null}
            <Button
                borderRadius="0"
                colorScheme="customGray"
                className={sidebarButton}
                h="100%"
                w="40px"
                p="1"
                onClick={onToggle}
                children={!isOpen ? <ClosedIcon /> : <OpenIcon />}
            />
        </div>
    );
};

export default Sidebar;
