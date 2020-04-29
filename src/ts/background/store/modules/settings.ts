import { Action } from 'redux'
import { Reducer } from 'redux'

export type ActionTypes = 'LOGIN' | 'LOGOUT' | 'LOAD_DATA' | 'LOAD_FORM'
export type SettingsActions = Action<ActionTypes>

export const setLogin = (payload) => ({
  type: 'LOGIN',
  payload,
})

export const setLogout = () => ({
  type: 'LOGOUT',
})

export const loadForm = (payload) => ({
  type: 'LOAD_FORM',
  payload,
})

export const loadData = (payload) => ({
  type: 'LOAD_DATA',
  payload,
})

export interface IAppSettings {
  isAuthenticated: boolean
  currentUser: object
  form: object
  record: object
}

const initialState: IAppSettings = {
  isAuthenticated: false,
  currentUser: {},
  record: {},
  form: {},
}

const settings: Reducer<IAppSettings, SettingsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload.currentUser,
      }
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, currentUser: {} }
    case 'LOAD_DATA':
      return { ...state, record: action.payload }
    case 'LOAD_FORM':
      return { ...state, form: action.payload }
    default:
      return state
  }
}

export default settings
