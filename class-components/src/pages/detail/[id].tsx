import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import classes from './detail.module.css';

import { BASE_API } from '../../constants';
import { DefaultResponseType, PlanetType } from '../../types';
import HomePage from '..';
import { ListItemDetailed } from '../../components';

type Props = {
  resData: DefaultResponseType<PlanetType>;
  detData: PlanetType;
};

export const getServerSideProps: GetServerSideProps<{ detData: PlanetType }> = async ({
  query,
}: {
  query: ParsedUrlQuery;
}) => {
  const { search = '', page = '1' } = query;
  let res = await fetch(`${BASE_API}/planets/?search=${search}&page=${page}`);
  const resData = await res.json();
  res = await fetch(`${BASE_API}/planets/${query.id}`);
  const detData = await res.json();

  return { props: { resData, detData } };
};

export default function DetailPage({ resData, detData }: Props): JSX.Element {
  return (
    <HomePage resData={resData}>
      <div className={classes.details}>
        <ListItemDetailed data={detData} />
      </div>
    </HomePage>
  );
}
