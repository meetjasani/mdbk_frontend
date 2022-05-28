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
                    <h1 className={styles.heading1}>부캐정보를 수정하세요</h1>
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
                        <h2 className="pb-5 pt-3 d-flex justify-content-center text-align-center">이모아</h2>
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
                            필수항목
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
                                    // value: "열정맨"
                                },

                            ]}

                            label={
                                <span style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>닉네임을 입력하세요</span>
                            }>
                            <Input type="text"
                                placeholder={"닉네임 입력"} defaultValue="열정맨" style={{ borderRadius: 10, height: 64 }} />
                            <span className={stylesthird.reqField}>이미 사용중인 닉네임입니다</span>
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
                                }}>닉네임을 입력하세요</span>
                            }>
                            <Input.TextArea rows={4}
                                placeholder={"닉네임 입력"}
                                defaultValue={"안녕하세요! 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고"} style={{ borderRadius: 10 }} />
                            <span className={stylesthird.reqField}>소개는 160바이트 미만으로 작성해주세요.</span>
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
                                        }}>핸드폰 번호를 입력해주세요</span>
                                    }>
                                    <Input placeholder={"핸드폰 번호 입력"} defaultValue="010-2939-2930" style={{ borderRadius: 10, height: 64 }} />
                                    <span className={stylesthird.reqField} style={{ color: "#00D6E3" }}>인증번호를 전송했습니다.</span>
                                </Form.Item>
                            </div>

                            <div className="col-4">
                                <Form.Item
                                    name="introduction"
                                    className="pb-3"
                                >
                                    <Button className={stylesthird.btnwhite}>인증번호 재전송</Button>

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
                                    <Input placeholder={"핸드폰 번호 입력"} defaultValue={"22431"} style={{ borderRadius: 10, height: 64 }} />
                                    <span className={stylesthird.reqField}>인증번호가 유효하지 않습니다.</span>
                                </Form.Item>
                            </div>

                            <div className="col-4">
                                <Button className={stylesthird.btnblue} >인증번호 전송</Button>
                            </div>
                        </div>
                        <div className="row pt-2 pb-2">
                            <div className="col-6">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>직종은 무엇인가요?</label><span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: '#9A9A9A'
                                }}>복수선택 가능 </label>

                            </div>
                        </div>

                        <div className="pb-2">
                            <Radio.Group defaultValue="4" className="w-100">
                                <Radio.Button value="1" className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>개발</Radio.Button>
                                <Radio.Button value="2" className={stylessec.radiobtntxt}>디자인</Radio.Button>
                                <Radio.Button value="3" className={stylessec.radiobtntxt} >마케팅</Radio.Button>
                                <Radio.Button value="4" className={`${stylessec.radiobtntxt} ${stylesthird.radiotxt}`} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderColor: "#00D6E3", color: "#00D6E3" }}>기타</Radio.Button>
                            </Radio.Group>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-6">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>분야는 무엇인가요? </label><span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: '#9A9A9A'
                                }}>최대 3개 선택 가능</label>
                            </div>
                        </div>

                        <div className="row" style={{ width: "100%", paddingTop: "30px", paddingBottom: "30px" }}>
                            <div className="col-11">
                                <Form name="register" layout="vertical">
                                    <Input type="text"
                                        placeholder="직종 입력" className={stylessec.txtbox} />
                                </Form>
                            </div>
                            <div className="col-1">
                                <img src="/plus.svg" alt="Plus Icon" />
                            </div>
                        </div>
                        <div className="pb-2 mb-4">
                            <Button className={stylessec.btn}>기타 <img src="/cross.svg" /></Button>
                            <Button className={stylessec.btn} style={{ marginLeft: "10px" }}>웹기획.PM <img src="/cross.svg" /></Button>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-6">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>지역이 어디인가요?</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 pt-2 pb-2 ">
                                <div className="dropdown" style={{ color: "white" }}>
                                    <Dropdown overlay={() => (<Menu>
                                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                        <Menu.Item className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                                    </Menu>)
                                    }>
                                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 시/도 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="col-6 pt-2 pb-2 ">
                                <div className="dropdown" style={{ color: "white" }}>
                                    <Dropdown overlay={() => (<Menu>
                                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                        <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                                    </Menu>)
                                    }>
                                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 시/군/구 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="col-6 pt-2 pb-2 ">
                                <div className="dropdown" style={{ color: "white" }}>
                                    <Dropdown overlay={() => (<Menu>
                                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                        <Menu.Item className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                                    </Menu>)
                                    }>
                                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 시/도 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="col-6 pt-2 pb-2 ">
                                <div className="dropdown" style={{ color: "white" }}>
                                    <Dropdown overlay={() => (<Menu>
                                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                        <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                                    </Menu>)
                                    }>
                                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 시/군/구 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
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
                                }}>홈페이지 링크를 입력해주세요</label>
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
                                    <Input placeholder={"홈페이지 URL 입력"} defaultValue={"www.homepage.co.kr"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-12 pt-2 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>페이스북 링크를 입력해주세요</label>
                            </div>
                            <div className="col-12 pt-2 pb-2">
                                <Form.Item name="introduction">
                                    <Input placeholder={"페이스북 URL 입력"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-12 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>인스타그램 링크를 입력해주세요</label>
                            </div>
                            <div className="col-12 pt-2">
                                <Form.Item name="introduction">
                                    <Input placeholder={"인스타그램 URL 입력"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-12 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>기타 링크를 입력해주세요</label>
                            </div>
                            <div className="col-12 pt-2">
                                <Form.Item name="introduction" className="pb-3">
                                    <Input placeholder={"기타 URL 입력"} style={{ borderRadius: 10, height: 64 }} />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="row pt-2 pb-2">
                            <div className="col-6 pb-2">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 20
                                }}>소개 이미지를 등록해주세요</label>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <label style={{
                                    fontFamily: "SpoqaHanSansbold",
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: '#9A9A9A'
                                }}>(10MB 이하 - 파일형식: JPG,PNG,PDF)</label>
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
                                    이전
                                </Button>
                                <Button style={{ background: '#00D6E3', color: '#FFF', width: '45%', height: 68, borderRadius: 20, fontWeight: "bold", marginLeft: "10px" }} onClick={() => {
                                    Router.push('imageUpload')
                                }}>
                                    다음
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