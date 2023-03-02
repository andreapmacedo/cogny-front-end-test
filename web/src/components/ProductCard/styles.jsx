import styled from 'styled-components';

export const ProductCardContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 350px;
  background-color: #fff;
  border-radius: 4px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */


  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    background-color: #c62c4a;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    /* position: relative; */
    /* bottom: 0; */

    transition: all 0.3s ease-in-out;
    

    &:hover {
      transform: scale(1.05);
    }
    
    &:active {
      transform: scale(1);
      /* visibility: hidden; */
    }


    p {
      font-size: 12px;
      font-weight: 700;
      background-color: #c62c4a;
    }

  }



`;


export const ImageContainer = styled.div`

width: 200px;
height: 200px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;

img {
    /* height: 100%; */
    width: 100%;

    overflow: hidden;
    object-fit: cover;
  }

`;

export const StyleDescription = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  h3 {
    height: 50px;
    /* font-size: 14px; */
    font-weight: 700;
    margin: 10px 0;
    background-color: #fff;
  }
  h4 {
    height: 50px;
    /* font-size: 14px; */
    font-weight: 700;
    margin: 10px 0;
    background-color: #fff;
  }


`;