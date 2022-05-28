/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import styles from '../styles/Request.module.css'
import React from 'react';
import { Rating, WorkExp, ActivityInfo, BlueProfileSideCharacter } from "../components"
import { Divider, Button } from 'antd';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import stylesforth from '../styles/clientProfile.module.css';
import { GetServerSideProps } from 'next'

function requestDetail() {
    const router = useRouter()
    const { type } = router.query
    const { t } = useTranslation();
    return (
        <div className="jumbotron">
            <Head>
                <title>받은 요청</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Divider className="p-0 m-0" />
            <div className={`${styles.mainContainer} pt-5 pb-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <h1 className={`${styles.heading}`}>{type === 'waiting' ? '받은 요청' : '보낸 요청'}</h1>
                    <div className="">
                        <BlueProfileSideCharacter />
                        <div className="blue-profile-btm">
                            <Rating type={type} />

                            {type === 'waiting' ? '' : <>
                                <div className="profrate-inner">
                                    <div className="row">
                                        <div className="col-md-12 proinr-title">기업정보</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">기업명</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">뉴비즈스타트</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">연락처</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">02-1829-9999</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">기업관련직종</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">개발</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">기업관련분야</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">IT/웹개발</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">지역</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">서울시 강남구</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">사업자등록번호</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">0000-00-00000</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">설립연도</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">2000년</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">대표자명</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">김준영</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">직원수</div>
                                        <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">10명</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="profrate-inner-devider"></div>
                                        </div>
                                    </div>
                                </div>
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
                            </>}
                            <ActivityInfo type={type} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default requestDetail