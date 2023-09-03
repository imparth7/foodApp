import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from "react-router-dom"
import { veggie_food } from "../apis"

const Veggie = () => {

    const [veggie, setVeggie] = useState([])

    useEffect(() => {
        getVeggie()
    }, [])

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');
        if (check) {
            check !== undefined && setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(veggie_food)
            const data = await api.json()
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
        }
    }

    return (
        <div>
            <Wrapper>
                <h3>Our Vegetarian Picks</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '2.5rem',
                }}>
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Card>
                                </Link>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: end;
    justify-content: center;
    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        z-index: 2;
        color: #fff8;
        text-align: center;
        font-size: 1rem;
        margin-bottom: 2.5rem;
        display: flex;
    }
`
const Gradient = styled.div`
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85))
`

export default Veggie