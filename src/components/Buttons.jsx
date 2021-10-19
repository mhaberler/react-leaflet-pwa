import styled, { css } from 'styled-components'

const Button = css`
    display: flex;
    border: 1px solid goldenrod;
    border-radius: 50%;
    margin-left: .7rem;
    cursor: pointer;
    font-size: 1.5rem;
    width: 3.2rem;
    height: 3.2rem;
    align-items: center;
    justify-content: center;

    &:hover {
        transition: transform 100ms;
        transform: scale(1.1);
    }
`

export const ButtonInfo = styled.button`
    ${Button}
    background-color: #141414;
    color: gold;
`

export const ButtonLocation = styled.button`
    ${Button}
    /* background-color: rgb(145, 248, 86); */
    color: blue;
`

export const ButtonRemove = styled.button`
    ${Button}
    background-color: rgb(197, 197, 197);
    color: rgb(94, 13, 13);
`

export const ButtonCache = styled.button`
    ${Button}
    background-color: rgb(61, 100, 105);
    color: whitesmoke;
`
export const InputLabel = styled.label`
    ${Button}    
    background-color: purple;
    color: white;
`

/**
 * USO DE «MIXINS» EN STYLES COMPONENTS:
 * https://www.youtube.com/watch?v=YH-B6I-jqtQ
 */
