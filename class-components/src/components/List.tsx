import { Component } from 'react';
import { PlanetType } from '../types';
import { ListItem } from '../components';

interface IListProps {
  itemsList: PlanetType[];
  isLoading: boolean;
}

class List extends Component<IListProps> {
  render() {
    return (
      <div className="list">
        {!!this.props.itemsList.length &&
          this.props.itemsList.map(item => (
            <ListItem {...item} key={item.name} />
          ))}
        {!this.props.itemsList.length && !this.props.isLoading && (
          <div>No results found</div>
        )}
      </div>
    );
  }
}

export default List;
