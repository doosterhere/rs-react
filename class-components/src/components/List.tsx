import { Component } from 'react';
import { PlanetType } from '../types';

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
            <div className="list-item" key={item.name}>
              {item.name}
            </div>
          ))}
        {!this.props.itemsList.length && !this.props.isLoading && (
          <div>No results found</div>
        )}
      </div>
    );
  }
}

export default List;
