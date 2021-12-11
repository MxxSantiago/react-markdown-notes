import React from 'react';

import Note from '../navigationItem/Note.component';

import { notes } from './notes.module.scss';

const Notes = ({ items }) => {
    return (
        <ul className={notes}>
            {items.map((item, index) => (
                <Note data={item} key={index} />
            ))}
        </ul>
    );
};

export default Notes;
