import styled from 'styled-components';

export const CardContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 350px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  

  &:hover {
    transform: scale(1.05);
  }
`;


export const ImageContainer = styled.div`


/* width: 100%; */
width: 200px;
height: 200px;
/* padding: 10px; */
/* height: 300px; */
/* object-fit: cover; */

img {
    height: 100%;
    width: 100%;

    overflow: hidden;
    object-fit: cover;
  }

`;