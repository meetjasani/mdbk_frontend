/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../../styles/img.module.css'
import React, { useState } from 'react';
import { Divider, Upload, Button } from 'antd';
import Image from 'next/image'
import camera from '../../public/camera.svg'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Imgupload() {
    const { t } = useTranslation();
    function getBase64(img: any, callback: any) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    const [imageUrl, setImageUrl] = useState(null)
    const [loading, setLoading] = useState(false)
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

    // const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList);
    // };

    const onPreview = async (file: any) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        <Image src={src} alt="Picture of the author" />
        // const image = new Image();
        // image.src = src;
        // const imgWindow = window.open(src);
        // imgWindow.document.write(image.outerHTML);
    };

    return (
        <div className="register-img jumbotron">
            <Head>
                <title>받은 요청</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="mainContainercmn pt-5 pb-5 h-100">
                <div className="col4-cmn-cntr-800 bg-white brdrrdus20 cmn-shadow">
                    <div className="cmn-inner-p15">
                        <div className="row">
                            <div className="col-6">
                                <h1 className={styles.heading} style={{ fontWeight: "bold" }}>소개 이미지를 등록해주세요</h1>
                            </div>
                            <div className="col-6">
                                <p className={styles.txtheading}>(10MB 이하 - 파일형식: JPG,PNG,PDF) </p>
                            </div>
                        </div>
                        <div className="row imgupload-inner">
                            {[...Array(20)].map((i, index) => (
                                <div className="col-4" key={index}>
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="introUpload"
                                        showUploadList={false}
                                        beforeUpload={beforeUpload}
                                        customRequest={dummyRequest}
                                        onChange={handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: 20 }} /> : (<div>
                                            <Image src={camera} alt="Profile Image" width={38} height={30} />
                                        </div>)}
                                    </Upload>
                                </div>
                            ))}
                        </div>
                        <div className="row ">
                            <div className="col-6 offset-3">
                                <Button className={imageUrl ? styles.activeButton : styles.disabledButton}>
                                    저장
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});


export default Imgupload