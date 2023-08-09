import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>An invalid URL was requested. Please try again with a valid URL endpoint.</p>
    </div>
  );
}
export default ErrorPage;