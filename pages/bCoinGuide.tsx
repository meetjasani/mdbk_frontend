import Head from 'next/head'
import styles from '../styles/Request.module.css'
import React from 'react';
import { BCoinCard } from "../components"
import { Divider } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import profiles from '../public/data'
import { GetServerSideProps } from 'next'

function BCoinGuide() {
    const { t } = useTranslation();

    return (
        <div className="coin-guide jumbotron">
            <Head>
                <title>받은 요청</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Divider className="p-0 m-0" />
            <div className={`pt-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <h1 className={`${styles.heading}`}>{t('bCoin.purchaseBcoin')}</h1>
                </div>
            </div>
            <div className="h-100 pb-5">
                {(<div className="col4-cmn-cntr-800">
                    {profiles && profiles.bCoin && profiles.bCoin.map((profile, index) => <BCoinCard key={index} profile={profile} />)}
                </div>)}
            </div>
            <div className={`${styles.bottomContainer} pt-5 pb-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <p className={`${styles.bottomHeading}`}>{t('bCoin.notice')}</p>
                    <u style={{ textDecoration: "none" }}>
                        <li className={styles.listtext}>
                            {t('bCoin.list1')}
                        </li>
                        <li className={styles.listtext}>
                            {t('bCoin.list2')}
                        </li>
                        <li className={styles.listtext}>
                            {t('bCoin.list3')}
                        </li>
                    </u>
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

export default BCoinGuide