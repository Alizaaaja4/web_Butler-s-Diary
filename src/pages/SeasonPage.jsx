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
      <div className="grid grid-cols-3 items-center justify-center">
      {dataMovie.map((data)=> (
        <div key={data.id}>
          <video src="">
            aaaaaaaaa
          </video>
          <h3 className="tex-md mb-6 text-neutral-500">
            {data.title}
          </h3>
        </div>
      ))}
      </div>
    </div>
  )
}

export default SeasonPage