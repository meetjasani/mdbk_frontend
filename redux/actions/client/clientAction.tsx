import axios from 'axios'
import * as types from '../types'
import Router, { useRouter } from 'next/router'
import { ClentA } from '../../interfaces/actiontype'
import { Dispatch } from 'redux'



export const registerClient = (
  client: any,
  introductryImg: any
) => (dispatch: Dispatch<ClentA>) => {
  const router = useRouter();
  const formData = new FormData()
  formData.append("introductryImg", introductryImg[0])

  axios
    .post("http://localhost:4000/v1/clientProfile/create", client)
    .then(response => {
      if (response.data && response.data.status == 'success') {
        { Router.push(`${router.locale && router.locale == 'en' ? '/en/popup/updateProfilePop?islogin=2' : '/popup/updateProfilePop?islogin=2'}`) }
      } else {
        console.log("No Data found")
      }
    })
    .catch(error => {
      dispatch({
        type: types.EMAIL_ALREADY_EXIST,
        payload: 'Email already exists'
      })
    })
}


export const getProvinces = () => (dispatch: Dispatch<ClentA>) => {
  axios
    .get("http://localhost:4000/v1/province")
    .then(response => {
      if (response.status == 200) {
        dispatch({
          type: types.GET_PROVINCES,
          payload: response.data.data
        })
      }
    }
    )
    .catch((error) => {
      console.log(error)
    })
}

export const getDistricts = () => (dispatch: Dispatch<ClentA>) => {
  axios
    .get("http://localhost:4000/v1/district")
    .then(response => {
      if (response.status == 200) {
        dispatch({
          type: types.GET_DISTRICTS,
          payload: response.data.data
        })
      }
    }
    )
    .catch((error) => {
      console.log(error)
    })
}

export const getClientByMemberId = () => (dispatch: Dispatch<ClentA>) => {
  axios
    .get("http://localhost:4000/v1/clientProfile/byMemberId")
    .then(response => {
      if (response.status == 200) {
        dispatch({
          type: types.GET_CLIENT,
          payload: response.data.data
        })
      }
    }
    )
    .catch((error) => {
      console.log(error)
    })
}

export const getClientByProfession = (profession: any) => (dispatch: Dispatch<ClentA>) => {
  axios
    .get(`http://localhost:4000/v1/clientProfile/${profession}`)
    .then(response => {
      if (response.data && response.data.status == 'success') {
        dispatch({
          type: types.GET_CLIENT_BY_PROFESSION,
          payload: response.data.data
        })
      } else {
        //  dispatch(errorHandlerActions.handleHTTPError(response))
      }

    })
    .catch(error => {
      //  dispatch(errorHandlerActions.handleHTTPError(error))
      console.log(error)
    })
}

export const generateVerificationCode = (
  phoneNumber: any
  //  callback,
) => (dispatch: Dispatch<ClentA>) => {

  axios
    .post("http://localhost:4000/v1/clientProfile/generateVerificationCode", phoneNumber)
    .then(response => {
      if (response.data && response.data.status == 'success') {
        dispatch({
          type: types.VERIFICATION_CODE,
          payload: response
        })
        dispatch({
          type: types.VERIFICATION_CODE_MSG,
          payload: 'A verification code has been sent'
        })

        // console.log("response", response.config.data.email)
        //  { Router.push(`${Router.router.locale && Router.router.locale == 'en' ? '/en/emailConfirmation?islogin=2' : '/emailConfirmation?islogin=2'}`) }
        // callback(true)
      } else {
        console.log("No Data found")
      }
      //  callback(true)
    })
    .catch(error => {
      console.log("Error", error)
      //  callback(true)
    })
}

export const verifyPhone = (
  phoneNumber: any
  //  callback,
) => (dispatch: Dispatch<ClentA>) => {
  const router = useRouter();
  axios
    .post("http://localhost:4000/v1/clientProfile/verifyPhone", phoneNumber)
    .then(response => {
      if (response.data && response.data.status == 'success') {
        { Router.push(`${router.locale && router.locale == 'en' ? '/en/popup/phoneNumberVerificationPop?islogin=2' : '/popup/phoneNumberVerificationPop?islogin=2'}`) }
        // callback(true)
      } else {
        console.log("No Data found")
      }
      //  callback(true)
    })
    .catch(error => {
      dispatch({
        type: types.PHONE_CODE_ERROR_MSG,
        payload: 'You have entered invalid verification code'
      })
      console.log("Error", error)
      //  callback(true)
    })
}