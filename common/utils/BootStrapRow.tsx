interface LayoutProps {
  children: React.ReactNode;
}

const BootStrapRow = ({ children }: LayoutProps) => {
  return (
    <div className="container-fluid">
      <div className="row">{children}</div>
    </div>
  );
};

export default BootStrapRow;
