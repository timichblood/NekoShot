import React from "react";
import { animeApi } from "../helpers/const";

export const ClientContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_ANIME") {
    return {
      ...state,
      anime: action.payload,
    };
  }
  return state;
};

function ClientProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    anime: [],
  });

  // !READ
  const limit = 3;
  const [pagesCount, setPagesCount] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchWord, setSearchWord] = React.useState("");

  const getAnime = () => {
    fetch(`${animeApi}?q=${searchWord}&_limit=${limit}&_page=${currentPage}`)
      .then((res) => {
        let count = Math.ceil(res.headers.get("X-Total-Count") / limit);
        setPagesCount(count);
        return res.json();
      })
      .then((data) => {
        let action = {
          type: "GET_ANIME",
          payload: data,
        };
        dispatch(action);
      });
  };

  const data = {
    anime: state.anime,
    pagesCount,
    searchWord,
    currentPage,
    getAnime,
    setCurrentPage,
    setSearchWord,
  };

  return (
    <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
  );
}

export default ClientProvider;
