import styled from "styled-components";

export const MyTicketsStyled = styled.div`
  .ticket-row {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .ticket-header {
    display: grid;
    background-color: #ffd1df;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 2rem;
  }
`;
