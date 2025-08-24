export default function TournamentCard({ game, date, fee, prize, img }) {
  return (
    <div className="relative">
      <article
        className="h-[413px] relative bg-zinc-800/70 shadow-xl ring-1 ring-white/5
        [clip-path:polygon(0_0,calc(100%-25px)_0,100%_25px,100%_100%,0_100%)] overflow-hidden"
      >
        <div className="relative h-48 p-2">
          <img
            src={img}
            alt={game}
            className="h-full w-full object-cover [clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)] overflow-hidden"
          />
          <div className="absolute p-1 left-4 top-4 flex items-center border-1 border-white gap-1 rounded-md bg-zinc-900/70  text-xs text-white">
            <div className="flex items-center justify-between gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 16 16"
                className="w-4 h-4 ml-1"
              >
                <g
                  transform="translate(0.5 0.5)"
                  style={{ mixBlendMode: "normal", isolation: "isolate" }}
                >
                  <path
                    d="M7.5,15A7.5,7.5,0,1,1,15,7.5,7.5,7.5,0,0,1,7.5,15Z"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                  <path
                    d="M0,7.5H2.25m10.5,0H15M7.5,15V12.75m0-10.5V0"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                  <path
                    d="M0,1.5H3M1.5,3V0"
                    transform="translate(6 6)"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </g>
              </svg>

              <span>{date}</span>
            </div>
          </div>
          <div className="absolute right-4 bottom-4 rounded-md px-2 py-1 border-1 border-white gap-1 bg-zinc-900/70  text-xs text-white">
            {fee}
          </div>
        </div>
        <div className="space-y-3 p-3 relative flex flex-col justify-between h-1/2">
       <div className=" flex flex-col justify-between">
          <div className="flex items-center justify-between px-4 gap-4 text-sm text-zinc-300/80">
            <div className="flex items-center gap-1 text-[#90A7CB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15.625"
                viewBox="0 0 16 15.625"
                className="w-4 h-4 ml-1"
              >
                <g
                  transform="translate(0.5 0.5)"
                  style={{ mixBlendMode: "normal", isolation: "isolate" }}
                >
                  <path
                    d="M.879.879C1.758,0,3.172,0,6,0H9c2.828,0,4.243,0,5.121.879S15,3.172,15,6V7.5c0,2.828,0,4.243-.879,5.121S11.828,13.5,9,13.5H6c-2.828,0-4.243,0-5.121-.879S0,10.328,0,7.5V6C0,3.172,0,1.757.879.879Z"
                    transform="translate(0 1.125)"
                    fill="none"
                    stroke="#90a7cb"
                    strokeWidth="1"
                  />
                  <path
                    d="M3.375,1.125V0m7.5,1.125V0M0,4.875H14.25"
                    transform="translate(0.375 0)"
                    fill="none"
                    stroke="#90a7cb"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                  <path
                    d="M8.78,4.28A.75.75,0,1,1,9,3.75.75.75,0,0,1,8.78,4.28Zm0-3A.75.75,0,1,1,9,.75.75.75,0,0,1,8.78,1.28Zm-3.75,3a.75.75,0,1,1,.22-.53A.75.75,0,0,1,5.03,4.28Zm0-3A.75.75,0,1,1,5.25.75.75.75,0,0,1,5.03,1.28Zm-3.75,3a.75.75,0,1,1,.22-.53A.75.75,0,0,1,1.28,4.28Zm0-3A.75.75,0,1,1,1.5.75.75.75,0,0,1,1.28,1.28Z"
                    transform="translate(3 7.125)"
                    fill="#90a7cb"
                  />
                </g>
              </svg>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1 text-[#90A7CB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.638"
                height="14.5"
                viewBox="0 0 7.638 14.5"
                className="w-4 h-4 ml-1"
              >
                <path
                  d="M6.231,3.115A4.859,4.859,0,0,0,3.115,1.878C1.746,1.841.52,2.461.52,4.154c0,3.115,5.711,1.558,5.711,4.673,0,1.777-1.52,2.541-3.115,2.483A4.139,4.139,0,0,1,0,9.866M3.115,1.878V0m0,11.31V13.5"
                  transform="translate(0.7 0.5)"
                  fill="none"
                  stroke="#90a7cb"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  style={{ mixBlendMode: "normal", isolation: "isolate" }}
                />
              </svg>
              <span>{prize}</span>
            </div>
            <div className="flex items-center gap-1 text-[#90A7CB]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                className="w-5 h-5 ml-1"
              >
                <g
                  transform="translate(0.5 0.5)"
                  style={{ mixBlendMode: "normal", isolation: "isolate" }}
                >
                  <path
                    d="M7.5,15A7.5,7.5,0,1,1,15,7.5,7.5,7.5,0,0,1,7.5,15Z"
                    fill="none"
                    stroke="#90a7cb"
                    strokeWidth="1"
                  />
                  <path
                    d="M0,7.5H2.25m10.5,0H15M7.5,15V12.75m0-10.5V0"
                    fill="none"
                    stroke="#90a7cb"
                    strokeLinecap="round"
                    strokeWidth="1"
                  />
                  <path
                    d="M0,1.5H3M1.5,3V0"
                    transform="translate(6 6)"
                    fill="none"
                    stroke="#90a7cb"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </g>
              </svg>
              <span>{game}</span>
            </div>
          </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {game}
                <span className="ml-2 font-normal text-base">
                  (Under 12 Only)
                </span>
              </h3>
              <p className="mt-4 text-sm text-zinc-300/90">
                Lorem ipsum dolor sit amet consectetur. Aliquet cursus mi
                fermentum neque varius morbi dictum in eu.
              </p>
       </div>
            <div>
              <a
                href="#"
                className="flex items-end justify-end text-sm text-[#90A7CB] font-bold underline"
              >
                More Info
              </a>
            </div>
        </div>
      </article>
      <div className="absolute left-4 -bottom-3">
        <div className="[filter:drop-shadow(15px_-15px_30px_rgba(255,0,0,0.8))] relative">
          <div
            className="absolute inset-0 -m-2 bg-black 
         [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)] opacity-[0.5]"
          > 
          </div>
          <div
            className="relative bg-red-600 text-white font-semibold px-5 py-2
                [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]"
          >
            Join Tournament
          </div>
        </div>
        <div className="absolute -left-1 -bottom-1 w-10 h-4 bg-red-600"></div>
      </div>
    </div>
  );
}
