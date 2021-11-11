import { useCallback } from 'react';
import useCodeMirror from './useCodemirror';

const Editor = ({ onChange, initialDoc }) => {
    const handleChange = useCallback(
        (state) => onChange(state.doc.toString()),
        [onChange]
    );
    const [refContainer, editorView] = useCodeMirror({
        initialDoc: initialDoc,
        onChange: handleChange,
    });

    return <div className="editor" ref={refContainer}></div>;
};

export default Editor;
