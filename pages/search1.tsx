import React, { useState } from 'react';
import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header, Giftbox, SearchCard, ProfileSearchCard, Footer } from '../components'
import { Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { GetServerSideProps } from 'next'
import { Menu, Dropdown, Button, Tabs } from 'antd';
import styles from '../styles/Search1.module.css'
import profiles from '../public/data.js'
function Home() {
    const { t } = useTranslation();
    const { TabPane } = Tabs;
    const [activeTab, setActiveTab] = useState<any>(2)
    const tabs = [{ key: 1, heading: t('search.sideChar'), content: t('search.sideChar') },
    { key: 2, heading: t('search.rcvreq'), content: t('search.rcvreq') },
    { key: 3, heading: t('search.sentreq'), content: t('search.sentreq') },
    { key: 4, heading: t('search.myLike'), content: t('search.myLike') }]

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
                <div className="container col-6 offset-3">
                    <Giftbox />
                    <div className="row pt-5 pb-5 d-flex justify-content-center">
                        <div className="col-6 p-0 m-0">
                            <p className={styles.h1}>
                                {t('search.findChar')}
                            </p>
                        </div>
                        <div className="col-6">
                            <div className="dropdown" style={{ float: "right" }}>
                                <Dropdown overlay={() => (<Menu>
                                    <Menu.Item className={styles.dropdownitem}>{t('search.dropdown.val1')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownActiveitem}>{t('search.dropdown.val2')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>{t('search.dropdown.val3')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>{t('search.dropdown.val4')}</Menu.Item>
                                    <Menu.Item className={styles.dropdownitem}>{t('search.dropdown.val5')}</Menu.Item>
                                </Menu>)
                                }>
                                    <Button className={styles.dropdownBtn}>{t('search.dev')}<DownOutlined style={{ float: "right", paddingTop: "10px" }} /></Button>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <Tabs defaultActiveKey={activeTab} onChange={(key) => { setActiveTab(parseInt(key)) }}>
                        {tabs.map(tab => <TabPane key={tab.key} tab={<span className={styles.p3} >{tab.heading}</span>} />)}
                    </Tabs>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <Button className={styles.primaryButton} > {t('search.searchOp')}</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-100 pb-5">
                <div className="container col-6 offset-3">

                    {profiles.profiles.map((profile, index) => <ProfileSearchCard key={index} profile={profile} />)}
                    {/* {activeTab === 1 && [...Array(5)].map((i, index) => <ProfileSearchCard key={index} />)}
                    {activeTab === 2 && [...Array(5)].map((i, index) => <ProfileSearchCard key={index} />)}
                    {activeTab === 3 && [...Array(5)].map((i, index) => <ProfileSearchCard key={index} />)}
                    {activeTab === 4 && [...Array(5)].map((i, index) => <ProfileSearchCard key={index} />)} */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default Home