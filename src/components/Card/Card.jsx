function Card(props) {
  return (
    <div className=" flex">
      <div className="text-secondaryLight rounded-lg flex flex-col w-1/3">
        <h3 className="text-4xl font-bold m-4">{props.empresa}</h3>
        <p className="text-xl p-4 m-2.5">{props.description}</p>
      </div>
      <div className="flex justify-center flex-wrap gap-6  w-2/3">
        <img
          className="rounded-3xl w-[375px] h-[275]"
          src={props.image[0]}
          alt=""
        />
        <img
          className="rounded-3xl w-[375px] h-[275]"
          src={props.image[1]}
          alt=""
        />
        <img
          className="rounded-3xl w-[375px] h-[275]"
          src={props.image[2]}
          alt=""
        />
        <img
          className="rounded-3xl w-[375px] h-[275]"
          src={props.image[3]}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
