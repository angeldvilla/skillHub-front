/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import moneyBag from "../../assets/moneyBag.svg";
import ubication from "../../assets/ubication.svg";

const CardItem = ({ _id, title, image, address, price, ability }) => (
  <Card className="flex justfiy-center w-full max-w-[26rem] shadow-lg hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ">
    <div className="flex flex-col justify-center">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} alt="job-image" className="w-96 h-64" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {ability[0]}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Typography>
        <div className="flex items-center justify-evenly mt-6">
          <div className="mb-3 flex items-center gap-1">
            <Typography color="gray" className="text-center font-normal">
              <img src={ubication} alt="location" className="w-8" />
            </Typography>
            <Typography color="gray" className="text-center  font-normal">
              {address.charAt(0).toUpperCase() + address.slice(1)}
            </Typography>
          </div>
          <div className="mb-3 flex items-center gap-1">
            <Typography color="gray" className="text-center font-normal">
              <img src={moneyBag} alt="moneyBag" className="w-9" />
            </Typography>
            <Typography color="gray" className="text-center  font-normal">
              {price}
            </Typography>
          </div>
        </div>
      </CardBody>
      <a href={`/jobDetail/${_id}`}>
        <Button
          variant="h2"
          className="flex items-center gap-2 text-gray-800 text-xs font-semibold bg-transparent shadow-none hover:shadow-none hover:bg-gray-200"
        >
          Conocer más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </a>
    </div>
  </Card>
);

export default CardItem;
