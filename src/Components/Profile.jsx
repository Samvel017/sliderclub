import * as React from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/userSlice';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector(selectUser)
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate('/')
  };

  return (
    <div className='profile'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className='profile-logo'>
          <img src={`${user.imageUrl}`} alt="" />
        </span>
        <span className='profile-name'>
          {user.name}
        </span>
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
