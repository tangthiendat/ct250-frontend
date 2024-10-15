interface HeadingTitleProps {
  className?: string;
  level: number;
  title: string;
}

const HeadingTitle: React.FC<HeadingTitleProps> = ({
  className,
  level,
  title,
}) => {
  const classNameMore = className || "";
  const textLevel = `text-heading-${level}`;

  return (
    <p className={`${classNameMore} ${textLevel} text-blue-900`}>{title}</p>
  );
};

export default HeadingTitle;
