import './App.css';
import { MealListing } from './components/MealListing';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { AddItemModal } from './components/AddItemModal';

const Logo = styled.div`
  width: 70px;
  content: url(${props => props.src});
  position: relative;

`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Name = styled.div`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  margin: 10px;
`;

const App = () => {
  return (
    <div className="App">
      <TopBar>
        <Logo src="merton.png"></Logo>
        <Name>MERTON MEALS</Name>
      </TopBar>
      <ButtonContainer>
        <AddItemModal/>
      </ButtonContainer>
      <MealListing/>
    </div>
  );
}

export default App;