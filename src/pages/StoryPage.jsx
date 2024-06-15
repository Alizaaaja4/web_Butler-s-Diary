import {dataStory} from "../constants/index"

function StoryPage() {
  return (
    <div>
      <h1 className="mb-7 text-center text-2xl sm:text-2xl lg:text-4xl">
          <span className="inline-block bg-gradient-to-r from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
          Prolog  
          </span>
          <span className="inline-block ml-2 bg-gradient-to-l from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
          Kuroshitsuji  
          </span>
      </h1>
      {dataStory.map((data)=> (
        <div key={data.id}>
          <p className="text-justify tex-md mb-6 text-neutral-500">
            {data.deks}
          </p>
        </div>
      ))}
    </div>
  )
}

export default StoryPage