const HeadingTwo = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <h2
      id={id ? id : "heading-two"}
      className={`text-5xl font-two font-bold  ${className ? className : ""}`}
    >
      {children}
    </h2>
  );
};

export default HeadingTwo;
