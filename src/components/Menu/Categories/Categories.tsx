import React from 'react';
import styles from './Categories.module.scss';
import Account from '../../Auth/Account/Account';
import { useAppSelector } from '../../../hook';

const Categories = () => {
  const { stateCategory } = useAppSelector((state) => state.mainPageSlice);
  //   console.log(stateCategory);

  return (
    <div className={styles.categoriesBlock}>
      <Account />
      <ul>
        {stateCategory?.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
