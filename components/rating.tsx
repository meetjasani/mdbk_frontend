import React from 'react';
import styles from '../styles/components/Rating.module.css'
import { StarOutlined } from '@ant-design/icons'
import { Divider } from 'antd';

function Rating({ type }: any) {
    return (
        <div className="profrate-inner">
            <div className="row">
                <div className="col-md-12 proinr-title">기본정보</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">연락처</div>

                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">
                    {type === 'waiting' || type === 'sentPending' ? <> 010- <StarOutlined /><StarOutlined /><StarOutlined />
                        - <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /></> : '010-2399-2999'}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">직종</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">개발</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">분야</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">개발</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">IT/웹개발</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">서울 마포구, 서울 양천구</div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="profrate-inner-devider"></div>
                </div>
            </div>

            {/* <div className={`${styles.maindiv} row d-flex justify-content-center align-items-center`} >
                <p className={`${styles.heading} pt-3`}>
                    기본정보
                </p>
                <div className="row">
                    <div className={`${styles.info} col-6 pt-2 pb-2`}>
                        연락처
                    </div>
                    <div className={`col-6 d-flex justify-content-end align-items-center`} style={{ textAlign: "left", paddingTop: "3%" }}>
                        010- <StarOutlined /><StarOutlined /><StarOutlined />
                        - <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                    </div>
                </div>
                <div className="row">
                    <div className={`${styles.info} col-6 pt-2 pb-2`}>
                        직종
                    </div>
                    <div className={`col-6 d-flex justify-content-end align-items-center`}>
                        개발
                    </div>
                </div>
                <div className="row">
                    <div className={`${styles.info} col-6 pt-2 pb-2`}>
                        분야
                    </div>
                    <div className={`col-6 d-flex justify-content-end align-items-center`}>
                        개발
                    </div>
                </div>
                <div className="row">
                    <div className={`${styles.info} col-6 pt-2 pb-2`}>
                        IT/웹개발
                    </div>
                    <div className={`col-6 d-flex justify-content-end align-items-center`}>
                        서울 마포구, 서울 양천구
                    </div>
                </div>
                <Divider className="p-0 m-0" />
            </div> */}
        </div>
    )
}
export default Rating