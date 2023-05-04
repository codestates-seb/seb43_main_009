import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../common/Layout";
import logo from "../../public/logo.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 1000px;
    margin-top: 50px;
    font-family: "Noto Sans KR";
    font-weight: 700;
`;

const SignupWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 700px;
`;

const Logo = styled.img`
    width: 140px;
    margin-bottom: 20px;
`;
const GoogleSignup = styled.button`
    width: 290px;
    height: 37px;
    margin-bottom: 10px;
    background-color: grey;
    color: white;
    border-radius: 3px;
    border: none;
`;
const FacebookSignup = styled.button`
    width: 290px;
    height: 37px;
    margin-bottom: 10px;
    background-color: #4967AA;
    color: white;
    border-radius: 3px;
    border: none;
`;
const NaverSignup = styled.button`
    width: 290px;
    height: 37px;
    margin-bottom: 10px;
    background-color: #0AC157;
    color: white;
    border-radius: 3px;
    border: none;
`;
const EmailSignup = styled.form`
    display: flex;
    width: 290px;
    height: 400px;
    flex-direction: column;
    align-items: center;
    background-color : white;
    border: 1px solid #c9c9c9;
    border-radius: 3px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const DisplayNameWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
`;
const DisplayNameLabel = styled.div`
    margin: 30px 10px 2px 24px;
    font-weight: bold;
`;
const DisplayNameInput = styled.input`
    margin: 10px;
    width: 240px;
    height: 35px;
`;
const EmailWrapper = styled.div`
    display: flex;
    justify-content: start;

    align-items: center;
    width: 100%;
`;
const EmailLabel = styled.div`
    margin: 10px 10px 2px 24px;
    font-weight: bold;
`;
const EmailInput = styled.input`
    margin: 10px;
    width: 240px;
    height: 35px;
`;
const PasswordWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const PasswordLabel = styled.div`
    margin-left: 26px;
    font-weight: bold;
`;
const ForgotPassword = styled.a`
    margin-right: 26px;
    color: #0995FF;
`;

const PasswordInput = styled.input`
    margin: 10px;
    width: 240px;
    height: 35px;
`;

const SignupButton = styled.button`
    margin: 10px;
    width: 246px;
    height: 35px;
    color: white;
    border-radius: 3px;
    background-color: #F05858; 
    border: none;
    &:hover {
        cursor: pointer;
    }
`;
const Signup = () => {
    const navigate = useNavigate();
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [DisplayNameInputValue, setDisplayNameInputValue] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/",
                {
                    email: emailInputValue,
                    displayName: DisplayNameInputValue,
                    password: passwordInputValue,
                }
            );
            alert("회원가입 성공!");
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Layout>
            <Wrapper>
                <SignupWrapper>
                    <GoogleSignup>Sign with Google</GoogleSignup>
                    <FacebookSignup>Sign with Facebook</FacebookSignup>
                    <NaverSignup>Sign with Naver</NaverSignup>
                    <EmailSignup onSubmit={handleSignup}>
                        <DisplayNameWrapper>
                            <DisplayNameLabel>ID</DisplayNameLabel>
                        </DisplayNameWrapper>
                        <DisplayNameInput
                            type="name"
                            onChange={(e) => setDisplayNameInputValue(e.target.value)}
                        />
                        <EmailWrapper>
                            <EmailLabel>Email</EmailLabel>
                        </EmailWrapper>
                        <EmailInput
                            type="email"
                            onChange={(e) => setEmailInputValue(e.target.value)}
                        />
                        <PasswordWrapper>
                            <PasswordLabel>Password</PasswordLabel>
                            <ForgotPassword>Forgot password?</ForgotPassword>
                        </PasswordWrapper>
                        <PasswordInput
                            type="password"
                            onChange={(e) => setPasswordInputValue(e.target.value)}
                        />
                
                        <SignupButton type="submit">Sign up</SignupButton>
                    </EmailSignup>
                </SignupWrapper>
            </Wrapper>

        </Layout>

    );
}
export default Signup;
