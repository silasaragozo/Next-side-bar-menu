import  styled, {css} from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: ${props => props.theme.bgSecondary};
    width: 90px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    /* box-shadow: 3px 0px 15px 1px rgba(0,0,0,0.05); */
`

export const IconList = styled.div`
    margin-top: 2rem;
    padding: auto;
    display: flex;
    justify-content: center;
    &:hover {
      color: ${props => props.theme.primary};
      cursor: pointer;  
    }
`