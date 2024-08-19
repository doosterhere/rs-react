import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { getBase64 } from '@/utils/getBase64';
import { validator } from '@/utils/validator';
import { useAppDispatch } from '@/store/store';
import { clearFormData, setFormData } from '@/store/reducers/formReducer';
import { useCountries } from '@/hooks/useCountries';
import { useForceUpdate } from '@/hooks/useForceUpdate';
import { Input } from '@/components/UI/Input';
import { RadioGroup } from '@/components/UI/RadioGroup';
import { Picker } from '@/components/UI/Picker';
import { UploadFile } from '@/components/UI/UploadFile';
import { Acceptor } from '@/components/UI/Acceptor';
import { Button } from '@/components/UI/Button';

import { FormDataType } from '@/types/formData.type';

function UncontrolledForm() {
  const countries = useCountries();
  const navigate = useNavigate();
  const dispatcher = useAppDispatch();
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const pesswordRepeatRef = useRef(null);
  const genderRef = useRef(null);
  const countryRef = useRef(null);
  const pictureRef = useRef(null);
  const agreedRef = useRef(null);
  const errors = useRef<{ [key: string]: string }>({});
  const forceUpdate = useForceUpdate();
  // only for use in PasswordStrengthMeter inside of the password input, not for the form data
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const NAME = nameRef.current && (nameRef.current as HTMLInputElement).value;
    const AGE = ageRef.current && (ageRef.current as HTMLInputElement).value;
    const EMAIL = emailRef.current && (emailRef.current as HTMLInputElement).value;
    const PASSWORD = passwordRef.current && (passwordRef.current as HTMLInputElement).value;
    const PASSWORD_REPEAT = pesswordRepeatRef.current && (pesswordRepeatRef.current as HTMLInputElement).value;
    const GENDER = genderRef.current && (genderRef.current as HTMLInputElement).getAttribute('data-value');
    const COUNTRY = countryRef.current && (countryRef.current as HTMLInputElement).value;
    const PICTURE: FileList | null = pictureRef.current && (pictureRef.current as HTMLInputElement).files;
    const AGREED = agreedRef.current && (agreedRef.current as HTMLInputElement).checked;

    const err = errors.current;

    validator.name(NAME, err);
    validator.age(AGE, err);
    validator.email(EMAIL, err);
    validator.password(PASSWORD, err);
    validator.passwordRepeat(PASSWORD_REPEAT, PASSWORD, err);
    validator.gender(GENDER, err);
    validator.country(COUNTRY, err);
    validator.picture(PICTURE, err);
    validator.agreed(AGREED, err);

    forceUpdate();

    if (Object.keys(err).length === 0) {
      const picture = PICTURE && (PICTURE[0] as File);
      const base64 = picture !== null ? await getBase64(picture) : '';
      const data: FormDataType = {
        name: NAME || '',
        age: AGE || 1,
        email: EMAIL || '',
        password: PASSWORD || '',
        passwordRepeat: PASSWORD_REPEAT || '',
        gender: GENDER || '',
        country: COUNTRY || '',
        picture: PICTURE || new FileList(),
        agreed: AGREED || false,
      };

      dispatcher(setFormData({ ...data, picture: base64 }));
      navigate(ROUTES.HOME);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input type="text" label="Full Name" placeholder="ex. John Doe" ref={nameRef} message={errors.current.name} />
      <Input type="number" label="Age" ref={ageRef} message={errors.current.age} />
      <Input
        type="email"
        label="Email"
        placeholder="ex. mail@example.com"
        ref={emailRef}
        message={errors.current.email}
      />
      <Input
        type="password"
        label="Password"
        ref={passwordRef}
        message={errors.current.password}
        password={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Input type="password" label="Repeat Password" ref={pesswordRepeatRef} message={errors.current.passwordRepeat} />
      <RadioGroup
        name="gender"
        label="Gender"
        options={['Male', 'Female', 'Other']}
        ref={genderRef}
        message={errors.current.gender}
      />
      <Picker label="Country" dataList={countries} ref={countryRef} message={errors.current.country} />
      <UploadFile label="Upload your avatar" accept=".png,.jpeg" ref={pictureRef} message={errors.current.picture} />
      <Acceptor label="I accept Terms and Conditions agreement" ref={agreedRef} message={errors.current.agreed} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
export { UncontrolledForm };
