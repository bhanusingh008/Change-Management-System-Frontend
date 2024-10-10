import styled from "styled-components";

export const SignUpStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .heading{
    font-size: 24px;
    text-align:center;
  }

  .inputs-ctn{
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-top:2rem;
  }

  .main-ctn {
    width: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.3);
    padding: 1rem;
  }

  .input-ctn {
    display:flex;
    flex-direction:column;
  }

  .input-ctn input{
    height:30px;
  }

  .signup-ctn{
    display:flex;
    justify-content:center;
  }

  .role-input{
    height:40px;
  }

  .signup-btn{
    height:40px;
    width:80px;
    background-color:#1E90FF;
    border:none;
    border-radius:6px;
    color:white;
    font-size:1rem;
    cursor:pointer;
  }
`;
