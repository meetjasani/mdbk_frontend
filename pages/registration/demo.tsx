<Form name="register" layout="vertical" className="pt-5 pb-5" onFinish={(values) => { console.log(values) }}>
<div className="row d-flex justify-content-center text-align-center">
    <Upload
        name="avatar"
        listType="picture-card"
        className="avatarUpload"
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={dummyRequest}
        onChange={handleChange}
    >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: '50%' }} /> : (<div>
            <Image src={camera} alt="Profile Image" width={38} height={30} />
        </div>)}
    </Upload>
</div>
<h2 className="pb-5 pt-3 d-flex justify-content-center text-align-center">이모아</h2>
<Tabs defaultActiveKey={1} className="registerSteps" centered>
    <TabPane className="row-3" key={1} tab={<span className={styles.tabHeading} >STEP 1</span>} >
        <div className="row pt-5">
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
            className="pb-3"
            rules={[
                {
                    required: true,

                    message:
                        'Please input your Nickname!',
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
                        'Please input your Nickname!',
                },
            ]}
            label={
                <span style={{
                    fontFamily: "SpoqaHanSans",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep1.introductionLabel')}<span style={{ color: "red" }}>*</span></span>
            }>
            <Input.TextArea type="text" rows={4}
                placeholder={t('clientProfile.clientProfileStep1.introductionLabel')} style={{ borderRadius: 10 }} />
        </Form.Item>
        <label style={{
            fontFamily: "SpoqaHanSans",
            fontWeight: "bold",
            fontSize: 20
        }}>{t('clientProfile.clientProfileStep1.contactLabel')}</label>
        <div className="row pt-2">
            <div className="col-8">
                <Form.Item
                    name="phoneNumber"
                    className="pb-3"
                    rules={[
                        {
                            min: "2",
                            message:
                                'Please input your Nickname!',
                        },
                    ]}>
                    <Input placeholder={t('clientProfile.clientProfileStep1.contactLabel')} value={value} onChange={(event) => { setValue(event.target.value) }} style={{ borderRadius: 10, height: 64 }} />
                </Form.Item>
            </div>
            <div className="col-4 pb-3">
                <Button disabled={!value} style={{ backgroundColor: "white", color: `${!value ? "#EAEAEA" : "#00D6E3"}`, borderRadius: 10, height: 64, width: "100%" }} >{t('clientProfile.clientProfileStep1.codeButton')}</Button>
            </div>
            <div className="col-8">
                <Form.Item
                    name="codeValue"
                    className="pb-3"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your Nickname!',
                        },
                    ]}>
                    <Input value={codeValue} onChange={(event) => { setCodeValue(event.target.value) }} placeholder={t('clientProfile.clientProfileStep1.codeLabel')} style={{ borderRadius: 10, height: 64 }} />
                </Form.Item>
            </div>
            <div className="col-4">
                <Button disabled={!codeValue} style={{ backgroundColor: `${!codeValue ? "#EAEAEA" : "#00D6E3"}`, borderRadius: 10, height: 64, width: '100%', color: 'white' }} >{t('clientProfile.clientProfileStep1.verify')}</Button>
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
            <div className="col-12">
                <Radio.Group defaultValue="4" className="w-100" name="profession">
                    <Radio.Button value="1" name="profession" className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('search.dropdown.val2')}</Radio.Button>
                    <Radio.Button value="2" name="profession" className={stylessec.radiobtntxt}>{t('search.dropdown.val3')}</Radio.Button>
                    <Radio.Button value="3" name="profession" className={stylessec.radiobtntxt} >{t('search.dropdown.val4')}</Radio.Button>
                    <Radio.Button value="4" name="profession" className={stylessec.radiobtntxt} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderColor: "#00D6E3" }}>{t('search.dropdown.val5')}</Radio.Button>
                </Radio.Group>
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
                }}>최대 3개 선택 가능</label>
            </div>
        </div>
       
        <div className="row" >
            <div className="col-10">
                <Form.Item name="fieldName" layout="vertical">
                    <Input type="text"
                        placeholder={t('clientProfile.clientProfileStep1.fieldPlaceholder')} className={stylessec.txtbox} />
                </Form.Item>
            </div>
            <div className="col-2 text-right">
                <Button style={{border:"none"}}>
                <img src="/plus.svg" alt="Plus Icon" />
                </Button>
                
            </div>
        </div>
        <div className="pb-2">
            <div className="">
                <Button className={`${stylessec.btn} searchdetail_btn1`}>기타 <img src="/cross.svg" /></Button>
                <Button className={`${stylessec.btn} searchdetail_btn1`} style={{ marginLeft: "10px" }}>웹기획.PM <img src="/cross.svg" /></Button>
            </div>
        </div>
        <div className="row pt-2 pb-2">
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
                <Form.Item name="location">
                    <div className="dropdown" style={{ color: "white" }}>
                        <Dropdown style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                            <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                            <Menu.Item className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                        </Menu>)
                        }>
                            <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> {t('clientProfile.clientProfileStep1.CityLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                        </Dropdown>
                    </div>
                </Form.Item>
            </div>
            <div className="col-6 pt-2 pb-2 ">
                <div className="dropdown" style={{ color: "white" }}>
                    <Dropdown style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                        <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                    </Menu>)
                    }>
                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> {t('clientProfile.clientProfileStep1.countyLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                    </Dropdown>
                </div>
            </div>
            <div className="col-6 pt-2 pb-2 ">
                <div className="dropdown" style={{ color: "white" }}>
                    <Dropdown style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                        <Menu.Item className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                    </Menu>)
                    }>
                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}>{t('clientProfile.clientProfileStep1.CityLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                    </Dropdown>
                </div>
            </div>
            <div className="col-6 pt-2 pb-2 ">
                <div className="dropdown" style={{ color: "white" }}>
                    <Dropdown style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                        <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                    </Menu>)
                    }>
                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}>{t('clientProfile.clientProfileStep1.countyLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                    </Dropdown>
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
                    name="introduction"
                    className="pb-3"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your Nickname!',
                        },
                    ]}>
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
                <Form.Item name="introduction">
                    <Input placeholder={t('clientProfile.clientProfileStep1.fbURL')} style={{ borderRadius: 10, height: 64 }} />
                </Form.Item>
            </div>
        </div>
        <div className="row pb-0">
            <div className="col-12 pb-2">
                <label style={{
                    fontFamily: "SpoqaHanSans",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep1.instaLabel')}</label>
            </div>
            <div className="col-12 pt-2">
                <Form.Item name="introduction">
                    <Input placeholder={t('clientProfile.clientProfileStep1.instaURL')} style={{ borderRadius: 10, height: 64 }} />
                </Form.Item>
            </div>
        </div>
        <div className="row pb-0">
            <div className="col-12 pb-2">
                <label style={{
                    fontFamily: "SpoqaHanSans",
                    fontWeight: "bold",
                    fontSize: 20
                }}>{t('clientProfile.clientProfileStep1.otherLabel')}</label>
            </div>
            <div className="col-12 pt-2">
                <Form.Item name="introduction" className="pb-3">
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
            <div className="col-6 d-flex justify-content-end">
                <label style={{
                    fontFamily: "SpoqaHanSans",
                    fontWeight: "bold",
                    fontSize: 15,
                    color: '#9A9A9A'
                
                }}>({t('clientProfile.clientProfileStep1.less10')} - {t('clientProfile.clientProfileStep1.fileFormat')}JPG,PNG,PDF)</label>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="introductoryUpload"
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
            <div className="col-4">
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="introductoryUpload"
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
            <div className="col-4">
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="introductoryUpload"
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
        </div>
        <div className="row pt-5 d-flex justify-content-center align-items-center">
            <div className="col-6">
                <Button style={{ background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }} onClick={() => {
                    Router.push('imageUpload')
                }}>
                    저장
                </Button>
            </div>
        </div>
    </TabPane>
    <TabPane className="row-3" key={2} tab={<span className={styles.tabHeading} >STEP 2</span>} >
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
            <Radio.Group defaultValue="2" className="w-100">
                <Radio.Button value="1" onClick={() => { setDisabled(true) }} className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('clientProfile.clientProfileStep2.noCompany')}</Radio.Button>
                <Radio.Button value="2" onClick={() => { setDisabled(false) }} className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('clientProfile.clientProfileStep2.yesCompany')}</Radio.Button>
            </Radio.Group>
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
                    name="nickName"
                    className="pt-3"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your Nickname!',
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
                    name="nickName"
                    className="pb-3"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your Nickname!',
                        },
                    ]}>
                    <Input.TextArea type="text" rows={4} disabled={disabled}
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
                    name="nickName"
                    className="pb-3"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your Nickname!',
                        },
                    ]}>
                    <Input type="text" disabled={disabled} placeholder={"010-2939-2930"} style={{ borderRadius: 10, height: 64 }} />
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
                <Form.Item name="nickName" className="pb-3"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your Nickname!',
                        },
                    ]}
                >
                    <Input type="text" disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.hashtagLabel')} style={{ borderRadius: 10, height: 64 }} />
                </Form.Item>
            </div>
            <div className="col-2">
                {disabled ? <Button disabled style={{ width: '100%', height: 68, borderRadius: 20 }} onClick={() => {
                    Router.push('imageUpload')
                }}>
                    {t('clientProfile.clientProfileStep2.enterLabel')}
                </Button> : <Button style={{ background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }} onClick={() => {
                    Router.push('imageUpload')
                }}>
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
        <Radio.Group defaultValue="4" className="w-100 mb-5">
            <Radio.Button value="1" disabled={disabled} className={`${stylessec.radiobtntxt}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('search.dropdown.val2')}</Radio.Button>
            <Radio.Button value="2" disabled={disabled} className={stylessec.radiobtntxt}>{t('search.dropdown.val3')}</Radio.Button>
            <Radio.Button value="3" disabled={disabled} className={stylessec.radiobtntxt} >{t('search.dropdown.val4')}</Radio.Button>
            <Radio.Button value="4" disabled={disabled} className={stylessec.radiobtntxt} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px" }}>{t('search.dropdown.val5')}</Radio.Button>
        </Radio.Group>

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
                <div className="col-11">
                    <Form.Item name="register" layout="vertical" rules={[
                        {
                            required: true,
                            message:
                                'Please input your Nickname!',
                        },
                    ]}>
                        <Input type="text" disabled={disabled}
                            placeholder={t('clientProfile.clientProfileStep1.fieldPlaceholder')} className={stylessec.txtbox} />
                    </Form.Item>
                </div>
                <div className="col-1">
                    {disabled ? <img src="/grayplus.svg" alt="Plus Icon" /> : <img src="/plus.svg" alt="Plus Icon" />}

                </div>
            </div>
        </div>
        {disabled ? '' : <div className="pb-5">
            <Button className={stylessec.btn}>기타 <img src="/cross.svg" /></Button>
            <Button className={stylessec.btn} style={{ marginLeft: "10px" }}>웹기획.PM <img src="/cross.svg" /></Button>
        </div>}
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
                    <Dropdown disabled={disabled} style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                        <Menu.Item disabled={disabled} className={stylessec.dropdownitem}>전체</Menu.Item>
                        <Menu.Item disabled={disabled} className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                    </Menu>)
                    }>
                        <Button disabled={disabled} className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> {t('clientProfile.clientProfileStep1.CityLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                    </Dropdown>
                </div>
            </div>
            <div className="col-6 pt-2 pb-2 ">
                <div className="dropdown" style={{ color: "white" }}>
                    <Dropdown disabled={disabled} style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                        <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                    </Menu>)
                    }>
                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}>{t('clientProfile.clientProfileStep1.countyLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                    </Dropdown>
                </div>
            </div>
            <div className="col-6 pt-2 pb-2 ">
                <div className="dropdown" style={{ color: "white" }}>
                    <Dropdown disabled={disabled} style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                        <Menu.Item className={stylessec.dropdownActiveitem}> 시 선택</Menu.Item>
                    </Menu>)
                    }>
                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}> {t('clientProfile.clientProfileStep1.CityLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                    </Dropdown>
                </div>
            </div>
            <div className="col-6 pt-2 pb-2 ">
                <div className="dropdown" style={{ color: "white" }}>
                    <Dropdown disabled={disabled} style={{ borderRadius: 10, height: 64 }} overlay={() => (<Menu>
                        <Menu.Item className={stylessec.dropdownitem}>전체</Menu.Item>
                        <Menu.Item className={stylessec.dropdownitem}> 구 선택</Menu.Item>
                    </Menu>)
                    }>
                        <Button className={stylessec.dropdownBtn} style={{ width: "100%", borderRadius: "20px" }}>{t('clientProfile.clientProfileStep1.countyLabel')} <img src="/arrowdown.svg" style={{ float: "right", paddingTop: "10px" }} /></Button>
                    </Dropdown>
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
                <Form name="register" layout="vertical">
                    <Input type="text"
                        disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyRegisPlaceholder')} className={stylessec.txtbox} />
                </Form>
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
                <Form name="register" layout="vertical">
                    <Input type="text"
                        disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyFoundDate')} className={stylessec.txtbox} />
                </Form>
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
                <Form name="register" layout="vertical">
                    <Input type="text"
                        disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyRepPlaceholder')} className={stylessec.txtbox} />
                </Form>
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
                <Form name="register" layout="vertical">
                    <Input type="text"
                        disabled={disabled} placeholder={t('clientProfile.clientProfileStep2.companyEmpPlaceholder')} className={stylessec.txtbox} />
                </Form>
            </div>
        </div>
        <div className="row pt-5 d-flex justify-content-center align-items-center">
            <div className="col-4">
                <Button style={{ border: '1px solid #00D6E3', color: '#00D6E3', width: '100%', height: 68, borderRadius: 20 }} >
                    {t('clientProfile.clientProfileStep2.prevBtn')}
                </Button>
            </div>
            <div className="col-4">
                <Button disabled={
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                } style={{ background: '#00D6E3', color: '#FFF', width: '100%', height: 68, borderRadius: 20 }} >
                    {t('clientProfile.clientProfileStep2.nextBtn')}
                </Button>
            </div>
        </div>
    </TabPane>
    <TabPane className="row-3" key={3} tab={<span className={styles.tabHeading} >STEP 3</span>} >
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
            <Radio.Group defaultValue="3" className="w-100">
                <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('clientProfile.clientProfileStep3.weekdaysLabel')}</Radio.Button>
                <Radio.Button value="2" className={stylessec.radiobtntxt2}>{t('clientProfile.clientProfileStep3.weekendLabel')}</Radio.Button>
                <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", color: "#00D6E3", fontWeight: "bold" }}>{t('clientProfile.clientProfileStep3.weekday/end')}</Radio.Button>
            </Radio.Group>
        </div>
        <div className="pt-3 pb-2">
            <span style={{
                fontFamily: "SpoqaHanSansbold",
                fontWeight: "bold",
                fontSize: 20
            }}>{t('clientProfile.clientProfileStep3.timeLabel')}<span style={{ color: "red" }}>*</span></span>
        </div>
        <div className="pb-2">
            <Radio.Group defaultValue="3" className="w-100">
                <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>{t('clientProfile.clientProfileStep3.morningLabel')}</Radio.Button>
                <Radio.Button value="2" className={stylessec.radiobtntxt2}>{t('clientProfile.clientProfileStep3.noonLabel')}</Radio.Button>
                <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", color: "#00D6E3", fontWeight: "bold" }}>{t('clientProfile.clientProfileStep3.eveLabel')}</Radio.Button>
            </Radio.Group>
        </div>
        <div className="pt-3 pb-2">
            <span style={{
                fontFamily: "SpoqaHanSansbold",
                fontWeight: "bold",
                fontSize: 20
            }}>{t('clientProfile.clientProfileStep3.projectLabel')}<span style={{ color: "red" }}>*</span></span>
        </div>
        <div className="pb-2">
            <Radio.Group defaultValue="3" className="w-100">
                <Radio.Button value="1" className={`${stylessec.bigbtn}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                    <span className={stylessec.firsttext}>{t('clientProfile.clientProfileStep3.shortTermProject')}</span> <br />
                    <span className={stylessec.sectext}>{t('clientProfile.clientProfileStep3.less3Mon')}</span>
                </Radio.Button>
                <Radio.Button value="3" className={stylessec.bigbtn} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", fontWeight: "bold" }}>
                    <span className={stylessec.firsttext} style={{ color: "#00D6E3" }}>{t('clientProfile.clientProfileStep3.longTermLabel')}</span> <br />
                    <span className={stylessec.sectext} style={{ color: "#00D6E3" }}>{t('clientProfile.clientProfileStep3.more3month')}</span>
                </Radio.Button>
            </Radio.Group>
        </div>
        <div className="pt-3 pb-2">
            <span style={{
                fontFamily: "SpoqaHanSansbold",
                fontWeight: "bold",
                fontSize: 20
            }}>{t('clientProfile.clientProfileStep3.insuranceLabel')}<span style={{ color: "red" }}>*</span></span>
        </div>
        <div className="pb-2">
            <Radio.Group value="2" className="w-100">
                <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>{t('clientProfile.clientProfileStep3.avilbleLabel')}</Radio.Button>
                <Radio.Button value="2" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%", color: "#00D6E3", fontWeight: "bold" }}>{t('clientProfile.clientProfileStep3.unavailable')}</Radio.Button>
            </Radio.Group>
        </div>
        <div className="pt-3 pb-2">
            <span style={{
                fontFamily: "SpoqaHanSansbold",
                fontWeight: "bold",
                fontSize: 20
            }}>{t('clientProfile.clientProfileStep3.workTypeLabel')}<span style={{ color: "red" }}>*</span></span>
        </div>
        <div className="pb-2">
            <Radio.Group value="3" className="w-100">
                <Radio.Button value="1" className={`${stylessec.radiobtntxt2}`} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", width: "50%" }}>{t('clientProfile.clientProfileStep3.fromOfc')}</Radio.Button>
                <Radio.Button value="3" className={stylessec.radiobtntxt2} style={{ borderBottomRightRadius: "10px", borderTopRightRadius: "10px", width: "50%", color: "#00D6E3", fontWeight: "bold" }}>{t('clientProfile.clientProfileStep3.workHome')}</Radio.Button>
            </Radio.Group>
        </div>
        <div className="row pt-5 d-flex justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
            <div className="col-4">
                <Button className={`${styles.commontbtn}`} style={{ border: '1px solid #00D6E3', width: '100%', height: 68, borderRadius: 20 }} >
                    {t('clientProfile.clientProfileStep2.prevBtn')}
                </Button>
            </div>
            <div className="col-4">
                <Button className={`${styles.commontbtn2}`} style={{ width: '100%', height: 68, borderRadius: 20 }} >
                    {t('clientProfile.clientProfileStep3.cmpltBtn')}
                </Button>
            </div>
        </div>
    </TabPane>
</Tabs>
</Form>
