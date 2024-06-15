import { dataSeason } from "../constants/index";

const Episode = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center text-2xl sm:text-2xl lg:text-4xl">
          <span className="bg-gradient-to-r from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
            Season 
          </span>
          Guide
        </h1>
        <p className="mt-5 text-md text-center text-neutral-500">
          All episodes of each season have been fully aired. Starting from the first season 
          to the seventh season, every episode is now available to watch. The audience can 
          enjoy the full story without having to wait any longer.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {dataSeason.map((season) => (
          <div key={season.id} className="flex flex-col items-center justify-center">
            <img src={season.image} alt="#" className="h-50% sm:w-50% rounded-lg hover:shadow-cs-dark-purple hover:shadow-lg" />
            <div className="mt-4">
              {/* <h2 className="text-xl font-bold">{season.title}</h2>
              <p className="mt-2 text-center">{season.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episode;
