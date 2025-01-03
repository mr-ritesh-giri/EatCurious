const Layout = ({ children, className }) => {
  return (
    <section
      className={`md:min-h-screen flex justify-center items-center w-full py-20 ${className}`}
    >
      {children}
    </section>
  );
};

export default Layout;
