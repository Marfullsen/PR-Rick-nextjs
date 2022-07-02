export default function Card({name = "", image = ""}) {

  return (
    <>
      <div className="card text-start mt-3">
        <div className="card-body">
          <img src={image} alt={name} className="" />
          <h4 className="card-title">{name}</h4>
          {/* <p className="card-text">{image}</p> */}

          {/* <button className="btn btn-primary" onClick={() => alert("hola")}>Primary</button> */}
        </div>
      </div>
    </>
  );
}