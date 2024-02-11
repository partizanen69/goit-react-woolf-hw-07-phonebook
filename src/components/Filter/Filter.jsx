import { FilterStyled } from './Filter.styled';

export const Filter = ({ value, handleChange }) => {
  return (
    <FilterStyled>
      <p className="title">Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
      />
    </FilterStyled>
  );
};
