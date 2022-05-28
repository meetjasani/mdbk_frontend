/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/components/Searchcard.module.css'
import { Button } from 'antd';

function SearchCard() {
    const labels = ['직종', '분야', '지역', '희망일자', '희망시간', '희망형태',
        '대보험', '근무형태']
    const val = ['개발', 'IT/웹개발/웹서비스기획', '서울시 마포구, 서울시 양천구', '주중/주말', '저녁', '단기 프로젝트', '필요', '상주']
    return (

        <div className="mt-2 mb-2 pb-5">
            {[...Array(3)].map((i, index) => {
                return (<div className="row" key={index}>
                    <div className={`col-6 offset-3`}>
                        <div className={`${styles.div1}`}>
                            <div className="row" style={{ padding: "20px 20px 20px 20px" }}>
                                <div className="col-8" >
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="/Group6.svg" />
                                        </div>
                                        <div className="col-10 d-flex align-items-start">
                                            <div className="row">
                                                <div className={`${styles.card1Text} col-12 d-block justify-content-start align-items-start`}>
                                                    개발왕
                                                    <span className={`${styles.card1Text2} col-6`}>
                                                        ∙ 경력 9년
                                                        <img src="/heart.svg" className="p-2" />
                                                    </span>
                                                </div>
                                                <div className={`${styles.lastSeen} col-6`}>
                                                    1시간 전
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <Button className={styles.cardBtn} > 상세정보 보기</Button>
                                    <Button className={styles.cardBtn2} >연락처 요청</Button>
                                </div>
                            </div>
                            <div className="row" style={{ paddingTop: 30 }}>
                                <p className={styles.paraTwo}>안녕하세요. 경력 9년차인 개발자입니다! 함께 열심히 일하실 분을 애타게 찾고 있습니다 :)  </p>
                            </div>
                            <hr className="mb-0 w-100" />
                            <div className="row" style={{ padding: "20px 0px 0px 20px" }}>
                                {labels && labels.map((btn, i) => <Button key={btn} className={styles.buttonTextSec}>
                                    <span style={{ fontWeight: 700 }}>{`${btn}`}</span>:<span>{val[i]}</span>
                                </Button>)}
                            </div>
                            <hr className="mt-4 mb-0" />
                            <div className="row" style={{ padding: "20px 20px 20px 20px" }}>
                                <div className="col-6">
                                    <span className={styles.topMenu} style={{ lineHeight: "36px" }}>
                                        경력
                                    </span>
                                    <span className={styles.topMenu} style={{ lineHeight: "36px", color: "#000000", marginLeft: 20 }}>
                                        퍼스트바이크 대리 1년
                                    </span>
                                </div>
                                <div className={`${styles.topMenu} col-6 d-flex justify-content-end align-items-center`} style={{ lineHeight: "36px" }}>
                                    더보기 <img src="/downRectangle.svg" className={"m-1"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div >

    )
}
export default SearchCard