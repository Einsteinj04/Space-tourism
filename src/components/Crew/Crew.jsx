import React,{useState} from "react";
import Data from '../../data.json'
const Crew = () => {
  const [crew_item, setCrew_Items] = useState(Data.crew[0])
  const filterItems = (detail) => {
    setCrew_Items(Data.crew.find((item) => item.name === detail))
  };
    return (
      <section className="lg:px-20 px-5 lg:pt-52 pt-10 lg:bg-[url('../../../src/assets/crew/background-crew-desktop.jpg')] md:bg-[url('../../../src/assets/crew/background-crew-tablet.jpg')] bg-[url('../../../src/assets/crew/background-crew-mobile.jpg')] bg-cover bg-no-repeat">
        <h2
          className="uppercase font-barlow md:text-sm text-xxsm tracking-[.25em] md:text-left text-center"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <span className="text-slate md:pr-[28px] pr-[12px]">02</span>Meet your
          Crew
        </h2>
        <div
          className="
            border-r-blue grid lg:grid-cols-2 gris-cols-2 gap-x-10 w-full outline outline-offset-2 outline-1"
        >
          <div className="self-center pb-10 outline outline-offset-2 outline-1 ">
            {/* <img src={`../../../src/${item.images.png}`} alt={item.name} /> */}
            <div className="text-slate uppercase md:text-sm text-xsm py-5 md:text-left text-center">
              {crew_item.role}
            </div>
            <div className="uppercase md:text-md text-sm md:text-left text-center">
              {crew_item.name}
            </div>
            <p className="text-slate max-w-[400px] md:text-left text-center pb-20">
              {crew_item.bio}
            </p>

            <div className="flex max-w-[135px] md:mx-0 justify-between mx-auto">
              {Data.crew.map((crew) => {
                return (
                  <div
                    id={crew.name}
                    className="h-[15px] w-[15px] rounded-full border-white bg-slate cursor-pointer"
                    onClick={() => {
                      filterItems(crew.name);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="place-self-center outline outline-offset-2 outline-1 min-w-[100px]">
            <img
              src={`../../../src/${crew_item.images.png}`}
              alt={""}
              data-aos="fade-in"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
    );  
}

export default Crew