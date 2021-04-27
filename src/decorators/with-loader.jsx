import React from 'react';
import Loader from 'components/Loader';
import * as ErrorComponent from 'components/Error';

export default  (Component) => {
  return (props,context) => {
    const { loading, error, ...rest} = props;
    return loading ? (
      <Loader />
    ) : error ? (
      <ErrorComponent />
    ) : (
          <Component {...rest} />
        );
  };
};
