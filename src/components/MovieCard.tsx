import styled from "styled-components";
import type { Movie } from "../types/movie";


const Card = styled.div`
    width: 160px;
    height: 240px;

    border-radius: 12px;
    overflow: hidden;
    background: #222;

    position: relative;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        transform: scale(1.06);
        box-shadow: 0 0 20px ${({theme}) => theme.colors.primary};
    }
`;

const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Overlay = styled.div`
    position: relative;
    inset: 0;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) transparent);
    opacity: 0;
    transition: 0.3s ease;

    ${Card}:hover & { opacity: 1; }
`;

const Title = styled.span`
    position: absolute;
    bottom: 10px;
    left: 10px;

    color: #fff;
    font-size: 14px;
    font-weight: 500;
`;



type Props = { movie: Movie; }



export default function MovieCard({ movie } : Props) {
    return(
        <Card>
            <Poster src={movie.poster} alt={movie.title} />
            <Overlay />
            <Title>{movie.title}</Title>
        </Card>
    );
}