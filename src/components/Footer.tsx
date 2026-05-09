import styled from "styled-components";


const Container = styled.footer`
    width: 100%;
    padding: 20px;
    background-color: ${({ theme })=> theme.colors.footer};

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${({ theme }) => theme.typography.size.sm};
`;


export default function Footer() {
    return(
        <Container>© {new Date().getFullYear()} 0XStream. All rights reserved.</Container>
    );
}