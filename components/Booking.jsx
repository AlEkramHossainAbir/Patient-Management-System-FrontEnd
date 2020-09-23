import { Form, Input, InputNumber, Button } from "antd";
import { doctorAppointment } from "../services/authService";
import { TimePicker } from "antd";
import moment from "moment";
import { DatePicker, Space } from "antd";

function onChangeDate(date, dateString) {
  console.log(date, dateString);
}

function onChange(time, timeString) {
  console.log(time, timeString);
}
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Booking = () => {
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    // let authServiceDoc = await doctorAppointment(values);
    // console.log("Auth Service", authServiceDoc);
  };

  return (
    <>
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1>
          Pick A Appointment Date{" "}
          <img
            src="/image/undraw_date_picker_gorr.svg"
            style={{ height: "100px" }}
          ></img>
        </h1>
      </div>
      <Form
        style={{ width: "50%", marginLeft: "200px", paddingTop: "1rem" }}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "doctorsname"]}
          label="Doctors Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "20rem", marginBottom: "2rem" }}
        >
          <a
            href="/doctorslist"
            style={{
              textDecoration: "none",
              color: "white",
            }}
            target="_blank"
          >
            Check Doctor's List
          </a>
        </button>
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "emailAddress"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "address"]} label="Address">
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "reasonForAppoinment"]}
          label="Reason For Appoinment"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["user", "time"]} label="Pick Your Suitable Time">
          <TimePicker
            onChange={onChange}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
          <Space direction="vertical">
            <DatePicker onChange={onChangeDate} />
          </Space>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Booking;
