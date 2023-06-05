import Image from "next/image";
import fotoPerfil from "./assets/img/perfil.png";
export default function Home() {
  return (
    <div data-theme="" className="flex flex-col justify-center items-center min-h-full">
      <div className="flex justify-around items-center min-h-full w-3/4">
        <div className="flex flex-col justify-center items-center w-9/12">
          <h1 className="text-6xl font-bold text-white">Maximiliano Permingeat</h1>
          <p className="p-5  text-2xl text-center text-white w-5/6">
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
        <Image className="rounded-full h-[475px]  w-3/12" src={fotoPerfil} alt="" />
      </div>
    </div>
  );
}
