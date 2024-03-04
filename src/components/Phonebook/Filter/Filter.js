import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../../redux/Filter/actions';
import '../Filter/filter.css';

export default function Filter() {
  const filterValue = useSelector(state => state.filterReducer.name);
  console.log(filterValue);
  const dispatch = useDispatch();
  return (
    <>
      <p className="text">Find contacts by name</p>
      <input
        onChange={e => {
          dispatch(setStatusFilter(e.target.value));
        }}
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$
        "
        required
        value={filterValue}
      />
    </>
  );
}
