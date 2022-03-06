import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 350px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24rem;
  padding: 2em;
  justify-content: flex-start;
  @media (prefers-color-scheme: dark) {
    background-color: #121212;
    color: white;
  }
`;
export const AddItemModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add Item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Add a meal here
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography>
        </StyledBox>
      </Modal>
    </div>
  )
};