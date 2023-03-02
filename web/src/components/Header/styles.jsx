import styled from 'styled-components';

export const HeaderContainer = styled.div`

  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  top: 0;
  /* position: fixed; */
  /* z-index: 100; */
  background-color: #191919;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    width: 10rem;
    height: 3rem;
    background-color: #fff;
    background-color: #191919;
    border-radius: 0.5rem;
    cursor: pointer;  
  }
    
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    
    h3 {
      align-self: flex-end;
    }
    
    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;  
    }

    p {
      color: #999;
      padding-right: 4px;
      font-style: bolder;
    }
  }
  
`;