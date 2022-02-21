import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { ImageUpload } from './ImageUpload';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/userSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  const [avatar, setImage] = useState([]);
  const [email, setEmail] = useState([]);
  const [first_name, setFirstName] = useState([]);
  const [last_name, setLastName] = useState([]);
  const dispatch = useDispatch();

  const addNewUser = () => {
    if (
      avatar.length !== 0 &&
      email !== '' &&
      first_name !== '' &&
      last_name !== ''
    ) {
      const user = {
        email,
        avatar,
        first_name,
        last_name,
        createdUser: true,
      };
      dispatch(addUser(user));
      setOpen(false);
      setImage([])
      setEmail('')
      setFirstName('')
      setLastName('')
    } else {
      alert('Please fill all inputs!');
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='modal-container'
      >
        <Box sx={style}>
          <h3 className="modal-title">Add User</h3>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ImageUpload setImage={setImage} />
          <Button variant="contained" onClick={addNewUser}>
            ADD USER
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
