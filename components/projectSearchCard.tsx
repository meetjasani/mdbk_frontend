import React from 'react';
import styles from '../styles/components/Searchcard.module.css'
import { Button } from 'antd'
import Image from 'next/image'
import DR from '../public/downRectangle.svg'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

function ProjectSearchCardBeforeLogin({ profile }: any) {
    const router = useRouter()
    const { t } = useTranslation();

    return (<div className={`${styles.div1}`} style={{ marginTop: "30px" }}>
        <div className="row" style={{ padding: "20px 0px 20px 0px" }}>
            <div className="col-8" style={{ paddingLeft: "0px" }}>
                <div className="row">
                    <div className="col-12 d-flex align-items-start">
                        <div className="row">
                            <div className={`${styles.card1Text} col-12 d-block justify-content-start align-items-start`}>
                                {profile.nickName}
                            </div>
                            <div className={`${styles.lastSeen} col-6`}  >
                                {profile.lastSeen}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {!profile.type && (<div className="col-4" >
                <Button className={styles.seeMoreBtn}> {t('search.detail')}</Button>
            </div>)}
        </div>
        <div className="row" >
            <p className={styles.paraTwo}>
                {profile.tagLine}
            </p>
        </div>
        <hr className="mb-0 w-100" />
        <div className="row" style={{ padding: "10px 0px 30px 20px" }}>
            {profile && profile.projectdetails && profile.projectdetails.map((detail: any, i: number) => {
                return (<Button key={i} className={styles.buttonTextSec}>
                    <span className={styles.butttonLabel}>{detail.label}</span>&nbsp;
                    <span>{detail.value}</span>
                </Button>)
            })}
        </div>
    </div >

    )
}
// export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common']))
//     }
// });
export default ProjectSearchCardBeforeLogin