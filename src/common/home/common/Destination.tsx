import { IoIosArrowForward } from "react-icons/io";

interface DestinationProps {
  linkTo: string;
  imgSrc: string;
  country: string;
}

const Destination: React.FC<DestinationProps> = ({
  linkTo,
  imgSrc,
  country,
}) => {
  return (
    <a href={linkTo}>
      <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
        <img
          className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
          src={`/pages/home/destinations/${imgSrc}`}
          alt={country}
        />
        <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
          {country}
        </div>
        <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
          <IoIosArrowForward />
        </div>
      </div>
    </a>
  );
};

export default Destination;
