'use client';

export default function Error({ error }: { error: Error }) {
  const goBack = () => {
    window.location.assign('/');
  };

  return (
    <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
      <h1 data-testid="error-page">Something went wrong!</h1>
      <h3>{error.message}</h3>
      <button onClick={() => goBack()} style={{ width: '300px' }} role="button">
        Return to main page
      </button>
    </div>
  );
}
