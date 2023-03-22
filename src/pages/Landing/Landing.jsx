import React from "react";
import CardContainer from "../../components/CardContainer/CardContainer";

function Landing() {
  return (
    <div className=" flex flex-col bg-primaryDark  text-primaryLight justify-center items-center  ">
      <div className="w-3/4">
        <h1 className=" text-primaryLight  font-bold text-8xl mt-20 mb-10">
          I'm Maximiliano Permingeat Full Stack Developer.
        </h1>
        <div className="flex h-full py-5 justify-around">
          <div className="w-1/2 flex justify-center items-center">
            <h2 className="text-secondaryLight text-5xl my-10">
              Lorem iphsum dolor sit, amet consectetur adipisicing elit. Amet
              quis aut reprehenderit delectus suscipit pariatur praesentium
              commodi placeat distinctio inventore, consequatur doloremque neque
              enim ex doloribus nulla omnis sit molestiae!
            </h2>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              className="rounded-3xl "
              src="https://via.placeholder.com/400x600"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 ">
        <h2 className=" text-primaryLight  font-bold text-6xl mt-20">
          Proyects
        </h2>
        <CardContainer />
      </div>
    </div>
  );
}

export default Landing;
