/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header, Giftbox, ProfileSearchCard, Footer, BannerBoxConatinerSec } from '../components'
import { Menu, Dropdown, Button, Tabs, Divider, Radio, Form, Input, Upload } from 'antd';
import styles from '../styles/Search.module.css'
import stylessec from '../styles/searchdetail.module.css';
import { GetServerSideProps } from 'next'
import profiles from '../public/data.js'

function Home() {
    const { t } = useTranslation();
    const { TabPane } = Tabs;
    const [activeTab, setActiveTab] = useState<any>("1")
    const [detailedVisible, setDetailedVisible] = useState(false)
    const [buttonVisible, setButtonVisible] = useState(false)
    const tabs = [{ key: 1, heading: t('search.sideChar'), content: t('search.sideChar') },
    { key: 2, heading: t('search.rcvreq'), content: t('search.rcvreq') },
    { key: 3, heading: t('search.sentreq'), content: t('search.sentreq') },
    { key: 4, heading: t('search.myLike'), content: t('search.myLike') }]
    const searchOptions = [{ key: 1, label: '희망직종', value: 'IT/웹개발.기획/웹서비스기획' },
    { key: 2, label: '희망지역', value: '서울시 마포구, 서울시 양천구' },
    { key: 3, label: '희망일자', value: '주중/주말' },
    { key: 4, label: '희망시간', value: '저녁' },
    { key: 5, label: '희망형태', value: '단기 프로젝트(3개월 미만)' },
    { key: 6, label: '근무형태', value: '상주' },
    ]

    return (
        <div className="jumbotron">
            <Head>
                <title>{t('home.search')}</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <Divider className="p-0 m-0" />
            <div className={`${styles.mainContainer} pt-5 pb-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    {activeTab === 3 ? <BannerBoxConatinerSec /> : <Giftbox />}
                    <div className="row pt-5 pb-5 d-flex justify-content-center">
                        <div className="col-6">
                            <p className={styles.heading}>
                                {t('search.findChar')}
                            </p>
                        </div>
                        <div className="col-6">
                            <div className="dropdown" style={{ float: "right" }}>
                                <Dropdown overlay={() => (<Menu>
                                    <Menu.Item onClick={() => { setButtonVisible(!buttonVisible) }} className={styles.dropdownitem}>{t('search.dropdown.val1')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownActiveitem}>{t('search.dropdown.val2')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>{t('search.dropdown.val3')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>{t('search.dropdown.val4')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>{t('search.dropdown.val5')}</Menu.Item>
                                </Menu>)
                                }>
                                    <Button className={styles.dropdownBtn}>{t('search.dev')}<img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <Tabs defaultActiveKey={activeTab} className="blackTabs" onChange={(key) => { setActiveTab(parseInt(key)) }}>
                        {tabs.map(tab => <TabPane key={tab.key} tab={<span className={styles.tabHeading} >{tab.heading}</span>} />)}
                    </Tabs>
                    {activeTab === 1 &&
                        <div className="row">
                            <div className="col-12">
                                {buttonVisible && searchOptions.map((option, i) => {
                                    return (<Button key={i} className={styles.buttonTextSec}>
                                        <span className={styles.butttonLabel}>{option.label}</span>&nbsp;
                                        <span>{option.value}</span>
                                    </Button>)
                                })}
                            </div>
                            {!detailedVisible && <div className="col-8 offset-2 mt-4">
                                <Button onClick={() => { setDetailedVisible(!detailedVisible) }} className={styles.primaryButton} > {t('search.searchOp')}</Button>
                            </div>}
                        </div>}
                    {detailedVisible && (<>
                        <div className={`${styles.pt40}`}>
                            <span className={stylessec.p1}>
                                희망 직종은 무엇인가요?
                            </span>
                            <span className={stylessec.p2}>
                                복수선택 가능
                            </span>

                            <div className="row " style={{ width: "100%", paddingTop: "30px", paddingBottom: "30px" }}>
                                <Radio.Group defaultValue="4" >
                                    <Radio.Button value="1" className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>개발</Radio.Button>
                                    <Radio.Button value="2" className={stylessec.radiobtntxt}>디자인</Radio.Button>
                                    <Radio.Button value="3" className={stylessec.radiobtntxt} >마케팅</Radio.Button>
                                    <Radio.Button value="4" className={stylessec.radiobtntxt} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>기타</Radio.Button>
                                </Radio.Group>
                            </div>

                            <span className={`${stylessec.p1}`}>
                                희망 분야는 무엇인가요?
                            </span>
                            <span className={stylessec.p2}>
                                최대 3개 선택 가능
                            </span>
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
                            <div className="row">
                                <Button className={stylessec.btn}>기타 <img src="./cross.svg" /></Button>
                                <Button className={stylessec.btn} style={{ marginLeft: "10px" }}>웹기획.PM <img src="./cross.svg" /></Button>
                            </div>
                            <div className="row" style={{ width: "100%", paddingTop: "30px" }}>
                                <span className={`${stylessec.p1}`}>
                                    희망 지역은 어디인가요?
                                </span>
                                <div className="row" style={{ width: "100%", paddingTop: "20px", paddingBottom: "10px" }}>
                                    <div className="col-6">
                                        <div className="dropdown" style={{ color: "white" }}>
                                            <Dropdown overlay={() => (<Menu>
                                                <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                                <Menu.Item className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                                            </Menu>)
                                            }>
                                                <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 시 선택
                                                    <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="dropdown" style={{ color: "white" }}>
                                            <Dropdown overlay={() => (<Menu>
                                                <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                                <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                                            </Menu>)
                                            }>
                                                <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 구 선택 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ width: "100%", paddingTop: "10px", paddingBottom: "10px" }}>
                                    <div className="col-6">
                                        <div className="dropdown" style={{ color: "white" }}>
                                            <Dropdown overlay={() => (<Menu>
                                                <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                                <Menu.Item className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                                            </Menu>)
                                            }>
                                                <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 시 선택 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="dropdown" style={{ color: "white" }}>
                                            <Dropdown overlay={() => (<Menu>
                                                <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                                                <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                                            </Menu>)
                                            }>
                                                <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> 구 선택 <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${stylessec.pt30} row`}>
                                    <span className={`${stylessec.p1}`}>
                                        희망 일자는 언제인가요?
                                    </span>
                                    <div className="row " style={{ width: "100%", paddingTop: "10px" }}>
                                        <Radio.Group defaultValue="3">
                                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>주중</Radio.Button>
                                            <Radio.Button value="2" className={stylessec.radiobtntxt2}>주말</Radio.Button>
                                            <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>주중/주말</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className={`${stylessec.pt30} row`}>
                                    <span className={`${stylessec.p1}`}>
                                        희망 시간은 언제인가요?
                                    </span>
                                    <div className="row " style={{ width: "100%", paddingTop: "10px" }}>
                                        <Radio.Group defaultValue="3">
                                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>오전</Radio.Button>
                                            <Radio.Button value="2" className={stylessec.radiobtntxt2}>오전</Radio.Button>
                                            <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>저녁</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className={`${stylessec.pt30} row`}>
                                    <span className={`${stylessec.p1}`}>
                                        희망 프로젝트 형태는 무엇인가요?
                                    </span>
                                    <div className="row " style={{ width: "100%", paddingTop: "10px" }}>
                                        <Radio.Group defaultValue="3">
                                            <Radio.Button value="1" className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                                <span className={stylessec.firsttext}>단기 프로젝트</span> <br />
                                                <span className={stylessec.sectext}>
                                                    3개월 미만</span></Radio.Button>

                                            <Radio.Button value="3" className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>
                                                <span className={stylessec.firsttext}>단기 프로젝트</span> <br />
                                                <span className={stylessec.sectext}>
                                                    3개월 미만</span></Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className={`${stylessec.pt30} row`}>
                                    <span className={`${stylessec.p1}`}>
                                        4대보험이 가능하신가요?
                                    </span>
                                    <div className="row " style={{ width: "100%", paddingTop: "10px" }}>
                                        <Radio.Group defaultValue="3">
                                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>4대보험 가능</Radio.Button>
                                            <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%" }}>4대보험 불가능</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className={`${stylessec.pt30} row`}>
                                    <span className={`${stylessec.p1}`}>
                                        희망 근무 형태는 무엇인가요?
                                    </span>
                                    <div className="row " style={{ width: "100%", paddingTop: "10px" }}>
                                        <Radio.Group defaultValue="3">
                                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>상주</Radio.Button>
                                            <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%" }}>재택</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-6 d-flex justify-content-center">
                                        <Button onClick={() => { setDetailedVisible(!detailedVisible) }} className={stylessec.cancelButton}>취소</Button>
                                    </div>
                                    <div className="col-6 d-flex justify-content-center">
                                        <Button onClick={() => { setDetailedVisible(!detailedVisible) }} className={stylessec.saveButton}>찾기옵션 저장</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    )}
                </div>
            </div>
            <Divider className="p-0 m-0" />

            <div className="h-100 pb-5">
                {!detailedVisible && (<div className="col4-cmn-cntr-800">
                    {activeTab === 1 && profiles.profiles.map((profile, index) => <ProfileSearchCard key={index} profile={profile} />)}
                    {activeTab === 2 && profiles.receivedRequests.map((profile, index) => <ProfileSearchCard key={index} profile={profile} />)}
                    {activeTab === 3 && profiles.sentRequests.map((profile, index) => <ProfileSearchCard key={index} profile={profile} />)}
                    {activeTab === 4 && profiles.likedRequests.map((profile, index) => <ProfileSearchCard key={index} profile={profile} />)}
                </div>)}
            </div>
            <Footer />
        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default Home