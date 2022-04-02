import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export const CharacterList = () => {
  const { data, loading, error } = useCharacters();

  if (loading) return <div className="bg-blue-200"> loading...</div>;
  if (error) return <div className="bg-red-200"> something is wrong</div>;

  return (
    <>
      <section className="w-full m-4 text-left">
        <h2 className="mb-4 font-serif text-2xl font-bold">Character list</h2>
        {/* render cards with the data from graphql api  */}
        <div className="flex flex-col gap-6 md:w-full md:flex-row md:flex md:flex-wrap ">
          {data.characters.results.map((character) => {
            return (
              <Link
                to={`/${character.id}`}
                className="flex flex-col p-4 bg-white rounded"
                key={character.id}
              >
                <img src={character.image} alt={character.name} />

                <h2 className="mt-4 ">{character.name}</h2>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};
