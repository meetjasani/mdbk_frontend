/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Button, Progress, Form, Input, Radio, Select, Checkbox } from 'antd';
import stylessec from '../styles/searchdetail.module.css';
import Image from 'next/image'
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import { registerClient, getProvinces, getDistricts } from '../redux/actions/client/clientAction'
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/reducers/rootReducer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

function ClientStep2({ onFinish, onPreviousBtn }: any) {
    const { t } = useTranslation();
    const { Option } = Select;
    const [disabled, setDisabled] = useState(false)
    const [radioCompanyProfession, setRadioCompanyProfession] = useState('other');
    const [radioIsCompany, setRadioIsCompany] = useState("yes");
    const [hashTagArr, setHashTagArr] = useState<any>([])
    const [hashTag, setHashTag] = useState('');
    const [city1, setCity1] = useState('1');
    const [city2, setCity2] = useState('1');
    const [companyField, setCompanyField] = useState('');
    const [companyFieldArr, setCompanyFieldArr] = useState<any>([])
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProvinces())
        dispatch(getDistricts())
    }, []);
    const provinceData = useSelector((state: State) => state.client.provinces)
    const cityData = useSelector((state: State) => state.client.districts)

    const saveHashTag = () => {
        setHashTagArr([...hashTagArr, hashTag])
    }
    const plainOptions = ['development', 'design', 'marketing', 'other'];
    function onChange(checkedValues: any) {
        console.log('checked = ', checkedValues);
    }

    return (
        <Form name="step2" form={form} onFinish={(values) => {
            const newVal = { values, hashTagArr, companyFieldArr }
            onFinish(newVal)
        }}>
            <div className="row pt-5">
                <div className="col-6">
                    33%
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <span style={{ color: "red" }}>*</span>{t('clientProfile.requiredField')}
                </div>
            </div>
            <div className="">
                <Progress percent={33} showInfo={false} strokeColor="#00d6e3" />
            </div>
            <div className="pt-3 pb-3">
                <label style={{
                    fontFamily: "SpoqaHanSansbold",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep2.areYouCompany')}<span style={{ color: "red" }}>*</span></label>
            </div>
            <div className="pb-5">
                <Form.Item name="isCompany" initialValue="yes">
                    <Radio.Group value={radioIsCompany} defaultValue="yes" onChange={(e) => { setRadioIsCompany(e.target.value) }} name="isCompany" className="w-100">
                        <Radio.Button value="no" name="isCompany" onClick={() => { setDisabled(true) }} className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('clientProfile.clientProfileStep2.noCompany')}</Radio.Button>
                        <Radio.Button value="yes" name="isCompany" onClick={() => { setDisabled(false) }} className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('clientProfile.clientProfileStep2.yesCompany')}</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </div>
            <div className="row pt-3 pb-3">
                <div className="col-4">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep2.companyNameLabel')}  <span style={{ color: "red" }}>*</span></label>
                </div>
                <div className="col-8 d-flex justify-content-end">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 17,
                        color: '#9A9A9A'
                    }}>{t('clientProfile.clientProfileStep2.companyInfoLabel')} </label>
                </div>
                <div className="col-12">
                    <Form.Item
                        name="companyName"
                        className="pt-3"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired'),
                            },
                        ]}>
                        <Input type="text" disabled={disabled}
                            placeholder={t('clientProfile.clientProfileStep2.companyPlaceholder')} style={{ borderRadius: 10, height: 64 }} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col-12 pb-2">
                    <span style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep2.companyIntroLabel')}<span style={{ color: "red" }}>*</span></span>
                </div>
                <div className="col-12">
                    <Form.Item
                        name="companyIntroduction"
                        className="pb-3"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired'),
                            },
                        ]}>
                        <Input.TextArea rows={4} disabled={disabled}
                            placeholder={t('clientProfile.clientProfileStep2.companyIntroLabel')} style={{ borderRadius: 10 }} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col-12 pb-2">
                    <span style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep1.contactLabel')}<span style={{ color: "red" }}>*</span></span>
                </div>
                <div className="col-12">
                    <Form.Item
                        name="contactInfo"
                        className="pb-3"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired'),
                            },
                        ]}>
                        <Input type="number" disabled={disabled} placeholder={"010-2939-2930"} style={{ borderRadius: 10, height: 64 }} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col-12 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep2.hashtagLabel')}</label>
                </div>
                <div className="col-10">
                    <Form.Item name="companyHashtag" className="pb-3"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired'),
                            },
                        ]}
                    >
                        <Input type="text" disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.hashtagLabel')} style={{ borderRadius: 10, height: 64 }} onChange={(e) => setHashTag(e.target.value)} />
                    </Form.Item>
                    {hashTagArr.length > 0 && (
                        <div className="pb-2">

                            {hashTagArr.map((field: any, index: number) => <Button className={`${stylessec.hashBtn} searchdetail_btn1`} style={field && field.length > 1 ? { marginLeft: "10px" } : { marginLeft: "0px" }}>
                                {field}
                            </Button>
                            )}
                        </div>
                    )}
                </div>
                <div className="col-2">
                    {disabled ? <Button disabled style={{ width: '100%', height: 68, borderRadius: 20 }} >
                        {t('clientProfile.clientProfileStep2.enterLabel')}
                    </Button> : <Button style={{ background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }} onClick={saveHashTag}>
                        {t('clientProfile.clientProfileStep2.enterLabel')}
                    </Button>}
                </div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col-6 pb-3">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>  {t('clientProfile.clientProfileStep2.companyProfLabel')}</label>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: '#9A9A9A'
                    }}> {t('clientProfile.clientProfileStep1.multipleSelection')}</label>
                </div>

            </div>
            <Form.Item name="companyProfession" initialValue={["other"]}>
                <Checkbox.Group name="profession" className="w-100" options={plainOptions} onChange={onChange} />

                {/* <Radio.Group value={radioCompanyProfession} defaultValue='other' className="w-100 mb-5" onChange={(e) => { setRadioCompanyProfession(e.target.value) }} name="companyProfession">
                    <Radio.Button value='development' disabled={disabled} name="companyProfession" className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('search.dropdown.val2')}</Radio.Button>
                    <Radio.Button value='design' disabled={disabled} name="companyProfession" className={stylessec.radiobtntxt}>{t('search.dropdown.val3')}</Radio.Button>
                    <Radio.Button value='marketing' disabled={disabled} name="companyProfession" className={stylessec.radiobtntxt} >{t('search.dropdown.val4')}</Radio.Button>
                    <Radio.Button value='other' disabled={disabled} name="companyProfession" className={stylessec.radiobtntxt} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('search.dropdown.val5')}</Radio.Button>
                </Radio.Group> */}
            </Form.Item>
            <div className="row pt-2">
                <div className="col-6 pb-3">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}> {t('clientProfile.clientProfileStep2.companyFieldLabel')}<span style={{ color: "red" }}>*</span></label>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: '#9A9A9A'
                    }}>{t('clientProfile.clientProfileStep2.companyFieldLimit')} </label>
                </div>

                <div className="row pt-2">
                    <div className="col-10">
                        <Form.Item name="fieldName" rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired')
                            },
                        ]}>
                            <Input type="text" disabled={disabled}
                                placeholder={t('clientProfile.clientProfileStep1.fieldPlaceholder')} className={stylessec.txtbox} onChange={(event) => {
                                    setCompanyField(event.target.value);
                                }} />
                        </Form.Item>
                    </div>
                    <div className="col-2">
                        {disabled ? <Button style={{ border: "none" }}><img src="/grayplus.svg" alt="Plus Icon" /> </Button> : <Button style={{ border: "none" }} onClick={(val) => {
                            companyFieldArr && companyFieldArr.length < 3 ? setCompanyFieldArr([...companyFieldArr, companyField]) : <p>You can only give 3 field values</p>
                        }}>
                            <img src="/plus.svg" alt="Plus Icon" />
                        </Button>}

                    </div>
                </div>
            </div>
            {disabled ? '' :
                companyFieldArr.length > 0 && (
                    <div className="pb-5">

                        {companyFieldArr.map((field: any, index: number) => <Button className={`${stylessec.btn} searchdetail_btn1`} style={field && field.length > 1 ? { marginLeft: "10px" } : { marginLeft: "0px" }}>
                            {field} <img src="/cross.svg" onClick={() => {
                                companyFieldArr.splice(index, 1);
                                setCompanyFieldArr([...companyFieldArr]);
                            }} /></Button>
                        )}

                    </div>
                )
            }
            <div className="row pt-2 pb-2">
                <div className="col-6">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep1.locationLabel')}<span style={{ color: "red" }}>*</span></label>
                </div>
            </div>

            <div className="row pb-3">
                <div className="col-6 pt-2 pb-2 ">
                    <div className="dropdown" style={{ color: "white" }}>
                        <Form.Item name="location1">
                            <Select defaultValue={t('clientProfile.clientProfileStep1.CityLabel')} onChange={(value: any) => {
                                form.getFieldValue('location1')
                                setCity1(value)
                            }}>
                                {provinceData.map((province: any) => (
                                    <Option key={province.id} value={province.id}>{province.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="col-6 pt-2 pb-2 ">
                    <div className="dropdown" style={{ color: "white" }}>
                        <Form.Item name="city1">
                            <Select defaultValue={t('clientProfile.clientProfileStep1.countyLabel')}>
                                {cityData.filter((c: any) => c.province_id == city1).map((city: any) => (
                                    <>
                                        <Option key={city.id} value={city.id}>{city.name}</Option>
                                    </>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="col-6 pt-2 pb-2 ">
                    <div className="dropdown" style={{ color: "white" }}>
                        <Form.Item name="location2">
                            <Select defaultValue={t('clientProfile.clientProfileStep1.CityLabel')} onChange={(value: any) => {
                                form.getFieldValue('location2')
                                setCity2(value)
                            }}>
                                {provinceData.map((province: any) => (
                                    <Option key={province.id} value={province.id}>{province.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="col-6 pt-2 pb-2 ">
                    <div className="dropdown" style={{ color: "white" }}>
                        <Form.Item name="city2">
                            <Select defaultValue={t('clientProfile.clientProfileStep1.countyLabel')}>
                                {cityData.filter((c: any) => c.province_id == city2).map((city: any) => (
                                    <>
                                        <Option key={city.id} value={city.id}>{city.name}</Option>
                                    </>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
            </div>

            <div className="row pt-2 pb-4">
                <div className="col-12 pt-2 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep2.companyRegisLabel')} <span style={{ color: "red" }}>*</span></label>
                </div>

                <div className="col-12">
                    <Form.Item name="registerationNumber"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired')
                            },
                        ]}>
                        <Input type="number"
                            disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyRegisPlaceholder')} className={stylessec.txtbox} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pt-2 pb-4">
                <div className="col-6 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep2.companyFoundLabel')} <span style={{ color: "red" }}>*</span></label>
                </div>
                <div className="col-12">
                    <Form.Item name="foundation"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired')
                            },
                        ]}>
                        <Input type="text"
                            disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyFoundDate')} className={stylessec.txtbox} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pt-2 pb-4">
                <div className="col-12 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep2.companyRepLabel')}<span style={{ color: "red" }}>*</span></label>
                </div>
                <div className="col-12">
                    <Form.Item name="representativeName"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired')
                            },
                        ]}>
                        <Input type="text"
                            disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyRepPlaceholder')} className={stylessec.txtbox} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pt-2 pb-4">
                <div className="col-6 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSansbold",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: disabled ? "gray" : "black"
                    }}>{t('clientProfile.clientProfileStep2.companyEmpLabel')}</label>
                </div>
                <div className="col-12">
                    <Form.Item name="numberOfEmployee"
                        rules={[
                            {
                                required: disabled ? false : true,
                                message:
                                    t('index.formItem1.nameRequired')
                            },
                        ]}>
                        <Input type="number"
                            disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyEmpPlaceholder')} className={stylessec.txtbox} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pt-5 d-flex justify-content-center align-items-center">
                <div className="col-4">
                    <Button onClick={() => { onPreviousBtn('1') }} style={{ border: '1px solid #00D6E3', color: '#00D6E3', width: '100%', height: 68, borderRadius: 20 }} >
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


export default ClientStep2