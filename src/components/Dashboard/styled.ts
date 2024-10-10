import styled from "styled-components";

export const DashboardStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .dashb-ctn {
    background-color: white;
    padding: 2rem;
    height: 80%;
    width: 80%;
    box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  .change-tkt-btn {
    top: 2rem;
    right: 2rem;
    position: absolute;
    background-color: green;
    color: white;
    padding: 7px;
  }

  .change-tkt-btn button {
    color: white;
    background-color: green;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  .options-ctn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .option {
    background-color: #dfdfdf;
    cursor: pointer;
  }

  .horizontal-line {
    height: 2px;
    margin-top: 2rem;
    background-color: black;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* Dark transparent background */
    z-index: 1; /* Make sure it's behind the modal */
  }

  .create-change-tkt {
    width: 60%;
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    padding: 2rem;
    border-radius: 10px;
  }

  .close-btn {
    cursor: pointer;
  }

  .modal-options-ctn {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }

  .inps-ctn {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .inp-ctn {
    display: flex;
    flex-direction: column;
  }

  .inp-ctn textarea {
    min-height: 200px;
    padding: 0.2rem;
  }

  .inp {
    height: 30px;
    padding: 0.2rem;
  }

  .save-btn-ctn {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .save-btn-ctn button {
    height: 2rem;
    width: 4rem;
    background-color: #4898c9;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
  }

  .logout-btn button {
    height: 2rem;
    width: 4rem;
    background-color: #4898c9;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
  }

  .approve-btn {
    background-color: #4898c9;
    border: none;
    text-align:center;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;
