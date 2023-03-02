import styled from 'styled-components';

export const StyleCard = styled.div`
  display: grid; 
  grid-template-columns: 15% 50% 15% 20%;
  grid-template-areas:
  "image description quantity subTotal";
  
  width: 100%;
  background-color: #fff;
  align-items: center;
  border-bottom: 1px solid #ccc;
  
`;

export const StyleImage = styled.div`
grid-area: image;
background-color: #fff;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;

img {
    width: 100px;    
    height: 100px;
  }
`;

export const StyleDescription = styled.div`
  grid-area: description;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  h5, h3 {
    font-size: 14px;
    background-color: #fff;
  }
`;

export const StyleQuantity = styled.div`
  grid-area: quantity;
  width: 48px;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #aaa;
  font-style: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const StyleSubTotal = styled.div`
  grid-area: subTotal;
  background-color: #fff;
  display: flex;
  align-items: center;
`;