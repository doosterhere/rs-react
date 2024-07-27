import { FC, useState } from 'react';

import clsx from 'clsx';

import classes from './Flyout.module.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedQuantity, clearSelectedItems } from '../../store';

const Flyout: FC = () => {
  const quantity = useAppSelector(selectSelectedQuantity);
  const dispatcher = useAppDispatch();
  const [areYouSure, setAreYouSure] = useState(false);

  const handleSure = () => {
    setAreYouSure(true);
  };

  const handleDownload = () => {};

  const handleUnselect = () => {
    dispatcher(clearSelectedItems());
    setAreYouSure(false);
  };

  const handleGoBack = () => {
    setAreYouSure(false);
  };

  return (
    <div className={classes.flyout} data-quantity={quantity}>
      {!areYouSure && (
        <>
          <div>Selected items: {quantity}</div>
          <button className={classes.withIcon} onClick={handleSure}>
            <i className={clsx('fa-solid', 'fa-trash-can', classes.delete)}></i>
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
            <i className={clsx('fa-solid', 'fa-check', classes.remove)}></i>
            Absolutely!
          </button>
          <button className={classes.withIcon} onClick={handleGoBack}>
            <i className={clsx('fa-solid', 'fa-ban', classes.back)}></i>
            No way!
          </button>
        </>
      )}
    </div>
  );
};

export { Flyout };
