/* eslint-disable react/prop-types */
import CardItem from "../CardItem/CardItem";

const Card = ({ work }) => (
  <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mb-5 mt-2">
    {work.map((job) => (
      <CardItem key={job._id} {...job} />
    ))}
  </div>
);

export default Card;
