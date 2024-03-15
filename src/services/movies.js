import { URL, headers } from "../utils/constants";
import axios from "axios";
import { data } from "../data";
const makeRequest = false;
export const getNowplaying = async () => {
  if (!makeRequest) return data;
  try {
    const data = await axios.get(URL + "now_playing", {
      headers: headers,
    });
    return data.data;
  } catch (ex) {
    // console.log(ex);
  }
};

export const getPopular = async () => {
  if (!makeRequest) return data;

  try {
    const data = await axios.get(URL + "popular", {
      headers: headers,
    });
    return data.data;
  } catch (ex) {
    // console.log(ex);
  }
};

export const getTopRated = async () => {
  if (!makeRequest) return data;

  try {
    const data = await axios.get(URL + "top_rated", {
      headers: headers,
    });
    return data.data;
  } catch (ex) {
    console.log(ex);
  }
};

export const getUpcoming = async () => {
  if (!makeRequest) return data;

  try {
    const data = await axios.get(URL + "upcoming", {
      headers: headers,
    });
    return data.data;
  } catch (ex) {
    // console.log(ex);
  }
};

export const getTrailer = async (movieId) => {
  if (!makeRequest) return { key: "hXzcyx9V0xw?si=gRTx7v3PTuh7xxKd" };

  try {
    // https://api.themoviedb.org/3/movie/{movie_id}/videos
    const link = await axios.get(URL + `${movieId}/videos`, {
      headers: headers,
    });
    const res = await link.data.results.find(
      (ele) => ele.type === "Clip" && ele.site === "YouTube"
    );
    return res;
  } catch (ex) {
    // console.log(ex.message);
    return null;
  }
};
