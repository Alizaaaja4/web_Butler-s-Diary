import {dataMovie} from "../constants/index"

function SeasonPage() {
  return (
    <div>
      <h1 className="mb-7 text-center text-2xl sm:text-2xl lg:text-4xl">
          <span className="inline-block bg-gradient-to-r from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
          Trailer 
          </span>
          <span className="inline-block ml-2 bg-gradient-to-l from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
          Movie  
          </span>
      </h1>
      <p className="text-center tex-md mb-10 text-neutral-500">
      Below are trailers from several seasons of the Kuroshitsuji series, showcasing glimpses of the dark and 
      intriguing journey of Ciel Phantomhive and his loyal butler, Sebastian Michaelis. Watch clips from various 
      episodes filled with captivating mystery, action, and supernatural elements
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        {dataMovie.map((data) => (
           <div key={data.id} className="border rounded-md items-center justify-center text-center bg-black shadow-cs-dark-purple shadow-md mb-4">
            <video
              id="heroVideo"
              className="rounded-lg border border-cs-dark-purple shadow-cs-dark-purple mt-4 p-4"
              controls
              preload="metadata"
            >
            <source src={data.movie} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="mt-4 tex-md mb-6 text-neutral-500 text-sm lg:text-lg md:text-md sm:text-sm">
              {data.title}
            </h3>
            <div className="mb-4">
              <a href={data.watch} target="_blank" rel="noopener noreferrer">
                <button className="text-sm lg:text-md md:text-md sm:text-sm bg-cs-dark-purple text-white py-2 px-4 rounded hover:bg-red-900">
                  Streaming
                </button>
              </a>
            </div>
            </div>
      ))}
    </div>

    </div>
  )
}

export default SeasonPage