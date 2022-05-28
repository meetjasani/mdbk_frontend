/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import styles from '../styles/Request.module.css'
import React from 'react';
import { BlueProfile, Rating, WorkExp, ActivityInfo } from "../components"
import { Divider } from 'antd';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next'

function requestDetail() {
    const router = useRouter()
    const { type } = router.query
    const { t } = useTranslation();

    return (
        <div className="clientprofile-2 jumbotron">
            <Head>
                <title>받은 요청</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Divider className="p-0 m-0" />
            <div className={`${styles.mainContainer} pt-5 pb-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <h1 className={`${styles.heading}`}>받은 요청</h1>
                    <div className="">
                        <BlueProfile />
                        <div className="blue-profile-btm">
                            <Rating />
                            <WorkExp type={type} />
                            <ActivityInfo type={type} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default requestDetail