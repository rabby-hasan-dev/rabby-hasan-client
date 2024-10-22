import { Button } from "@nextui-org/button";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { PlusIcon } from "lucide-react";
import { ReactNode } from "react";

interface IProps {
    buttonText: string;
    title: string;
    children: ReactNode;
    buttonVariant?:
    | "light"
    | "solid"
    | "bordered"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
    buttonClassName?: string;
}

export default function RHModal({
    buttonText,
    title,
    children,
    buttonVariant = "light",
    buttonClassName,
}: IProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button
                endContent={<PlusIcon />}
                size="sm"
                className={buttonClassName}
                variant={buttonVariant}
                onPress={onOpen}
            >

                {buttonText}
            </Button>
            <Modal
                scrollBehavior='outside'
                backdrop="opaque"
                placement='center'
                size="2xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>{children}</ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}