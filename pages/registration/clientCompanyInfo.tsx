/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import styles from '../../styles/Registration.module.css'
import { Divider, Avatar, Button, Tabs, Progress, Form, Input, Radio, Dropdown, Menu, Upload } from 'antd';
import stylessec from '../../styles/searchdetail.module.css';
import camera from '../../public/camera.svg'
import Image from 'next/image'
import Router from 'next/router';
import { GetServerSideProps } from 'next'


function Client() {
    const [imageUrl, setImageUrl] = useState(null)
    const { TabPane } = Tabs;
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const formRef = useRef()
    const [form] = Form.useForm();
    function getBase64(img: any, callback: any) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file: any) {
        let message: any;
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const dummyRequest = ({ onSuccess }: any) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const handleChange = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (imgUrl: any) => {
                setLoading(false)
                setImageUrl(imgUrl)
            });
        }
    };


    return (
        <div className="jumbotron">
            <Divider className="p-0 m-0" />
            <div className="mainContainercmn pt-5 pb-5 h-100">
                <div className="col4-cmn-cntr-800">
                    <h1 className={styles.heading1}>???????????? ???????????????</h1>
                </div>
                <div className={`${styles.maindiv} col4-cmn-cntr-800`} style={{ padding: "10px 10px 10px 10px" }}>
                    <div className="cmn-inner-p15">
                        <div className="pb-5 pt-5">
                            <div className="row d-flex justify-content-center text-align-center">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatarUpload"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    customRequest={dummyRequest}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: '50%' }} /> : (<div>
                                        <Image src={camera} alt="Profile Image" width={38} height={30} />
                                    </div>)}
                                </Upload>
                            </div>
                            <h2 className="pb-5 pt-3 d-flex justify-content-center text-align-center" style={{ color: "#9A9A9A", fontSize: "18px" }}>?????????</h2>
                            <Tabs defaultActiveKey={"2"} className="registerSteps" centered>
                                <TabPane className="row-3" key={"1"} tab={<span className={styles.tabHeading} >STEP 1</span>} />
                                <TabPane className="row-3" key={"2"} tab={<span className={styles.tabHeading} >STEP 2</span>} />
                                <TabPane className="row-3" key={"3"} tab={<span className={styles.tabHeading} >STEP 3</span>} />
                            </Tabs>

                        </div>
                        <div className="row">
                            <div className="col-6">
                                33%
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <span style={{ color: "red" }}>*</span>????????????
                            </div>
                        </div>
                        <div className="">
                            <Progress percent={33} showInfo={false} strokeColor="#00d6e3" />
                        </div>
                        <div className="pt-3 pb-2">
                            <label style={{
                                fontFamily: "SpoqaHanSans",
                                fontWeight: "bold",
                                fontSize: 20
                            }}>????????? ???????????????? <span style={{ color: "red" }}>*</span></label>
                        </div>
                        <div className="pb-2">
                            <Radio.Group defaultValue="2" className="w-100">
                                <Radio.Button value="1" onClick={() => { setDisabled(true) }} className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>?????????, ????????? ????????????.</Radio.Button>
                                <Radio.Button value="2" onClick={() => { setDisabled(false) }} className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>???, ???????????????.</Radio.Button>
                            </Radio.Group>
                        </div>
                        <Form name="register" layout="vertical" className="pt-5 pb-5"
                            onFinish={(values) => { console.log(values) }}>
                            <div className="row pt-2 pb-2">
                                <div className="col-4">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>???????????? ????????????????  <span style={{ color: "red" }}>*</span></label>
                                </div>
                                <div className="col-8 d-flex justify-content-end">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 17,
                                        color: '#9A9A9A'
                                    }}>????????? ?????? ???, ????????? ?????? ???????????? ??????????????? ???????????????</label>
                                </div>
                                <div className="col-12">
                                    <Form.Item
                                        name="nickName"
                                        className="pb-3"

                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Nickname!',
                                            },
                                        ]}>
                                        <Input type="text" disabled={disabled}
                                            placeholder={"????????? ??????"} style={{ borderRadius: 10, height: 64 }} />
                                    </Form.Item>
                                </div>
                            </div>

                            <div className="row pt-2 pb-2">
                                <div className="col-12">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>?????? ????????? ??????????????????</label>
                                </div>
                                <div className="col-12">

                                    <Form.Item
                                        name="nickName"
                                        className="pb-3"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Nickname!',
                                            },
                                        ]}>
                                        <Input.TextArea rows={4} disabled={disabled}
                                            placeholder={"?????? ?????? ??????(160 byte ??????)"} style={{ borderRadius: 10 }} />
                                    </Form.Item>
                                </div>
                            </div>

                            <div className="row pt-2 pb-2">
                                <div className="col-12">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>???????????? ??????????????????.</label>
                                </div>
                                <div className="col-12">
                                    <Form.Item
                                        name="nickName"
                                        className="pb-3"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Nickname!',
                                            },
                                        ]}>
                                        <Input type="text" disabled={disabled} placeholder={"010-2939-2930"} style={{ borderRadius: 10, height: 64 }} />
                                    </Form.Item>
                                </div>
                            </div>

                            <div className="row pt-2 pb-2">
                                <div className="col-12">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>?????? ????????? ??????????????????</label>
                                </div>
                                <div className="col-10">
                                    <Form.Item name="nickName" className="pb-3"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Nickname!',
                                            },
                                        ]}
                                    >
                                        <Input type="text" disabled={disabled} placeholder={"?????? ?????? ??????"} style={{ borderRadius: 10, height: 64 }} />
                                    </Form.Item>
                                </div>
                                <div className="col-2">
                                    {disabled ? <Button disabled style={{ width: '100%', height: 68, borderRadius: 20 }} onClick={() => {
                                        Router.push('imageUpload')
                                    }}>
                                        ??????
                                    </Button> : <Button style={{ background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }} onClick={() => {
                                        Router.push('imageUpload')
                                    }}>
                                        ??????
                                    </Button>}
                                </div>
                            </div>

                            <div className="row pt-2 pb-2">
                                <div className="col-6">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>?????? ?????? ????????? ????????????????</label>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        color: '#9A9A9A'
                                    }}>???????????? ??????</label>
                                </div>

                            </div>
                            <Radio.Group defaultValue="4" className="w-100 mb-5">
                                <Radio.Button value="1" disabled={disabled} className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>??????</Radio.Button>
                                <Radio.Button value="2" disabled={disabled} className={stylessec.radiobtntxt}>?????????</Radio.Button>
                                <Radio.Button value="3" disabled={disabled} className={stylessec.radiobtntxt} >?????????</Radio.Button>
                                <Radio.Button value="4" disabled={disabled} className={stylessec.radiobtntxt} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>??????</Radio.Button>
                            </Radio.Group>

                            <div className="row pt-2">
                                <div className="col-6">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>?????? ?????? ????????? ????????????????<span style={{ color: "red" }}>*</span></label>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        color: '#9A9A9A'
                                    }}>?????? 3??? ?????? ?????? </label>
                                </div>

                                <div className="row pt-3">
                                    <div className="col-11">
                                        <Form.Item name="register" rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Nickname!',
                                            },
                                        ]}>
                                            <Input type="text" disabled={disabled}
                                                placeholder="?????? ??????" className={stylessec.txtbox} />
                                        </Form.Item>
                                    </div>
                                    <div className="col-1">
                                        {disabled ? <img src="/grayplus.svg" alt="Plus Icon" /> : <img src="/plus.svg" alt="Plus Icon" />}

                                    </div>
                                </div>
                            </div>
                            {disabled ? '' : <div className="pb-5">
                                <Button className={stylessec.btn}>?????? <img src="/cross.svg" /></Button>
                                <Button className={stylessec.btn} style={{ marginLeft: "10px" }}>?????????.PM <img src="/cross.svg" /></Button>
                            </div>}
                            <div className="row pt-2 pb-2">
                                <div className="col-6">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>????????? ???????????????? <span style={{ color: "red" }}>*</span></label>
                                </div>
                            </div>

                            <div className="row pb-3">
                                <div className="col-6 pt-2 pb-2 ">
                                    <div className="dropdown" style={{ color: "white" }}>
                                        <Dropdown disabled={disabled} overlay={() => (<Menu>
                                            <Menu.Item disabled={disabled} className={stylessec.dropdownitem}>??????</Menu.Item>
                                            <Menu.Item disabled={disabled} className={stylessec.dropdownActiveitem}> ??? ??????</Menu.Item>
                                        </Menu>)
                                        }>
                                            <Button disabled={disabled} className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> ???/??? <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="col-6 pt-2 pb-2 ">
                                    <div className="dropdown" style={{ color: "white" }}>
                                        <Dropdown disabled={disabled} overlay={() => (<Menu>
                                            <Menu.Item className={stylessec.dropdownitem}>??????</Menu.Item>
                                            <Menu.Item className={stylessec.dropdownitem}> ??? ??????</Menu.Item>
                                        </Menu>)
                                        }>
                                            <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> ???/???/??? <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="col-6 pt-2 pb-2 ">
                                    <div className="dropdown" style={{ color: "white" }}>
                                        <Dropdown disabled={disabled} overlay={() => (<Menu>
                                            <Menu.Item className={stylessec.dropdownitem}>??????</Menu.Item>
                                            <Menu.Item className={stylessec.dropdownActiveitem}> ??? ??????</Menu.Item>
                                        </Menu>)
                                        }>
                                            <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> ???/??? <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="col-6 pt-2 pb-2 ">
                                    <div className="dropdown" style={{ color: "white" }}>
                                        <Dropdown disabled={disabled} overlay={() => (<Menu>
                                            <Menu.Item className={stylessec.dropdownitem}>??????</Menu.Item>
                                            <Menu.Item className={stylessec.dropdownitem}> ??? ??????</Menu.Item>
                                        </Menu>)
                                        }>
                                            <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> ???/???/??? <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>

                            <div className="row pt-2 pb-4">
                                <div className="col-6">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>???????????????????????? ???????????????? <span style={{ color: "red" }}>*</span></label>
                                </div>

                                <div className="col-12">
                                    <Form name="register" layout="vertical">
                                        <Input type="text"
                                            disabled={disabled} placeholder="????????????????????? ??????" className={stylessec.txtbox} />
                                    </Form>
                                </div>
                            </div>

                            <div className="row pt-2 pb-4">
                                <div className="col-6">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>??????????????? ???????????????? <span style={{ color: "red" }}>*</span></label>
                                </div>

                                <div className="col-12">
                                    <Form name="register" layout="vertical">
                                        <Input type="text"
                                            disabled={disabled} placeholder="???????????? ??????" className={stylessec.txtbox} />
                                    </Form>
                                </div>
                            </div>

                            <div className="row pt-2 pb-4">
                                <div className="col-6">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>??????????????? ???????????????? <span style={{ color: "red" }}>*</span></label>
                                </div>

                                <div className="col-12">
                                    <Form name="register" layout="vertical">
                                        <Input type="text"
                                            disabled={disabled} placeholder="???????????? ??????" className={stylessec.txtbox} />
                                    </Form>
                                </div>
                            </div>

                            <div className="row pt-2 pb-4">
                                <div className="col-6">
                                    <label style={{
                                        fontFamily: "SpoqaHanSans",
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: disabled ? "gray" : "black"
                                    }}>???????????? ??? ?????????????</label>
                                </div>

                                <div className="col-12">
                                    <Form name="register" layout="vertical">
                                        <Input type="text"
                                            disabled={disabled} placeholder="????????? ??????" className={stylessec.txtbox} />
                                    </Form>
                                </div>
                            </div>


                            <div className="row pt-5 d-flex justify-content-center align-items-center">
                                <div className="col-4">

                                    <Button style={{ border: '1px solid #00D6E3', color: '#00D6E3', width: '100%', height: 68, borderRadius: 20 }} >
                                        ??????
                                    </Button>
                                </div>
                                <div className="col-4">
                                    <Button disabled={
                                        !form.isFieldsTouched(true) ||
                                        !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                    } style={{ background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }} >
                                        ??????
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div >
            </div>
        </div >

    )
}



export default Client