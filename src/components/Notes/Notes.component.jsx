import React from 'react';

import Note from '../navigationItem/Note.component';

import { notes } from './notes.module.scss';

const Notes = ({ setFlag, items }) => {
    return (
        <ul className={notes} onClick={setFlag?.toggle}>
            {items.map((item, index) => (
                <Note data={item} key={index} />
            ))}
        </ul>
    );
};

export default Notes;
