/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../../styles/Registration.module.css'
import { Divider, Button, Tabs, Progress, Radio, Upload } from 'antd';
import stylessec from '../../styles/searchdetail.module.css';
import camera from '../../public/camera.svg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ClientStepThird() {
    const [imageUrl, setImageUrl] = useState(null)
    const { TabPane } = Tabs;
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation();
    function getBase64(img: any, callback: any) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file: any) {
        let message: any;
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const dummyRequest = ({ onSuccess }: any) => {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };

    const handleChange = (info: any) => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (imgUrl: any) => {
                setLoading(false)
                setImageUrl(imgUrl)
            });
        }
    };


    return (
        <div className="jumbotron">
            <Divider className="p-0 m-0" />
            <div className="mainContainercmn pt-5 pb-5 h-100">
                <div className="col4-cmn-cntr-800">
                    <h1 style={{ fontWeight: "bold" }}>프로필을 등록하세요</h1>
                </div>
                <div className={`${styles.maindiv} col4-cmn-cntr-800`}>
                    <div className="pb-5 pt-5">
                        <div className="row d-flex justify-content-center text-align-center">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatarUpload"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                customRequest={dummyRequest}
                                onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: '50%' }} /> : (<div>
                                    <Image src={camera} alt="Profile Image" width={38} height={30} />
                                </div>)}
                            </Upload>
                        </div>
                        <h2 className="pb-5 pt-3 d-flex justify-content-center text-align-center">이모아</h2>
                        <Tabs defaultActiveKey={"3"} className="registerSteps" centered>
                            <TabPane className="row-3" key={"1"} tab={<span className={styles.tabHeading} >STEP 1</span>} />
                            <TabPane className="row-3" key={"2"} tab={<span className={styles.tabHeading} >STEP 2</span>} />
                            <TabPane className="row-3" key={"3"} tab={<span className={styles.tabHeading} >STEP 3</span>} />
                        </Tabs>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            66%
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            필수항목
                        </div>
                    </div>
                    <div className="">
                        <Progress percent={66} showInfo={false} strokeColor="#00d6e3" />
                    </div>
                    <div className="pt-3 pb-2">
                        <label style={{
                            fontFamily: "SpoqaHanSans",
                            fontWeight: "bold",
                            fontSize: 20
                        }}>희망 일자</label>
                    </div>
                    <div className="pb-2">
                        <Radio.Group defaultValue="3" className="w-100">
                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>주중</Radio.Button>
                            <Radio.Button value="2" className={stylessec.radiobtntxt2}>주말</Radio.Button>
                            <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", color: "#00D6E3", fontWeight: "bold" }}>주중/주말</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="pt-3 pb-2">
                        <label style={{
                            fontFamily: "SpoqaHanSans",
                            fontWeight: "bold",
                            fontSize: 20
                        }}>희망 시간</label>
                    </div>
                    <div className="pb-2">
                        <Radio.Group defaultValue="3" className="w-100">
                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>오전</Radio.Button>
                            <Radio.Button value="2" className={stylessec.radiobtntxt2}>오후</Radio.Button>
                            <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", color: "#00D6E3", fontWeight: "bold" }}>저녁</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="pt-3 pb-2">
                        <label style={{
                            fontFamily: "SpoqaHanSans",
                            fontWeight: "bold",
                            fontSize: 20
                        }}>희망 프로젝트 형태는 무엇인가요?</label>
                    </div>
                    <div className="pb-2">
                        <Radio.Group defaultValue="3" className="w-100">
                            <Radio.Button value="1" className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                <span className={stylessec.firsttext}>단기 프로젝트</span> <br />
                                <span className={stylessec.sectext}>3개월 미만</span>
                            </Radio.Button>
                            <Radio.Button value="3" className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", fontWeight: "bold" }}>
                                <span className={stylessec.firsttext} style={{ color: "#00D6E3" }}>장기 프로젝트</span> <br />
                                <span className={stylessec.sectext} style={{ color: "#00D6E3" }}>3개월 이상</span>
                            </Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="pt-3 pb-2">
                        <label style={{
                            fontFamily: "SpoqaHanSans",
                            fontWeight: "bold",
                            fontSize: 20
                        }}>4대보험이 가능하신가요?</label>
                    </div>
                    <div className="pb-2">
                        <Radio.Group value="2" className="w-100">
                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>4대보험 가능</Radio.Button>
                            <Radio.Button value="2" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%", color: "#00D6E3", fontWeight: "bold" }}>4대보험 불가능</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="pt-3 pb-2">
                        <label style={{
                            fontFamily: "SpoqaHanSans",
                            fontWeight: "bold",
                            fontSize: 20
                        }}>희망 근무 형태는 무엇인가요?</label>
                    </div>
                    <div className="pb-2">
                        <Radio.Group value="3" className="w-100">
                            <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>상주</Radio.Button>
                            <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%", color: "#00D6E3", fontWeight: "bold" }}>재택</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="row pt-5 d-flex justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
                        <div className="col-4">
                            <Button className={`${styles.commontbtn}`} style={{ border: '1px solid #00D6E3', width: '100%', height: 68, borderRadius: 20 }} >
                                이전
                            </Button>
                        </div>
                        <div className="col-4">
                            <Button className={`${styles.commontbtn2}`} style={{ width: '100%', height: 68, borderRadius: 20 }} >
                                다음
                            </Button>
                        </div>
                    </div>
                </div >
            </div>
        </div >

    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});


export default ClientStepThird