import { Layout } from "antd";
import Header from "./common/Header";
import Footer from "./common/Footer";
const { Content } = Layout;

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header title="Counselling management System" />
      {children}
      <Footer />
    </React.Fragment>
  );
};
