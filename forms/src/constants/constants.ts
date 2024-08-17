import * as yup from 'yup';

import { NavLinkType } from '@/types/navlink.types';

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

const MB = 1;
const MAX_FILE_SIZE = 1048576 * MB;
const MIN_AGE = 1;
const MAX_AGE = 130;

const SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long')
    .matches(/^[A-Z]{1}[A-Za-z\s-]+$/, 'The name must begin with a capital letter'),
  age: yup
    .number()
    .typeError('Age must be a number between 1 and 130')
    .required('Age is required')
    .test(
      'is-valid-age',
      `Age must be between ${MIN_AGE} and ${MAX_AGE}`,
      (age: number) => age >= MIN_AGE && age <= MAX_AGE,
    ),
  email: yup
    .string()
    .required('Email is required')
    .matches(/^[^$!#^\-_*'%?]*[a-z0-9\-_.]{1,64}@[a-z0-9.-]{1,253}\.[a-z]{2,}$/i, 'Please enter a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*]/, 'Password must contain at least one special character'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
  // ),
  passwordRepeat: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], "Passwords don't match"),
  gender: yup.string().required('Please choose your gender'),
  country: yup.string().required('Please choose your country'),
  picture: yup
    .mixed<FileList>()
    .required('Upload your avatar')
    .test('is-valid-file', 'Please upload a file', (value: FileList | undefined) => value && value.length > 0)
    .test(
      'is-valid-size',
      `Max allowed size is ${MB}Mb`,
      (value: FileList | undefined) => value && value[0] && value[0].size <= MAX_FILE_SIZE,
    )
    .test(
      'is-valid-type',
      'Only PNG and JPEG files are accepted',
      (value: FileList | undefined) =>
        value && value[0] && ['image/png', 'image/jpeg', '.jpg', '.png'].includes(value[0].type),
    ),
  agreed: yup
    .boolean()
    .required('Please accept Terms and Conditions')
    .oneOf([true], 'Please accept Terms and Conditions'),
});

export { ROUTES, NAV_ITEMS, MAX_FILE_SIZE, SCHEMA, MIN_AGE, MAX_AGE };
