import { FC } from 'react';

import classes from './List.module.css';

import { PlanetType } from '../../types';
import { ListItem } from '../../components';

interface IListProps {
  itemsList: PlanetType[] | [];
}

const List: FC<IListProps> = ({ itemsList }) => {
  return (
    <div className={classes.list} data-testid="list">
      {!!itemsList.length &&
        itemsList.map(item => {
          const id = item.url.match(/(\d+)/g)?.[0];

          return <ListItem {...item} key={item.name} id={id} />;
        })}
    </div>
  );
};

export { List };