import React from "react";
import { animeApi } from "../helpers/const";

export const AdminContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_ANIME") {
    return {
      ...state,
      anime: action.payload,
    };
  }
  if (action.type === "GET_FIGURINES") {
    return {
      ...state,
      figurines: action.payload,
    };
  }

  if (action.type === "GET_ONLY_CLOUSE") {
    return {
      ...state,
      clouse: action.payload,
    };
  }

  if (action.type === "GET_ANIME_TO_EDIT") {
    return {
      ...state,
      animeEdit: action.payload,
    };
  }
  return state;
};

function AdminProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    anime: [],
    figurines: [],
    clouse: [],
    animeEdit: null,
  });

  const sendAnime = (newAnime) => {
    fetch(animeApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnime),
    });
  };

  const getAnime = () => {
    fetch(animeApi)
      .then((res) => res.json())
      .then((data) => {
        let action = {
          type: "GET_ANIME",
          payload: data,
        };
        dispatch(action);
      });
  };

  const sendFigurines = (figurines) => {
    fetch(animeApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(figurines),
    });
  };

  const getFigurines = () => {
    fetch(`${animeApi}`)
      .then((res) => res.json())
      .then((data) => {
        let onlyFigurines = data.filter((item) => item.type === "figurines");
        let action = {
          type: "GET_FIGURINES",
          payload: onlyFigurines,
        };
        dispatch(action);
      });
  };

  const getOnlyClouse = () => {
    fetch(`${animeApi}`)
      .then((res) => res.json())
      .then((data) => {
        let onlyClouse = data.filter((item) => item.type === "clouse");
        let action = {
          type: "GET_ONLY_CLOUSE",
          payload: onlyClouse,
        };
        dispatch(action);
      });
  };

  // ! DELETE
  const deleteAnime = (id) => {
    fetch(`${animeApi}/${id}`, {
      method: "DELETE",
    }).then(() => getAnime());
  };

  // !UPDATE
  const getAnimeToEdit = (id) => {
    fetch(`${animeApi}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let action = {
          type: "GET_ANIME_TO_EDIT",
          payload: data,
        };
        dispatch(action);
      });
  };

  const saveEditedAnime = (editedAnime) => {
    fetch(`${animeApi}/${editedAnime.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedAnime),
    });
  };

  const data = {
    anime: state.anime,
    animeEdit: state.animeEdit,
    figurines: state.figurines,
    clouse: state.clouse,
    deleteAnime,
    sendAnime,
    saveEditedAnime,
    getAnime,
    getFigurines,
    getOnlyClouse,
    getAnimeToEdit,
    sendFigurines,
  };
  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
