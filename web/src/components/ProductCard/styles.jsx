import styled from 'styled-components';

export const ProductCardContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 350px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    /* border-radius: 10px 10px 0 0; */
  }


`;