import classes from './Summary.module.scss';

import { selectFormData } from '@/store/reducers/formReducer';
import { useAppSelector } from '@/store/store';

function Summary() {
  // const data = [...useAppSelector(selectFormData)].reverse();
  const data = [...useAppSelector(selectFormData)].reverse();

  return (
    <div className={classes.summary}>
      {data.map((item, index, data) => (
        <div key={index}>
          <h3>Form {data.length - index}</h3>
          <div>
            <b>Full name:</b> {item.name}
          </div>
          <div>
            <b>Age:</b> {item.age}
          </div>
          <div>
            <b>e-mail:</b> <a href="mailto:{data.email}">{item.email}</a>
          </div>
          <div>
            <b>Gender:</b> {item.gender}
          </div>
          <div>
            <b>Country:</b> {item.country}
          </div>
          <div>
            <b>Avatar:</b>
            <img src={item.picture} alt="Avatar" />
          </div>
        </div>
      ))}
    </div>
  );
}
export { Summary };
