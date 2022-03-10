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

const StyledBox = styled(Box)`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
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
  contact: ""
};

export const AddItemModal = ({onSubmit}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    onSubmit(formValues);
    setOpen(false);
  };

  const handleSelectChange = event => {
    console.log(event.target.value);
    setFormValues({...formValues, 
    mealType: event.target.value});
  };

  const handleDateChange = event => {
    console.log(event.target.value);
    setFormValues({...formValues, 
    date: event.target.value});
  };

  const handleDietChange = event => {
    console.log(event.target.value);
    setFormValues({...formValues, 
    dietary: event.target.value});
  };

  const handleContactChange = event => {
    console.log(event.target.value);
    setFormValues({...formValues, 
    contact: event.target.value});
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Item</Button>
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
            <TextField
              id="outlined-basic"
              label="Dietary"
              variant="outlined"
              onChange={handleDietChange}
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