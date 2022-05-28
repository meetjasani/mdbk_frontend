/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Request.module.css'
import styles2 from '../styles/components/Searchcard.module.css'
import React from 'react';
import { Footer, Header, Giftbox, HeaderTab, SearchCard, BlueProfile, Rating, WorkExp, ActivityInfo } from "../components"
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';
import Link from 'next/link'

function RcvReqReject() {

    return (
        <>
            <Head>
                <title></title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <div className={`${styles.mainContainer} pt-5 pb-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <p className={`${styles.heading}`} style={{ paddingTop: "10px" }}>받은 요청</p>
                    <div className="" style={{ boxShadow: "5px 0px 5px rgba(0, 0, 0, 0.1)", borderRadius: "20px" }}>
                        <BlueProfile />
                        <div className="blue-profile-btm">
                            <Rating />
                            <WorkExp />
                            <ActivityInfo />
                            <div className="row d-flex justify-content-center align-items-center" style={{ paddingTop: "15px", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", paddingBottom: "20px" }}>
                                <Button className={styles.cardBtn} > 상세정보 보기</Button>
                                <Button className={styles.cardBtn2} >연락처 요청</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default RcvReqReject