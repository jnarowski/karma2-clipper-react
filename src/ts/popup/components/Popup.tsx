import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Login from './Login'
import Authenticated from './Authenticated'

// const Wrapper = styled('div')`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   justify-items: center;
//   align-items: center;
//   height: 200px;
//   width: 300px;
//   margin: 10px;
// `

const Wrapper = styled('div')`
  width: 250px;
`

type Props = {}

const PopupApp = (props: Props) => {
  const isAuthenticated = useSelector((state) => state.settings.isAuthenticated)
  const currentUser = useSelector((state) => state.settings.currentUser)

  const renderLayout = () => {
    if (isAuthenticated) {
      return <Authenticated />
    }

    return <Login />
  }

  return <Wrapper>{renderLayout()}</Wrapper>
}

export default PopupApp

// class PopupApp extends React.Component<IPopupApp> {
//   render() {
//     return (
//       <PopupAppContainer>
//         <Counter />
//       </PopupAppContainer>
//     );
//   }
// }

// const mapStateToProps = (state: IAppState) => {
//   return {
//     theme: state.settings.theme,
//     currentUser: state.settings.currentUser,
//     isAuthenticated: state.settings.isAuthenticated,
//   };
// };

// export default connect(mapStateToProps)(PopupApp);

// const PopupAppContainer = styled("div")`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   justify-items: center;
//   align-items: center;
//   height: 200px;
//   width: 300px;
//   margin: 10px;
//   background-color: ${(p) => p.theme.backgroundColor};
// `;

// import * as React from "react";
// import { connect } from "react-redux";
// import { Dispatch } from "redux";
// import styled from "styled-components";
// import { IAppState } from "../../background/store";
// import Counter from "../../containers/Counter";

// interface IPopupApp {
//   dispatch: Dispatch
// }

// class PopupApp extends React.Component<IPopupApp> {
//   render() {
//     return (
//       <PopupAppContainer>
//         <Counter />
//       </PopupAppContainer>
//     );
//   }
// }

// const mapStateToProps = (state: IAppState) => {
//   return {
//     theme: state.settings.theme,
//   };
// };

// export default connect(mapStateToProps)(PopupApp);

// const PopupAppContainer = styled("div")`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   justify-items: center;
//   align-items: center;
//   height: 200px;
//   width: 300px;
//   margin: 10px;
//   background-color: ${(p) => p.theme.backgroundColor};
// `;
