import { useCallback } from 'react';
import useCodeMirror from '../../hooks/useCodemirror';

import { editor } from './editor.module.scss';

const Editor = ({ onChange, initialDoc }) => {
    const handleChange = useCallback(
        (state) => onChange(state.doc.toString()),
        [onChange]
    );

    const [refContainer] = useCodeMirror({
        initialDoc: initialDoc,
        onChange: handleChange,
    });

    return <div className={editor} ref={refContainer}></div>;
};

export default Editor;
