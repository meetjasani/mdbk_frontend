
import styles from '../styles/components/Blueprofile.module.css';
import stylessec from '../styles/components/ReqConInfo.module.css';
import stylesforth from '../styles/clientProfile.module.css';
import React, { useState } from 'react';
import { GetServerSideProps } from 'next'
import { Button, Input } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
function SideCharacBeforePayment() {
    const { TextArea } = Input;
    const [detailedVisible, setDetailedVisible] = useState(false)
    return (
        <>

            <div className="clientprofile-2 mainContainercmn">
                {/* <hr /> */}
                <div className="cmn-profile-section col4-cmn-cntr-800" style={{ paddingTop: "50px", paddingBottom: "40px" }}>
                    <div style={{ float: "left", width: "100%" }}>
                        <span className={`${styles.heading}`} style={{ float: "left" }}>부캐 프로필</span>
                    </div>
                </div>
                <div className="cmn-profile-section col4-cmn-cntr-800 box-section">
                    <div className={`${stylesforth.userprofilesectop}`} style={{ padding: "30px 30px 30px 30px" }}>
                        <div className="cmn-profile-img mt-4">
                            <div className="d-flex justify-content-center">
                                <img src="/grayuser.svg" alt="User Image" />
                            </div>
                            <div className={`d-flex justify-content-center align-items-center`} style={{ paddingTop: "10px" }}>
                                <span className={styles.name} style={{ color: "#16181C" }}>개발왕</span>
                                <span>
                                    <img src="/heart.svg" className={styles.heartimg} alt="Heart Icon" />
                                </span>
                                <span className={styles.name} style={{ fontSize: "14px", paddingLeft: "10px", color: "#9A9A9A" }}>
                                    32
                                </span>

                            </div>
                        </div>

                        <div className={`${stylesforth.p} d-flex justify-content-center align-items-center`}>안녕하세요. 열정 개발자 이모아입니다!
                        </div>
                        <div className="profrate-inner-devider mb-1"></div>
                    </div>


                    <div className="blue-profile-btm with-no-shadow pt-0">
                        <div className="profrate-inner">
                            <div className="row">
                                <div className="col-md-12 proinr-title">기본정보</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">연락처</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">010-2399-2999</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">직종</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">개발</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">분야</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">IT/웹개발</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">지역</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">서울 마포구, 서울 양천구</div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profrate-inner-devider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="profrate-inner">
                            <div className="row">
                                <div className="col-md-12 proinr-title">경력정보</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">총 경력</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">9년 10개월</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">경력 1</div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">당근마켓</div>
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">2012.02 - 2020.02(8년)</div>
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">대리</div>
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">IT/웹개발</div>
                                        <div className="col-md-12">
                                            <div className="profrate-inner-devider"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">경력 2</div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">아인소프트</div>
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">2010.04 - 2012.02(1년 10개월)</div>
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">사원</div>
                                        <div className="col-md-12 alnright proinr-right proinr-cmn">IT/웹개발</div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="profrate-inner-devider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="profrate-inner">
                            <div className="row">
                                <div className="col-md-12 proinr-title">활동정보</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">희망 일자</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">주중</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">희망 시간</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">저녁</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">희망 프로젝트 형태</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">장기 프로젝트(3개월 초과)</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">4대 보험</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">가능</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 alnleft proinr-left proinr-cmn">희망 근무 형태</div>
                                <div className="col-md-6 alnright proinr-right proinr-cmn">재택</div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profrate-inner-devider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="profrate-inner">
                            <div className="row">
                                <div className="col-md-12 proinr-title">링크</div>
                            </div>
                            <div className={stylessec.flw} style={{ paddingTop: "20px" }}>
                                <ul className="proflist">
                                    <li>
                                        <Button>
                                            <img src='home.svg' />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <img src='Fb.svg' />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <img src='insta.svg' />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <img src='pc.svg' />
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profrate-inner-devider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="profrate-inner">
                            <div className="row">
                                <div className="col-md-12 proinr-title">소개 이미지</div>
                            </div>
                            <div className="row imgupload-inner">
                                <img src="/g1.svg" className="col-4" />
                                <img src="/g2.svg" className="col-4" />
                                <img src="/g3.svg" className="col-4" />
                            </div>
                        </div>
                        <div className="profrate-inner pt-4 pb-2">
                            <Button className={stylesforth.lstbtn} style={{ width: "60%" }}>더보기</Button>
                        </div>
                        <div className="profrate-inner-devider"></div>
                        <div className="profrate-inner mb-4 pt-2">
                            <Button disabled className={stylesforth.lstbtn} style={{ width: "60%" }}>요청완료</Button>
                        </div>


                    </div>







                    {/* 
                    <div className="cmn-profile-sec-btm">
                        <hr />
                        <div className={stylessec.flw} style={{ boxSizing: "border-box", padding: "10px 10px 10px 10px" }}>
                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.heading}`}>
                                    기본정보
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    연락처
                                </span>
                                <span className={stylesforth.labelright}>
                                    010-2399-2999
                                </span>
                            </div>
                            <div className={stylessec.flw}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    직종
                                </span>
                                <span className={stylesforth.labelright}>
                                    개발
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    분야
                                </span>
                                <span className={stylesforth.labelright}>
                                    IT/웹개발
                                </span>
                            </div>

                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    지역
                                </span>
                                <span className={stylesforth.labelright}>
                                    서울 마포구, 서울 양천구
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="cmn-profile-sec-btm">
                        <hr />
                        <div className={stylessec.flw} style={{ boxSizing: "border-box", padding: "10px 10px 10px 10px" }}>
                            <div className={stylessec.flw}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.heading}`}>
                                    경력정보
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    총 경력
                                </span>
                                <span className={stylesforth.labelright}>
                                    9년 10개월
                                </span>
                            </div>
                            <div className={stylessec.flw}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    경력 1
                                </span>
                                <span className={stylesforth.labelright}>
                                    당근마켓
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={stylesforth.labelright}>
                                    2012.02 - 2020.02(8년)
                                </span>
                            </div>

                            <div className={stylessec.flw}>
                                <span className={stylesforth.labelright}>
                                    대리
                                </span>
                            </div>
                            <div className={stylessec.flw}>
                                <span className={stylesforth.labelright}>
                                    IT/웹개발
                                </span>
                            </div>
                            <hr style={{ float: "right", width: "50%" }} />
                            <div className={stylessec.flw}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    경력 2
                                </span>
                                <span className={stylesforth.labelright}>
                                    아인소프트
                                </span>
                            </div>
                            <div className={stylessec.flw} >

                                <span className={stylesforth.labelright}>
                                    2010.04 - 2012.02(1년 10개월)
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={stylesforth.labelright}>
                                    사원
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={stylesforth.labelright}>
                                    IT/웹개발
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="cmn-profile-sec-btm">
                        <hr />
                        <div className={stylessec.flw} style={{ boxSizing: "border-box", padding: "10px 10px 10px 10px" }}>
                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.heading}`}>
                                    활동정보
                                </span>
                            </div>
                            <div className={stylessec.flw}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    희망 일자
                                </span>
                                <span className={stylesforth.labelright}>
                                    주중
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    희망 시간
                                </span>
                                <span className={stylesforth.labelright}>
                                    저녁
                                </span>
                            </div>
                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    희망 프로젝트 형태
                                </span>
                                <span className={stylesforth.labelright}>
                                    장기 프로젝트(3개월 초과)
                                </span>
                            </div>

                            <div className={stylessec.flw} >
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    4대 보험
                                </span>
                                <span className={stylesforth.labelright}>
                                    가능
                                </span>
                            </div>
                            <div className={stylessec.flw}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.label}`}>
                                    희망 근무 형태
                                </span>
                                <span className={stylesforth.labelright}>
                                    재택
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="cmn-profile-sec-btm">
                        <hr />
                        <div className={stylessec.flw} style={{ boxSizing: "border-box", padding: "10px 10px 10px 10px" }}>
                            <div className={stylessec.flw} style={{ height: "30px" }}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.heading}`}>
                                    링크
                                </span>
                            </div>
                            <div className={stylessec.flw} style={{ paddingTop: "20px" }}>
                                <Button style={{ height: "64px", borderRadius: "10px", width: "23%" }}>
                                    <img src='home.svg' />
                                </Button>
                                <Button style={{ height: "64px", borderRadius: "10px", width: "23%", marginLeft: "10px" }}>
                                    <img src='Fb.svg' />
                                </Button>
                                <Button style={{ height: "64px", borderRadius: "10px", width: "23%", marginLeft: "10px" }}>
                                    <img src='insta.svg' />
                                </Button>
                                <Button style={{ height: "64px", borderRadius: "10px", width: "23%", marginLeft: "10px" }}>
                                    <img src='pc.svg' />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="cmn-profile-sec-btm">
                        <hr />
                        <div className={stylessec.flw} style={{ boxSizing: "border-box", padding: "10px 10px 10px 10px" }}>
                            <div className={stylessec.flw} style={{ height: "30px" }}>
                                <span className={`${stylessec.modaltxt} ${stylesforth.heading}`}>
                                    소개 이미지
                                </span>
                            </div>
                            <div className={stylessec.flw} style={{ paddingTop: "20px" }}>
                                <img src="/g1.svg" style={{ width: "33%" }} />
                                <img src="/g2.svg" style={{ width: "33%", paddingLeft: "5px" }} />
                                <img src="/g3.svg" style={{ width: "33%", paddingLeft: "5px" }} />

                            </div>

                        </div>
                        <div className="cmn-profile-sec-btm">
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button className={stylesforth.lstbtn} style={{ width: "60%" }}>더보기</Button>
                            </div>
                            <hr style={{ marginTop: "40px", marginBottom: "40px" }} />
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button disabled className={stylesforth.lstbtn} style={{ width: "60%" }}>요청완료</Button>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});
export default SideCharacBeforePayment