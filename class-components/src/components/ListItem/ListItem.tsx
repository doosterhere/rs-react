import { FC } from 'react';
import { useParams, useSearchParams, NavLink } from 'react-router-dom';

import classes from './ListItem.module.css';

interface IListItemProps {
  name: string;
  id: string | undefined;
}

const ListItem: FC<IListItemProps> = ({ name, id }) => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  return (
    <NavLink
      to={params.id === id ? `/?${searchParams.toString()}` : `/detail/${id}?${searchParams.toString()}`}
      className={classes.item}
    >
      {name}
    </NavLink>
  );
};

export { ListItem };
