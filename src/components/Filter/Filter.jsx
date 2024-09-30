import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../slices/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={styles.findForm}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
