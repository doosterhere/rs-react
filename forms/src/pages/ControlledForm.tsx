import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ROUTES, SCHEMA } from '@/constants';
import { getBase64 } from '@/utils/getBase64';
import { useAppDispatch } from '@/store/store';
import { setFormData } from '@/store/reducers/formReducer';
import { useCountries } from '@/hooks/useCountries';
import { Input } from '@/components/UI/Input';
import { RadioGroup } from '@/components/UI/RadioGroup';
import { Acceptor } from '@/components/UI/Acceptor';
import { Button } from '@/components/UI/Button';
import { UploadFile } from '@/components/UI/UploadFile';
import { Picker } from '@/components/UI/Picker';

import { Fields } from '@/types/fields.type';
import { FormDataType } from '@/types/formData.type';

function ControlledForm() {
  const countries = useCountries();
  const navigate = useNavigate();
  const dispatcher = useAppDispatch();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm({ resolver: yupResolver(SCHEMA), mode: 'all', reValidateMode: 'onChange' });

  const currentCountry = watch('country');

  const onSubmitHandler = async (data: FormDataType) => {
    const picture = data.picture[0];
    const base64 = await getBase64(picture);

    dispatcher(setFormData({ ...data, picture: base64 }));
    reset();
    navigate(ROUTES.HOME);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        type="text"
        label="Full Name"
        placeholder="ex. John Doe"
        {...register(Fields.name)}
        message={errors.name?.message}
      />
      <Input type="number" min={1} max={130} label="Age" {...register(Fields.age)} message={errors.age?.message} />
      <Input
        type="email"
        label="Email"
        placeholder="ex. mail@example.com"
        {...register(Fields.email)}
        message={errors.email?.message}
      />
      <Input
        type="password"
        label="Password"
        {...register(Fields.password)}
        message={errors.password?.message}
        password={watch(Fields.password)}
      />
      <Input
        type="password"
        label="Repeat Password"
        {...register(Fields.passwordRepeat)}
        message={errors.passwordRepeat?.message}
      />
      <RadioGroup
        label="Gender"
        options={['Male', 'Female', 'Other']}
        {...register(Fields.gender)}
        message={errors.gender?.message}
      />
      <Picker
        label="Country"
        dataList={countries}
        value={currentCountry || ''}
        onChanging={(value: string) => setValue('country', value)}
        {...register(Fields.country)}
        message={errors.country?.message}
      />
      <UploadFile
        label="Upload your avatar"
        accept=".png,.jpeg"
        {...register(Fields.picture)}
        message={errors.picture?.message}
      />
      <Acceptor
        label="I accept Terms and Conditions agreement"
        {...register(Fields.agreed)}
        message={errors.agreed?.message}
      />
      <Button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </Button>
    </form>
  );
}
export { ControlledForm };
