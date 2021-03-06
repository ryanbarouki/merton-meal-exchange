import './App.css';
import { MealListing } from './components/MealListing';
import styled from 'styled-components';
import { AddItemModal } from './components/AddItemModal';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    axios.get('/.netlify/functions/read-all')
    .then(response => {
      setItems(response.data);
    }, error => {
      console.log(error);
    });
  },[]);

  const handleAddItem = (item) => {
    setItems([...items, item]);

    axios.post('/.netlify/functions/create', item)
      .then((response) => {
      }, (error) => {
        console.log(error);
      });
  };

  const handleClaim = ({name}, index) => {
    const newItems = [...items];
    newItems[index] = {...items[index],
      claimed: name
    };
    setItems(newItems);

    axios.put('/.netlify/functions/update', newItems[index])
    .then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  };

  const handleDelete = (item, index) => {
    setItems(items.filter((val, idx) => index !== idx));
    axios.post('/.netlify/functions/delete', item)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

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
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;