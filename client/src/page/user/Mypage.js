import Layout from '../../common/Layout';
import { MyDesign } from '../../style/MyStyle';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import picture from '../../../public/3.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../redux/MypageSlice';

const Mypage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [allergy, setAllergy] = useState('');
  const token = localStorage.getItem('accessToken');
  const { userId } = useParams();
  console.log(token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.mypage.user);
  const status = useSelector((state) => state.mypage.status);
  console.log(user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData(userId));
    }
  }, [status, dispatch, userId]);
  console.log(user);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
  };
  if (!user) {
    return <div>Loading...</div>; // Or some loading spinner
  }
  return (
    <Layout>
      <MyDesign>
        <div className="allcomm">
          <div className="allcomm1">
            <img src={picture}></img>
          </div>
          <div className="allcomm2">
            <div className="information-box">
              <h1>내정보</h1>
              {isEditing ? (
                <button onClick={handleSaveButtonClick}>저장</button>
              ) : (
                <button onClick={handleEditButtonClick}>정보변경</button>
              )}
            </div>
            <div className="content-box">
              {isEditing ? (
                <>
                  name :
                  <input
                    onChange={(e) => handleInputChange(e, setName)}
                    value={name}
                  />
                  email :
                  <input
                    onChange={(e) => handleInputChange(e, setEmail)}
                    value={email}
                  />
                  allergy :
                  <input
                    onChange={(e) => handleInputChange(e, setAllergy)}
                    value={allergy}
                  />
                </>
              ) : (
                <>
                  <h2>name : {user.displayName}</h2>
                  <h2>email : {user.email}</h2>
                  <h2>allergy : {allergy}</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </MyDesign>
    </Layout>
  );
};

export default Mypage;
