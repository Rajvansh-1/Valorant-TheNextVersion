import { gameovervirewvideo } from "../../../assets";
import styles, { layout } from "../../../style";

const Overview = () => (
  <div className={`bg-secondary ${styles.paddingX} flex justify-center relative`}>
    {/* --- Decorative Squares --- */}
    <div className="absolute w-2.5 h-2.5 bg-primary top-[10%] left-[45%]"></div>
    <div className="absolute w-2.5 h-2.5 bg-primary top-[5%] right-[48%]"></div>
    <div className="absolute w-2.5 h-2.5 bg-primary bottom-[20%] left-[5%]"></div>

    <div className={`${styles.boxWidth} md:py-24 py-16`}>
      <section id="about" className="flex md:flex-row flex-col items-center gap-12">
        
        {/* --- WIDTH ADJUSTED AS REQUESTED --- */}
        {/* Changed from flex-1 to md:w-2/5 to give it 40% of the width on medium screens */}
        <div className="md:w-2/5 text-left md:text-left text-center">
          <h1 className="font-anton uppercase text-black md:text-[5rem] text-[44px] leading-none mt-8">
            WE ARE VALORANT
          </h1>
          
          <h3 className="font-poppins uppercase font-semibold text-black text-[1.5rem] mt-10 mb-1">
            DEFY THE LIMITS
          </h3>
          
          <p className="font-roboto text-black text-[1rem] leading-relaxed">
            Blend your style and experience on a global, competitive
            stage. You have 13 rounds to attack and defend your side using
            sharp gunplay and tactical abilities. And, with one life
            per-round, you'll need to think faster than your opponent if
            you want to survive. Take on foes across Competitive and
            Unranked modes as well as Deathmatch and Spike Rush.
          </p>
          
          <div className="md:flex-start flex md:justify-start justify-center">
            <button className="btn mt-12 px-9 py-4">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content text-secondary">
                  LEARN THE GAME
                </span>
              </span>
            </button>
          </div>

        </div>
        
        {/* --- WIDTH ADJUSTED AS REQUESTED --- */}
        {/* Changed from flex-1 to md:w-3/5 to give it 60% of the width on medium screens */}
        <div className={`${layout.sectionImg} md:w-3/5`}>
          <video autoPlay loop muted className="w-full h-auto">
            <source src={gameovervirewvideo} type="video/mp4" />
          </video>
        </div>

      </section>
    </div>
  </div>
);

export default Overview;