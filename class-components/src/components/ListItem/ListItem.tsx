'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import classes from './ListItem.module.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { addSelectedItem, removeSelectedItem, checkIsItemSelected } from '../../store';
import { FullPlanetInfo } from '../../types';
import { useTheme } from '../ThemeContext';

const ListItem: FC<FullPlanetInfo> = props => {
  const { query } = useRouter();
  const isChecked = useAppSelector(state => checkIsItemSelected(state, props.id)) ?? false;
  const dispatcher = useAppDispatch();
  const { theme } = useTheme();
  const search = query.search?.toString() || '';
  const page = query.page?.toString() || '1';
  const queryString = `search=${search}&page=${page}`;

  const handleChange = () => {
    isChecked ? dispatcher(removeSelectedItem(props.id)) : dispatcher(addSelectedItem(props));
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <Link
      href={query.id === props.id ? `/?${queryString}` : `/detail/${props.id}?${queryString}`}
      className={clsx(classes.item, classes[theme.value])}
    >
      <div className={classes.content}>
        <input
          type="checkbox"
          className={classes.input}
          onChange={handleChange}
          onClick={handleClick}
          checked={isChecked}
        />
        <div>{props.name}</div>
        <div />
      </div>
    </Link>
  );
};

export { ListItem };
