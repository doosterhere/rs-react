'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import clsx from 'clsx';

import classes from './ListItem.module.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { addSelectedItem, removeSelectedItem, checkIsItemSelected } from '../../store';
import { FullPlanetInfo } from '../../types';
import { useTheme } from '../ThemeContext';

const ListItem: FC<FullPlanetInfo> = props => {
  const searchParams = useSearchParams();
  const isChecked = useAppSelector(state => checkIsItemSelected(state, props.id)) ?? false;
  const dispatcher = useAppDispatch();
  const { theme } = useTheme();
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const detail = searchParams.get('detail') || '';
  const queryString = `search=${search}&page=${page}`;

  const handleChange = () => {
    isChecked ? dispatcher(removeSelectedItem(props.id)) : dispatcher(addSelectedItem(props));
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <Link
      href={detail === props.id ? `/?${queryString}` : `/?${queryString}&detail=${props.id}`}
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
