/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/components/Blueprofile.module.css';
import stylessec from '../styles/components/ReqConInfo.module.css';
import stylesforth from '../styles/clientProfile.module.css';
import React, { useState } from 'react';
import { WorkExp } from "../components"
import { Upload, Button, Modal, Input } from 'antd';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next'

function ClientProfile() {
    const router = useRouter()
    const { type } = router.query
    const { t } = useTranslation();
    const [detailedVisible, setDetailedVisible] = useState(false)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [fileList, setFileList] = useState<any>([
        {
            uid: '1',
            name: 'image.png',
            status: 'done',
            url: '/g2.svg',
        },
        {
            uid: '2',
            name: 'image.png',
            status: 'done',
            url: '/g2.svg',
        },
        {
            uid: '3',
            name: 'image.png',
            status: 'done',
            url: '/g3.svg',
        },
        {
            uid: '4',
            name: 'image.png',
            status: 'done',
            url: '/g3.svg',
        },
    ])

    const handlePreview = (file: any) => {
        setPreviewVisible(true)
        setPreviewImage(file.url)
    };
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
                            <div className={`d-flex justify-content-center align-items-center`}>
                                <span className={styles.name} style={{ color: "#16181C" }}>개발왕</span>
                                <span>
                                    <img src="/heart.svg" className={styles.heartimg} alt="Heart Icon" />
                                </span>
                                <span className={styles.name} style={{ fontSize: "14px", paddingLeft: "10px", color: "#9A9A9A" }}>
                                    32
                                </span>

                            </div>
                        </div>
                        <div className={`${stylesforth.p} d-flex justify-content-center align-items-center`}>  안녕하세요. 뉴비즈스타트입니다.</div>
                        <div className="profrate-inner-devider mb-1"></div>

                    </div>
                    <div className="blue-profile-btm with-no-shadow pt-0">
                        <div className="profrate-inner">
                            <div className="row">
                                <div className="col-md-12 proinr-title">기본정보</div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">연락처</div>
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
                        {type === "sideCharcater" ? <WorkExp /> : ''}
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
                            <div className="client-profile-images">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="introUpload"
                                    fileList={fileList}
                                    showUploadList={true}
                                    onPreview={handlePreview}
                                >
                                    {/* {fileList && <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: 20 }} />} */}
                                </Upload>
                            </div>
                        </div>
                        <div className='profrate-inner mt-5 mb-4'>
                            <Button className={stylesforth.lstbtn} onClick={() => { setDetailedVisible(!detailedVisible) }}>더보기</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                visible={previewVisible}
                footer={null}
                onCancel={() => setPreviewVisible(!previewVisible)}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});

export default ClientProfile