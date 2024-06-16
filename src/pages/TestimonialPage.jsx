import {dataNews} from "../constants/index"

function TestimonialPage() {
  return (
    <div className="text-justify">
      <h1 className="mb-7 text-center text-2xl sm:text-2xl lg:text-4xl">
          <span className="inline-block bg-gradient-to-r from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
          News Update 
          </span>
      </h1>
      <p className="text-center tex-md mb-10 text-neutral-500">
      Stay updated with the latest news and announcements about the anime Kuroshitsuji (Black Butler). Here you'll 
      find information on new episodes, upcoming seasons, special events, and more. Dive into the world of Kuroshitsuji 
      and never miss an update!
      </p>
      <div className="">
        {dataNews.map((data)=>(
          <div key={data.id} className="mb-4 border p-6 rounded-lg">
            <a href={data.navigate_url}>
            <h2 className="text-md lg:text-lg md:text-md sm:text-sm text-white mb-2 hover:bg-gradient-to-r hover:from-cs-light-red hover:to-cs-white-smooth hover:text-transparent hover:bg-clip-text">
              {data.title}
            </h2>
              <p className="tex-md sm:text-sm text-neutral-500">{data.deks}</p>
            </a>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TestimonialPage