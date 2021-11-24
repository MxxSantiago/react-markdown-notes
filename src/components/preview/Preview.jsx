import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ResizePanel from 'react-resize-panel';

import { useIsSmallDevice } from '../../hooks/useIsSmallDevice';

import { components } from '../../react-markdown-components';

import { preview } from './preview.module.scss';

const Preview = ({ document }) => {
    const isSmallDevice = useIsSmallDevice();

    return (
        <>
            {!isSmallDevice ? (
                <ResizePanel direction="w" handleClass="0-0-0">
                    <ReactMarkdown
                        className={preview}
                        children={document}
                        components={ChakraUIRenderer(components)}
                    />
                </ResizePanel>
            ) : (
                <ReactMarkdown
                    className={preview}
                    children={document}
                    components={ChakraUIRenderer(components)}
                />
            )}
        </>
    );
};

export default Preview;
