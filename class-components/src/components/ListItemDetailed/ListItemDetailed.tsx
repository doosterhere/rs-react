'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import clsx from 'clsx';

import classes from './ListItemDetailed.module.css';

import { useTheme } from '../ThemeContext';
import { PlanetType } from '../../types';

const ListItemDetailed: FC<{ data: PlanetType }> = ({ data }) => {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const queryString = `search=${search}&page=${page}`;

  return (
    <>
      <div className={clsx(classes.content, classes[theme.value])}>
        <div>Name: {data?.name}</div>
        <div>Diameter: {data?.diameter}</div>
        <div>Gravity: {data?.gravity}</div>
        <div>Population: {data?.population}</div>
        <div>Climate: {data?.climate}</div>
        <div>Terrain: {data?.terrain}</div>
        <div>Surfase water: {data?.surface_water}</div>
        <Link href={`/?${queryString}`} role="link">
          Close
        </Link>
      </div>
    </>
  );
};

export { ListItemDetailed };
