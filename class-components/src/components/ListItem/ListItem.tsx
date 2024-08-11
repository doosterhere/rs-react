'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';

import classes from './ListItem.module.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { addSelectedItem, removeSelectedItem, checkIsItemSelected } from '../../store';
import { FullPlanetInfo } from '../../types';

const ListItem: FC<FullPlanetInfo> = props => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const isChecked = useAppSelector(state => checkIsItemSelected(state, props.id)) ?? false;
  const dispatcher = useAppDispatch();
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const queryString = `search=${search}&page=${page}`;

  const handleChange = () => {
    isChecked ? dispatcher(removeSelectedItem(props.id)) : dispatcher(addSelectedItem(props));
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <Link href={id === props.id ? `/?${queryString}` : `/detail/${props.id}?${queryString}`} className={classes.item}>
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
