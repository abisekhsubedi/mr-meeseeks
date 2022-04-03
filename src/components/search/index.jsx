import { React, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

// Functional component
export const Search = () => {
  const navigate = useNavigate();

  let [name, setName] = useState("");

  let [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div className="h-[100vh] bg-slate-50">
      <button
        className=""
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        go back{" "}
      </button>
      <section className="flex gap-4 mt-4 mb-4 ">
        <input
          className="p-2 ml-2 border rounded"
          type="search"
          id="search"
          value={name}
          placeholder="🔎 search character"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
        <button
          className="pt-2 pb-2 pl-6 pr-6 text-white bg-indigo-600 rounded"
          onClick={() => {
            // execute the query and going to get that {loading, error, data, called}
            getLocations();
          }}
        >
          Search
        </button>
      </section>
      {/* <h1 className="ml-2">{name || "one way data binding"}</h1> */}
      {/* if loading */}
      {loading && <div>loading....</div>}
      {/* if error */}
      {error && <div className="ml-2 text-[5rem]">🧨 error</div>}
      {/* if data */}
      {data && (
        <div className="ml-2">
          <h3 className="mt-4 font-serif text-2xl">Episodes</h3>
          <ul className="flex flex-col gap-3 mt-4">
            {data.characters.results.map((character) => {
              return (
                <li className="p-3 bg-white border-gray-100 border-1 transition-all hover:bg-slate-200 hover:cursor-pointer hover:scale-[1.022] hover:transition-all">
                  <p className="">{character.location.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
