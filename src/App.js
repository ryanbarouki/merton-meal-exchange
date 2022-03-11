import './App.css';
import { MealListing } from './components/MealListing';
import styled from 'styled-components';
import { AddItemModal } from './components/AddItemModal';
import { useState } from 'react';

const Logo = styled.div`
  width: 50px;
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
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleClaim = ({name}, index) => {
    const newItems = [...items];
    newItems[index].claimed = name;
    setItems(newItems);
  };

  return (
    <div className="App">
      <TopBar>
        <Logo src="merton.png"></Logo>
        <Name>MERTON MEAL EXCHANGE</Name>
      </TopBar>
      <ButtonContainer>
        <AddItemModal
          onSubmit={handleAddItem} 
        />
      </ButtonContainer>
      <MealListing
        items={items} 
        onClaim={handleClaim}
      />
    </div>
  );
}

export default App;