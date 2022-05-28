/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import styles from '../../styles/Request.module.css'
import React from 'react';
import { BlueProfile, Rating, WorkExp, ActivityInfo } from "../../components"
import { Divider } from 'antd';
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next'


function requestDetail() {
    const router = useRouter()
    const { type } = router.query
    const { t } = useTranslation();

    return (
        <div className="jumbotron">
            <Head>
                <title>받은 요청</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Divider className="p-0 m-0" />
            <div className={`${styles.mainContainer} pt-5 pb-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <h1 className={`${styles.heading}`}>{t('project.projectApp')}</h1>
                    <div className="">
                        <BlueProfile type={type} />
                        <div className="blue-profile-btm">
                            <Rating type={type} />
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