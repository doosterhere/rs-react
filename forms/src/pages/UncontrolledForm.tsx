import { useCountries } from '../hooks/useCountries';

function UncontrolledForm() {
  const countries = useCountries();

  return <div>Uncontrolled form</div>;
}
export { UncontrolledForm };
