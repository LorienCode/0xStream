import styled from "styled-components";


const Container = styled.div`
    padding: 24px;
`;

const Section = styled.section`
    margin-bottom: 40px;
`;

const Title = styled.h2`
    margin-bottom: 16px;
    font-size: ${({theme}) => theme.typography.size.lg};
    color: ${({theme}) => theme.colors.title};
`;

const Row = styled.div`
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Card = styled.div`
    min-height: 160px;
    height: 220px;

    background: #222;
    border-radius: 12px;

    flex-shrink: 0;
    transition: 0.3s ease;

    &:hover {
        transform: scale(1.05);
        border: 1px solid ${({theme}) => theme.colors.primary};
    }
`;

export default function Home() {
    return(
        <Container>
            <Section>
                <Title>Trending</Title>
                <Row>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Row>
            </Section>

            
            <Section>
                <Title>Movies</Title>
                <Row>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Row>
            </Section>

            
            <Section>
                <Title>Series</Title>
                <Row>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Row>
            </Section>

            
            <Section>
                <Title>Anime</Title>
                <Row>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Row>
            </Section>
        </Container>
    );
}