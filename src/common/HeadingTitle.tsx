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
  return (
    <p className={`${className} text-heading-${level} text-blue-900`}>
      {title}
    </p>
  );
};

export default HeadingTitle;
