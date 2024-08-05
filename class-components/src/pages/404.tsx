import Link from 'next/link';

export default function Page404() {
  return (
    <div>
      <h1>This page doesn&apos;t exist</h1>
      <Link href={'/'}>Return to main page</Link>
    </div>
  );
}
