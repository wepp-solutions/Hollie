import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 100px auto;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
  

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }

`
export const Card = styled.div`
  width: min(100%, 95%);

  @media (min-width: 760px) {
    width: min(47%, 100%);
  }
`
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 406px;

  .img {
    object-fit: cover;
    object-position: center;
  }
`
export const TitleCard = styled.p`
  margin: 10px 0;
  font-family: 'Raleway';
  font-size: clamp(1rem, 5vw, 1.4rem);
`

export const IntroductionWrapper = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: left;
    flex-direction: column;
    gap: 30px 0;
    
`
export const Title = styled.p`
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    width: min(650px, 100%);
    line-height: 27px;
    white-space: pre-wrap;
`
export const Text = styled.p`
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  text-decoration: underline;
  line-height: 35px;
  cursor: pointer;
`;
export const Footer = styled.div`
  width: 100%;
  margin-top: 30px;
`;
export const TextFooter = styled.p`
  font-size: 22px;
  font-style: normal;
  line-height: 35px;
  cursor: pointer;
`;
