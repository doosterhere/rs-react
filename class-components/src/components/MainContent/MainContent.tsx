import { FC } from 'react';

import classes from './MainContent.module.css';

import { DefaultResponseType, PlanetType } from '../../types';
import { SearchBar } from '../SearchBar';
import { List } from '../List';
import { ListItemDetailed } from '../ListItemDetailed';
import { Pagination } from '../Pagination';
import { Flyout } from '../Flyout';

interface IMainProps {
  data: DefaultResponseType<PlanetType>;
  detail?: PlanetType;
}

const MainContent: FC<IMainProps> = ({ data, detail }) => {
  return (
    <>
      <div className="container">
        <SearchBar />
        <div className={classes.content}>
          <div className={classes.list}>
            {data && data.results.length > 0 && <List itemsList={data.results} />}
            {data && data.results.length === 0 && <div>No results</div>}
          </div>
          {detail && (
            <div className={classes.details}>
              <ListItemDetailed data={detail} />
            </div>
          )}
        </div>
        {data && data.count > 10 && <Pagination itemsCount={data.count} />}
      </div>
      <Flyout />
    </>
  );
};

export { MainContent };
