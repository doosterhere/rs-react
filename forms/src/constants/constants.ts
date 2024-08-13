import { NavLinkType } from '../types/navlink.types';

const ROUTES = {
  HOME: '/',
  UNCONTROLLED_FORM: '/uncontrolled-form',
  CONTROLLED_FORM: '/controlled-form',
};

const NAV_ITEMS: NavLinkType[] = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'Uncontrolled form', to: ROUTES.UNCONTROLLED_FORM },
  { label: 'Controlled form', to: ROUTES.CONTROLLED_FORM },
];

export { ROUTES, NAV_ITEMS };
