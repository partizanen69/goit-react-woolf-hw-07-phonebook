import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled } from './Filter.styled';
import { setFilter } from '../../store/filterSlice';
import { selectFilter } from '../../store/selectors';

export const Filter = () => {
  const { filter } = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <FilterStyled>
      <p className="title">Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FilterStyled>
  );
};
