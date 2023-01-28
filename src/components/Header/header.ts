import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 120px;
    background-color: var(--blue-dark);
    padding: 8px;
    position: absolute;

    h1 {
        margin: 20px 0 0 20px;
    }

    p {
        margin: 10px 0 0 20px;
        color: var(--green-default);
    }

    .back-button {
        width: 200px;
        position: absolute;
        right: 30px;
        top: 40px;
        background-color: transparent;
        border: 2px solid var(--green-default);
        color: var(--green-default)
    }

    .menu-button {
        position: absolute;
        right: 30px;
    }

    a {
        color: var(--platinum);
        font-weight: bold;
    }
`
