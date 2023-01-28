import { Container } from "./modal";

interface ModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    title: string;
    content: string;
    list?: string | React.ReactNode;
    showList?: boolean
}

export function Modal ({ setOpenModal, title, content, list, showList }: ModalProps) {
    return (
        <Container>
            <button onClick={() => setOpenModal(false)} className="close">
                X
            </button>

            <div className="modal-info">
                <h1>{title}</h1>

                <p>{content}</p>

                {showList && (
                    <ul>
                        <li>{list}</li>
                    </ul>
                )}
            </div>
        </Container>
    )
}