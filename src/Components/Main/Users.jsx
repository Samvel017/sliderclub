import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, selectCreatedUsers, selectUserInfo } from '../../redux/slices/userSlice';
import IconButton from '@mui/material/IconButton';
import BasicTabs from './Tabs';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BasicModal from './Modal';

export default function Users() {
  const users = useSelector(selectUserInfo);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const createdUsers = useSelector(selectCreatedUsers)
  const allUsers = users && [...users,...createdUsers]

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(`${value + 1}`));
  }, [value]);
  return (
    <div className="user-container">
      <BasicTabs value={value} setValue={setValue} />
      <div className="users-section">
        {allUsers &&
          allUsers?.map((el, index) => {
            return (
              <div className="user" key={index}>
                <div className="user-img">
                  <img src={el.avatar} alt="" />
                </div>
                <div className="user-name">
                  <span>{el.first_name}</span>
                  <span>{el.last_name}</span>
                </div>
                <div className="user-email">{el.email}</div>
                {el.createdUser && <span style={{color: '#000', opacity:'0.3'}}>(Created user)</span>}
              </div>
            );
          })}
      </div>
      <div className="add-user-btn">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={()=>setOpen(true)}
        >
          <AddCircleIcon fontSize='large' />
        </IconButton>
      </div>
      <BasicModal open={open} setOpen={setOpen}/>
    </div>
  );
}
