import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { styled } from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <Logo to={`/foodApp`}>
                        <GiKnifeFork />
                        <h2>Delicious</h2>
                    </Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
                <Dev>Developed and Maintained by Parth (<LinkDev to={`https://bento.me/imparth`}>imParth.dev</LinkDev>)</Dev>
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Luxurious Script', cursive;
    letter-spacing: .1em;
    line-height: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    gap: .5em;
    svg{
        font-size: 2.5rem;
    }
`
const Nav = styled.div`
    padding: 4rem 0rem;
`
const Dev = styled.div`
    padding: 0 0 2rem 0;
    text-align: center;
`
const LinkDev = styled(Link)`
    font-weight: 600;
    text-decoration: underline;
`

export default App;
