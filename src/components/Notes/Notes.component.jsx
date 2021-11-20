import React from 'react';

import Note from '../navigationItem/note.component';

import { notes } from './notes.module.scss';

const Notes = ({ items }) => {
    return (
        <ul className={notes}>
            {items.map((item) => (
                <Note data={item} />
            ))}
        </ul>
    );
};

export default Notes;
