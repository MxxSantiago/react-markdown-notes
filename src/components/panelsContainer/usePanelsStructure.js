import { useState } from 'react';

import {
    panelsContainer,
    panelsContainerViewOn,
    panelsContainerViewOff,
} from './panels-container.module.scss';

const IViews = {
    ON: 'on',
    OFF: 'off',
    SPLITTED: 'splitted',
};

export function usePanelsStructure() {
    const { ON, OFF, SPLITTED } = IViews;

    const [view, setView] = useState(SPLITTED);

    const getPanelsStructure = () => {
        if (view === SPLITTED) {
            return `${panelsContainer}`;
        }

        if (view === ON) {
            return `${panelsContainer} ${panelsContainerViewOn}`;
        }

        if (view === OFF) {
            return `${panelsContainer} ${panelsContainerViewOff}`;
        }
    };

    return [IViews, view, setView, getPanelsStructure];
}
