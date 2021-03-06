/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/Registration.module.css'
import { Header, Footer } from "../../components"
import { Divider, Avatar, Button, Tabs, Progress, Form, Input, Radio, Dropdown, Menu, Upload } from 'antd';
import stylessec from '../../styles/searchdetail.module.css';
import stylesthird from '../../styles/eidtClient.module.css';
import camera from '../../public/camera.svg'
import Image from 'next/image'
import Router from 'next/router';
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function EditClient() {
    const [imageUrl, setImageUrl] = useState(null)
    const { TabPane } = Tabs;
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation();
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
                    <h1 className={styles.heading1}>??????????????? ???????????????</h1>
                </div>
                <div className={`${styles.maindiv} col4-cmn-cntr-800`}>
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
                        <h2 className="pb-5 pt-3 d-flex justify-content-center text-align-center">?????????</h2>
                        <Tabs defaultActiveKey="1" className="registerSteps" centered>
                            <TabPane className="row-3" key={1} tab={<span className={styles.tabHeading} >STEP 1</span>} />
                            <TabPane className="row-3" key={2} tab={<span className={styles.tabHeading} >STEP 2</span>} />
                            <TabPane className="row-3" key={3} tab={<span className={styles.tabHeading} >STEP 3</span>} />
                        </Tabs>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            90%
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            ????????????
                        </div>
                    </div>
                    <div className="">
                        <Progress percent={90} showInfo={false} />
                    </div>
                    <Form name="register" layout="vertical" className="pt-5 pb-5" onFinish={(values) => { console.log(values) }}>
                        <Form.Item
                            name="nickName"
                            className="pb-3"

                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Nickname!',
                                    // value: "?????????"
                                },

                            ]}

                            label={
                                <span style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>???????????? ???????????????</span>
                            }>
                            <Input type="text"
                                placeholder={"????????? ??????"} defaultValue="?????????" style={{ borderRadius: 10, height: 64 }} />
                            <span className={stylesthird.reqField}>?????? ???????????? ??????????????????</span>
                        </Form.Item>
                        <Form.Item
                            name="introduction"
                            className="pb-3"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Nickname!',
                                },
                            ]}
                            label={
                                <span style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>???????????? ???????????????</span>
                            }>
                            <Input.TextArea rows={4}
                                placeholder={"????????? ??????"}
                                defaultValue={"???????????????! ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"} style={{ borderRadius: 10 }} />
                            <span className={stylesthird.reqField}>????????? 160????????? ???????????? ??????????????????.</span>
                        </Form.Item>

                        <div className="row pt-2">
                            <div className="col-8">
                                <Form.Item
                                    name="introduction"
                                    className="pb-3"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your Nickname!',
                                        },
                                    ]}
                                    label={
                                        <span style={{
                                            fontFamily: "SpoqaHanSansbold",
                                            fontWeight: "bold",
                                            fontSize: 20
                                        }}>????????? ????????? ??????????????????</span>
                                    }>
                                    <Input placeholder={"????????? ?????? ??????"} defaultValue="010-2939-2930" style={{ borderRadius: 10, height: 64 }} />
                                    <span className={stylesthird.reqField} style={{ color: "#00D6E3" }}>??????????????? ??????????????????.</span>
                                </Form.Item>
                            </div>

                            <div className="col-4">
                                <Form.Item
                                    name="introduction"
                                    className="pb-3"
                                >
                                    <Button className={stylesthird.btnwhite}>???????????? ?????????</Button>

                                </Form.Item>
                            </div>

                            <div className="col-8">
                                <Form.Item
                                    name="introduction"
                                    className="pb-3"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your Nickname!',
                                        },
                                    ]}>
                                    <Input placeholder={"????????? ?????? ??????"} defaultValue={"22431"} style={{ borderRadius: 10, height: 64 }} />
                                    <span className={stylesthird.reqField}>??????????????? ???????????? ????????????.</span>
                                </Form.Item>
                            </div>

                            <div className="col-4">
                                <Button className={stylesthird.btnblue} >???????????? ??????</Button>
                            </div>
                        </div>
                        <div className="row pt-2 pb-2">
                            <div className="col-6">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>????????? ????????????????</label><span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: '#9A9A9A'
                                }}>???????????? ?????? </label>

                            </div>
                        </div>

                        <div className="pb-2">
                            <Radio.Group defaultValue="4" className="w-100">
                                <Radio.Button value="1" className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>??????</Radio.Button>
                                <Radio.Button value="2" className={stylessec.radiobtntxt}>?????????</Radio.Button>
                                <Radio.Button value="3" className={stylessec.radiobtntxt} >?????????</Radio.Button>
                                <Radio.Button value="4" className={`${stylessec.radiobtntxt} ${stylesthird.radiotxt}`} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderColor: "#00D6E3", color: "#00D6E3" }}>??????</Radio.Button>
                            </Radio.Group>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-6">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>????????? ???????????????? </label><span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: '#9A9A9A'
                                }}>?????? 3??? ?????? ??????</label>
                            </div>
                        </div>

                        <div className="row" style={{ width: "100%", paddingTop: "30px", paddingBottom: "30px" }}>
                            <div className="col-11">
                                <Form name="register" layout="vertical">
                                    <Input type="text"
                                        placeholder="?????? ??????" className={stylessec.txtbox} />
                                </Form>
                            </div>
                            <div className="col-1">
                                <img src="/plus.svg" alt="Plus Icon" />
                            </div>
                        </div>
                        <div className="pb-2 mb-4">
                            <Button className={stylessec.btn}>?????? <img src="/cross.svg" /></Button>
                            <Button className={stylessec.btn} style={{ marginLeft: "10px" }}>?????????.PM <img src="/cross.svg" /></Button>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-6">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>????????? ????????????????</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 pt-2 pb-2 ">
                                <div className="dropdown" style={{ color: "white" }}>
                                    <Dropdown overlay={() => (<Menu>
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
                                    <Dropdown overlay={() => (<Menu>
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
                                    <Dropdown overlay={() => (<Menu>
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
                                    <Dropdown overlay={() => (<Menu>
                                        <Menu.Item className={stylessec.dropdownitem}>??????</Menu.Item>
                                        <Menu.Item className={stylessec.dropdownitem}> ??? ??????</Menu.Item>
                                    </Menu>)
                                    }>
                                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> ???/???/??? <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-2 pb-2">
                            <div className="col-12 pt-2 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>???????????? ????????? ??????????????????</label>
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <Form.Item
                                    name="introduction"
                                    className=""
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your Nickname!',
                                        },
                                    ]}>
                                    <Input placeholder={"???????????? URL ??????"} defaultValue={"www.homepage.co.kr"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-12 pt-2 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>???????????? ????????? ??????????????????</label>
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <Form.Item name="introduction">
                                    <Input placeholder={"???????????? URL ??????"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-12 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>??????????????? ????????? ??????????????????</label>
                            </div>
                            <div className="col-12 pt-2">
                                <Form.Item name="introduction">
                                    <Input placeholder={"??????????????? URL ??????"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-12 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>?????? ????????? ??????????????????</label>
                            </div>
                            <div className="col-12 pt-2">
                                <Form.Item name="introduction" className="pb-3">
                                    <Input placeholder={"?????? URL ??????"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-6 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>?????? ???????????? ??????????????????</label>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: '#9A9A9A'
                                }}>(10MB ?????? - ????????????: JPG,PNG,PDF)</label>
                            </div>
                        </div>
                        <div className="row imgupload-inner">
                            <div className="col-4">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="introductoryUpload"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    customRequest={dummyRequest}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: 20 }} /> : (<div>
                                        <Image src={camera} alt="Profile Image" width={38} height={30} />
                                    </div>)}
                                </Upload>
                            </div>
                            <div className="col-4">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="introductoryUpload"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    customRequest={dummyRequest}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: 20 }} /> : (<div>
                                        <Image src={camera} alt="Profile Image" width={38} height={30} />
                                    </div>)}
                                </Upload>
                            </div>
                            <div className="col-4">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="introductoryUpload"
                                    showUploadList={false}
                                    beforeUpload={beforeUpload}
                                    customRequest={dummyRequest}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: 20 }} /> : (<div>
                                        <Image src={camera} alt="Profile Image" width={38} height={30} />
                                    </div>)}
                                </Upload>
                            </div>
                        </div>
                        <div className="row pt-5 d-flex justify-content-center align-items-center">
                            <div className="col-8">
                                <Button style={{ border: "2px solid #00D6E3", color: '#00D6E3', width: '45%', height: 68, borderRadius: 20, fontWeight: "bold" }}>
                                    ??????
                                </Button>
                                <Button style={{ background: '#00D6E3', color: '#FFF', width: '45%', height: 68, borderRadius: 20, fontWeight: "bold", marginLeft: "10px" }} onClick={() => {
                                    Router.push('imageUpload')
                                }}>
                                    ??????
                                </Button>

                            </div>
                        </div>
                    </Form>
                </div >
            </div>

        </div >

    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default EditClient