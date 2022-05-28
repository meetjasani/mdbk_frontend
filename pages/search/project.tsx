/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ProjectSearchCardBeforeLogin } from '../../components'
import { Menu, Dropdown, Button, Divider } from 'antd';
import styles from '../../styles/Search.module.css'
import profiles from '../../public/data'
import { GetServerSideProps } from 'next';

function Project() {
    const { t } = useTranslation();
    const [buttonVisible, setButtonVisible] = useState(false)

    return (
        <div className="jumbotron">
            <Head>
                <title>{t('home.search')}</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Divider className="p-0 m-0" />
            <div className={`${styles.mainContainerBeforeLogin} pt-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <p className={styles.heading}>
                                {t('search.projectBeforeLogin.findProject')}
                            </p>
                        </div>
                        <div className="col-6">
                            <div className="dropdown" style={{ float: "right" }}>
                                <Button className={styles.primaryButton}>{t('search.projectBeforeLogin.postProject')}</Button>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 d-flex justify-content-center">
                        <div className="col-6">
                            <p className={styles.headingSecond}>
                                {t('search.dev')}
                            </p>
                        </div>
                        <div className="col-6">
                            <div className="dropdown d-flex justify-content-end">
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
                </div>
            </div>
            <div className="h-100 pb-5">
                <div className="col4-cmn-cntr-800">
                    {profiles.profiles.map((profile, index) => <ProjectSearchCardBeforeLogin key={index} profile={profile} />)}
                </div>
            </div>
        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});


export default Project