import classes from './Loader.module.css';

const Loader = () => (
  <div className={classes.overlay} role="progressbar">
    <div className={classes.loader}></div>
  </div>
);

export { Loader };
