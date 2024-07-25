import { FC } from 'react';
import { useParams, useSearchParams, NavLink } from 'react-router-dom';

import classes from './ListItem.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addItem, removeItem, checkItem } from '../../store';

interface IListItemProps {
  name: string;
  id: string;
}

const ListItem: FC<IListItemProps> = ({ name, id }) => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const isChecked = useAppSelector(state => checkItem(state, id));
  const dispatcher = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    isChecked ? dispatcher(removeItem(id)) : dispatcher(addItem(id));
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <NavLink
      to={params.id === id ? `/?${searchParams.toString()}` : `/detail/${id}?${searchParams.toString()}`}
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
        <div>{name}</div>
        <div />
      </div>
    </NavLink>
  );
};

export { ListItem };
