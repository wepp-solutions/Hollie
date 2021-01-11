import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 100px auto;
  width: 95%;
  height: 100%;
`;
export const Header = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
`
export const WrapperContact = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    margin: 40px 0;
`
export const Texts = styled.div`
    ${props => props.one && css`
        p:nth-child(1) {
            font-size: clamp(1rem, 5vw, 1.1rem);
            font-weight: 300;
            margin-bottom: 20px;
        }
        p:nth-child(2) {
            font-size: clamp(1.4rem, 5vw, 1.7rem);
            font-weight: 600;
            max-width: 400px;
        }
    `}
    ${props => props.two && css`
        max-width: 700px;

        p {
            font-size: clamp(1.4rem, 5vw, 1.5rem);
        }
        button {
            color: #eee;
            border: none;
            outline: none;
            padding: 10px 50px;
            margin: 10px 0;
            font-size: 18px;
            background: #457b9d;

        }
    `}
`