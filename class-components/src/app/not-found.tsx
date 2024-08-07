import Link from 'next/link';

import classes from './not-found.module.css';

export default function Page404() {
  return (
    <div className={classes.page}>
      <h1>This page doesn&apos;t exist</h1>
      <Link href={'/'}>Return to main page</Link>
    </div>
  );
}
