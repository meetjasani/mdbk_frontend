import React from 'react';
import styles from '../styles/components/Rating.module.css'
import { Button } from 'antd';

function ActivityInfo({ type }: any) {
    return (
        <div className="profrate-inner">
            <div className="row">
                <div className="col-md-12 proinr-title">기본정보</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr- proinr-cmn">희망 일자</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">주중</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">희망 시간</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">저녁</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">희망 프로젝트 형태</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">장기 프로젝트(3개월 초과)</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">4대 보험</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">가능</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">희망 근무 형태</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">재택</div>
            </div>

            {type === 'accepted' &&
                <div className="row d-flex justify-content-center align-items-center pt-5 pb-5 bg-white">
                    <Button className={`${styles.acceptedButton} col-8`} >수락됨</Button>
                </div>}
            {type === 'sentPending' &&
                <div className="row d-flex justify-content-center align-items-center pt-5 pb-5 bg-white">
                    <Button className={`${styles.waitingButton} col-8`} >수락됨</Button>
                </div>}
            {type === 'rejected' &&
                <div className="row d-flex justify-content-center align-items-center pt-5 pb-5 bg-white">
                    <Button className={`${styles.rejectedButton} col-8`} >수락됨</Button>
                </div>}
            {(type === 'pending' || type === 'like') && <div className="row d-flex justify-content-center align-items-center pt-5 pb-5 .bg-white">
                <Button className={styles.rejectButton} > 상세정보 보기</Button>
                <Button className={styles.acceptButton} >1000캐시로 수락하기</Button>
            </div>}
            {type === 'waiting' && <div className="row d-flex justify-content-center align-items-center pt-5 pb-5 .bg-white">
                <Button className={styles.rejectButton} > 거절하기</Button>
                <Button className={styles.acceptButton} >수락하기</Button>
            </div>}
        </div>
    )
}
export default ActivityInfo