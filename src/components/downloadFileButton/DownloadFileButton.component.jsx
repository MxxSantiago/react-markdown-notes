import { IconButton, Tooltip } from '@chakra-ui/react';

import { CgSoftwareDownload } from 'react-icons/cg';
import useNotes from '../../hooks/useNotes';

const DownloadFileButton = ({ document }) => {
    const { activeNote } = useNotes();

    const mdArchive = new Blob([document.toString()], { type: 'text/plain' });
    const downloadMdArchive = window.URL.createObjectURL(mdArchive);

    return (
        <a download={`${activeNote.title}.md`} href={downloadMdArchive}>
            <Tooltip label="Download .md file">
                <IconButton
                    borderRadius="0"
                    bg="gray.700"
                    icon={<CgSoftwareDownload />}
                    _focus={'box-shadow: none'}
                />
            </Tooltip>
        </a>
    );
};

export default DownloadFileButton;
