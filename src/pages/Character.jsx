import { useCharacter } from "../hooks/useCharacter";
import { Link } from "react-router-dom";

function Character() {
  const { loading, data, error } = useCharacter(3);

  console.log(data);
  console.log(loading);
  console.log(error);

  if (loading) return <div>loading</div>;

  if (error) return <div>error</div>;

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
