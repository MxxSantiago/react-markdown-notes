import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import remarkGfm from 'remark-gfm';

import { components } from '../../react-markdown-components';

import { preview } from './preview.module.scss';

const Preview = ({ document }) => {
    return (
        <ReactMarkdown
            className={preview}
            children={document}
            components={ChakraUIRenderer(components)}
            remarkPlugins={[remarkGfm]}
        />
    );
};

export default Preview;
