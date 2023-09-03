import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { searched_food_fun } from '../apis';

const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

    const getSearched = async (name) => {
        const api = await fetch(searched_food_fun(name))
        const data = await api.json()
        console.log(data.results)
        setSearchedRecipes(data.results)
    }

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={`/foodApp/recipe/${item.id}`}>
                            <img src={item.image} alt={item.title} title={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 1rem;
        object-fit: cover;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Searched