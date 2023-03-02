import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  align-items: center;
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  flex-direction: column;
  height: 442px;
  position: relative;
  width: 300px;
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 260px;
  width: 260px;

  img {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
  }
`;

export const StyleDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  
  h3 {
    font-weight: 700;
  }
  
  h5 {
    margin-top: 4px;
    margin-bottom: 10px;
    font-weight: 700;
  }
`;

export const StyleButton = styled.div`
  align-items: center;
  position: absolute;
  border: none;
  bottom: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  margin: 0px 20px;

  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(1);
  }


  div {
    align-items: center;
    background-color: #f8375d;
    border-radius: 0 4px 4px 0;
    display: flex;
    font-size: 12px;
    font-weight: 700;
    height: 42px;
    width: 208px;
  }

  div:nth-child(1) {
    align-items: center;
    background-color: #c62c4a;
    border-radius: 4px 0 0 4px;
    display: flex;
    justify-content: center;
    height: 42px;
    width: 52px;
  }
`;