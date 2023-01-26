import styled from "styled-components";

export const Container = styled.div`
  form {
    width: 370px;
    heith: 600px;
    padding: 32px 32px;
    gap: 20px;
    position: relative;
    top: 300px;
    background-color: var(--gray-700);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 8px;
  }

  .title {
    font-size: 32px;
    font-weight: bold;
  }

  .sub-text {
    color: var(--gray-300);
  }

  input {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    background-color: var(--blue-dark);
    color: var(--platinum);
    font-size: 14px;
    border: none;
    transition: all 0.4s;

    &:hover {
        filter: brightness(0.8);
    }
  }

  input::placeholder {
    color: var(--platinum);
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 14px;
    background-color: var(--green-default);
    border: none;
    border-radius: 8px;
    font-weight: bold;
    color: var(--blue-dark);
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
        filter: brightness(0.8);
    }
  }

  .google {
    background: transparent;
    border: 1px solid var(--green-default);
    color: var(--green-default);
  }

  .not-logged {
    margin-top: 32px;
    color: var(--gray-300);

    a {
        color: var(--green-default);
        margin-left: 4px;
    }
  }
`
