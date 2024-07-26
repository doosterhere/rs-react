import { FC } from 'react';
import { useParams, useSearchParams, NavLink } from 'react-router-dom';

import classes from './ListItem.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addItem, removeItem, checkItem } from '../../store';
import { FullPlanetInfo } from '../../types';

const ListItem: FC<FullPlanetInfo> = props => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const isChecked = Boolean(useAppSelector(state => checkItem(state, props.id)));
  const dispatcher = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    isChecked ? dispatcher(removeItem(props.id)) : dispatcher(addItem(props));
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <NavLink
      to={params.id === props.id ? `/?${searchParams.toString()}` : `/detail/${props.id}?${searchParams.toString()}`}
      className={classes.item}
    >
      <div className={classes.content}>
        <input
          type="checkbox"
          className={classes.input}
          onChange={handleChange}
          checked={isChecked}
          onClick={handleClick}
        />
        <div>{props.name}</div>
        <div />
      </div>
    </NavLink>
  );
};

export { ListItem };
