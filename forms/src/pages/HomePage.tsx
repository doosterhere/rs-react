import { Summary } from '../components/Summary';
import classes from './HomePage.module.scss';

import { useAppSelector } from '@/store/store';

function HomePage() {
  const data = useAppSelector(state => state.form.formData);

  return (
    <div className={classes.data}>
      <h1>Submitted data:</h1>
      {!data.name && <div>There is no data yet</div>}
      {!!data.name && <Summary />}
    </div>
  );
}
export { HomePage };
