
import React from 'react'
import styles from '../styles/components/Blueprofile.module.css'


function BlueProfileSideCharacter({ type }: any) {

    return (
        <div className={`${styles.maindiv} row d-flex justify-content-center align-items-center`} >
            {/* <div className="pt-3 d-flex justify-content-end align-items-center">
                <span className={`${styles.font18} mr-5`}>1</span>
                <img src="/Group123.svg" alt="Bell Icon" />
            </div> */}
            <div className="bluprof-img-section">
                <div className="bluprof-count">
                    <span className={`${styles.font18} mr-5`}>1</span>
                    <img src="/Group123.svg" alt="Bell Icon" />
                </div>
                <div className={`d-flex justify-content-center`}>
                    <img src="/girl.svg" alt="User Image" />
                </div>

                <p className={` ${styles.name} d-flex justify-content-center align-items-center`}>
                    개발왕
                    <span>
                        <img src="/heart.svg" className={styles.heartimg} alt="Heart Icon" />
                    </span>
                    <span>
                        <p className={styles.name} style={{ fontSize: "14px", paddingLeft: "10px" }}>
                            32
                        </p>
                    </span>
                </p>

            </div>
            <p className={` ${styles.p} bprofpar`}>
                안녕하세요. 새 프로젝트 함께 하실 분 구합니다. 안녕하세요. 새 프로젝트 함께 하실 분 구합
                니다. 새 프로젝트 함께 하실 분 구합니다.
            </p>
            <div className={`row`}>
                <div className={`col-6`}>
                    <p className={styles.p}>
                        제안 금액
                    </p>
                </div>
                <div className={`col-6`} style={{ textAlign: "right" }}>
                    {type === 'waiting' ? <span className={styles.span1}>
                        의가능
                    </span> : <>
                        <span className={styles.span1}>
                            1,500,000
                        </span>
                        <span className={styles.p} style={{ paddingLeft: "15px" }}>
                            원
                        </span></>}
                </div>
            </div>
        </div>
    )
}
export default BlueProfileSideCharacter