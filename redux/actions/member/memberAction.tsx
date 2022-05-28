/* eslint-disable eqeqeq */
import axios from 'axios'
import * as types from '../types'
import Router, { useRouter } from 'next/router'
import { Dispatch } from 'redux'
import { MemberA } from '../../interfaces/actiontype'


export const loginUser = (email: any, password: any) => (dispatch: Dispatch<MemberA>) => {
  const router = useRouter();
  axios
    .post("http://localhost:4000/v1/member/login", { email, password })
    .then(response => {
      if (response.data && response.data.result == true) {
        Router.push(`${router.locale && router.locale == 'en' ? '/en/search/login/search?islogin=1&loginStateVal=true&type=client' : '/search/login/search?islogin=1&loginStateVal=true&type=client'}`)
      }
    }
    )
    .catch((error) => {
      dispatch({
        type: types.LOGIN_USER,
        payload: error
      })
    })
}

export const isEmailRegistered = (
  member: any
) => (dispatch: Dispatch<MemberA>) => {
  const router = useRouter();
  axios
    .post("http://localhost:4000/v1/member/isEmailRegistered", member)
    .then(response => {
      if (response.data && response.data.status == 'success') {
        dispatch({
          type: types.MEMBER_REGISTER,
          payload: member
        })
        { response.data.data == true ? Router.push(`${router.locale && router.locale == 'en' ? '/en/changePassword?islogin=2' : '/changePassword?islogin=2'}`) : Router.push(`${router.locale && router.locale == 'en' ? '/en/emailVerify?islogin=2' : '/emailVerify?islogin=2'}`) }
      } else {
        console.log("No Data found")
      }

    })
    .catch(error => {
      console.log("Error", error)
    })
}

export const generateVerificationCode = (
  email: any
  //  callback,
) => (dispatch: Dispatch<MemberA>) => {
  const router = useRouter();
  axios
    .post("http://localhost:4000/v1/member/generateVerificationCode", email)
    .then(response => {
      if (response.data && response.data.status == 'success') {
        dispatch({
          type: types.VERIFICATION_CODE,
          payload: response
        })
        { Router.push(`${router.locale && router.locale == 'en' ? '/en/emailConfirmation?islogin=2' : '/emailConfirmation?islogin=2'}`) }
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

export const verifyEmail = (
  email: any
  //  callback,
) => (dispatch: Dispatch<MemberA>) => {
  const router = useRouter();
  axios
    .post("http://localhost:4000/v1/member/verifyEmail", email)
    .then(response => {
      if (response.data && response.data.status == 'success') {
        { Router.push(`${router.locale && router.locale == 'en' ? '/en/popup/emailConfirmPop?islogin=2' : '/popup/emailConfirmPop?islogin=2'}`) }
        // callback(true)
      } else {
        console.log("No Data found")
      }
      //  callback(true)
    })
    .catch(error => {
      dispatch({
        type: types.EMAIL_ERROR,
        payload: 'Email already exists'
      })
      console.log("Error", error)
      //  callback(true)
    })
}

export const registerMember = (
  member: any
) => (dispatch: Dispatch<MemberA>) => {
  const router = useRouter();
  axios
    .post("http://localhost:4000/v1/member/registerMember", member)
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

// export const validateUser = () => dispatch => {
//   const { authorization } = parseCookies()

//   const allowPages = ['/auth/forgotPwd', '/register', '/404', '/register/success']

//   if (!allowPages.includes(Router.pathname)) {
//     if (authorization) {
//       axios
//         .post("/v1/auth/validateAccess")
//         .then(response => {
//           if (response.data.result === true) {

//             dispatch({
//               type: types.VALIDATE_USER,
//               payload: response.data
//             })
//           }
//         }
//         )
//         .catch(() => {
//           toast.error('Wrong Credentails. Please try again.', {
//             position: toast.POSITION.BOTTOM_RIGHT,
//             autoClose: 3000,
//             draggable: false
//           })
//         })
//     } else {
//       Router.push('/auth/login')
//     }
//   }
// }

// export const forgotPassword = (email) => dispatch => {
//   axios
//     .post("/v1/auth/forgotPassword", { email })
//     .then(response => {
//       if (response.status == 200) {
//         dispatch({
//           type: types.LOGIN_USER,
//           payload: response.data
//         })
//         toast.success('New password sent to given mail id', {
//           position: toast.POSITION.BOTTOM_RIGHT,
//           autoClose: 3000,
//           draggable: false
//         })
//         Router.push('/auth/login')
//       }
//     }
//     )
//     .catch((error) => {
//       let errorMsg = 'Something Went Wrong. Please try again.'
//       if (error.response.data.error) {
//         errorMsg = error.response.data.error.message
//       }
//       toast.error(errorMsg, {
//         position: toast.POSITION.BOTTOM_RIGHT,
//         autoClose: 3000,
//         draggable: false
//       })
//     })
// }


// export const resetPassword = (token, password, callback) => dispatch => {
//   axios
//     .post("/v1/auth/resetPassword/:token", { token, password })
//     .then(response => {
//       if (response.data && response.data.status == 'success') {
//         toast.success('Password updated successfully', {
//           position: toast.POSITION.BOTTOM_RIGHT,
//           autoClose: 3000,
//           draggable: false
//         })
//         Router.push('/auth/login')
//       } else {
//         toast.error('Something Went Wrong. Please try again.', {
//           position: toast.POSITION.BOTTOM_RIGHT,
//           autoClose: 3000,
//           draggable: false
//         })
//       }
//     })
//     .catch(error => {
//       toast.error(error.response.data.error.message, {
//         position: toast.POSITION.BOTTOM_RIGHT,
//         autoClose: 3000,
//         draggable: false
//       })
//     })
// }


// export const getUser = () => dispatch => {
//   axios
//     .get("/v1/auth/getUser")
//     .then(response => {
//       if (response.status == 200) {
//         dispatch({
//           type: types.LOGIN_USER,
//           payload: response.data[0]
//         })
//       }
//     }
//     )
//     .catch((error) => {
//       console.log(error)
//     })
// }
