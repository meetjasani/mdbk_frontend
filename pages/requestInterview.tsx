/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/components/Blueprofile.module.css';
import stylessec from '../styles/components/ReqConInfo.module.css';
import stylesthird from '../styles/Search.module.css';
import bottomstyles from '../styles/Request.module.css'
import React, { useState } from 'react';
import { Menu, Dropdown, Button, Form, Input } from 'antd';
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
function RequestcontactInfo() {
    const { TextArea } = Input;
    const [detailedVisible, setDetailedVisible] = useState(false);
    const [value, setValue] = React.useState('');
    const [amtvalue, setAmtvalue] = React.useState(0);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    const submit = (event: any) => {
        setAmtvalue(event.target.value);
    };
    const { t } = useTranslation();
    return (
        <>
            <div className="request-interview mainContainercmn">
                <div className="cmn-profile-section col4-cmn-cntr-800" style={{ paddingTop: "50px", paddingBottom: "40px", paddingLeft: "20px" }}>
                    <div className={`${styles.heading}`}>인터뷰를 요청하세요</div>
                </div>
                <div className="cmn-profile-section col4-cmn-cntr-800 box-section">
                    <div className="cmn-profile-sec-top" style={{ padding: "30px 30px 30px 30px" }}>
                        <div className="cmn-profile-img mt-3">
                            <div className="d-flex justify-content-center">
                                <img src="/blueUser.svg" alt="User Image" />
                            </div>
                            <div className={`d-flex justify-content-center align-items-center`}>
                                <span><Button style={{ borderRadius: "30px", color: "#00D6E3", marginRight: "10px", marginTop: "11px", fontWeight: "bold" }}>기업</Button></span>
                                <span className={styles.name}>개발왕</span>
                                <span>
                                    <img src="/heart.svg" className={styles.heartimg} alt="Heart Icon" />
                                </span>
                                <span className={styles.name} style={{ fontSize: "14px", paddingLeft: "10px" }}>
                                    32
                                </span>
                            </div>
                        </div>
                        <hr className={stylessec.hr} />
                        <div className={`${styles.p}`}>안녕하세요. 열정 개발자 이모아입니다!</div>
                    </div>
                    <div className="blue-profile-btm with-no-shadow pt-0">
                        <Form name="requestinfo" layout="vertical" onFinish={(values) => { console.log(values) }}>
                            <div className="p-form-cmn" >
                                <div className="p-multi-field">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="dropdown" style={{ float: "left", color: "white", width: "100%", marginTop: "50px" }}>
                                                <Form.Item
                                                    name="text"
                                                    label={
                                                        <span className={stylessec.label}>제안 금액</span>
                                                    }>
                                                    <Dropdown overlay={() => (<Menu>
                                                        <Menu.Item className={stylesthird.dropdownitem}>시급</Menu.Item>
                                                        <Menu.Item className={stylesthird.dropdownActiveitem}>시급</Menu.Item>
                                                        <Menu.Item className={stylesthird.dropdownitem}>시급</Menu.Item>
                                                    </Menu>)
                                                    }>
                                                        <Button className={stylesthird.dropdownBtn} style={{ height: "64px", borderRadius: "20px", width: "100%" }}>시급 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                                    </Dropdown>
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="p-multi-field-right" style={{ float: "right", marginTop: "93px", width: "100%" }}>
                                                <Form.Item
                                                    rules={[
                                                        {
                                                            min: 2,
                                                            message:
                                                                'Please input your Nickname!',
                                                        },
                                                    ]}
                                                >
                                                    <Input type="text"
                                                        defaultValue={amtvalue} onChange={submit} suffix="원" className="reqinterview" style={{ borderRadius: "20px", height: "64px", color: "black", width: "100%" }} />
                                                </Form.Item>

                                                <span className={styles.nego}>협의 가능</span>
                                                <span><img src="/checkbox3.svg" alt="Heart Icon" style={{ float: "right", paddingTop: "10px" }} /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-multi-field">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="dropdown" style={{ float: "left", color: "white", width: "100%", marginTop: "40px" }}>
                                                <Form.Item
                                                    name="text"
                                                    label={
                                                        <span className={stylessec.label}>자주쓰는 메시지 불러오기
                                                        </span>
                                                    }>
                                                    <Dropdown overlay={() => (<Menu>
                                                        <Menu.Item className={stylesthird.dropdownActiveitem}>자주쓰는 메시지 불러오기</Menu.Item>

                                                    </Menu>)
                                                    }>
                                                        <Button style={{ height: "64px", borderRadius: "20px", width: "100%", textAlign: "left" }}>자주쓰는 메시지 불러오기 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                                    </Dropdown>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {!detailedVisible && <div className="p-form-cmn" style={{ float: "left", color: "white", width: "100%", marginTop: "40px" }}>
                                    <Form.Item
                                        name="text"
                                        label={
                                            <span className={stylessec.label}>메세지를 함께 전달하세요
                                            </span>
                                        }>
                                        <TextArea rows={4} value={value} onChange={handleChange} className={styles.txtarea} placeholder="함께 일하고 싶은 상대에게 친근한 메세지와 함께 연락처를 요청하세요 :)" style={{ borderRadius: "20px", boxSizing: "border-box", paddingTop: "15px" }}></TextArea>
                                        <Button disabled={!value} className={styles.savemsg} style={{ float: "right", marginTop: "20px" }}  >
                                            메세지 저장
                                        </Button>
                                    </Form.Item>
                                </div>}

                                <div className="p-form-cmn" style={{ width: "100%", float: "left", paddingBottom: "30px", marginTop: "50px" }}>
                                    <div className="d-flex justify-content-center" >
                                        <Button className={styles.lstbtn}>
                                            취소
                                        </Button>
                                        <Button className={styles.lstbluebtn} >
                                            인터뷰 요청
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>

                </div>


                <div className={`${bottomstyles.bottomContainer}  pt-5 pb-5 h-100`}>
                    <div className="col4-cmn-cntr-800">
                        <p className={`${bottomstyles.bottomHeading}`}>{t('bCoin.notice')}</p>
                        <u style={{ textDecoration: "none" }}>
                            <li className={bottomstyles.listtext}>
                                프로필 100% 등록 시 보너스 캐시를 10% 추가 지급해 드립니다.
                            </li>
                            <li className={bottomstyles.listtext}>
                                B캐시 구매 시 2년 내에 모두 사용하셔야 합니다.
                            </li>
                            <li className={bottomstyles.listtext}>
                                2년이 지난 B캐시는 자동 소멸됩니다.
                            </li>
                            <li className={bottomstyles.listtext}>
                                한 번 구매하신 B캐시는 환불이 불가합니다.
                            </li>
                        </u>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});


export default RequestcontactInfo