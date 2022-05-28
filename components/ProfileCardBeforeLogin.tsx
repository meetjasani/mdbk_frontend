import React from 'react';
import styles from '../styles/components/Searchcard.module.css'
import { Button } from 'antd'
import Image from 'next/image'
import DR from '../public/downRectangle.svg'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

function ProfileCardBeforeLogin({ profile }: any) {
    const router = useRouter()
    const { t } = useTranslation();
    const val = router.query && router.query.cmpny
    return (<div className={`${styles.div1}`} style={{ marginTop: "30px" }}>
        <div className="row" style={{ padding: "20px 0px 20px 0px" }}>
            <div className="col-8" style={{ paddingLeft: "0px" }}>
                <div className="row">
                    <div className="col-12 d-flex align-items-start">
                        <div className="row">
                            <div className={`${styles.card1Text} col-12 d-block justify-content-start align-items-start`}>
                                {profile.nickName} {val === "true" && <button className="light-blue-bg">기업</button>}
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
        <div className="row" style={{ padding: "10px 0px 0px 20px" }}>
            {profile.details.map((detail: any, i: number) => {
                return (<Button key={i} className={styles.buttonTextSec}>
                    <span className={styles.butttonLabel}>{detail.label}</span>&nbsp;
                    <span>{detail.value}</span>
                </Button>)
            })}
        </div>
        <hr className="mt-4 mb-0" />
        <div className="row" style={{ padding: "20px 20px 20px 20px" }}>
            <div className="col-6">
                <span className={styles.topMenu} style={{ lineHeight: "36px" }}>
                    {profile.footerDetailLabel}
                </span>
                <span className={styles.topMenu} style={{ lineHeight: "36px", color: "#000000", marginLeft: 20 }}>
                    {profile.footerDetailValue}
                </span>
            </div>
            <div className={`${styles.topMenu} col-6 d-flex justify-content-end align-items-center`} style={{ lineHeight: "36px" }}>
                {t('search.more')}
                <Image src={DR} alt="Down Icon" />
            </div>
        </div>
    </div >

    )
}
// export const getServerSideProps: GetStaticProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common']))
//     }
// });
export default ProfileCardBeforeLogin