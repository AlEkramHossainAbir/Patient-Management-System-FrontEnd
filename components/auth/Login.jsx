import { Form, Input, Button, Checkbox } from "antd";
import { Modal, Space } from "antd";
import { accountLogin } from "../../services/authService";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = async (values) => {
    console.log("Success:", values);
    const loginRes = await accountLogin(values);
    const resMsg = loginRes.hasOwnProperty("data")
      ? loginRes.data.message
      : "Invalid User";

    console.log(resMsg);
    console.log(loginRes);
    if (resMsg == "email verification necessary") {
      localStorage.setItem("token", loginRes.data.token);
      localStorage.setItem("me", loginRes.data.user);
      window.location.href = "/";
    } else if (resMsg == "Invalid Password") {
      Modal.error({
        title: "This is an error message",
        content: "You are trying to input Invalid Password",
      });

      //   Modal.warning({
      //     title: "This is a warning message",
      //     content: "some messages...some messages...",
      //   });
    } else if (resMsg == "Username not found") {
      Modal.error({
        title: "This is an error message",
        content: "Username not found, Register Yourself",
      });
    } else {
      Modal.error({
        title: "This is an error message",
        content: "Try To login again",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{ width: "50%", marginLeft: "200px", padding: "10rem 0rem" }}
      className="form"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="emailAddress"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        Or <a href="/auth/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Demo;
