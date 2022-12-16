import React from "react";
import "antd/dist/antd.css";
import { HexColorPicker } from "react-colorful";
import { Button, Popover, Form, Input, DatePicker } from "antd";

const { RangePicker } = DatePicker;

const Settings = () => {
    const onFinish = (values) => {
        console.log("Settings value:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const [form] = Form.useForm();

    return (
        <div>
            <p>Settings</p>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please input your title!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: "email",
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Popover
                    content={
                        <HexColorPicker
                            color={"#aabbcc"}
                            onChange={(color) =>
                                form.setFieldsValue({
                                    ["bgColor"]: color,
                                })
                            }
                        />
                    }
                    trigger="click"
                >
                    <Form.Item
                        label="Background color"
                        name="bgColor"
                        rules={[
                            {
                                required: true,
                                message: "Please choose color!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Popover>
                <Form.Item
                    label="Active date"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: "Please choose date!",
                        },
                    ]}
                >
                    <RangePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Settings;
