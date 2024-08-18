import { MIN_AGE, MAX_AGE, MAX_FILE_SIZE, MB } from '@/constants';

type errors = { [key: string]: string };

const validator = {
  name: (value: string | null, errors: errors): void => {
    if (!value) {
      errors.name = 'Name is required';
      return;
    }

    if (value.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
      return;
    }

    if (!/^[A-Za-z\s-]+$/.test(value)) {
      errors.name = 'Name should not contain special characters';
      return;
    }

    if (!/^[A-Z]{1}[A-Za-z\s-]+$/.test(value)) {
      errors.name = 'The name must begin with a capital letter';
      return;
    }

    delete errors.name;
  },
  age: (value: number | null, errors: errors): void => {
    if (!value && value !== 0) {
      errors.age = 'Age is required';
      return;
    }

    if (value < 1 || value > 130) {
      errors.age = `Age must be between ${MIN_AGE} and ${MAX_AGE}`;
      return;
    }

    delete errors.age;
  },
  email: (value: string | null, errors: errors): void => {
    if (!value) {
      errors.email = 'Email is required';
      return;
    }

    if (!/^[^$!#^\-_*'%?]*[a-z0-9\-_.]{1,64}@[a-z0-9.-]{1,253}\.[a-z]{2,}$/i.test(value)) {
      errors.email = 'Please enter a valid email';
      return;
    }

    delete errors.email;
  },
  password: (value: string | null, errors: errors): void => {
    if (!value) {
      errors.password = 'Password is required';
      return;
    }

    if (value.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      return;
    }

    if (!/[A-Z]/.test(value)) {
      errors.password = 'At least one uppercase letter is required';
      return;
    }

    if (!/[a-z]/.test(value)) {
      errors.password = 'At least one lowercase letter is required';
      return;
    }

    if (!/[0-9]/.test(value)) {
      errors.password = 'At least one number is required';
      return;
    }

    if (!/[!@#$%^&*_.]/.test(value)) {
      errors.password = 'At least one special character is required';
      return;
    }

    delete errors.password;
  },
  passwordRepeat: (value: string | null, comparedValue: string | null, errors: errors): void => {
    if (!value) {
      errors.passwordRepeat = 'Password confirmation is required';
      return;
    }

    if (value !== comparedValue) {
      errors.passwordRepeat = "Passwords don't match";
      return;
    }

    delete errors.passwordRepeat;
  },
  gender: (value: string | null, errors: errors): void => {
    if (!value) {
      errors.gender = 'Please choose your gender';
      return;
    }

    delete errors.gender;
  },
  country: (value: string | null, errors: errors): void => {
    if (!value) {
      errors.country = 'Please choose your country';
      return;
    }

    delete errors.country;
  },
  picture: (value: FileList | null, errors: errors): void => {
    if (value && value.length === 0) {
      errors.picture = 'Please upload a file';
      return;
    }

    if (value && value[0] && value[0].size > MAX_FILE_SIZE) {
      errors.picture = `Max allowed size is ${MB}Mb`;
      return;
    }

    if (value && value[0] && !['image/png', 'image/jpeg', '.jpeg', '.png'].includes(value[0].type)) {
      errors.picture = 'Only PNG and JPEG files are accepted';
      return;
    }

    delete errors.picture;
  },
  agreed: (value: boolean | null, errors: errors): void => {
    if (!value) {
      errors.agreed = 'Please accept Terms and Conditions';
      return;
    }

    delete errors.agreed;
  },
};

export { validator };
