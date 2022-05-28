import React from 'react';
import styles from '../styles/components/Searchcard.module.css'
import { Button } from 'antd'
import Image from 'next/image'
import { PhoneFilled } from '@ant-design/icons'
import SearchUserPlaceholder from '../public/SearchUserPlaceholder.svg'
import Heart from '../public/heart.svg'
import DR from '../public/downRectangle.svg'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ProjectCardSec({ profile }: any) {
    const router = useRouter()
    const { t } = useTranslation();
    return (<div className={`${styles.div1}`}>
        <div className="row" style={{ padding: "20px 20px 20px 20px" }}>
            <div className="col-8" >
                <div className="row">
                    <div className="col-2">
                        <Image src={SearchUserPlaceholder} alt="User Image" width={60} height={60} />
                    </div>
                    <div className="col-10 d-flex align-items-start">
                        <div className="row">
                            <div className={`${styles.card1Text} col-12 d-block justify-content-start align-items-start`}>
                                {profile.nickName}
                                <span style={{ fontSize: "28px", color: "#FF5C00", paddingLeft: "2px" }}>.</span>
                            </div>
                            <div className={`${styles.lastSeen} col-12`}>
                                {profile.experience}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4" >
                <Button className={styles.seeMoreBtn}> {t('search.detail')}</Button>
            </div>
        </div>
        <div className="row" style={{ paddingTop: 30 }}>
            <p className={styles.paraTwo}>
                {profile.description}
            </p>
        </div>
        <hr className="mb-0" />
        <div className="row" style={{ padding: "20px 0px 20px 0px" }}>
            <div className="col-6">
                <span className={styles.suggestedamt} style={{ lineHeight: "36px" }}>
                    {profile.suggestedAmt}
                </span>
                <span className={styles.projectamt} style={{ lineHeight: "36px", color: "#00D6E3", marginLeft: 20 }}>
                    {profile.amount}
                </span>
            </div>
            <div className={` col-6 d-flex justify-content-end align-items-center`}>
                {profile.requestStatus === 'Accepted' &&
                    (<div className="col-4 d-flex justify-content-end align-items-center">
                        <span className={`${styles.call} d-flex align-items-center p-2`}>
                            <PhoneFilled className={`${styles.callIcon} p-2`} />010.2123.5555
                        </span>
                        <Button className={styles.acceptedButton} onClick={() => {
                            router.push({ pathname: 'requestDetail', query: { type: 'accepted' } })
                        }}>수락됨</Button>
                    </div>)}
                {profile.requestStatus === 'Rejected' &&
                    (<div className="col-4 d-flex justify-content-end align-items-center p-2">
                        <Button className={styles.rejectButton} onClick={() => {
                            router.push({ pathname: 'requestDetail', query: { type: 'rejected' } })
                        }}>거절됨</Button>
                    </div>)}
                {profile.requestStatus === 'Like' &&
                    (<div className="col-4 d-flex justify-content-end align-items-center">
                        <Button className={`${styles.requestButton} mr-2`} onClick={() => {
                            router.push({ pathname: 'requestDetail', query: { type: 'like' } })
                        }}>거절하기</Button>

                        <Button className={`${styles.detailButtonsec} mr-2`}>수락하기</Button>
                    </div>)}
            </div>
        </div>
    </div >

    )
}

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common']))
//     }
// });
export default ProjectCardSec