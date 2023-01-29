import styled from "styled-components";

export const Container = styled.div`
    
    .img-profile {
        position: absolute;
        border-radius: 50%;
        top: 150px;
        left: 41%;
        width: 350px;
        border: 5px solid var(--green-default);
        z-index: 1;
    }

    .social-media {
        width: 330px;
        height: 400px;
        position: relative;
        background-color: var(--blue-dark);
        margin: 0 auto;
        top: 350px;
        padding: 40px;
        z-index: 0;
        align-items: center;
        border-radius: 40px;
        
        h1 {
            position: relative;
            top: 120px;
            left: 35px;
        }

        h3 {
            position: relative;
            top: 130px;
            left: 20px;
            color: var(--gray-300)
        }

        .links {
            position: relative;
            top: 200px;
            left: 60px;

            a {
                margin-right: 13px;
                font-size: 25px;
                color: var(--green-default);
            }
        }
    }
`