import classes from './Summary.module.scss';

import { selectFormData } from '@/store/reducers/formReducer';
import { useAppSelector } from '@/store/store';

function Summary() {
  const data = useAppSelector(selectFormData);

  return (
    <div className={classes.summary}>
      <div>
        <b>Full name:</b> {data.name}
      </div>
      <div>
        <b>Age:</b> {data.age}
      </div>
      <div>
        <b>e-mail:</b> {data.email}
      </div>
      <div>
        <b>Gender:</b> {data.gender}
      </div>
      <div>
        <b>Country:</b> {data.country}
      </div>
      <div>
        <b>Avatar:</b>
        <img src={data.picture} alt="Avatar" />
      </div>
    </div>
  );
}
export { Summary };
