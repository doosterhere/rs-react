import { useLocation, NavLink } from 'react-router-dom';

import classes from './Navigation.module.scss';

import { NavLinkType } from '@/types/navlink.types';

type Props = {
  navLinks: NavLinkType[];
};

function Navigation({ navLinks }: Props) {
  const location = useLocation();

  return (
    <>
      {navLinks.map(({ label, to }) => (
        <NavLink to={to} className={location?.pathname === to ? classes.active : ''} key={label}>
          {label}
        </NavLink>
      ))}
    </>
  );
}
export { Navigation };
