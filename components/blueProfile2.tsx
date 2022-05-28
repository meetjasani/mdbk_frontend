/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/components/Blueprofile.module.css'
import stylessec from '../styles/components/ReqConInfo.module.css'
import stylesthird from '../styles/Search.module.css'

import { Card, Divider, Avatar, Form, Input, Button, Dropdown, Menu } from 'antd';

function BlueProfileSec() {

    return (
        <div className="site-card-border-less-wrapper">
            <Card title="" bordered={false} >
                <div className={`${stylessec.maindiv} row d-flex justify-content-center align-items-center`} >

                    <div className="container">
                        <div className={`d-flex justify-content-center`} style={{ paddingTop: "50px" }}>
                            <img src="/blueUser.svg" alt="User Image" />
                        </div>

                        <p className={` ${styles.name} d-flex justify-content-center align-items-center`}>
                            개발왕
                            <span>
                                <img src="/heart.svg" className={styles.heartimg} alt="Heart Icon" />
                            </span>
                            <span className={styles.name} style={{ fontSize: "14px", paddingLeft: "10px" }}>
                                32
                            </span>
                        </p>

                    </div>
                    <hr className={stylessec.hr} />
                    <p className={styles.p} style={{ padding: "0px" }}>
                        안녕하세요. 열정 개발자 이모아입니다!
                    </p>

                </div>
                <Form name="requestinfo" layout="vertical" onFinish={(values) => { console.log(values) }}>
                    <div className={`row`} style={{ paddingTop: "30px" }}>
                        <div className="col-3">
                            <div className="dropdown" style={{ float: "left", color: "white" }}>
                                <Form.Item
                                    name="email"
                                    label={
                                        <span className={stylessec.label}>제안 금액</span>
                                    }>
                                    <Dropdown overlay={() => (<Menu>
                                        <Menu.Item className={stylesthird.dropdownitem}>시급</Menu.Item>
                                        <Menu.Item className={stylesthird.dropdownActiveitem}>시급</Menu.Item>
                                        <Menu.Item className={stylesthird.dropdownitem}>시급</Menu.Item>
                                    </Menu>)
                                    }>
                                        <Button className={stylesthird.dropdownBtn} style={{height:"64px",borderRadius:"20px"}}>시급 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                    </Dropdown>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="col-8" style={{ paddingTop: "43px" }}>
                            <Form.Item
                                name="won"
                            >
                                <Input type="text"
                                    placeholder="원" style={{borderRadius:"20px", display:"flex", textAlign:"right",height:"64px", color:"black"}} />                          
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>

    )
}
export default BlueProfileSec