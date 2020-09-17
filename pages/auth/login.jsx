import Mylayout from "../../components/Mylayouts";
import Login from "../../components/auth/Login";
import React, { Component } from "react";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Mylayout>
          <Login></Login>
        </Mylayout>
      </>
    );
  }
}

export default LoginPage;
// import MyLayout from "../../components/Mylayouts";
// import LoginForm from "../../components/auth/Login";
// import RegistrationForm from "../../components/auth/Register";

// import { Layout, Tabs } from "antd";
// const { Content } = Layout;
// const { TabPane } = Tabs;

// const Login = () => {
//   const signInTitle = (
//     <div className="col-12 text-center">
//       <h5 className="section-sub-title">Sign In</h5>
//     </div>
//   );

//   const signUpTitle = (
//     <div className="col-12 text-center">
//       <h5 className="section-sub-title">Sign Up</h5>
//     </div>
//   );

//   return (
//     <>
//       <MyLayout>
//         <Layout>
//           <Content>
//             {/* <div className="site-section bg-light">
//                             <div className="container">
//                             <div className="row mb-5">
//                                 <div className="col-12 text-center">
//                                     <h3 className="section-sub-title">Sign In</h3>
//                                 </div>
//                                 </div>
//                                 <div className="row justify-content-center">
//                                     <div className="col-md-7 mb-5">
//                                         <LoginForm />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> */}

//             <div className="site-section bg-light">
//               <div className="container">
//                 <Tabs defaultActiveKey="1" centered>
//                   <TabPane tab={signInTitle} key="1">
//                     <div className="row justify-content-center">
//                       <div className="col-md-7 mb-5">
//                         <LoginForm />
//                       </div>
//                     </div>
//                   </TabPane>
//                   <TabPane tab={signUpTitle} key="2">
//                     <div className="row justify-content-center">
//                       <div className="col-md-7 mb-5">
//                         <RegistrationForm />
//                       </div>
//                     </div>
//                   </TabPane>
//                 </Tabs>
//               </div>
//             </div>
//           </Content>
//         </Layout>
//       </MyLayout>
//     </>
//   );
// };

// export default Login;
