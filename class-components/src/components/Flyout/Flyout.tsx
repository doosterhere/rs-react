import { FC, useState, useContext } from 'react';

import clsx from 'clsx';
import { CSVLink } from 'react-csv';

import classes from './Flyout.module.css';

import { CSV_HEADERS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedQuantity, clearSelectedItems, selectSelectedItems } from '../../store';
import { ThemeContext } from '../ThemeContext';

const Flyout: FC = () => {
  const { theme } = useContext(ThemeContext);
  const quantity = useAppSelector(selectSelectedQuantity);
  const dispatcher = useAppDispatch();
  const [areYouSure, setAreYouSure] = useState(false);
  const csvData = useAppSelector(selectSelectedItems);

  const createCSVFileName = () => `${quantity}_planet${quantity > 1 ? 's' : ''}.csv`;

  const handleSure = () => {
    setAreYouSure(true);
  };

  const handleUnselect = () => {
    dispatcher(clearSelectedItems());
    setAreYouSure(false);
  };

  const handleGoBack = () => {
    setAreYouSure(false);
  };

  return (
    <div className={clsx(classes.flyout, classes[theme.value])} data-quantity={quantity}>
      {!areYouSure && (
        <>
          <div>Selected items: {quantity}</div>
          <button className={classes.withIcon} onClick={handleSure} role="button">
            <i className={clsx('fa-solid', 'fa-trash-can', classes.delete)}></i>
            Unselect all
          </button>
          <CSVLink
            className={classes.csvlink}
            data={csvData}
            headers={CSV_HEADERS}
            filename={createCSVFileName()}
            target="_blank"
            data-testid="csvlink"
          >
            <button className={classes.withIcon} role="button">
              <i className="fa-solid fa-file-arrow-down"></i>
              Download selected
            </button>
          </CSVLink>
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
