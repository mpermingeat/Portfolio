function Card() {
  return (
    <div className=" flex">
      <div className="text-secondaryLight rounded-lg flex flex-col w-1/3">
        <h3 className="text-4xl font-bold m-4">Empresa</h3>
        <p className="text-2xl p-4 m-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          reiciendis quia ratione eaque enim provident harum mollitia ipsum a.
          Molestiae incidunt ab perspiciatis, sint porro similique nam
          voluptatem atque odit!
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-6  w-2/3">
        <img
          className="rounded-3xl "
          src="https://via.placeholder.com/375x300"
          alt=""
        />
        <img
          className="rounded-3xl "
          src="https://via.placeholder.com/375x300"
          alt=""
        />
        <img
          className="rounded-3xl "
          src="https://via.placeholder.com/375x300"
          alt=""
        />
        <img
          className="rounded-3xl "
          src="https://via.placeholder.com/375x300"
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
