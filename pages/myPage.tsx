import registerstyles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button, Switch } from 'antd';
import React, { useState, useEffect } from 'react';
import user from '../public/usergray.png'
import coin from '../public/coin.png'
import { GetServerSideProps } from 'next'

import Image from 'next/image'
import { RightOutlined } from '@ant-design/icons'
import Head from 'next/head'
import styles from '../styles/Search.module.css'


function MyPage() {
    const { t } = useTranslation();

    return (
        <div className="my-page jumbotron">
            <Head>
                <title>{t('home.search')}</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`${styles.mainContainerBeforeLogin} pt-5 h-100`}>
                <div className="col4-cmn-cntr-640">
                    <div className="row pt-4 d-flex justify-content-start ml-5">
                        <div className="col-8">
                            <p className={styles.heading}>
                                {t('myPages.title')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-100 pb-5">
                <Card className={`${registerstyles.registerCard} col4-cmn-cntr-640`}>
                    <div className="row">
                        <div className="col-3">
                            <Image src={user} alt="User Image" />
                        </div>
                        <div className="col-9 float-left">
                            <div className="row">
                                <div className={`col-12 pt-2 d-block justify-content-start align-items-start`}>
                                    <span className={registerstyles.myPagename}>{t('myPages.name')}</span>
                                    <span className={`${registerstyles.mypagesubname}`}>{t('search.nickName')}</span>
                                    <span className={registerstyles.mypagesubname} style={{ fontWeight: "bold" }}>{t('myPages.ItKing')}</span>
                                    <span style={{ float: "right" }}> <RightOutlined style={{ fontSize: "20px", color: "gray" }} /></span>
                                </div>
                                <div>
                                    <p className={`${styles.formLabel}`} style={{ fontWeight: "normal" }}>{t('myPages.email')} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className={`col-12 pt-2 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypageTxt}`}>{t('myPages.bCoinstore')}</span>
                            <span style={{ float: "right" }}> <RightOutlined style={{ fontSize: "20px", color: "gray" }} /></span>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className={`col-12 pt-2 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypageTxt}`} style={{ paddingTop: "15px" }}>{t('myPages.purchasehistory')}</span>
                            <span style={{ float: "right" }}> <RightOutlined style={{ fontSize: "20px", color: "gray", paddingTop: "15px" }} /></span>
                            <span style={{ float: "right" }}><Button className={`${registerstyles.mypagebtn}`}><Image src={coin} alt="User Image" /> {t('myPages.button')}</Button></span>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className={`col-12 pt-2 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypageTxt}`}>{t('myPages.notificationSetting')}</span>

                            <span style={{ float: "right" }}><Switch defaultChecked className={`${registerstyles.switchbtn}`} /></span>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className={`col-12 pt-2 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypageTxt}`}>{t('myPages.languageSetting')}</span>

                            <span style={{ float: "right" }}><Button className={`${registerstyles.btn}`}>{t('myPages.korean')}</Button></span>
                        </div>
                    </div>
                </Card>
            </div>
        </div >

        // <div className="container-fluid register-outer">
        //   <h1 className={`${styles.heading} col4-cmn-cntr-640`}>{t('login.heading')}</h1>
        //   <Card className={`${styles.registerCard} col4-cmn-cntr-640`}>
        //   <div className="row" style={{ padding: "10px 10px 10px 10px" }}>
        //         <div className="col-8" >
        //             <div className="row">
        //                 <div className="col-3 ">
        //                     <Image src={user} alt="User Image"/>
        //                 </div>
        //                 <div className="col-9 float-left">
        //                     <div className="row">
        //                         <div className={`col-12 d-block justify-content-start align-items-start`}>                             
        //                             <span className={styles.myPagename}>{t('myPages.name')}</span>
        //                             <span className={`${styles.mypagesubname}`}>{t('search.nickName')}</span>
        //                             <span className={styles.mypagesubname} style={{fontWeight:"bold"}}>{t('myPages.ItKing')}</span>                             
        //                         </div>
        //                         <div>
        //                             <p className={`${styles.formLabel}`} style={{fontWeight:"normal"}}>{t('myPages.email')} </p>                           
        //                        </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <hr />
        //             <div className="row pt-3">
        //                 <div className={`${styles.bcoinCoin} col-12`}>
        //                     {/* {profile.amount} */}
        //                     <span className={`${styles.bcoinTxt}`}>{t('myPages.bCoinstore')}</span>
        //                 </div>
        //             </div> 
        //             </div>

        //         <div className="col-4 pt-2 d-flex justify-content-end align-items-start" >

        //         <RightOutlined style={{fontSize:"20px",color:"gray"}}/>

        //         </div>
        //     </div>
        //   </Card>
        // </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default MyPage