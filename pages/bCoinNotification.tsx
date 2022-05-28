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
import { GetServerSideProps } from 'next'
import styles from '../styles/Search.module.css'


function BcoinNotification() {
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
                                {t('myPages.notification')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-100 pb-5">
                <Card
                    className={`${registerstyles.registerCard} col4-cmn-cntr-640`} >
                    <div className="row pt-4 pb-4">
                        <div className={`col-6  d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.formLabel}`}>{t('notificationPage.answeredQuestion')}<span style={{ color: " #FF5C00", fontSize: "28px" }}>.</span></span>
                        </div>
                        <div className={`col-6`}>
                            <span style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</span>
                        </div>
                    </div>
                    <hr />
                    <div className="row pt-4 pb-4">
                        <div className={`col-6  d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.formLabel}`}>{t('notificationPage.requestedInterview')}</span>
                        </div>
                        <div className={`col-6`}>
                            <span style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</span>
                        </div>
                    </div>
                    <hr />
                    <div className="row pt-4 pb-4">
                        <div className={`col-6  d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.formLabel}`}>{t('notificationPage.answeredQuestion')}</span>
                        </div>
                        <div className={`col-6`}>
                            <span style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</span>
                        </div>
                    </div>
                    <hr />
                    <div className="row pt-4 pb-4">
                        <div className={`col-6  d-block justify-content-start align-items-start`}>
                            <span className={`${registerstyles.formLabel}`}>{t('notificationPage.requestedInterview')}</span>
                        </div>
                        <div className={`col-6`}>
                            <span style={{ color: "#9A9A9A", fontSize: "18px", float: "right" }}>2021.05.01</span>
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

export default BcoinNotification