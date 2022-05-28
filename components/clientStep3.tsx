
import React, { useState } from 'react';
import styles from '../styles/Registration.module.css'
import { Button, Progress, Radio, Form } from 'antd';
import stylessec from '../styles/searchdetail.module.css';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


function ClientStep3({ onFinish, onPreviousBtn }: any) {
    const { t } = useTranslation();
    const [desiredDate, setDesiredDate] = useState('weekdays-weekend');
    const [desiredTime, setDesiredTime] = useState('evening');
    const [desiredProjectType, setDesiredProjectType] = useState('long-term');
    const [insuranceStatus, setInsuranceStatus] = useState('unavailable');
    const [desiredWorkType, setDesiredWorkType] = useState('workfrom-home')
    return (
        <Form name="step3" onFinish={(values) => {
            onFinish(values)
            console.log("step3", values)
        }}>
            <div className="row pt-5">
                <div className="col-6">
                    66%
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <span style={{ color: "red" }}>*</span>{t('clientProfile.requiredField')}
                </div>
            </div>
            <div className="">
                <Progress percent={66} showInfo={false} strokeColor="#00d6e3" />
            </div>
            <div className="pt-3 pb-2">
                <span style={{
                    fontFamily: "SpoqaHanSansbold",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep3.dateLabel')}<span style={{ color: "red" }}>*</span></span>
            </div>
            <div className="pb-2">
                <Form.Item name="desiredDate" initialValue='weekdays-weekend'>
                    <Radio.Group defaultValue='weekdays-weekend' value={desiredDate} onChange={(e) => { setDesiredDate(e.target.value) }} name="desiredDate" className="w-100">
                        <Radio.Button value='weekdays' name="desiredDate" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('clientProfile.clientProfileStep3.weekdaysLabel')}</Radio.Button>
                        <Radio.Button value='weekend' name="desiredDate" className={stylessec.radiobtntxt2}>{t('clientProfile.clientProfileStep3.weekendLabel')}</Radio.Button>
                        <Radio.Button value='weekdays-weekend' name="desiredDate" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('clientProfile.clientProfileStep3.weekday/end')}</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </div>
            <div className="pt-3 pb-2">
                <span style={{
                    fontFamily: "SpoqaHanSansbold",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep3.timeLabel')}<span style={{ color: "red" }}>*</span></span>
            </div>
            <div className="pb-2">
                <Form.Item name="desiredTime" initialValue='evening'>
                    <Radio.Group defaultValue='evening' value={desiredTime} onChange={(e) => { setDesiredTime(e.target.value) }} name="desiredTime" className="w-100">
                        <Radio.Button value='morning' name="desiredTime" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('clientProfile.clientProfileStep3.morningLabel')}</Radio.Button>
                        <Radio.Button value='afternoon' name="desiredTime" className={stylessec.radiobtntxt2}>{t('clientProfile.clientProfileStep3.noonLabel')}</Radio.Button>
                        <Radio.Button value='evening' name="desiredTime" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('clientProfile.clientProfileStep3.eveLabel')}</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </div>
            <div className="pt-3 pb-2">
                <span style={{
                    fontFamily: "SpoqaHanSansbold",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep3.projectLabel')}<span style={{ color: "red" }}>*</span></span>
            </div>
            <div className="pb-2">
                <Form.Item name="desiredProjectType" initialValue='long-term'>
                    <Radio.Group defaultValue='long-term' value={desiredProjectType} onChange={(e) => { setDesiredProjectType(e.target.value) }} name="desiredProjectType" className="w-100">
                        <Radio.Button value={'short-term'} name="desiredProjectType" className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                            <p>
                                <span className={stylessec.firsttext}>{t('clientProfile.clientProfileStep3.shortTermProject')}</span> <br />
                                <span className={stylessec.sectext}>{t('clientProfile.clientProfileStep3.less3Mon')}</span>
                            </p>

                        </Radio.Button>
                        <Radio.Button value={'long-term'} name="desiredProjectType" className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", fontWeight: "bold" }}>
                            <p>
                                <span className={stylessec.firsttext} >{t('clientProfile.clientProfileStep3.longTermLabel')}</span> <br />
                                <span className={stylessec.sectext}>{t('clientProfile.clientProfileStep3.more3month')}</span>
                            </p>
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </div>
            <div className="pt-3 pb-2">
                <span style={{
                    fontFamily: "SpoqaHanSansbold",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep3.insuranceLabel')}<span style={{ color: "red" }}>*</span></span>
            </div>
            <div className="pb-2">
                <Form.Item name="insuranceStatus" initialValue='unavailable'>
                    <Radio.Group defaultValue='unavailable' value={insuranceStatus} name="insuranceStatus" onChange={(e) => {
                        setInsuranceStatus(e.target.value)
                    }} className="w-100">
                        <Radio.Button value='available' name="insuranceStatus" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>{t('clientProfile.clientProfileStep3.avilbleLabel')}</Radio.Button>
                        <Radio.Button value='unavailable' name="insuranceStatus" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%" }}>{t('clientProfile.clientProfileStep3.unavailable')}</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </div>
            <div className="pt-3 pb-2">
                <span style={{
                    fontFamily: "SpoqaHanSansbold",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep3.workTypeLabel')}<span style={{ color: "red" }}>*</span></span>
            </div>
            <div className="pb-2">
                <Form.Item name="desiredWorkType" initialValue='workfrom-home'>
                    <Radio.Group defaultValue='workfrom-home' value={desiredWorkType} name="desiredWorkType" onChange={(e) => { setDesiredWorkType(e.target.value) }} className="w-100">
                        <Radio.Button value='workfrom-office' name="desiredWorkType" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>{t('clientProfile.clientProfileStep3.fromOfc')}</Radio.Button>
                        <Radio.Button value='workfrom-home' name="desiredWorkType" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%" }}>{t('clientProfile.clientProfileStep3.workHome')}</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </div>
            <div className="row pt-5 d-flex justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
                <div className="col-4">
                    <Button onClick={() => { onPreviousBtn('2') }} className={`${styles.commontbtn}`} style={{ border: '1px solid #00D6E3', width: '100%', height: 68, borderRadius: 20 }} >
                        {t('clientProfile.clientProfileStep2.prevBtn')}
                    </Button>
                </div>
                <div className="col-4">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={`${styles.commontbtn2}`} style={{ width: '100%', height: 68, borderRadius: 20 }} >
                        {t('clientProfile.clientProfileStep3.cmpltBtn')}
                    </Button>
                </div>
            </div>
        </Form>
    )
}

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common']))
//     }
// });

export default ClientStep3