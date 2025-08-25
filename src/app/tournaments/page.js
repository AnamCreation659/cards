import TournamentCard from "../../components/TournamentCard";
export default function Tournaments() {
  const data = [
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },
    {
      game: "COD PK",
      date: "12:00",
      fee: "Publi",
      prize: "$500",
      img: "/image/Dashboard-dark.png",
    },    
  ];

  return (
    <div className="p-9 min-h-screen bg-gray-700 bg-card">
      <div className="flex items-center justify-start gap-4">
        <h1 className="text-3xl font-grifter text-white">Tournaments</h1>
        <div className="flex items-center gap-2">
          <span className="text-white text-lg font-actay">Show upcoming only</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-[60px] h-8 bg-zinc-600 opacity-[0.7] rounded-full peer after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-[#FE0100] after:h-6 after:w-6 after:rounded-full after:transition-all peer-checked:after:translate-x-7"></div>
          </label>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="relative inline-block w-66">
            <select className="p-5 appearance-none outline-none bg-zinc-600 text-[#989898] pr-8 rounded text-lg w-full">
              <option>Select time</option>
              <option>Fortnite</option>
              <option>COD</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 38.807 19.403"
                className="transition-transform duration-300"
              >
                <g transform="translate(38.807) rotate(90)">
                  <path
                    d="M9.82,20.972.475,11.631a1.61,1.61,0,0,1,0-2.285L9.82,0l1.714,1.714-8.77,8.772,8.772,8.772Z"
                    transform="matrix(-1, 0, 0, -1, 15.5, 29.897)"
                    fill="#989898"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div className="relative inline-block w-66">
            <select className="p-5 appearance-none outline-none bg-zinc-600 text-[#989898]  pr-8 rounded text-lg w-full">
              <option>Select time</option>
              <option>Fortnite</option>
              <option>COD</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 38.807 19.403"
                className="transition-transform duration-300"
              >
                <g transform="translate(38.807) rotate(90)">
                  <path
                    d="M9.82,20.972.475,11.631a1.61,1.61,0,0,1,0-2.285L9.82,0l1.714,1.714-8.77,8.772,8.772,8.772Z"
                    transform="matrix(-1, 0, 0, -1, 15.5, 29.897)"
                    fill="#989898"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div className="relative inline-block w-58">
            <select className="p-5 appearance-none outline-none bg-zinc-600 text-[#989898]  pr-8 rounded text-lg w-full">
              <option>All Games</option>
              <option>Fortnite</option>
              <option>COD</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 38.807 19.403"
                className="transition-transform duration-300"
              >
                <g transform="translate(38.807) rotate(90)">
                  <path
                    d="M9.82,20.972.475,11.631a1.61,1.61,0,0,1,0-2.285L9.82,0l1.714,1.714-8.77,8.772,8.772,8.772Z"
                    transform="matrix(-1, 0, 0, -1, 15.5, 29.897)"
                    fill="#989898"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div className="relative inline-block w-56">
            <select className="p-5 appearance-none outline-none bg-zinc-600 text-[#989898]  pr-8 rounded text-lg w-full">
              <option>Sort by</option>
              <option>Fortnite</option>
              <option>COD</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 38.807 19.403"
                className="transition-transform duration-300"
              >
                <g transform="translate(38.807) rotate(90)">
                  <path
                    d="M9.82,20.972.475,11.631a1.61,1.61,0,0,1,0-2.285L9.82,0l1.714,1.714-8.77,8.772,8.772,8.772Z"
                    transform="matrix(-1, 0, 0, -1, 15.5, 29.897)"
                    fill="#989898"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
            {data.map((item, i) => (
          <TournamentCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
