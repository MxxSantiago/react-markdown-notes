import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Divider, Heading, Text } from '@chakra-ui/layout';

export const components = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={atomOneDarkReasonable}
                PreTag="div"
                language={match[1]}
                {...props}
            />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
    p: (props) => {
        const { children } = props;
        return <Text mb={2}>{children}</Text>;
    },
    h1: (props) => {
        const { children } = props;
        return (
            <div style={{ margin: '1rem 0' }}>
                <Heading as="h1" size="2xl">
                    {children}
                </Heading>
                <Divider orientation="horizontal" />
            </div>
        );
    },
    h2: (props) => {
        const { children } = props;
        return (
            <div style={{ margin: '1rem 0' }}>
                <Heading as="h2" size="xl">
                    {children}
                </Heading>
                <Divider orientation="horizontal" />
            </div>
        );
    },
    h3: (props) => {
        const { children } = props;
        return (
            <div>
                <Heading as="h3" size="lg">
                    {children}
                </Heading>
                <Divider orientation="horizontal" />
            </div>
        );
    },
};
