import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { components } from '../../react-markdown-components';

const Preview = ({ document }) => {
    return (
        <div className="preview">
            <ReactMarkdown
                children={document}
                components={ChakraUIRenderer(components)}
            />
        </div>
    );
};

export default Preview;
