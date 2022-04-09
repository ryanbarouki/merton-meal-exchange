import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 as uuid } from 'uuid';

const StyledBox = styled(Box)`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24rem;
  padding: 2em;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* @media (prefers-color-scheme: dark) {
    background-color: #121212;
    color: white;
  } */
`;

const Input = styled.div`
  margin: 10px 10px;
`;

const defaultValues = {
  mealType: "",
  date: "",
  dietary: "",
  extra_diet: "",
  contact: ""
};

export const AddItemModal = ({onSubmit}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(uuid())
    onSubmit({...formValues, id: uuid()});
    setOpen(false);
  };

  const handleSelectChange = event => {
    setFormValues({...formValues, 
    mealType: event.target.value});
  };

  const handleDateChange = event => {
    setFormValues({...formValues, 
    date: event.target.value});
  };

  const handleDietChange = event => {
    setFormValues({...formValues, 
    dietary: event.target.value});
  };

  const handleExtraDietChange = event => {
    setFormValues({...formValues, 
    extra_diet: event.target.value});
  };

  const handleContactChange = event => {
    setFormValues({...formValues, 
    contact: event.target.value});
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Add Item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <StyledBox
            component="form"
            noValidate
            autoComplete="off"
          >
            <Input>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Meal Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Meal Type"
                onChange={handleSelectChange}
                defaultValue=""
              >
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Early Supper">Early Supper</MenuItem>
                <MenuItem value="Formal Hall">Formal Hall</MenuItem>
              </Select>
            </FormControl>
            </Input>
            <Input>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                label="Date"
                type="date"
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            </Input>
            <Input>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Dietary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Dietary"
                onChange={handleDietChange}
                defaultValue=""
              >
                <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                <MenuItem value="Standard">Standard</MenuItem>
              </Select>
            </FormControl>
            </Input>
            <Input>
            <TextField
              id="outlined-basic"
              label="Extra Dietary"
              variant="outlined"
              onChange={handleExtraDietChange}
            />
            </Input>
            <Input>
            <TextField
              id="outlined-basic"
              label="Contact Details"
              variant="outlined"
              onChange={handleContactChange}
            />
            </Input>
            <Button onClick={handleSubmit}>Submit</Button>
          </StyledBox>
        </form>
      </Modal>
    </div>
  )
};