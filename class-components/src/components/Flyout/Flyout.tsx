import { FC, useState } from 'react';

import classes from './Flyout.module.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectQuantity, clearItems } from '../../store';

const Flyout: FC = () => {
  const quantity = useAppSelector(selectQuantity);
  const dispatcher = useAppDispatch();
  const [areYouSure, setAreYouSure] = useState(false);

  const handleSure = () => {
    setAreYouSure(true);
  };

  const handleDownload = () => {};

  const handleUnselect = () => {
    dispatcher(clearItems());
    setAreYouSure(false);
  };

  const handleGoBack = () => {
    setAreYouSure(false);
  };

  return (
    <div className={classes.flyout} style={{ display: quantity > 0 ? 'flex' : 'none' }}>
      {!areYouSure && (
        <>
          <div>Selected items: {quantity}</div>
          <button className={classes.withIcon} onClick={handleSure}>
            <i className="fa-solid fa-trash-can"></i>
            Unselect all
          </button>
          <button className={classes.withIcon} onClick={handleDownload}>
            <i className="fa-solid fa-file-arrow-down"></i>
            Download selected
          </button>
        </>
      )}
      {areYouSure && (
        <>
          <div>Are you sure?</div>
          <button className={classes.withIcon} onClick={handleUnselect}>
            <i className="fa-solid fa-check"></i>
            Absolutely!
          </button>
          <button className={classes.withIcon} onClick={handleGoBack}>
            <i className="fa-solid fa-ban"></i>
            No way!
          </button>
        </>
      )}
    </div>
  );
};

export { Flyout };
