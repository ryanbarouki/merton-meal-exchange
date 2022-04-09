import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';


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

export const ClaimModal = ({onSubmit, index}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState({name: ""});

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues, index);
    setOpen(false);
  };

  const handleNameChange = event => {
    setFormValues({...formValues, 
    name: event.target.value});
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Claim</Button>
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
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={handleNameChange}
            />
            </Input>
            <Button onClick={handleSubmit}>Submit</Button>
          </StyledBox>
        </form>
      </Modal>
    </div>
  )
};