import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgb(71, 71, 71);
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    align-items: center;
    min-width: 320px;
    max-width: 40%;
`

const Image = styled.img`
    border-radius: 50%50%;
    width: 200px;
    height: 200px;
`

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <Div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Cal. {calories}</p>
            <Image src={image} alt="" />
        </Div>
    )
}

export default Recipe;