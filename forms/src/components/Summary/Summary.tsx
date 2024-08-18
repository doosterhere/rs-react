import classes from './Summary.module.scss';

import { selectFormData } from '@/store/reducers/formReducer';
import { useAppSelector } from '@/store/store';

function Summary() {
  const data = useAppSelector(selectFormData);

  return (
    <div className={classes.summary}>
      {data.map((data, index) => (
        <div key={index}>
          <h3>Form {index + 1}</h3>
          <div>
            <b>Full name:</b> {data.name}
          </div>
          <div>
            <b>Age:</b> {data.age}
          </div>
          <div>
            <b>e-mail:</b> <a href="mailto:{data.email}">{data.email}</a>
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
      ))}
    </div>
  );
}
export { Summary };
