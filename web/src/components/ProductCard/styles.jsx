import styled from 'styled-components';

export const ProductCardContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 350px;
  background-color: #fff;
  border-radius: 4px;

  position: relative;

`;


export const ImageContainer = styled.div`

width: 200px;
height: 200px;
/* background-color: #fff; */
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

export const StyleButton = styled.div`
  position: absolute;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* width: 100%; */
  margin-left: 20px;
  margin-right: 20px;
  /* background-color: #c62c4a; */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  bottom: 20px;

  transition: all 0.3s ease-in-out;
  /* -webkit-transition-duration: 0.3s; Safari */

  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(1);
    /* visibility: hidden; */
  }


  div {
    font-size: 12px;
    font-weight: 700;
    background-color: #c62c4a;
    /* background-color: #c34; */
  }

  div:nth-child(1) {
    /* font-size: 14px; */
    font-weight: 700;
    /* background-color: #95243a; */
    background-color: red;
    /* color: #442; */
    /* width: 100%; */
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px 0 0 4px;
  }
`;