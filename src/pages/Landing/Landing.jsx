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
          <div className="w-1/2 flex flex-col ">
            <p className="text-secondaryLight text-xl m-4">
              Sobre mí, soy Argentino. Siempre me intereso la tecnología y la
              programación, pero empecé a estudiar programación hace 6 años.
            </p>

            <p className="text-secondaryLight text-xl m-4">
              Uno de los cursos que realice fue el bootcamp de Henry de
              Full-Stack Developer, un curso intensivo y con mucho que aprender.
              Pero gracias a mi dedicación y perseverancia, pude desenvolverme
              bien tanto el Front-end como el Back-end, aunque tengo una
              preferencia por este último.
            </p>
            <p className="text-secondaryLight text-xl m-4">
              Tengo experiencia en
              <span className="font-bold">
                " React, Redux, Express, node, Tailwind, Javascript,"
              </span>
              entre otras. Trabaje tanto en el front-end como en back-end, en
              los proyectos que participe.
            </p>
            <span className=" bg-middleColor rounded-xl mt-10 p-2 text-primaryDark text-xl self-end cursor-pointer hover:font-bold hover:bg-secondaryLight">
              Más información...
            </span>
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
      <div className="w-4/5 ">
        <h2 className=" text-primaryLight  font-bold text-6xl mt-20">
          Proyects
        </h2>
        <CardContainer />
      </div>
    </div>
  );
}

export default Landing;
