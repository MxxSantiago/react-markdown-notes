import { useCallback } from 'react';
import useCodeMirror from '../../hooks/useCodemirror';

import { editor } from './editor.module.scss';

const Editor = ({ initialDoc, setDoc }) => {
    const handleChange = useCallback((state) => {
        setDoc(state.doc.toString());
    }, []);

    const [refContainer] = useCodeMirror({
        initialDoc: initialDoc,
        onChange: handleChange,
    });

    return <div className={editor} ref={refContainer}></div>;
};

export default Editor;
