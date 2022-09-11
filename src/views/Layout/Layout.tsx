import Header from 'src/components/Header/Header';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
