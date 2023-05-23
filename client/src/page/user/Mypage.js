import Layout from '../../common/Layout';
import { MyDesign, InformationBox, Heading, Button } from '../../style/MyStyle';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import picture from '../../../public/rabbit.jpg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUserData } from '../../redux/MypageSlice';

const Mypage = () => {
  const [displayName, setDisplayName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [allergy, setAllergy] = useState('');
  // const token = localStorage.getItem('accessToken');
  const { userId } = useParams();
  // console.log(token);
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.mypage.data);
  // const user = useSelector((state) => state.mypage.user);
  const status = useSelector((state) => state.mypage.status);
  console.log(myData);
  const inputRef = React.useRef();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserData(userId));
    }
  }, [status, dispatch, userId]);

  useEffect(() => {
    if (myData) {
      setDisplayName(myData.displayName);
      setEmail(myData.email);
    }
  }, [myData]);

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setDisplayName(myData.displayName);
    setEmail(myData.email);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
    dispatch(updateUserData({ displayName, email }));
  };
  if (!myData) {
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
            <InformationBox>
              <Heading>내정보</Heading>
              {isEditing ? (
                <Button onClick={handleSaveButtonClick}>저장</Button>
              ) : (
                <Button onClick={handleEditButtonClick}>정보변경</Button>
              )}
            </InformationBox>
            <div className="content-box">
              {isEditing ? (
                <>
                  <h2>
                    name :
                    <input
                      ref={inputRef}
                      onChange={(e) => handleInputChange(e, setDisplayName)}
                      value={displayName}
                    />
                  </h2>
                  <h2>email : {email}</h2>
                  <h2>allergy : {myData.allergy}</h2>
                </>
              ) : (
                <>
                  <h2>name : {myData.displayName}</h2>
                  <h2>email : {myData.email}</h2>
                  <h2>allergy : {myData.allergy}</h2>
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
