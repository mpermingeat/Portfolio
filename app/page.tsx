import Image from "next/image";
import fotoPerfil from "./assets/img/perfil.png";
import fotoProyecto1 from "./assets/img/vlcsnap-2023-06-05-18h05m49s015.png";
import fotoProyecto2 from "./assets/img/vlcsnap-2023-06-05-18h06m02s860.png";
import fotoProyecto3 from "./assets/img/vlcsnap-2023-06-05-18h06m14s330.png";
import fotoProyecto4 from "./assets/img/vlcsnap-2023-06-05-18h06m29s941.png";
export default function Home() {
  return (
    <div data-theme="" className="flex flex-col justify-center items-center min-h-full">
      <div className="flex justify-around items-center min-h-full w-3/4">
        <div className="flex flex-col p-10 justify-center items-center w-9/12">
          <h1 className="text-6xl font-bold ">Maximiliano Permingeat</h1>
          <p className="p-3  text-2xl text-center  w-5/6">
            Greetings! I'm a dedicated Full Stack web developer with a strong passion for creating
            captivating and intuitive digital experiences. With a solid foundation in JavaScript,
            React, and Node.js, I bring a versatile skill set that spans both frontend and backend
            development. My keen eye for design and meticulous attention to detail ensure that every
            project I undertake not only functions flawlessly but also showcases an aesthetically
            pleasing user interface. I thrive in collaborative environments and enjoy working
            closely with clients and fellow developers to transform ideas into reality. Let's
            collaborate and bring your vision to life!
          </p>
        </div>
        <Image
          className="rounded-full h-[400px]  w-[400px] bg-slate-50 bg-opacity-10"
          src={fotoPerfil}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-around items-center min-h-full w-3/4">
        <h2 className="text-3xl font-bold p-10">Proyects</h2>
        <h3 className="text-2xl text-left font-bold p-10">Pet Friendly Universe</h3>
        <div className="flex justify-around items-center h-full w-2/4 p-10">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <Image className="w-full rounded-3xl" src={fotoProyecto1} alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <Image className="w-full rounded-3xl" src={fotoProyecto2} alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <Image className="w-full rounded-3xl" src={fotoProyecto3} alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <Image className="w-full rounded-3xl" src={fotoProyecto4} alt="" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="p-3  text-2xl text-center  w-5/6">
          Pet Friendly Universe is an exciting web project aimed at creating a seamless platform for
          pet owners, veterinary clinics, and animal shelters. It consists of two main sections: an
          e-commerce platform for veterinary products and a services section for pet-related
          services like daycare and dog walking. The project aims to support animal shelters by
          allowing them to sell their products through the platform, with a percentage of the sales
          going towards their cause. Technically, the project involves integrations with MercadoPago
          payment gateway, email notifications, Google authentication, and more. My contributions
          included payment gateway integration, production deployment, front-end development,
          back-end development, and implementing user CRUD functionalities. The project showcases my
          skills in API integration, database management, and delivering user-friendly features for
          an enhanced pet-friendly experience.
        </p>
        <p className="p-3  text-2xl text-center  w-5/6">
          Pet Friendly Universe is an innovative web project developed using a variety of
          cutting-edge technologies. It leverages technologies such as React, Redux, Express, and
          Sequelize for both front-end and back-end development. The project utilizes a Postgres
          database for efficient data management. Additionally, integrations with external services,
          including MercadoPago for payment processing and Google for authentication, enhance the
          functionality of the platform. The use of Tailwind CSS framework contributes to an
          appealing and responsive design. These technologies, combined with my expertise in full
          stack development, enable the seamless integration of features and provide a user-friendly
          experience for pet owners, veterinary clinics, and animal shelters.
        </p>
      </div>
    </div>
  );
}
