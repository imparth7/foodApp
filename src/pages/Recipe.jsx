import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import { recipe_detail } from '../apis';

const Recipe = () => {

    const params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("Instructions");

    const fetchDetails = async (name) => {
        const api = await fetch(recipe_detail(name))
        const data = await api.json()
        setDetails(data)
    }

    useEffect(() => {
        fetchDetails(params.name)
    }, [params.name])

    return (
        <DetailWrapper>
            <Banner>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} title={details.title} />
            </Banner>
            <Info>
                <Button
                    className={activeTab === "Instructions" ? 'active' : null}
                    onClick={() => setActiveTab("Instructions")}
                >Instructions</Button>
                <Button
                    className={activeTab === "Ingredients" ? 'active' : null}
                    onClick={() => setActiveTab("Ingredients")}
                >Ingredients</Button>
                {
                    activeTab === "Instructions" &&
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                }
                {
                    activeTab === "Ingredients" &&
                    <ul>
                        {details.extendedIngredients.map((ingredient) => {
                            return (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            )
                        })}
                    </ul>
                }
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    width: 100%;
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
        font-weight: 400;
    }
    ul{
        margin-top: 2rem;
        margin-left: 2rem;
    }
`

const Banner = styled.div`
    width: 40%;
    img{
        width: 100%;
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    width: 60%;
    margin-left: 2rem;
    h3{
        font-size: 1.2rem;
        font-weight: 400;
    }
`

export default Recipe