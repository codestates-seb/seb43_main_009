import Layout from '../../common/Layout';
import { MyDesign, InformationBox, Heading, Button } from '../../style/MyStyle';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import picture from '../../../public/rabbit.jpg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUserData,
  updateUserData,
  uploadUserImage,
} from '../../redux/MypageSlice';

const Mypage = () => {
  const [displayName, setDisplayName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('');
  const [allergy, setAllergy] = useState('');
  const { userId } = useParams();
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.mypage.data);
  const status = useSelector((state) => state.mypage.status);

  console.log(myData);
  const inputRef = React.useRef();
  const [pictureSrc, setPictureSrc] = useState(myData.profileImgUrl);
  const fileInputRef = React.useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  useEffect(() => {
    console.log(status);
    {
      dispatch(fetchUserData(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (myData) {
      setDisplayName(myData.displayName);
      setEmail(myData.email);
      setPictureSrc(myData.profileImgUrl || picture);
    }
  }, [myData]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPictureSrc(reader.result);
        dispatch(uploadUserImage(file))
          .unwrap()
          .then((uploadedImage) => {
            setPictureSrc(uploadedImage.profileImgUrl);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      reader.readAsDataURL(file);
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

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
    dispatch(updateUserData({ displayName, email, profileImgUrl: pictureSrc }));
  };
  if (!myData) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <MyDesign>
        <div className="allcomm">
          <div className="allcomm1">
            <img src={pictureSrc}></img>
            {isEditing && (
              <div className="button-box">
                <Button onClick={triggerFileInput}>Upload Image</Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </div>
            )}
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
