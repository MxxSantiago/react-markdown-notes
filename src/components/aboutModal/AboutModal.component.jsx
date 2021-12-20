import {
    Divider,
    Heading,
    Link,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    UnorderedList,
} from '@chakra-ui/react';

import { CgExternal } from 'react-icons/cg';

const AboutModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            size="lg"
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent mx="5">
                <ModalHeader bg="gray.600">About</ModalHeader>
                <Divider />
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Heading as="h4" size="md" mt="3" mb="2">
                        Markdown resources
                    </Heading>
                    <UnorderedList>
                        <ListItem>
                            <Link
                                href="https://www.markdownguide.org/basic-syntax/"
                                isExternal
                                color="blue.200"
                            >
                                Learn the basic Syntax
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://www.markdownguide.org/extended-syntax/"
                                isExternal
                                color="blue.200"
                            >
                                Learn the extended Syntax
                            </Link>
                        </ListItem>
                    </UnorderedList>
                    <Divider my="3" />
                    <Link
                        d="flex"
                        href="https://github.com/MxxSantiago/react-markdown-notes"
                        isExternal
                        alignItems="center"
                    >
                        Project source code{' '}
                        <CgExternal style={{ marginTop: '3px' }} />
                    </Link>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default AboutModal;
