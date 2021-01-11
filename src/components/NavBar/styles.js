import styled, { css } from "styled-components";
import { AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai'
import { FaVimeoV } from 'react-icons/fa'
import { VscMenu } from 'react-icons/vsc'

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  display: flex;
  align-items: center;
  padding: 1% 6%;
  justify-content: space-between;
  width: 100%;
`;
export const Navs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Logo = styled.p`
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 900;
  @media (min-width: 760px) {
    margin-right: 10px;
  }
`
export const Link = styled.a`
  display: none;

  @media (min-width: 760px) {
    display: flex;
    color: #000;
    cursor: pointer;
    text-decoration: none;
    font-size: clamp(0.3rem, 5vw, 1.3rem);
  }

  ${props => props.works === "true" && css`
    border-bottom: 2px solid #000;
  `}

  ${props => props.about === "true" && css`
    border-bottom: 2px solid #000;
  `}
`
export const IconsBox = styled.div`
  display: flex;
    align-items: center;
    gap: 10px;
`

const Icon = css`
  font-size: 28px;
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