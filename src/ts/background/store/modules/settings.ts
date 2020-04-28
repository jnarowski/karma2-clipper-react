import { Action } from 'redux'
import { Reducer } from 'redux'
import backgroundLog from 'utils/backgroundLog'

export type ActionTypes = 'LOGIN' | 'LOGOUT'
export type SettingsActions = Action<ActionTypes>

export const setLogin = (payload) => ({
  type: 'LOGIN',
  payload,
})

export const setLogout = () => ({
  type: 'LOGOUT',
})

export interface IAppSettings {
  isAuthenticated: boolean
  currentUser: object
}

const initialState: IAppSettings = {
  isAuthenticated: false,
  currentUser: {},
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

    default:
      return state
  }
}

export default settings
