import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCreatedUsers,
  selectUserInfo,
} from '../../redux/slices/userSlice';

export default function Presentation() {
  const users = useSelector(selectUserInfo);
  const createdUsers = useSelector(selectCreatedUsers);
  const [allUsers, setAllUsers] = useState([]);
  const [currentImage, setCurrentImage] = useState(allUsers[0]?.avatar);
  useEffect(() => {
    if (users) {
      setAllUsers([...users, ...createdUsers]);
    }
    setCurrentImage(allUsers[0]?.avatar);
  }, [users,allUsers[0],createdUsers]);

  return (
    <div className="presentation-container">
      <div className="presentation-section">
        <h2 className="presentation-title">Presentation</h2>
        <div className="presentation">
          <div className="presentation-column">
            {allUsers &&
              allUsers.map((el, index) => {
                return (
                  <div className="image" key={index} onClick={()=>setCurrentImage(el.avatar)}>
                    <img src={el.avatar} alt=""/>
                  </div>
                );
              })}
          </div>
          <div className="current-presentation">
            <img src={currentImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
