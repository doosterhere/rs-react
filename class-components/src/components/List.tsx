import { FC } from 'react';
import { PlanetType } from '../types';
import { ListItem } from '../components';

interface IListProps {
  itemsList: PlanetType[] | [];
  isLoading: boolean;
}

const List: FC<IListProps> = ({ itemsList, isLoading }) => {
  return (
    <div className="list">
      {!!itemsList.length &&
        itemsList.map(item => <ListItem {...item} key={item.name} />)}
      {!itemsList.length && !isLoading && <div>No results found</div>}
    </div>
  );
};

export default List;
