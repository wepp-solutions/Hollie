import styled from "styled-components";
import { AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'
import { FaVimeoV } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 100px auto;
  width: 95%;
  height: 100%;
`;
export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  @media (min-width: 800px) {
    width: 45%;
  }
`;
export const Footer = styled.div`
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