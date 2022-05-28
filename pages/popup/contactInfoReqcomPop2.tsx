
import styles from '../../styles/components/pop.module.css'
import React from 'react';
import { Button, Modal } from 'antd';

class ContactInfoReqPop extends React.Component {
  state = {
    loading: false,
    visible: true,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Modal
          visible={visible}
          title="요청 완료"
          centered
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="pop-title"
          bodyStyle={{ fontFamily: "SpoqaHanSans", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", lineHeight: "36px" }}
          footer={[
            <Button key="back" className={`${styles.footerbtn} d-flex justify-content-center align-items-center`} onClick={this.handleCancel}>
              확인
            </Button>
          ]}
        >
          <p className="mb-2">성공적으로 연락처 요청이 완료되었습니다.</p>
          <span>
            현재  <span style={{ color: "#00D6E3", fontWeight: "bold" }}>무료 1회 요청권</span>이 남았습니다.
          </span>
        </Modal>
      </>
    );
  }
}


export default ContactInfoReqPop