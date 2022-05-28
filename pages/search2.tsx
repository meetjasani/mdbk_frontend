/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Search.module.css'
import React from 'react';
import { GetServerSideProps } from 'next'
import { Footer, Header, Giftbox, HeaderTab, SearchCard } from "../components"
import { Menu, Dropdown, Button } from 'antd';

function Search2() {
    const labels = ['희망직종', '희망지역', '희망일자', '희망시간', '희망형태', '근무형태']
    const val = ['IT/웹개발.기획/웹서비스기획', '서울시 마포구, 서울시 양천구', '주중/주말', '저녁', '단기 프로젝트(3개월 미만)', '상주']
    return (
        <>
            <Head>
                <title></title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <div className={`row`}>
                <hr />
                <div className={`${styles.pt40} col-6 offset-3`} >
                    <div className="row" style={{ paddingBottom: "30px" }}>
                        <Giftbox />
                    </div>
                    <div className={`row ${styles.pt40}`}>
                        <div className={`col-6`}>
                            <p className={styles.p1}>
                                부캐를 찾으세요
                            </p>
                        </div>
                        <div className="col-6" >
                            <div className="dropdown" style={{ float: "right", color: "white" }}>
                                <Dropdown overlay={() => (<Menu>
                                    <Menu.Item className={styles.dropdownitem}>전체</Menu.Item>
                                    <Menu.Item className={styles.dropdownActiveitem}>개발</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>설계</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>마케팅</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>다른</Menu.Item>
                                </Menu>)
                                }>
                                    <Button className={styles.dropdownBtn}>개발   <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className={`row ${styles.pt40}`}>
                        <HeaderTab val={1} />
                    </div>
                    <div className={`row ${styles.pt40}`}>
                        {labels && labels.map((btn, i) => <Button key={btn} className={styles.buttonTextSec}>
                            <span style={{ fontWeight: 700 }}>{`${btn}`}</span>:<span>{val[i]}</span>
                        </Button>)}
                    </div>
                    <div className={`row ${styles.pt40}`} style={{ paddingBottom: "40px" }}>
                        <div className="col-4 offset-4">
                            <Button className={styles.primaryButton} >찾기옵션 설정</Button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="row" style={{ background: "#E5E5E5" }}>
                <SearchCard />
            </div>
            <Footer />

        </>
    )
}



export default Search2