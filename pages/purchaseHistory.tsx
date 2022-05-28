import registerstyles from '../styles/Register.module.css'
import loginstyles from '../styles/login.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Card, Form, Input, Button, Switch } from 'antd';
import React, { useState, useEffect } from 'react';
import user from '../public/usergray.png'
import coin from '../public/coin.png'
import Image from 'next/image'
import { RightOutlined } from '@ant-design/icons'
import Head from 'next/head'
import styles from '../styles/Search.module.css'
import { GetServerSideProps } from 'next'


function PurchaseBcoin() {
    const { t } = useTranslation();

    return (
        <div className="jumbotron">
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
                                {t('myPages.purchasehistory')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="purchse-card h-100 pb-5">
                <Card
                    title={<div className="row" >
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <Image src={coin} alt="User Image" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <p className={registerstyles.purchaseHistoryTop}>
                                        26,000 캐시
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <p>
                                        {t('myPages.bCoinOwn')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <Image src={coin} alt="User Image" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <p className={registerstyles.purchaseHistoryTop}>
                                        26,000 캐시
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <p>
                                        {t('myPages.bCoinPurchase')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <Image src={coin} alt="User Image" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <p className={registerstyles.purchaseHistoryTop}>
                                        26,000 캐시
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <p>
                                        {t('myPages.bonusbcoin')}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    } headStyle={{ backgroundColor: "#00d6e3", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className={`${registerstyles.registerCard} col4-cmn-cntr-640`} >


                    <div className="row">
                        <div className={`col-2 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <Image src={coin} alt="User Image" />
                        </div>
                        <div className={`col-5 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypurchase}`}> -1,000 캐시</span>
                        </div>
                        <div className={`col-5 pt-5  d-block justify-content-end align-items-end`}>
                            <div className="row d-flex justify-content-end align-items-end">
                                <div className="col-12">
                                    <p style={{ float: "right" }} className={`${registerstyles.formLabel}`}>{t('myPages.interviewReq')}</p>
                                </div>
                            </div>
                            <p style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</p>
                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className={`col-2 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <Image src={coin} alt="User Image" />
                        </div>
                        <div className={`col-5 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypurchase}`}> -1,000 캐시</span>
                        </div>
                        <div className={`col-5 pt-5  d-block justify-content-end align-items-end`}>
                            <div className="row d-flex justify-content-end align-items-end">
                                <div className="col-12">
                                    <p style={{ float: "right" }} className={`${registerstyles.formLabel}`}>{t('myPages.interviewReq')}</p>
                                </div>
                            </div>
                            <p style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className={`col-2 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <Image src={coin} alt="User Image" />
                        </div>
                        <div className={`col-5 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypurchase}`} style={{ color: "#00d6e3" }}> -1,000 캐시</span>
                        </div>
                        <div className={`col-5 pt-5  d-block justify-content-end align-items-end`}>
                            <div className="row d-flex justify-content-end align-items-end">
                                <div className="col-12">
                                    <p style={{ float: "right" }} className={`${registerstyles.formLabel}`}>{t('myPages.bCoinPurchase')}</p>
                                </div>
                            </div>
                            <p style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className={`col-2 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <Image src={coin} alt="User Image" />
                        </div>
                        <div className={`col-5 pt-5 pb-5 d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.mypurchase}`}> -1,000 캐시</span>
                        </div>
                        <div className={`col-5 pt-5  d-block justify-content-end align-items-end`}>
                            <div className="row d-flex justify-content-end align-items-end">
                                <div className="col-12">
                                    <p style={{ float: "right" }} className={`${registerstyles.formLabel}`}>{t('myPages.interviewReq')}</p>
                                </div>
                            </div>
                            <p style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</p>
                        </div>
                    </div>
                </Card>
            </div>

        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default PurchaseBcoin