import { Link } from 'react-router-dom';

const Page404 = () => (
  <div>
    <h1>This page doesn't exist</h1>
    <Link to={'/'}>Return to main page</Link>
  </div>
);

export default Page404;
