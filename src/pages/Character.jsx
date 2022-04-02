import { useCharacter } from "../hooks/useCharacter";
import { Link, useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiHome } from "react-icons/hi";

// react functional component
function Character() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, data, error } = useCharacter(id);

  if (loading) return <div>loading</div>;

  if (error)
    return (
      <div className="flex flex-col items-center justify-center w-full h-[100vh]  text-center gap-4">
        <h1 className="text-5xl">404 not found</h1>
        <div className="flex flex-row">
          <button
            className="flex items-center gap-2 p-4 pl-6 pr-6 text-indigo-800 align-bottom bg-indigo-200 rounded-xl"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            <HiArrowLeft />
            go back
          </button>
          <button className="flex items-center gap-2 p-4 pl-6 pr-6 text-indigo-800 align-bottom bg-indigo-200 rounded-xl">
            {" "}
            <HiHome />
            <Link to="/">go home</Link>
          </button>
        </div>
      </div>
    );

  if (data)
    return (
      <div className="p-4 bg-slate-100 ">
        <nav className="mb-4 underline">
          <ul>
            <Link to="/">
              <span>go back</span>
            </Link>
          </ul>
        </nav>
        <main>
          <div>
            <section className="flex gap-2 justify-stretch">
              <img
                src={data.character.image}
                alt={data.character.name}
                className="rounded"
              />
              <div className="flex flex-col gap-3">
                <div className="w-full">
                  <p className="font-serif tracking-wide">Name</p>
                  <h2 className="w-full p-3 bg-white border-gray-100 border-1">
                    {data.character.name}
                  </h2>
                </div>
                <div className="w-full">
                  <p className="font-serif tracking-wide">Gender</p>
                  <p className="w-full p-3 bg-white border-gray-100 border-1">
                    {data.character.gender}
                  </p>
                </div>
              </div>
            </section>
            <h3 className="mt-4 font-serif text-2xl">Episodes</h3>
            <ul className="flex flex-col gap-3 mt-4">
              {data.character.episode.map((episode) => {
                return (
                  <li className="p-3 bg-white border-gray-100 border-1 transition-all hover:bg-slate-200 hover:cursor-pointer hover:scale-[1.022] hover:transition-all">
                    <p className="text-xs tracking-wide">{episode.episode}</p>
                    <h3>{episode.name}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    );
}

export default Character;
