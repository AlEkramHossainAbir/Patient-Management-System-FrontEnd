import { Layout } from "antd";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
const { Content } = Layout;

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header title="Counselling management System" />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
