import styled from 'styled-components';

export const AddContactFormStyled = styled.div`
  border: 1px solid black;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  input {
    margin: 5px 0;
    width: 200px;
  }

  .add-contact-btn {
    width: 150px;
    margin-top: 5px;
  }
`;
