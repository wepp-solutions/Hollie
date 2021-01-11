import styled from 'styled-components';
import { AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'
import { FaVimeoV } from 'react-icons/fa'

export const Container = styled.div`
  width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 2%;

    > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    p {
        font-size: 20px;
    }
`;

const Icon = `
    font-size: 30px;
    color: #333;
`
export const IconDribbble = styled(AiOutlineDribbble)`
    ${Icon}
`
export const IconInsta = styled(AiOutlineInstagram)`
    ${Icon}
`
export const IconVimeo = styled(FaVimeoV)`
    ${Icon}
`