import { IconButton, Tooltip, useClipboard } from '@chakra-ui/react';

import { CgCopy, CgCheckO } from 'react-icons/cg';

const CopyContentButton = ({ document }) => {
    const { hasCopied, onCopy } = useClipboard(document.toString());

    return (
        <Tooltip label="Copy content to clipboard">
            {hasCopied ? (
                <IconButton
                    borderRadius="0"
                    colorScheme="green"
                    icon={<CgCheckO />}
                    _focus={'box-shadow: none'}
                />
            ) : (
                <IconButton
                    borderRadius="0"
                    bg="gray.700"
                    icon={<CgCopy />}
                    onClick={onCopy}
                    _focus={'box-shadow: none'}
                />
            )}
        </Tooltip>
    );
};

export default CopyContentButton;
