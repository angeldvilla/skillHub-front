import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import garden1 from "../../assets/garden1.jpg";
import garden2 from "../../assets/garden2.jpg";
import garden3 from "../../assets/garden3.webp";

export default function JobDetail() {
  const images = [garden1, garden2, garden3];

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center pb-5 bg-gray-800 rounded-lg m-auto font-mono">
        <h1 className="text-4xl text-center px-5 py-12">
          Seeking experienced gardener for residential property
        </h1>

        <div className="px-5 max-w-7xl text-md">
          {/* Job Description */}
          <p className="mb-10 p-5 bg-slate-700 rounded-md">
            Hello, I am in need of an experienced and dedicated gardener to care
            for and maintain the outdoor spaces of my residential property. If
            you have a green thumb and a passion for creating beautiful gardens,
            this opportunity might be perfect for you!
          </p>

          {/* Job Requirements */}
          <div className="mb-10">
            <h3 className="text-xl pt-2 mb-4 font-semibold">
              Job Requirements
            </h3>
            <ul className="flex flex-col gap-6 p-5 bg-slate-700 rounded-md">
              <li>
                {">"} Previous experience as a gardener or landscaper preferred.
              </li>
              <li>
                {">"} Knowledge of various plants, flowers, and gardening
                techniques.
              </li>
              <li>
                {">"} Familiarity with irrigation systems and various garden
                tools.
              </li>
              <li>
                {">"} Physical fitness and ability to perform manual labor in
                various weather conditions.
              </li>
              <li>
                {">"} Strong attention to detail and a passion for creating
                beautiful outdoor spaces.
              </li>
              <li>
                {">"} Ability to work independently and as part of a team.
              </li>
            </ul>
          </div>

          {/* Responsibilities */}
          <h3 className="mb-5 text-xl font-semibold">Responsibilities</h3>
          <ul className="flex flex-col gap-6 p-5 bg-slate-700 rounded-md">
            <li>{">"} Plants and flowers</li>
            <li>{">"} Landscaping</li>
            <li>{">"} Watering</li>
          </ul>

          <div className="flex flex-col justify-evenly mb-5 md:flex-row md:justify-between">
            {/* Location */}
            <div className="mt-10">
              <h3 className="mb-4 text-xl font-semibold">Location</h3>
              <p className="p-5 bg-slate-700 rounded-md">
                Colombia, Quindio, Finca Armenia
              </p>
            </div>

            <div className="flex flex-row justify-evenly mt-10 mb-5 md:gap-20 lg:gap-32 lg:mr-20">
              {/* Phone number */}
              <div>
                <h3 className="mb-4 text-xl font-semibold">Phone number</h3>
                <p className="p-5 bg-slate-700 rounded-md">+57 300 123 4567</p>
              </div>

              {/* Wage */}
              <div>
                <h3 className="mb-4 text-xl font-semibold">Wage</h3>
                <p className="p-5 bg-slate-700 rounded-md">$20/hr</p>
              </div>
            </div>
          </div>
        </div>
        <ImageCarousel images={images} />
      </div>
      <Footer />
    </div>
  );
}
