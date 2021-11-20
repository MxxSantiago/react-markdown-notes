import { useCallback, useState } from 'react';
import Editor from './components/editor/Editor';
import Navbar from './components/navbar/Navbar';
import Preview from './components/preview/Preview';

const App = () => {
    const [doc, setDoc] = useState('# Hello, World!!');

    const handleDocChange = useCallback((newDoc) => {
        setDoc(newDoc);
    }, []);

    return (
        <div className="main">
            <Navbar />
            <Editor onChange={handleDocChange} initialDoc={doc} />
            <Preview document={doc} />
        </div>
    );
};

export default App;
