import { ProductsTypo } from "../../constants/ProductsTypo";
import { AddressType, ProfileTypo } from "../../constants/ProfileTypo";
import { AppDispatch } from "../store";
import {
  GET_ALLPROFILE_SUCCESS,
  GET_PROFILE_SUCCESS,
  PATCH_PROFILE_SUCCESS,
  POST_PROFILE_SUCCESS,
  PROFILE_ERROR,
  PROFILE_LOADING,
} from "../types/ProfileTypes";

import { apiCall } from "./Action.api";

//get profile----------------------------------->
export const getProfile =
  (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch({ type: PROFILE_LOADING });
    apiCall({
      method: "get",
      url: `http://localhost:8080/profile?email=${email}&password=${password}`,
    })
      .then((res) => {
        dispatch({ type: GET_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };

//Post profile------------------------------------------>
export const postProfile = (data: ProfileTypo) => (dispatch: AppDispatch) => {
  dispatch({ type: PROFILE_LOADING });
  apiCall({
    method: "post",
    url: `http://localhost:8080/profile`,
    data: {
      ...data,
    },
  })
    .then((res) => {
      dispatch({ type: POST_PROFILE_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PROFILE_ERROR });
    });
};

//update cart------------------------------------------->
export const updateCart =
  (id: number, data: ProductsTypo[]) => (dispatch: AppDispatch) => {
    dispatch({ type: PROFILE_LOADING });

    apiCall({
      method: "patch",
      url: `http://localhost:8080/profile/${id}`,
      data: {
        cart: data,
      },
    })
      .then((res) => {
        dispatch({ type: PATCH_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };


  export const updateAddress = (id:number, changeAddress:AddressType) => (dispatch: AppDispatch) => {
    dispatch({ type: PROFILE_LOADING });

    apiCall({
      method: "patch",
      url: `http://localhost:8080/profile/${id}`,
      data: {
        location: changeAddress
      },
    })
      .then((res) => {
        console.log(res)
        dispatch({ type: PATCH_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };

//delete cart product------------------------------------------>
export const deleteProduct = (id: number) => (dispatch: AppDispatch) => {
  dispatch({ type: PROFILE_LOADING });
  apiCall({
    method: "patch",
    url: `http://localhost:8080/profile/${id}`,
  })
    .then((res) => {
      dispatch({ type: POST_PROFILE_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PROFILE_ERROR });
    });
};

//get profile----------------------------------->
export const getAllProfile = () => (dispatch: AppDispatch) => {
  dispatch({ type: PROFILE_LOADING });
  apiCall({
    method: "get",
    url: `http://localhost:8080/profile`,
  })
    .then((res) => {
      dispatch({ type: GET_ALLPROFILE_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PROFILE_ERROR });
    });
};

//update cart------------------------------------------->
export const patchOrderedProducts =
  (id: number, data: ProductsTypo[]) => (dispatch: AppDispatch) => {

    dispatch({ type: PROFILE_LOADING });

    apiCall({
      method: "patch",
      url: `http://localhost:8080/profile/${id}`,
      data: {
        orderedProducts: data,
      },
    })
      .then((res) => {
        dispatch({ type: PATCH_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };