import React from 'react';
import styles from '../styles/components/Rating.module.css'
import { Divider } from 'antd';

function WorkExp({ type }: any) {

    return (
        <div className="profrate-inner">
            <div className="row">
                <div className="col-md-12 proinr-title">경력정보</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6 alnleft proinr-left proinr-cmn">총 경력</div>
                <div className="col-md-6 col-6 alnright proinr-right proinr-cmn">9년</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-4 alnleft proinr-left proinr-cmn">경력 1</div>
                <div className="col-md-6 col-8 alnleft proinr-left">
                    <div className="row">
                        <div className="col-md-12 alnright proinr-right proinr-cmn">당근마켓</div>
                        <div className="col-md-12 alnright proinr-right proinr-cmn">2019.02 - 2020.02(1년)</div>
                        <div className="col-md-12 alnright proinr-right proinr-cmn">대리</div>
                        <div className="col-md-12 alnright proinr-right proinr-cmn">IT/웹개발</div>
                        <div className="col-md-12">
                            <div className="profrate-inner-devider"></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-4 alnleft proinr-left proinr-cmn">경력 2</div>
                <div className="col-md-6 col-8 alnleft proinr-left">
                    <div className="row">
                        <div className="col-md-12 alnright proinr-right proinr-cmn">9년아인소프트</div>
                        <div className="col-md-12 alnright proinr-right proinr-cmn">2017.02 - 2019.02(2년)</div>
                        <div className="col-md-12 alnright proinr-right proinr-cmn">사원</div>
                        <div className="col-md-12 alnright proinr-right proinr-cmn">IT/웹개발</div>
                        {type === 'accepted' &&
                            <div className="col-md-12">
                                <div className="profrate-inner-devider"></div>
                            </div>
                        }
                    </div>
                </div>
                {type === 'accepted' && <>
                    <div className="col-md-6 col-4 alnleft proinr-left proinr-cmn">경력 1</div>
                    <div className="col-md-6 col-8 alnleft proinr-left">
                        <div className="row">
                            <div className="col-md-12 alnright proinr-right proinr-cmn">당근마켓</div>
                            <div className="col-md-12 alnright proinr-right proinr-cmn">2019.02 - 2020.02(1년)</div>
                            <div className="col-md-12 alnright proinr-right proinr-cmn">대리</div>
                            <div className="col-md-12 alnright proinr-right proinr-cmn">IT/웹개발</div>
                            {/* <div className="col-md-12">
                             <div className="profrate-inner-devider"></div>
                         </div> */}
                        </div>
                    </div></>
                }
                <div className="col-md-12">
                    <div className="profrate-inner-devider"></div>
                </div>
            </div>
        </div>
    )
}
export default WorkExp