
export interface Login {
    type: "LOGIN_USER",
    payload: any
}

export interface Mreg {
    type: "MEMBER_REGISTER",
    payload: any
}

export interface Forgotpass {
    type: "FORGOT_PASSWORD",
    payload: any
}
export type AuthAction = Login | Mreg | Forgotpass


interface VerifyCode {
    type: "VERIFICATION_CODE_MSG",
    payload: any
}

interface PhoneCodeError {
    type: "PHONE_CODE_ERROR_MSG",
    payload: any
}

interface GetProvinces {
    type: "GET_PROVINCES",
    payload: any
}

interface GetDistricts {
    type: "GET_DISTRICTS",
    payload: any
}

interface GetClient {
    type: "GET_CLIENT",
    payload: any
}

interface GetClientByProffesion {
    type: "GET_CLIENT_BY_PROFESSION",
    payload: any
}

export type clientAction = VerifyCode | PhoneCodeError | GetProvinces | GetDistricts | GetClient | GetClientByProffesion


interface EmailError {
    type: "EMAIL_ERROR",
    payload: any
}

interface EmailExist {
    type: "EMAIL_ALREADY_EXIST",
    payload: any
}

interface VerifyCode1 {
    type: "VERIFICATION_CODE",
    payload: any
}

export type ValidatedAction = EmailError | EmailExist | VerifyCode1

export type ClentA = GetProvinces | EmailExist | GetDistricts | GetClient | GetClientByProffesion | VerifyCode | VerifyCode1 | PhoneCodeError
export type MemberA = Login | EmailExist | EmailError | VerifyCode1 | Mreg
export type SideA = EmailExist

