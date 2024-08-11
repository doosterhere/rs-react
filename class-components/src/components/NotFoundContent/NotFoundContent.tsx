import Link from 'next/link';

import classes from './NotFoundContent.module.css';

function NotFoundContent() {
  return (
    <div className={classes.page}>
      <h1>This page doesn&apos;t exist</h1>
      <Link href={'/'}>Return to main page</Link>
    </div>
  );
}
export { NotFoundContent };
