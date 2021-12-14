import { useEffect, useState } from 'react';

import NavigationHeader from '../navigationHeader/NavigationHeader.component';
import FilterByTag from '../filterByTag/FilterByTag.component';

import { Divider } from '@chakra-ui/layout';

import { navigation } from './navigation.module.scss';
import Notes from '../Notes/Notes.component';
import useNotes from '../../hooks/useNotes';

const Navigation = ({ setFlag }) => {
    const { notes } = useNotes();

    const [visibleNotes, setVisibleNotes] = useState(notes.notes);

    useEffect(() => {
        setVisibleNotes(notes.notes);
    }, [notes.notes]);

    return (
        <div className={navigation}>
            <NavigationHeader
                setVisibleNotes={setVisibleNotes}
                visibleNotes={visibleNotes}
            />
            <Divider />
            <Notes setFlag={setFlag} items={visibleNotes} />
        </div>
    );
};

export default Navigation;
