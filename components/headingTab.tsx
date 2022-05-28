import React from 'react';
import { Tabs } from 'antd';

function HeaderTab(val: any) {
    const { TabPane } = Tabs;
    const values = Object.values(val)
    return (
        <div className="container">
            <div className={`row`}>
                <Tabs defaultActiveKey={`${values}`}>
                    <TabPane tab={
                        <span className="normaltab">
                            부캐찾기
                        </span>
                    } key="1">

                    </TabPane>
                    <TabPane tab={
                        <span className="normaltab">
                            받은요청
                        </span>
                    } key="2">

                    </TabPane>
                    <TabPane tab={
                        <span className="normaltab">
                            보낸요청
                        </span>
                    } key="3">

                    </TabPane>
                    <TabPane tab={
                        <span className="normaltab">
                            나의찜목록
                        </span>
                    } key="4">

                    </TabPane>
                </Tabs>

            </div>
        </div >
    )
}
export default HeaderTab