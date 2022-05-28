
import styles from '../styles/components/Blueprofile.module.css';
import stylessec from '../styles/components/ReqConInfo.module.css';
import stylesthird from '../styles/Search.module.css'
import React, { useState } from 'react';
import { Menu, Dropdown, Button, Form, Input } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next'

function RequestcontactInfo() {
    const { TextArea } = Input;
    const [detailedVisible, setDetailedVisible] = useState(false)
    return (
        <>
            <div className="clientprofile-2 mainContainercmn">
                <div className="cmn-profile-section col4-cmn-cntr-800" style={{ paddingTop: "50px", paddingBottom: "40px" }}>
                    <div className={`${styles.heading}`}>받은 요청</div>
                </div>
                <div className="cmn-profile-section col4-cmn-cntr-800 box-section">
                    <div className="cmn-profile-sec-top" style={{ padding: "30px 30px 30px 30px" }}>
                        <div className="cmn-profile-img mt-3">
                            <div className="d-flex justify-content-center">
                                <img src="/blueUser.svg" alt="User Image" />
                            </div>
                            <div className={`d-flex justify-content-center align-items-center`}>
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
                                                <Button style={{ borderRadius: "20px", height: "64px", color: "black", width: "100%", }} >
                                                    <span className={styles.btnspan}>
                                                        원
                                                    </span>
                                                    <span className={styles.btnTxt1}>1,000,000,000</span>
                                                </Button>
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
                                        <TextArea rows={4} className={styles.txtarea} placeholder="함께 일하고 싶은 상대에게 친근한 메세지와 함께 연락처를 요청하세요 :)" style={{ borderRadius: "20px", boxSizing: "border-box", paddingTop: "15px" }}></TextArea>

                                    </Form.Item>
                                </div>}
                                <div className="p-form-cmn" style={{ width: "100%" }}>
                                    {!detailedVisible && <Button className={styles.savemsg} style={{ float: "right" }} onClick={() => { setDetailedVisible(!detailedVisible) }} >
                                        메세지 저장
                                    </Button>}

                                    {detailedVisible && (<>
                                        <div className={stylessec.flwout}>
                                            <div className={stylessec.flw}>
                                                <span className={stylessec.modaltxt}>
                                                    안녕하세요. 연락처 요청드립니다.
                                                </span>
                                                <Button type="link" className={stylessec.dlt} >
                                                    삭제
                                                </Button>
                                            </div>
                                            <div className={stylessec.flw}>
                                                <span className={stylessec.modaltxt}>
                                                    안녕하세요. 인사담당자입니다.
                                                </span>
                                                <Button type="link" className={stylessec.dlt}>
                                                    삭제
                                                </Button>
                                            </div>
                                            <div className={stylessec.flw}>
                                                <span className={stylessec.modaltxt}>
                                                    안녕하세요. 뉴비즈스타트입니다. 스카웃 관련으로 연락처 요청드립니다.
                                                </span>
                                                <Button type="link" className={stylessec.dlt}>
                                                    삭제
                                                </Button>
                                            </div>
                                            <div className={stylessec.flw}>
                                                <span className={stylessec.modaltxt}>
                                                    안녕하세요. 뉴비즈스타트입니다. 스카웃 관련으로 연락처 요청드립니다.
                                                </span>
                                                <Button type="link" className={stylessec.dlt}>
                                                    삭제
                                                </Button>
                                            </div>

                                            <div className={stylessec.flw}>
                                                <span className={stylessec.modaltxt}>
                                                    안녕하세요. 뉴비즈스타트입니다. 스카웃 관련으로 연락처 요청드립니다.
                                                </span>
                                                <Button type="link" className={stylessec.dlt}>
                                                    삭제
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                    )}
                                </div>


                                <div className="p-form-cmn" style={{ width: "100%", float: "left", paddingBottom: "30px", marginTop: "50px" }}>
                                    <div className="d-flex justify-content-center" >
                                        <Button className={styles.lstbtn}>
                                            취소
                                        </Button>
                                        <Button className={styles.lstbluebtn} >
                                            1000 캐시로 연락처 요청
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
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