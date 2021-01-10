import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 100px auto;
`;
export const TextsTop = styled.div`
    width: min(700px, 100%);
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: left;
    text-align: left;
`
export const Title = styled.p`
    font-size: clamp(1.7rem, 5vw, 2rem);
`
export const Desc = styled.p`
    font-size: clamp(0.4rem, 4vw, 1.3rem);
`
export const ImageBox = styled.div`
    margin: 30px 0;
    position: relative;
    height: 400px;
    max-width: 600px;

    .img {
        object-fit: cover;
        object-position: center;
    }
`