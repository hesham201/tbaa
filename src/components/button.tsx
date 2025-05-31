import Link from "next/link";

const Button = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`bg-gradient-to-r inline-block from-[#987F51] to-[#B9A87D] text-white font-semibold py-2 px-5 lg:py-3 lg:px-8 rounded transition-all duration-500 bg-[length:200%_200%] hover:bg-[position:100%_0] ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Button;
