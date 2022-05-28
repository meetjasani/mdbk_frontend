
import React, { useState, useEffect } from 'react';
import { Button, Progress, Form, Input, Radio, Upload, Select, Checkbox } from 'antd';
import stylessec from '../styles/searchdetail.module.css';
import verifystyles from '../styles/emailVerify.module.css'
import camera from '../public/camera.svg'
import Image from 'next/image'
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { CaretDownOutlined } from '@ant-design/icons'
import { getProvinces, getDistricts, generateVerificationCode, verifyPhone } from '../redux/actions/client/clientAction'
import { State } from '../redux/reducers/rootReducer';
import { GetStaticProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { OptionFC } from 'rc-select/lib/Option';

function ClientStep1({ onFinish }: any) {
    const { Option } = Select;
    const router = useRouter()
    const { t } = useTranslation();
    const [arr, setArr] = useState<any>([])
    const [fileList, setFileList] = useState<any>([])
    const [value, setValue] = useState<any>(false);
    const [codeValue, setCodeValue] = useState<any>(false);
    const [city1, setCity1] = useState<any>('1');
    const [city2, setCity2] = useState<any>('1');
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProvinces())
        dispatch(getDistricts())
        // dispatch(generateVerificationCode())
    }, []);
    const provinceData = useSelector((state: State) => state.client.provinces)
    const cityData = useSelector((state: State) => state.client.districts)
    const codeSentMsg = useSelector((state: State) => state.client.codeSendMsg)
    const invalidCodeMsg = useSelector((state: State) => state.client.phoneErrCodeMsg)
    const prevCodeAndPhone = useSelector((state: State) => state.validation.validationCode)

    function beforeUpload(file: any) {
        let message: any;
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 20;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const plainOptions = ['development', 'design', 'marketing', 'other'];

    function onChange(checkedValues: any) {
        console.log('checked = ', checkedValues);
    }

    return (

        <Form form={form} name="step1" layout="vertical" className="pt-5 pb-3" onFinish={(values) => {
            const newVal = { values, arr, fileList }
            onFinish(newVal)
        }}>
            <div className="row">
                <div className="col-6">
                    0%
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <span style={{ color: "red" }}>*</span> {t('clientProfile.requiredField')}
                </div>
            </div>
            <div className="">
                <Progress percent={0} showInfo={false} />
            </div>
            <Form.Item
                name="nickName"
                className="pb-3 pt-3"
                rules={[
                    {
                        required: true,
                        message:
                            t('index.formItem1.nameRequired'),
                    },
                ]}
                label={
                    <span style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}> {t('clientProfile.clientProfileStep1.nickNameLabel')}<span style={{ color: "red" }}>*</span></span>
                }>
                <Input type="text"
                    placeholder={t('clientProfile.clientProfileStep1.nickNameLabel')} style={{ borderRadius: 10, height: 64 }} />
            </Form.Item>
            <Form.Item
                name="introduction"
                className="pb-3"
                rules={[
                    {
                        required: true,
                        message:
                            t('index.formItem1.nameRequired'),
                    },
                ]}
                label={
                    <span style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.introductionLabel')}<span style={{ color: "red" }}>*</span></span>
                }>
                <Input.TextArea rows={4}
                    maxLength={160} placeholder={t('clientProfile.clientProfileStep1.introductionLabel')} style={{ borderRadius: 10 }} />
            </Form.Item>
            <label style={{
                fontFamily: "SpoqaHanSans",
                fontWeight: "bold",
                fontSize: 20
            }}>{t('clientProfile.clientProfileStep1.contactLabel')}</label>
            <div className="row pt-2">
                <div className="col-sm-12 col-md-8">
                    <Form.Item
                        name="phoneNumber"
                        className="pb-3"
                        rules={[
                            {
                                required: true,
                                message:
                                    t('index.formItem1.nameRequired'),
                            },
                        ]}>
                        <Input type="number" value={value} maxLength={15} onChange={(event) => { setValue(event.target.value) }} placeholder={t('clientProfile.clientProfileStep1.contactLabel')} style={{ borderRadius: 10, height: 64 }} />
                    </Form.Item>
                    <p className={`${verifystyles.blueMsg}`}>{codeSentMsg ? t('clientProfile.clientProfileStep1.codeMsg') : ''}</p>

                </div>
                <div className="col-sm-12 col-md-4 pb-3">
                    <Button disabled={!value} style={{ backgroundColor: "white", color: `${!value ? "#EAEAEA" : "#00D6E3"}`, borderRadius: 10, height: 64, width: "100%" }} onClick={(e) => {
                        dispatch(generateVerificationCode(form.getFieldsValue(['phoneNumber'])));
                    }}>{t('clientProfile.clientProfileStep1.codeButton')}</Button>
                </div>
                <div className="col-sm-12 col-md-8">
                    <Form.Item
                        name="codeValues"
                        className="pb-3"
                        rules={[
                            {
                                required: true,
                                message:
                                    t('index.formItem1.nameRequired'),
                            },
                        ]}>
                        <Input type="number" value={codeValue} onChange={(event) => { setCodeValue(event.target.value) }} placeholder={t('clientProfile.clientProfileStep1.codeLabel')} style={{ borderRadius: 10, height: 64 }} />
                        <p className={`${verifystyles.redMsg}`}>{invalidCodeMsg ? t('clientProfile.clientProfileStep1.invalidCodeMsg') : ''}</p>
                    </Form.Item>
                </div>
                <div className="col-sm-12 col-md-4 pb-3">
                    <Button disabled={!codeValue}
                        style={{ backgroundColor: `${!codeValue ? "#EAEAEA" : "#00D6E3"}`, borderRadius: 10, height: 64, width: '100%', color: 'white' }}
                        onClick={() => {
                            const prevPhone = prevCodeAndPhone && prevCodeAndPhone.config && JSON.parse(prevCodeAndPhone.config.data)
                            const prevCode = prevCodeAndPhone && prevCodeAndPhone.data && prevCodeAndPhone.data.code
                            const data = { prevCode: prevCode, previousPhoneNumber: prevPhone.phoneNumber, code: codeValue, phoneNumber: form.getFieldValue('phoneNumber') }
                            dispatch(verifyPhone(data))
                        }}>{t('clientProfile.clientProfileStep1.verify')}</Button>
                </div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col-6">
                    <span style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.professionLabel')}<span style={{ color: "red" }}>*</span></span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: '#9A9A9A'
                    }}>{t('clientProfile.clientProfileStep1.multipleSelection')}</label>
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-12 " >
                    <span className="w-100" style={{ height: "50px", border: "2px", borderRadius: "20px" }}>
                        <Form.Item name="profession" initialValue={["other"]}>
                            <Checkbox.Group name="profession" className="w-100" options={plainOptions} onChange={onChange} />

                            {/* <Radio.Group defaultValue='other' value={radioProfession} onChange={(e) => { setRadioProfession(e.target.value) }} className="w-100" name="profession">
                            <Radio.Button value='development' name="profession" className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('search.dropdown.val2')}</Radio.Button>
                            <Radio.Button value='design' name="profession" className={stylessec.radiobtntxt}>{t('search.dropdown.val3')}</Radio.Button>
                            <Radio.Button value='marketing' name="profession" className={stylessec.radiobtntxt} >{t('search.dropdown.val4')}</Radio.Button>
                            <Radio.Button value='other' name="profession" className={stylessec.radiobtntxt} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('search.dropdown.val5')}</Radio.Button>
                        </Radio.Group> */}
                        </Form.Item>
                    </span>

                </div>
            </div>
            <div className="row pt-2 pb-2">
                <div className="col-6">
                    <span style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.fieldLabel')}<span style={{ color: "red" }}>*</span></span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: '#9A9A9A'
                    }}>{t('clientProfile.clientProfileStep2.companyFieldLimit')}</label>
                </div>
            </div>

            <div className="row pb-2" >
                <div className="col-10">
                    <Form.Item name="fieldName"
                        rules={[
                            {
                                required: true,
                                message:
                                    t('index.formItem1.nameRequired'),
                            },
                        ]}>
                        <Input type="text"
                            onChange={(e) => { setValue(e.target.value) }} placeholder={t('clientProfile.clientProfileStep1.fieldPlaceholder')} className={stylessec.txtbox} />
                    </Form.Item>
                </div>
                <div className="col-2 text-right">
                    <Button style={{ border: "none" }} onClick={(val) => {
                        arr && arr.length < 3 ? setArr([...arr, value]) : <p>You can only give 3 field values</p>
                    }}>
                        <img src="/plus.svg" alt="Plus Icon" />
                    </Button>

                </div>
            </div>
            {arr.length > 0 && (
                <div className="pb-2">
                    <div className="">
                        {arr.map((field: any, index: any) => <Button className={`${stylessec.btn} searchdetail_btn1`} style={field && field.length > 1 ? { marginLeft: "10px" } : { marginLeft: "0px" }}>
                            {field} <img src="/cross.svg" onClick={() => {
                                arr.splice(index, 1);
                                setArr([...arr]);
                            }} /></Button>
                        )}
                    </div>
                </div>
            )}
            <div className="row pt-2">
                <div className="col-6">
                    <span style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.locationLabel')}<span style={{ color: "red" }}>*</span></span>
                </div>
            </div>
            <div className="row" style={{ paddingTop: "20px", paddingBottom: "10px" }}>
                <div className="col-6 pt-2 pb-2 ">
                    <Form.Item name="location1">
                        {/* <div className="dropdown" style={{ color: "white" }}> */}

                        <Select defaultValue={t('clientProfile.clientProfileStep1.CityLabel')} onChange={(value) => {
                            form.getFieldValue('location1')
                            setCity1(value)
                        }}>
                            {provinceData.map((province: any) => (
                                <>
                                    <Option key={province.id} value={province.id}>{province.name}</Option>

                                </>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* <Dropdown style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                                {provinces? provinces.map(province => {       
                                    <Menu.Item className={stylessec.dropdownitem} key={province.id}>{province.name}</Menu.Item>
                                }) : ''}
                            </Menu>)
                            }>
                                <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> {t('clientProfile.clientProfileStep1.CityLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                            </Dropdown> */}
                    {/* </div> */}

                </div>
                <div className="col-6 pt-2 pb-2 ">
                    <div className="dropdown" style={{ color: "white" }}>
                        <Form.Item name="city1">
                            <Select defaultValue={t('clientProfile.clientProfileStep1.countyLabel')} >
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
                            <Select defaultValue={t('clientProfile.clientProfileStep1.CityLabel')} onChange={(value) => {
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
            <div className="row">
                <div className="col-12 pt-2 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.homepageLabel')}</label>
                </div>
                <div className="col-12 pt-2 pb-2">
                    <Form.Item
                        name="homepageLink"
                        rules={[
                            {
                                type: 'url',
                                message:
                                    'Please give correct URL',
                            },
                        ]}
                    >
                        <Input placeholder={t('clientProfile.clientProfileStep1.homepageURL')} style={{ borderRadius: 10, height: 64 }} />
                    </Form.Item>
                </div>
            </div>
            <div className="row">
                <div className="col-12 pt-2 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.fbLabel')}</label>
                </div>
                <div className="col-12 pt-2 pb-2">
                    <Form.Item name="facebookLink"
                        rules={[
                            {
                                type: 'url',
                                message:
                                    'Please give correct URL',
                            },
                        ]}
                    >
                        <Input placeholder={t('clientProfile.clientProfileStep1.fbURL')} style={{ borderRadius: 10, height: 64 }} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pb-0">
                <div className="col-12 pt-2 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.instaLabel')}</label>
                </div>
                <div className="col-12 pt-2 pb-2">
                    <Form.Item name="instagramLink"
                        rules={[
                            {
                                type: 'url',
                                message:
                                    'Please give correct URL',
                            },
                        ]}
                    >
                        <Input placeholder={t('clientProfile.clientProfileStep1.instaURL')} style={{ borderRadius: 10, height: 64 }} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pb-0">
                <div className="col-12 pt-2 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.otherLabel')}</label>
                </div>
                <div className="col-12 pt-2 pb-2">
                    <Form.Item name="otherLink" className="pb-3"
                        rules={[
                            {
                                type: 'url',
                                message:
                                    'Please give correct URL',
                            },
                        ]}
                    >
                        <Input placeholder={t('clientProfile.clientProfileStep1.otherURL')} style={{ borderRadius: 10, height: 64 }} />
                    </Form.Item>
                </div>
            </div>
            <div className="row pb-0">
                <div className="col-6 pb-2">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>{t('clientProfile.clientProfileStep1.imageLabel')}</label>
                </div>
                <div className="col-6 pt-2 d-flex justify-content-end">
                    <label style={{
                        fontFamily: "SpoqaHanSans",
                        fontWeight: "bold",
                        fontSize: 15,
                        color: '#9A9A9A'
                    }}>({t('clientProfile.clientProfileStep1.less10')} - {t('clientProfile.clientProfileStep1.fileFormat')}JPG,PNG,PDF)</label>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-12">
                    <Upload
                        name="introductryImg"
                        listType="picture-card"
                        className="introductoryUpload"
                        fileList={fileList}
                        beforeUpload={beforeUpload}
                        onChange={({ fileList: newFileList }) => {
                            setFileList(newFileList);
                        }}
                    >
                        {fileList.length >= 20 ? null : (<div>
                            <Image src={camera} alt="Profile Image" width={38} height={30} />
                        </div>)}
                    </Upload>
                </div>
            </div>
            <div className="row pt-5 d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <Button
                        htmlType="submit"
                        style={{ background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }}>
                        {t('myPages.save')}
                    </Button>
                </div>
            </div>
        </Form >

    )
}

// export const getServerSideProps: GetStaticProps = async ({ locale }) => ({
//     props: {
//         ...(await serverSideTranslations(locale, ['common']))
//     }
// });

export default ClientStep1