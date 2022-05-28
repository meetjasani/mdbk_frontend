/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Button, Progress, Form, Input, Radio, DatePicker, Space } from 'antd';
import stylessec from '../styles/searchdetail.module.css';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { CaretDownOutlined } from '@ant-design/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
function SideCharacterStep2({ onFinish, onPreviousBtn }: any) {
    const [disabled, setDisabled] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [radioIsExperienced, setRadioIsExperienced] = useState("yes");
    const [endDate, setEndDate] = useState()
    const [form] = Form.useForm();
    const { t } = useTranslation();
    const router = useRouter()
    function onChange(date: any, dateString: any) {
        setStartDate(date, dateString);
    }
    const onChangeEndDate = (date: any, dateString: any) => {
        setEndDate(date, dateString)
    }
    return (
        <Form form={form} name="dynamic_form_nest_item" initialValues={{ users: [''] }} layout="vertical" className="pt-5 pb-5"
            onFinish={(values) => {
                const startDt = startDate
                const endDt = endDate
                const newVal = { values, startDt, endDt }
                onFinish(newVal)
                console.log("step2", newVal)
            }}>
            <div className="row">
                <div className="col-6">
                    35%
                </div>
            </div>
            <div className="">
                <Progress percent={35} showInfo={false} strokeColor="#00d6e3" />
            </div>
            <div className="pt-3 pb-2">
                <label style={{
                    fontFamily: "SpoqaHanSansbold",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('sideCharacterProfile.workExp.Title1')} <span style={{ color: "red" }}>*</span></label>
            </div>
            <div className="pb-2">
                <Form.Item
                    className="pb-3"
                    name="isExperienced"
                    rules={[
                        {
                            required: disabled ? false : true,
                            message:
                                t('index.formItem1.nameRequired'),
                        },

                    ]}
                    initialValue='yes'>
                    <Radio.Group defaultValue='yes' className="w-100" value={radioIsExperienced} onChange={(e) => { setRadioIsExperienced(e.target.value) }} name='isExperienced'>
                        <Radio.Button value='no' name='isExperienced' onClick={() => { setDisabled(true) }} className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('sideCharacterProfile.workExp.unExp')}</Radio.Button>
                        <Radio.Button value='yes' name='isExperienced' onClick={() => { setDisabled(false) }} className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('sideCharacterProfile.workExp.Exp')}</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </div>

            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <>
                                <div style={{ height: "50px" }}></div>
                                <div className="row pt-2 pb-2">
                                    <div className="col-4">
                                        <label style={{
                                            fontFamily: "SpoqaHanSansbold",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            color: disabled ? "gray" : "black"
                                        }}>{t('index.companyName')}</label>
                                    </div>
                                    <div className="col-8 d-flex justify-content-end">
                                        <label style={{
                                            fontFamily: "SpoqaHanSansbold",
                                            fontWeight: "bold",
                                            fontSize: 17,
                                            color: disabled ? "gray" : "black"
                                        }}>{t('sideCharacterProfile.workExp.totalExp')}<span style={{ color: "#00D6E3" }} className="ml-5">1년</span></label>
                                    </div>
                                    <div className="col-12">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'companyName']}
                                            fieldKey={[fieldKey, 'companyName']}
                                            className="pb-3"

                                            rules={[
                                                {
                                                    required: disabled ? false : true,
                                                    message:
                                                        t('index.formItem1.nameRequired')
                                                },
                                            ]}>
                                            <Input type="text" disabled={disabled}
                                                placeholder={t('clientProfile.clientProfileStep2.companyPlaceholder')} style={{ borderRadius: 20, height: 64 }} />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="row pt-2 pb-2">
                                    <div className="col-12">
                                        <label style={{
                                            fontFamily: "SpoqaHanSansbold",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            color: disabled ? "gray" : "black"
                                        }}>{t('sideCharacterProfile.workExp.employmentPeriod')}</label>
                                    </div>
                                    <div className="col-12" style={{ height: 64, borderRadius: 20 }}>
                                        <DatePicker  {...restField} onChange={onChange} name='empStartDate' placeholder={`YYYY          |           MM`} suffixIcon={<CaretDownOutlined />} picker="month" disabled={disabled} style={{ width: "50%", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, height: 64 }} />
                                        <DatePicker  {...restField} onChange={onChangeEndDate} name='empEndDate' placeholder={`YYYY          |           MM`} suffixIcon={<CaretDownOutlined />} picker="month" disabled={disabled} style={{ width: "50%", borderBottomRightRadius: 20, borderTopRightRadius: 20, height: 64 }} />
                                    </div>
                                </div>
                                <div className="row pt-2 pb-2">
                                    <div className="col-12">
                                        <label style={{
                                            fontFamily: "SpoqaHanSansbold",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            color: disabled ? "gray" : "black"
                                        }}>{t('sideCharacterProfile.workExp.position')}</label>
                                    </div>
                                    <div className="col-12">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'position']}
                                            fieldKey={[fieldKey, 'position']}
                                            className="pb-3"
                                            rules={[
                                                {
                                                    required: disabled ? false : true,
                                                    message:
                                                        t('index.formItem1.nameRequired'),
                                                },
                                            ]}>
                                            <Input type="text" disabled={disabled} placeholder={t('sideCharacterProfile.workExp.enterPosition')} style={{ borderRadius: 20, height: 64 }} />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="row pt-2 pb-2">
                                    <div className="col-12">
                                        <label style={{
                                            fontFamily: "SpoqaHanSansbold",
                                            fontWeight: "bold",
                                            fontSize: 20,
                                            color: disabled ? "gray" : "black"
                                        }}>{t('sideCharacterProfile.workExp.profession')}</label>
                                    </div>
                                    <div className="col-12">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'profession']}
                                            fieldKey={[fieldKey, 'profession']}
                                            className="pb-3"
                                            rules={[
                                                {
                                                    required: disabled ? false : true,
                                                    message:
                                                        t('index.formItem1.nameRequired'),
                                                },
                                            ]}>
                                            <Input type="text" disabled={disabled} placeholder={t('sideCharacterProfile.workExp.profPlaceHolder')} style={{ borderRadius: 20, height: 64 }} />
                                        </Form.Item>
                                    </div>
                                </div>
                                <span >
                                    <Button disabled={disabled} onClick={() => remove(name)} style={{ float: "right", width: router.locale == 'en' ? "150px" : "100px", height: "40px", borderRadius: "30px", background: disabled ? "#EAEAEA" : "#FF5C00", color: "white", fontWeight: "bold", fontSize: "14px" }}>{t('sideCharacterProfile.workExp.deleteExp')}</Button>
                                </span>

                            </>))}
                        <Button onClick={() => add()} disabled={disabled} style={{ float: "right", width: router.locale == 'en' ? "150px" : "100px", height: "40px", borderRadius: "30px", background: disabled ? "#EAEAEA" : "#00D6E3", color: "white", fontWeight: "bold", fontSize: "14px" }}>{t('sideCharacterProfile.workExp.addExp')}</Button>
                    </>
                )}
            </Form.List>
            <div style={{ height: "50px" }}></div>
            <div className="row pt-5 d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <Button
                        onClick={() => { onPreviousBtn('1') }} style={{ border: '1px solid #00D6E3', color: '#00D6E3', width: '100%', height: 68, borderRadius: 20 }} >
                        {t('clientProfile.clientProfileStep2.prevBtn')}
                    </Button>
                </div>
                <div className="col-4">
                    <Form.Item shouldUpdate>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={Boolean(form.isFieldsTouched(true)) ||
                                Boolean(form.getFieldsError().filter(({ errors }) => errors.length).length)}
                            style={form.isFieldsTouched(true) ||
                                form.getFieldsError().filter(({ errors }) => errors.length).length ?
                                { background: 'gray', color: '#FFF', width: '100%', height: 68, borderRadius: 20 } :
                                { background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }} >
                            {t('clientProfile.clientProfileStep2.nextBtn')}
                        </Button>
                    </Form.Item>
                </div>
            </div>
        </Form>
    )
}
// export const getServerSideProps: GetStaticProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common']))
//     }
// });


export default SideCharacterStep2