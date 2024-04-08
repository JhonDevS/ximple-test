// actions/creditsActions.ts
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  fetchCreditsRequest,
  fetchCreditsSuccess,
  fetchCreditsFailure,
} from "../reducers/creditsReducer";

export const fetchCredits = async (dispatch: any) => {
  dispatch(fetchCreditsRequest());
  try {
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL ?? "");
    const data = (await response.json()).credits;
    dispatch(fetchCreditsSuccess(data));
  } catch (error) {
    dispatch(fetchCreditsFailure("Error obteniendo creditos"));
  }
};
