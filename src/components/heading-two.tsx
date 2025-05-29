const HeadingTwo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      id={"heading-two"}
      className={`text-4xl font-two font-bold  ${className ? className : ""}`}
    >
      {children}
    </h2>
  );
};

export default HeadingTwo;
