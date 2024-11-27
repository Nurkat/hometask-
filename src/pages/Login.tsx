import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import MaskedInput from "antd-mask-input";

import { useAxios } from "../hook/useAxios";
import { API_URL } from "../hook/useEnv";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
  phone_number?: string;
  password?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const response = await axiosInstance.post(
        `${API_URL}/auth/sign-in`,
        values
      );

      if (response?.data?.data?.tokens?.access_token) {
        localStorage.setItem(
          "access_token",
          response?.data?.data?.tokens?.access_token
        );
        console.log("Login successfull!");
        window.location.reload();
        (values.password = ""), (values.phone_number = "");
        navigate("/");
      }
    } catch (error: any) {
      if (error.response?.status === 404) {
        console.error("User not found");
        alert("Accoun not found");
        navigate("/sign-up");
      } else {
        console.error("Login error:", error);
      }
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-10">
      <h2 className="py-5 text-[32px] font-bold text-blue-600">Login page</h2>
      <div className="w-[500px] shadow-md p-5 rounded-md">
      <Form
        name="basic"
        style={{ width: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Phone number"
          name="phone_number"
          rules={[
            { required: true, message: "Please enter your phone number!" },
            {
              pattern: /^\+998 \d{2} \d{3} \d{2} \d{2}$/,
              message: "Please enter a valid phone number!",
            },
          ]}
        >
          <MaskedInput
            size="large"
            mask="+998 00 000 00 00"
            placeholder="Enter your number"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            type="default"
            htmlType="submit"
            style={{
              backgroundColor: "#2e2ef2",
              color: "#fff",
              padding: "10px 20px",
              marginBlock: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </Button>
        </Form.Item>
        <div className="w-full flex items-center justify-between text-blue-600">
          <Link to="/forget-password">Forget password</Link>
          <Link to="/sign-up">Do not have an account?</Link>
        </div>
      </Form>
      </div>
    </div>
  );
};

export default Login;
