import React, { useState } from 'react';
import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ProjectCardSec } from '../../components'
import { Menu, Dropdown, Button, Tabs, Divider, Radio, Form, Input } from 'antd';
import styles from '../../styles/Search.module.css'
import profiles from '../../public/data'
import { GetServerSideProps } from 'next'

function ProjectRequestDetail() {
    const { t } = useTranslation();

    return (
        <div className="jumbotron">
            <Head>
                <title>{t('home.search')}</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`${styles.mainContainerBeforeLogin} pt-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <div className="row pt-4 d-flex justify-content-center">
                        <div className="col-8">
                            <p className={styles.heading}>
                                {t('project.IT/webService')}
                            </p>
                        </div>
                        <div className="col-4">
                            <div className="dropdown" style={{ float: "right" }}>
                                <Button className={styles.primaryButton}>{t('project.seeMyProposal')}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-100 pb-5">
                {(<div className="col4-cmn-cntr-800">
                    {profiles && profiles.projects && profiles.projects.map((profile, index) => <ProjectCardSec key={index} profile={profile} />)}
                </div>)}
            </div>
        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});


export default ProjectRequestDetail