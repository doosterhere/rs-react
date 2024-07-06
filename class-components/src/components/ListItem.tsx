import { Component } from 'react';

interface IListItemProps {
  name: string;
  diameter: string;
  terrain: string;
  population: string;
}

class ListItem extends Component<IListItemProps> {
  render() {
    const { name, diameter, terrain, population } = this.props;

    return (
      <div className="list-item">
        <div>
          <span>Planet name:</span> {name}
        </div>
        <div>
          <span>Diameter:</span> {diameter}
        </div>
        <div>
          <span>Terrain:</span> {terrain}
        </div>
        <div>
          <span>Population:</span> {population}
        </div>
      </div>
    );
  }
}

export default ListItem;
