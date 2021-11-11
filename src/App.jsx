import { useCallback, useState } from 'react';
import Editor from './editor';
import Navbar from './navbar/Navbar';
import Preview from './preview';

const App = () => {
    const [doc, setDoc] = useState('# Hello, World!');

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
