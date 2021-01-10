import styled, { css } from "styled-components";
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { VscMenu } from 'react-icons/vsc'

export const Container = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
export const Navs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Logo = styled.p`
  font-size: clamp(1.5rem, 5vw, 2rem);
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
  display: none;

  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const Icons = css`
  font-size: 23px;
`
export const InstagramIcon = styled(FiInstagram)`
  ${Icons}
`
export const TwitterIcon = styled(FiTwitter)`
  ${Icons}
`
export const MenuIcon = styled(VscMenu)`
  font-size: 33px;

  @media (min-width: 760px) {
    display: none;
  }
`
