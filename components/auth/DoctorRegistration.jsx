import React, { useState } from "react";
// import { accountRegistration } from "../../services/authService";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const doctorRegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    let authService = await accountRegistration(values);
    console.log("Auth Service", authService);
    window.location.href = "/auth/login";
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="88">+88</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
    <Form
      style={{ width: "50%", marginLeft: "200px", paddingTop: "10rem" }}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["Dhaka", "Chittagong", "xihu"],
        prefix: "88",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[
          {
            required: true,
            message: "Please input your Full Name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="emailAddress"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="degree"
        label="Degree"
        rules={[
          {
            required: true,
            message: "Please input your Degree!",
          },
        ]}
      >
        <Input />
      </Form.Item>
               
      <Form.Item
        name="speaciality"
        label="Speciality"
        rules={[
          {
            required: true,
            message: "Please input your Speciality!",
          },
        ]}
      >
        <Input />
      </Form.Item> 

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="danger" htmlType="submit">
          Add Doctor
        </Button>
      </Form.Item>
    </Form>
  );
};

export default doctorRegistrationForm;
