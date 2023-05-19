import Layout from '../../common/Layout';
import { MyDesign } from '../../style/MyStyle';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from '../../../public/3.png';
import { useState } from 'react';

const Mypage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [allergy, setAllergy] = useState('');

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
  };
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
                  <h2>name : {name}</h2>
                  <h2>email : {email}</h2>
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
