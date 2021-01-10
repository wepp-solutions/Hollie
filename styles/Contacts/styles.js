import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 100px auto 10px auto;
`;
export const TitleTop = styled.p`
    font-size: clamp(1.7rem, 5vw, 2rem);
    width: min(700px, 100%);
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    width: min(700px, 100%);

    > label {
        font-size: clamp(1rem, 5vw, 1.5rem);
    }
    > input {
        background: #e9ecef;
        border: none;
        outline: none;
        font-size: 18px;
        padding: 10px 20px;
    }
    > textarea {
        background: #e9ecef;
        border: none;
        outline: none;
        font-size: 18px;
        height: 200px;
        resize: none;
        padding: 10px 20px;
    }
`