import { Container } from "./modal";

interface ModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    title: string;
    content: string | React.ReactNode;
    icon?: React.ReactNode;
}

export function Modal ({ setOpenModal, title, content, icon }: ModalProps) {
    return (
        <Container>
            <button onClick={() => setOpenModal(false)} className="close">
                X
            </button>

            <div className="modal-info">
                <div className="content">
                    <h1>{title} |</h1>
                    <div className="icon">
                        {icon}
                    </div>
                </div>

                <div>{content}</div>

            </div>
        </Container>
    )
}