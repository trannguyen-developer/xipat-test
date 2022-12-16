import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Table, Popover } from "antd";
import { FolderViewOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";

const columns = [
    {
        title: "Id",
        dataIndex: "id",
    },
    {
        title: "User ID",
        dataIndex: "userId",
    },
    {
        title: "Title",
        dataIndex: "title",
    },
    {
        title: "Action",
        render: (record) => (
            <Popover
                content={
                    <div style={{ width: "400px" }}>
                        <p>User ID: {record.userId}</p>
                        <p>Title: {record.title}</p>
                        <p>Body post: {record.body}</p>
                    </div>
                }
                trigger="click"
            >
                <div className="text-center cursor-pointer">
                    <FolderViewOutlined style={{ fontSize: "20px" }} />
                </div>{" "}
            </Popover>
        ),
    },
];

const ManagementPost = () => {
    const postsRef = useRef(null);
    const [dataPosts, setDataPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                const posts = res.data;
                postsRef.current = posts;
                setDataPosts(posts);
            })
            .catch((error) => console.log(error));
    }, []);

    const onFinish = (values) => {
        if (values.search === "") {
            setDataPosts(postsRef.current);
            return;
        }
        setDataPosts(() => {
            const result = postsRef.current.filter(
                (post) =>
                    post.title.includes(values.search) ||
                    String(post.userId) === values.search
            );
            return result;
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <p>ManagementPost</p>
            <div>
                <Form
                    name="basic"
                    // labelCol={{ span: 8 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="flex"
                >
                    <Form.Item name="search">
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="ml-2"
                        >
                            Search
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Table width={2000} columns={columns} dataSource={dataPosts} />
        </div>
    );
};

export default ManagementPost;
