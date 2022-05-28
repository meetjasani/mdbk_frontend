import axios from 'axios'
import * as types from '../types'
import Router, { useRouter } from 'next/router'
import { SideA } from '../../interfaces/actiontype'
import { Dispatch } from 'redux'
export const registerSideCharacter = (
  sideCharacter: any
) => (dispatch: Dispatch<SideA>) => {
  console.log("action sideCharacter", sideCharacter)

  const router = useRouter();
  axios
    .post("http://localhost:4000/v1/sideCharacProfile/create", sideCharacter)
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