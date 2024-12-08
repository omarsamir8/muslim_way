import axios from "axios";

export const fetchQuranData = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    const { data } = await axios.get("https://api.alquran.cloud/v1/surah"); // استدعاء الـ API
    dispatch({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: data, // تخزين استجابة الـ API
    });
  } catch (error) {
    dispatch({
      type: "FETCH_PRODUCTS_FAILURE",
      payload: error.message,
    });
  }
};

