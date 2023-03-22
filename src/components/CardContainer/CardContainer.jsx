import Card from "../Card/Card";

function CardContainer() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center gap-24 py-20">
      <Card />
      <Card />
    </div>
  );
}

export default CardContainer;
