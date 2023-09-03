import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { cuisine_food_fun } from '../apis'

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])


    const getCuisine = async (name) => {
        const api = await fetch(cuisine_food_fun(name))
        const data = await api.json()
        setCuisine(data.results)
    }

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
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

const Grid = styled(motion.div)`
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

export default Cuisine