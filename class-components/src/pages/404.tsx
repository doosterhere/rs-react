import Link from 'next/link';
import clsx from 'clsx';

import classes from './404.module.css';

export default function Page404() {
  return (
    <div className={clsx(classes.page)}>
      <h1>This page doesn&apos;t exist</h1>
      <Link href={'/'}>Return to main page</Link>
    </div>
  );
}
