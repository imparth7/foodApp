import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/foodApp/searched/' + input)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0rem 20%;
    div{
        width: 100%;
        position: relative;
    }
    input{
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        color: white;
        padding: .75rem 1.5rem .75rem 2.75rem;
        border-radius: 3rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search