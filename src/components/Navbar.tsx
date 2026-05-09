import styled from "styled-components";

const Nav = styled.nav`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 24px;
`;

const Menu = styled.div`
    display: flex;
    gap: 20px;

    a {
        color: ${({ theme }) => theme.colors.subtitle};
        font-size: ${({ theme }) => theme.typography.size.md};
        transition: 0.3s;

        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;


export default function Navbar() {
    return(
        <Nav>
            {/* logo extenso to desk && short to mobile */}

            <Menu>
                <a href="#">Home</a>
                <a href="#">Movies</a>
                <a href="#">Series</a>
                <a href="#">Animes</a>
            </Menu>
        </Nav>
    )
}