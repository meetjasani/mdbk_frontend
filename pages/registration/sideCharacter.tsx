
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../../styles/Registration.module.css'
import { Tabs, Upload } from 'antd';
import camera from '../../public/camera.svg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { ClientStep1, SideCharacterStep2, ClientStep3 } from '../../components'
import { registerSideCharacter } from '../../redux/actions/SideCharacter/sideCharacterAction'
import { useDispatch, useSelector } from 'react-redux';

function SideCharacter() {
    const router = useRouter()
    const { type } = router.query;
    const { t } = useTranslation();
    const [imageUrl, setImageUrl] = useState(null)
    const [form1Data, setForm1Data] = useState<any>(null)
    const [form2Data, setForm2Data] = useState<any>(null)
    const [form3Data, setForm3Data] = useState<any>(null)
    const { TabPane } = Tabs;
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState<any>('1');
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    const changeTab = (activeKey: any) => {
        setActiveTab(activeKey)
    };

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

    const dispatch = useDispatch()
    const onFormFinish = () => {
        const sideCharacter = {
            nickName: form1Data.values.nickName,
            introduction: form1Data.values.introduction,
            phoneNumber: form1Data.values.phoneNumber,
            profession: form1Data.values.profession,
            homepageLink: form1Data.values.homepageLink,
            facebookLink: form1Data.facebookLink,
            instagramLink: form1Data.values.instagramLink,
            otherLink: form1Data.values.otherLink,
            isExperienced: form2Data.isExperienced,
            desiredDate: form3Data.desiredDate,
            desiredTime: form3Data.desiredTime,
            desiredProjectType: form3Data.desiredProjectType,
            insuranceStatus: form3Data.insuranceStatus,
            desiredWorkType: form3Data.desiredWorkType,
            fieldName: form1Data.arr,
            portfolio: form1Data.fileList,
            experience: {
                companyName: form2Data.companyName,
                position: form2Data.position,
                profession: form2Data.profession,
                empStartDate: form2Data.empStartDate,
                empEndDate: form2Data.empEndDate
            },

        }
        dispatch(registerSideCharacter(sideCharacter))
    }

    return (
        <div className="jumbotron">
            <Head>
                <title>받은 요청</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${styles.mainContainer} pt-5 pb-5 h-100`}>
                <div className="col4-cmn-cntr-800">
                    <h1 className={`${styles.heading1}`}>{type === 'client' ? t('clientProfile.clientProfileStep1.enterProfile') : '부캐정보를 등록하세요'}</h1>
                </div>
                <div className={`${styles.maindiv} col4-cmn-cntr-800 justify-content-center text-align-center`}>
                    <div className="registrationinner">
                        <div className="pb-5 pt-5">

                            <div className="row d-flex justify-content-center text-align-center">

                                <Upload
                                    name="img"
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
                            <Tabs activeKey={activeTab} onChange={changeTab} className="registerSteps" centered>
                                <TabPane className="row-3" key={1} tab={<span className={styles.tabHeading} >STEP 1</span>} >
                                    <ClientStep1 onFinish={(values: any) => {
                                        changeTab('2')
                                        setForm1Data(values)
                                    }} />
                                </TabPane>
                                <TabPane className="row-3" key={2} tab={<span className={styles.tabHeading} >STEP 2</span>} >
                                    <SideCharacterStep2 onFinish={(values: any) => {
                                        changeTab('3')
                                        setForm2Data(values)
                                    }} onPreviousBtn={() => {
                                        changeTab('1')
                                    }} />
                                </TabPane>

                                <TabPane className="row-3" key={3} tab={<span className={styles.tabHeading} >STEP 3</span>} >
                                    <ClientStep3 onFinish={(values: any) => {
                                        setForm3Data(values)
                                        onFormFinish()

                                    }} onPreviousBtn={() => {
                                        changeTab('2')
                                    }} />
                                </TabPane>
                            </Tabs>
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


export default SideCharacter