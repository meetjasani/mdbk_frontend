/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/components/Blueprofile.module.css';
import stylessec from '../styles/components/ReqConInfo.module.css';
import stylesforth from '../styles/clientProfile.module.css';
import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

function ClientProfileSec() {
    const { t } = useTranslation();
    const router = useRouter()
    const { type } = router.query;

    return (
        <>

            <div className="clientprofile-2 mainContainercmn">
                <div className="cmn-profile-section col4-cmn-cntr-800" style={{ paddingTop: "50px", paddingBottom: "40px" }}>
                    <div style={{ float: "left", width: "100%" }}>

                        <span className={`${styles.heading}`} style={{ float: "left" }}>나의 프로필</span>
                        <Button className={stylesforth.topbtn}>
                            프로필 수정
                        </Button>
                    </div>

                </div>
                <div className="cmn-profile-section col4-cmn-cntr-800 box-section">
                    <div className={`${stylesforth.userprofilesectop}`} style={{ padding: "30px 30px 30px 30px" }}>
                        <div className="cmn-profile-img">
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
                        <div className={`${stylesforth.h2} d-flex justify-content-center align-items-center`}> 닉네임 열정맨</div>
                        <div className={`${stylesforth.p} d-flex justify-content-center align-items-center`}> 안녕하세요. 뉴비즈스타트입니다.</div>
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
                        {type !== "individual" && type !== "requested" ? <>
                            <div className="profrate-inner">
                                <div className="row">
                                    <div className="col-md-12 proinr-title">기업정보</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">기업명</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">뉴비즈스타트</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">연락처</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">02-1829-9999</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">기업관련직종</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">개발</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">기업관련분야</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">IT/웹개발</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">지역</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">서울시 강남구</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">사업자등록번호</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">0000-00-00000</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">설립연도</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">2000년</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">대표자명</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">김준영</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">직원수</div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">10명</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="profrate-inner-devider"></div>
                                    </div>
                                </div>
                            </div>
                        </> : ''}
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
                        {type !== "individual" && type !== "requested" ? <>
                            <div className="profrate-inner">
                                <div className="row">
                                    <div className="col-md-12 proinr-title">진행 중인 프로젝트</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 alnleft proinr-left proinr-cmn">
                                        <Button className={stylesforth.twobtn} >캐릭터 삽화 디자이너</Button>
                                    </div>
                                    <div className="col-md-6 alnright proinr-right proinr-cmn">
                                        <Button className={stylesforth.twobtn}>UX/UI 디자이너</Button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="profrate-inner-devider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="profrate-inner">
                                <div className="row">
                                    <div className="col-md-12 proinr-title">기업 소개</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 alnleft proinr-left proinr-cmn">IT 스타트업 앱/웹 전문으로 하고 있는 개발사입니다.</div>
                                    <div className="col-md-12 alnleft proinr-left proinr-cmn">스타트업 개발사</div>
                                    <div className="col-md-12 alnleft proinr-left proinr-cmn">교육 사업</div>
                                    <div className="col-md-12 alnleft proinr-left proinr-cmn">신규 서비스 론칭</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="profrate-inner-devider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="profrate-inner">
                                <div className="row">
                                    <div className="col-md-12 proinr-title">태그</div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 alnleft proinr-left proinr-cmn">
                                        <Button className={stylesforth.graybtnstyl}>#기획</Button>
                                        <Button className={stylesforth.graybtnstyl} >#서비스기획</Button>
                                        <Button className={stylesforth.graybtnstyl} >#UX/UI기획</Button>
                                        <Button className={stylesforth.graybtnstyl} >#UX/UI디자인</Button>
                                        <Button className={stylesforth.graybtnstyl}>#UI디자인</Button>
                                        <Button className={stylesforth.graybtnstyl} >#UI디자인</Button>
                                        <Button className={stylesforth.graybtnstyl}>#UX디자인</Button>
                                        <Button className={stylesforth.graybtnstyl}>#기획</Button>
                                        <Button className={stylesforth.graybtnstyl}>#서비스기획</Button>
                                        <Button className={stylesforth.graybtnstyl} >#UX/UI기획</Button>
                                        <Button className={stylesforth.graybtnstyl} >#UX/UI디자인</Button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="profrate-inner-devider"></div>
                                    </div>
                                </div>
                            </div>
                        </> : ""}
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
                        <div className='profrate-inner mt-5 mb-4'>
                            <Button className={stylesforth.lstbtn}>더보기</Button>
                            {(type === "sideCharac" || type === "individual" || type === "requested") ?
                                <> <hr className="mt-5 mb-5" />
                                    <Button className={stylesforth.lstbtn} style={type === "requested" ? { background: "#F4F4F4", borderRadius: "100px", color: "#9A9A9A" } : { background: "#00D6E3", borderRadius: "20px", color: "white" }}>인터뷰 요청하기</Button>
                                </> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default ClientProfileSec