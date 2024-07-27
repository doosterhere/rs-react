import { FC } from 'react';
import { useParams, useSearchParams, NavLink } from 'react-router-dom';

import classes from './ListItem.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addSelectedItem, removeSelectedItem, checkIsItemSelected } from '../../store';
import { FullPlanetInfo } from '../../types';

const ListItem: FC<FullPlanetInfo> = props => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const isChecked = Boolean(useAppSelector(state => checkIsItemSelected(state, props.id)));
  const dispatcher = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    isChecked ? dispatcher(removeSelectedItem(props.id)) : dispatcher(addSelectedItem(props));
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
