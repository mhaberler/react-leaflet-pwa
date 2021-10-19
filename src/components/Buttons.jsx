import styled from 'styled-components'

const Button = styled.label`
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

export const ButtonInfo = styled(Button)`
    background-color: #141414;
    color: gold;
`

export const ButtonLocation = styled(Button)`
    background-color: rgb(145, 248, 86);
    color: blue;
`

export const ButtonRemove = styled(Button)`
    background-color: rgb(197, 197, 197);
    color: rgb(94, 13, 13);
`

export const ButtonCache = styled(Button)`
    background-color: rgb(61, 100, 105);
    color: whitesmoke;
`
export const InputLabel = styled(Button)`    
    background-color: purple;
    color: white;
`
