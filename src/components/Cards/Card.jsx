/* eslint-disable react/prop-types */
import CardItem from "../CardItem/CardItem";

const Card = ({ work }) => (
  <div className="flex flex-wrap justify-center ml-32 font-sans">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-32 rounded-md gap-32 mt-10 items-center">
      {work.map((job) => (
        <CardItem key={job._id} {...job} />
      ))}
    </div>
  </div>
);

export default Card;
