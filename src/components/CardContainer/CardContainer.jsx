import Card from "../Card/Card";
import image1 from "../../assets/img/vlcsnap-2023-03-21-11h58m37s040.png";
import image2 from "../../assets/img/vlcsnap-2023-03-21-11h58m46s440.png";
import image3 from "../../assets/img/vlcsnap-2023-03-21-11h58m47s222.png";
import image4 from "../../assets/img/vlcsnap-2023-03-21-11h58m47s222.png";
import image5 from "../../assets/img/vlcsnap-2023-03-27-10h51m26s457.png";
import image6 from "../../assets/img/vlcsnap-2023-03-27-10h51m34s191.png";
import image7 from "../../assets/img/vlcsnap-2023-03-27-10h51m38s182.png";
import image8 from "../../assets/img/vlcsnap-2023-03-27-10h52m00s367.png";

function CardContainer() {
  const description =
    "El proyecto consiste en dos grandes secciones, un e-commerce orientado a los productos veterinarios, y una sección de servicios orientados a las mascotas, como las guarderías o paseadores, la idea del proyecto es poder bríndale esta SPA a las protectoras de animales para que asociadas con distintas veterinarias, estas pueda vender sus productos por la página y un pequeño porcentaje de las ventas se destine a dichas protectoras. Desde la parte tecnica usamos React, Redux, Express, node, Tailwind, Javascript, integraciones con la pasarela de pagos de Mercado Pago, noticificaciones de email y autentificaciones con google, entre otras.";
  const description2 =
    "En mi proyecto individual para Soy Henry, me toco la tematica de una API de recetas y me enfoqué en desarrollar un código de backend sencillo y rápido, que permitiera al frontend ofrecer opciones para la creación de Recetas. Mi objetivo fue brindar una experiencia de usuario completa y personalizada para los usuarios de la plataforma.";
  const image = [image1, image2, image3, image4];
  const empresa = "Henry";
  return (
    <div className="min-h-screen w-full flex flex-col justify-center gap-24 py-20">
      <Card empresa={empresa} image={image} description={description} />
      <Card
        empresa={empresa}
        image={[image5, image6, image7, image8]}
        description={description2}
      />
    </div>
  );
}

export default CardContainer;
