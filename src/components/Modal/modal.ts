import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    top: 0;

    .close {
        position: relative;
        top: 50px;
        left: 115rem;
        font-size: 20px;
        padding: 5px;
        width: 40px;
        color: var(--green-default);
        background: transparent;
        border: 3px solid var(--green-default);
        border-radius: 50%;
        cursor: pointer;
    }

    .modal-info {
        position: relative;
        padding: 40px;
        top: 100px;
        width: 100rem;
        height: 50rem;
        background: var(--gray-800);
        border-radius: 20px;
        margin: 0 auto;

        h1 {
            text-align: center;
            color: var(--gray-200);
        }

        p {
            padding-top: 50px;
            padding-left: 50px;
        }
    }
`