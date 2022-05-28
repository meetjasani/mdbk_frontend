import React from 'react';
import styles from '../styles/components/Searchcard.module.css'
import { Button } from 'antd'
import Image from 'next/image'
import { PhoneFilled } from '@ant-design/icons'
import SearchUserPlaceholder from '../public/SearchUserPlaceholder.svg'
import Heart from '../public/heart.svg'
import DR from '../public/downRectangle.svg'
import { useRouter } from 'next/router'

function ProfileSearchCard({ profile }: any) {
    const router = useRouter()

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
                                {profile.nick_name}
                                ∙<span className={`${styles.card1Text2} col-6`}>
                                    {profile.experience} &nbsp;
                                    <Image src={Heart} alt="Heart Icon" className="" />
                                </span>
                            </div>
                            <div className={`${styles.lastSeen} col-6`}>
                                {profile.lastSeen}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {profile.requestStatus === 'Accepted' &&
                (<div className="col-4 d-flex justify-content-end align-items-center">
                    <span className={`${styles.call} d-flex align-items-center p-2`}>
                        <PhoneFilled className={`${styles.callIcon} p-2`} />010.2123.5555
                    </span>
                    <Button className={styles.acceptedButton} onClick={() => {
                        router.push({ pathname: 'requestDetail', query: { type: 'accepted' } })
                    }}>수락됨</Button>
                </div>)}
            {profile.requestStatus === 'Accept' &&
                (<div className="col-4 d-flex justify-content-end align-items-center p-2">
                    <Button className={styles.acceptButton} onClick={() => {
                        router.push({ pathname: 'requestDetail', query: { type: 'pending' } })
                    }}>수락하기</Button>
                </div>)}
            {profile.requestStatus === 'Pending' &&
                (<div className="col-4 d-flex justify-content-end align-items-center p-2">
                    <Button className={styles.waitingButton} onClick={() => {
                        router.push({ pathname: 'requestDetail', query: { type: 'pending' } })
                    }}>수락하기</Button>
                </div>)}
            {profile.requestStatus === 'Rejected' &&
                (<div className="col-4 d-flex justify-content-end align-items-center p-2">
                    <Button className={styles.rejectButton} onClick={() => {
                        router.push({ pathname: 'requestDetail', query: { type: 'rejected' } })
                    }}>거절됨</Button>
                </div>)}
            {profile.requestStatus === 'Like' &&
                (<div className="col-4 d-flex justify-content-end align-items-center">
                    <Button className={`${styles.detailButton} mr-2`} onClick={() => {
                        router.push({ pathname: 'requestDetail', query: { type: 'like' } })
                    }}>상세정보 보기</Button>

                    <Button className={`${styles.requestButton} mr-2`}>연락처 요청</Button>
                </div>)}
            {!profile.type && (<div className="col-4 d-flex justify-content-center align-items-center">
                <Button className={styles.cardBtn} > 상세정보 보기</Button>
                <Button className={styles.cardBtn2} >연락처 요청</Button>
            </div>)} */}
        </div>
        {/* <div className="row" style={{ paddingTop: 30 }}>
            <p className={styles.paraTwo}>
                {profile.tagLine}
            </p>
        </div>
        <hr className="mb-0 w-100" />
        <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
            {profile.details.map((detail, i) => {
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
            <div className={`${styles.topMenu} col-6 d-flex justify-content-end align-items-center`} style={{ lineHeight: "36px", fontWeight: "400" }}>
                더보기
                <Image src={DR} alt="Down Icon" />
            </div>
        </div> */}
    </div >

    )
}
export default ProfileSearchCard