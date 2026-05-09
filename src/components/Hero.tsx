import styled from "styled-components";

const Container = styled.section`
    height: 100%;
    height: 70vh;

    display: flex;
    align-items: center;

    padding: 0 60px;
    position: relative;
    background: url("https://image.tmdb.org/t/p/original/your-image.jpg") center/cover no-repeat;
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(
        to right,
        
        rgba(0,0,0,0.9),
        rgba(0,0,0,0.4),
        rgba(0,0,0,0.9)
    );
`;

const Content = styled.div`
    position: relative;
    max-width: 48px;
    z-index: 2;
`;

const Title = styled.h1`
    font-size: ${({theme}) => theme.typography.size.xl};
    margin-bottom: 16px;
`;

const Description = styled.p`
    font-size: ${({theme}) => theme.typography.size.md};
    color: ${({theme}) => theme.colors.paragraph};
    margin-bottom: 24px;
    line-height: 1.5;
`;

const ButtonGroup = styled.div`
    display: flex;
    padding: 12px;
`;

const Button = styled.button<{ $primary?: boolean }>`
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: ${({theme}) => theme.typography.weight.medium};
    background: ${({ $primary, theme }) => $primary ? theme.colors.primary : "rgba(255, 255, 255, 0.1"};
    color: ${({ $primary }) => ($primary ? "#000" : "#fff")};

    transition: 0.3s ease;
    &:hover { transform: scale(1.05); }
`;

export default function Hero() {
    return (
        <Container>
            <Overlay />

            <Content>
                <Title>Interstellar</Title>

                <Description>
                    A team of explorers travel through a wormhole in space in an attempt
                    to ensure humanity's survival.
                </Description>

                <ButtonGroup>
                    <Button $primary>Play</Button>
                    <Button>More Info</Button>
                </ButtonGroup>
            </Content>
        </Container>
    );
}