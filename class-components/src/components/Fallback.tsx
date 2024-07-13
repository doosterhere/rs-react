const Fallback = () => {
  const reloadPage = () => {
    history.go(0);
  };

  return (
    <div>
      <h1>Something went wrong!</h1>
      <button onClick={reloadPage}>Return to main page</button>
    </div>
  );
};

export default Fallback;
