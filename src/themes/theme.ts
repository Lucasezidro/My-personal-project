import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
    :root {
        --gray-900: #051923;
        --gray-800: #0D1B2A;
        --gray-700: #1B263B;
        --gray-400: #415A77;
        --gray-300: #778DA9;
        --gray-200: #e4e4e7;

        --yellow-default: #F6CA83;
        --platinum: #E0E1DD;
        --gray-cool: #909CC2;
        --blue-dark: #0D324D;
        --green-default: #49DCB1;
        --blue-light: #008BF8;
        
        --yellow-600: #ca8a04;
        --yellow-500: #f59e0b;
        --yellow-400: #fbbf24;
        --yellow-300: #fde047;
        --yellow-200: #fde68a;
        --yellow-50: #fefce8;

        --purple-900: #4c1d95;
        --purple-800: #5b21b6;
        --purple-700: #6d28d9;
        --purple-600: #7c3aed;
        --purple-500: #8b5cf6;
    }

    * {
        font-family: Inter;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        body {
        background-color: var(--gray-900); 
        color: var(--platinum)
    }
    a {
        text-decoration: none;
        transition: 0.5s;
    }
    a:hover {
        filter: brightness(0.8);
    }
`
