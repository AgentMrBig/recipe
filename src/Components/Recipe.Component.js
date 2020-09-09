import React, {useEffect, useState} from 'react';
import styled from 'styled-components';


const Div = styled.div`
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgb(71, 71, 71);
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    align-items: center;
    min-width: 320px;
    max-width: 450px;
    width: 450px;
`

const Image = styled.img`
    border-radius: 10% 10%;
    width: 200px;
    height: 200px;
`

const Title = styled.h1`
    border: 1px solid red;
    max-width:90%;
    text-align: center;
    margin-top: 0px;
`

const StepsContainer = styled.div`
    border: 1px solid blue;
    overflow: auto;
    text-overflow: ellipsis;
    width: 100%;
    
    max-height: 300px;
    margin-top: 20px;
`

const Steps = styled.ol`
    clear: both;
    list-style: none;
    padding-left: 2%;
`

const StepsLi = styled.li`
    margin: 2em 0;
    padding-top: 1em;
    display: block;
    position: relative;
    counter-increment: inst;
    

    &:after{
        content: counter(inst);
  
        background: rgba(255, 150, 0, 0.35);
        color: #fff;
        
        font-size: 1em;
        font-weight: 700;
        font-style: italic;
        text-shadow: 1px 1px rgba(255, 150, 0, 0.5);
        
        border-radius: 0 0.675em 0.675em 0;
        font-size: 1.5em;
        text-align: center;
        
        padding-top: 0;
        padding-left: 2.25%;
        left: -5%;
        top: -0.65em;
        height: 1.35em;
        width: 1.35em;
        position: absolute;
        
        transition: all 0.2s ease-in-out;
        
        z-index: 2;
    }
`

const Recipe = ({title, calories, image, ingredients}) => {

    

    return(
        <Div>
            <Title>{title}</Title>
            <Image src={image} alt="" />
            <StepsContainer>
            <Steps>
                {ingredients.map((ingredient, index) => (
                    <StepsLi key={index}>{ingredient.text}</StepsLi>
                ))}
            </Steps>

            </StepsContainer>
            
            <p>Cal. {calories}</p>
            
        </Div>
    )
}

export default Recipe;