import { ComponentType } from 'react';
import Footer from '../common/Footer/Footer';

const withFooter = (Component: ComponentType<any>) => {
  const wrappedComponent = (props: any) => (
    <>
      <Component {...props} />
      <Footer email={props.email} />
    </>
  );
  return wrappedComponent;
};

export default withFooter;
