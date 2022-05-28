/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import headerstyles from '../styles/components/Header.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { RightOutlined, } from '@ant-design/icons';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import blueLogo from '../public/header.svg'
import Router from 'next/router'
import { slide as Menu2 } from 'react-burger-menu'
import { CloseOutlined } from '@ant-design/icons'
import { MenuOutlined } from '@ant-design/icons'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const val = router.query && router.query.loginStateVal
  const loginState = val;
  // const showSettings = (event) => {
  //   event.preventDefault();
  // }
  var isMenuOpen = function (state: any) {
    return state.isOpen;
  };




  return (
    <>
      <Head>
        <title>{t('home.search')}</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={`${styles.container} m-0 p-0`} id="pageWrap">
        <div id="outerMenuID" className="mobile-menu">
          <MenuOutlined />
          <Menu2 onStateChange={isMenuOpen} right pageWrapId={"pageWrap"} outerContainerId={"outerMenuID"} customCrossIcon={<CloseOutlined />}>
            <ul>
              <li className="nav-item">
                <Link href='/'>
                  <a className={`${headerstyles.secondMenuWhite} nav-link`} href="#" > {t('header.searchSideCharacter')}
                  </a>
                </Link>
                <ul className="has-child-menu">
                  <li><a href="#">{t('index.dropdown.val1')}</a></li>
                  <li><a href="#">{t('index.dropdown.val3')}</a></li>
                  <li><a href="#">{t('index.dropdown.val5')}</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href='/'>
                  <a className={`${headerstyles.topMenuWhite} nav-link`} href="#"> {t('header.project')}</a>
                </Link>
                <ul className="has-child-menu">
                  <li><a href="#">{t('index.postDropdown.val1')}</a></li>
                  <li><a href="#">{t('index.postDropdown.val3')}</a></li>
                  <li><a href="#">{t('index.postDropdown.val5')}</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className={`${headerstyles.topMenuWhite} nav-link`} href="#">{t('header.forum')}</a>
              </li>
              <li className="nav-item">
                <a className={`${headerstyles.topMenuWhite} ${headerstyles.mr20} nav-link`} href="#">{t('header.bCoin')}</a>
              </li>


            </ul>
          </Menu2>
        </div>
        <div className={`${styles.heroBG} h-100`}>
          <nav className="navbar navbar-expand-lg navbar-light container-fluid" style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(30px)',
            height: 100
          }}>
            {loginState === 'true' ?
              <div className="header-common">
                <div className="container">
                  <div className="header-logo">
                    <Link href='/'>
                      <a href="#" className="navbar-brand d-flex align-items-center">
                        <Image src={blueLogo} alt="Blue Navbar Logo" />
                      </a>
                    </Link>
                  </div>
                  <div className="header-menu">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link href='/'>
                          <a className={`${headerstyles.secondMenuWhite} nav-link`} href="#" > {t('header.searchSideCharacter')}
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href='/'>
                          <a className={`${headerstyles.topMenuWhite} nav-link`} href="#"> {t('header.project')}</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className={`${headerstyles.topMenuWhite} nav-link`} href="#">{t('header.forum')}</a>
                      </li>
                      <li className="nav-item">
                        <a className={`${headerstyles.topMenuWhite} ${headerstyles.mr20} nav-link`} href="#">{t('header.bCoin')}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-profile">
                    <div className="header-notification"> <img src="/whitebell.svg" className={headerstyles.mr10} />
                    </div>
                    <div className="header-avtar-section">
                      <span className="avtar-image">
                        <img src="/grayprofile.png" style={{ height: "30px", width: "30px" }} />
                      </span>
                      <span className="avtar-name">
                        <a className={`${headerstyles.topMenuWhite} ${headerstyles.mr10} nav-link`} href="#" style={{ color: "#16181C" }}>{loginState === 'true' && t('header.nickName')}</a>
                      </span>
                    </div>
                  </div>
                  <div className="header-action ">
                    <div className="header-action-left">
                      <button className={`${headerstyles.buttonWhite} nav-link d-flex justify-content-center align-items-center`} >{t('header.client')}<img src="/PolygonWhite.svg" style={{ paddingLeft: "10px" }} /></button>
                    </div>
                    <div className="header-action-right">
                      <> <img src="/refreshWhite.svg" />
                        <a className={`${headerstyles.topMenuWhite}`} href="#" style={{ color: "#00D6E3" }} >{t('header.switchSideCharac')}</a></>
                    </div>
                  </div>
                </div>
              </div>

              : <>
                <ul className="navbar-nav" style={{ margin: "auto" }}>
                  <li className="nav-item">
                    <a className="nav-link" href="#" style={{ marginRight: 20 }}> <img src="/header.svg" alt="Header" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <Dropdown overlay={() => (<Menu>
                      <Menu.Item>
                        <Menu.Item >
                          <div className="row">
                            <div className="col-8">
                              <div className={styles.menuItemHeading}>{t('index.dropdown.val1')}</div>
                              <div className={styles.menuSubItemHeading}>{t('index.dropdown.val2')}</div>
                            </div>
                            <div className="col-4 rowspan-2 d-flex justify-content-end align-self-center"><RightOutlined /></div>
                          </div>
                        </Menu.Item>
                      </Menu.Item>
                      <Menu.Item>
                        <Menu.Item>
                          <div className="row">
                            <div className="col-8">
                              <div className={styles.menuItemHeading} style={{ color: "#00D6E3" }}>{t('index.dropdown.val3')}</div>
                              <div className={styles.menuSubItemHeading}>{t('index.dropdown.val4')}</div>
                            </div>
                            <div className="col-4 rowspan-2 d-flex justify-content-end align-self-center"><RightOutlined /></div>
                          </div>
                        </Menu.Item>
                      </Menu.Item>
                      <Menu.Item>
                        <Menu.Item>
                          <div className="row">
                            <div className="col-8">
                              <div className={styles.menuItemHeading}>{t('index.dropdown.val5')}</div>
                              <div className={styles.menuSubItemHeading}>{t('index.dropdown.val6')}</div>
                            </div>
                            <div className="col-4 rowspan-2 d-flex justify-content-end align-self-center"><RightOutlined /></div>
                          </div>
                        </Menu.Item>
                      </Menu.Item>
                    </Menu>)
                    }>
                      <a className={`${styles.topMenu} nav-link`} href="#">    {t('home.search')}</a>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Dropdown overlay={() => (<Menu>
                      <Menu.Item>
                        <Menu.Item onClick={() => {
                          router.locale == "en" ? Router.push(`${'/en/login?islogin=2'}`) : Router.push(`${'/login?islogin=2'}`)
                        }}>
                          <div className="row">
                            <div className="col-8">
                              <div className={styles.menuItemHeading}>{t('index.postDropdown.val1')}</div>
                              <div className={styles.menuSubItemHeading}>{t('index.postDropdown.val2')}</div>
                            </div>
                            <div className="col-4 rowspan-2 d-flex justify-content-end align-self-center"><RightOutlined /></div>
                          </div>
                        </Menu.Item>
                      </Menu.Item>
                      <Menu.Item>
                        <Menu.Item onClick={() => {
                          router.locale == "en" ? Router.push(`${'/en/login?islogin=2'}`) : Router.push(`${'/login?islogin=2'}`)
                        }}>
                          <div className="row">
                            <div className="col-8">
                              <div className={styles.menuItemHeading} >{t('index.postDropdown.val3')}</div>
                              <div className={styles.menuSubItemHeading}>{t('index.postDropdown.val4')}</div>
                            </div>
                            <div className="col-4 rowspan-2 d-flex justify-content-end align-self-center"><RightOutlined /></div>
                          </div>
                        </Menu.Item>
                      </Menu.Item>
                      <Menu.Item>
                        <Menu.Item onClick={() => {
                          router.locale == "en" ? Router.push(`${'/en/login?islogin=2'}`) : Router.push(`${'/login?islogin=2'}`)
                        }}>
                          <div className="row">
                            <div className="col-8">
                              <div className={styles.menuItemHeading}>{t('index.postDropdown.val5')}</div>
                              <div className={styles.menuSubItemHeading}>{t('index.postDropdown.val6')}</div>
                            </div>
                            <div className="col-4 rowspan-2 d-flex justify-content-end align-self-center"><RightOutlined /></div>
                          </div>
                        </Menu.Item>
                      </Menu.Item>
                    </Menu>)
                    }>
                      <a className={`${styles.topMenu} nav-link`} href="#">{t('home.post')}</a>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <a className={`${styles.topMenu} nav-link`} href="#">{t('home.forum')}</a>
                  </li>
                  <li className="nav-item">
                    <a className={`${styles.topMenu} nav-link`} href="#">{t('home.bcoin')}</a>
                  </li>
                </ul>
                <div className="col-md-3">
                  <button className={`${styles.startedButton} btn my-2 my-sm-0 `} style={{}} type="submit" onClick={() => {
                    router.locale == "en" ? Router.push(`${'/en/login?islogin=2'}`) : Router.push(`${'/login?islogin=2'}`)
                  }}>{t('home.start')}</button>
                </div> </>}
          </nav>
          <section className={`${styles.section} container-fluid h-100 text-center d-flex justify-content-center align-items-center`}>
            <div className="container text-center">
              <h1 className={`${styles.fontStyle} ${styles.heading}`}>
                <img src="/h1.svg" />
              </h1>
              <h3 className={`${styles.fontStyle} ${styles.subHeading}`}>
                <img src="/h2.svg" />
              </h3>
              <h3 className={styles.subContent}>{t('home.staff')}</h3>
            </div>
          </section>
        </div>
      </div>
      <div className={`${styles.sectionTwo} container-fluid h-100`}>
        <div className={`${styles.sectionTwo} col4-cmn-cntr`}>
          <div className="row">
            <div className="col-md-8">
              <p className={styles.search}>
                {t('home.search')}
              </p>
              <p className={styles.para}>
                {t('home.first.para1')}
                {t('home.first.para1a')}
              </p>
              <p className={styles.paraTwo} style={{ marginTop: "1%" }}>
                {t('home.first.para2')} {t('home.first.para2a')}
              </p>
              <p className={styles.paraThree} >
                {t('home.search')} &gt;
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <div className="d-flex justify-content-end align-items-start">
                <img src="/Group1.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.sectionTwo} col4-cmn-cntr`}>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-start align-items-center">
              <div className="d-flex justify-content-start align-items-start">
                <img src="/Group2.svg" />
              </div>
            </div>
            <div className="col-md-8">
              <p className={styles.talk}> {t('home.second.para4')}</p>
              <p className={styles.paraEnd}>
                {t('home.second.para1')}
              </p>
              <p className={styles.paraTwoEnd} style={{ marginTop: "1%" }}>
                {t('home.second.para2')}
              </p>
              <p className={styles.paraThreeEnd}>
                {t('home.second.para3')} &gt;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sectionThree} container-fluid h-100`} style={{ backgroundColor: "#00D6E3" }}>
        <div className={`${styles.sectionTwo} col4-cmn-cntr`}>
          <div className="row">
            <div className="col-md-8">
              <p className={`${styles.profile} text-white`}>
                {t('home.third.para1')}
              </p>
              <p className={`${styles.para} text-white`}>
                {t('home.third.para2')}
              </p>
              <p className={`${styles.paraThree} text-white`} style={{ marginTop: "1%" }}>
                {t('home.third.para2')}
              </p>
              <p className={`${styles.paraThree} text-white`} style={{ marginTop: "1%" }}>
                {t('home.third.para3')}
              </p>
              <p className={`${styles.paraThree} text-white`} >
                {t('home.third.para4')} &gt;
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <div className="d-flex justify-content-end align-items-start">
                <img src="/Group4.svg" />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.sectionTwo} col4-cmn-cntr`}>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-start align-items-center">
              <div className="d-flex justify-content-start align-items-start">
                <img src="/Group5.svg" />
              </div>
            </div>
            <div className="col-md-8">
              <p className={`${styles.talk} text-white`}> {t('home.forth.para1')}</p>
              <p className={`${styles.paraEnd} text-white`}>
                {t('home.forth.para2')}
              </p>
              <p className={`${styles.paraTwoEnd} text-white`} style={{ marginTop: "1%" }}>
                {t('home.forth.para3')}
              </p>
              <p className={`${styles.paraThreeEnd} text-white`}>
                {t('home.forth.para4')}&gt;
              </p>
            </div>
          </div>
        </div>
      </div>



      <footer className={`${router.locale == 'en' ? 'container-fluid pt-5 pb-5 pl-2 pr-2 footer-main in-english' : 'container-fluid pt-5 pb-5 pl-2 pr-2 footer-main'}`} style={{ backgroundColor: "#F1F1F1" }}>
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/footerLogo.svg" />
          </div>
          <div className="footer-content">
            <div className="ftr-menu-block">
              <p className={styles.footerFirst}> {t('home.footer.para1')}</p>
              <p className={styles.footerSecond}> {t('home.footer.para2')}</p>
              <p className={styles.footerSecond}> {t('home.footer.para3')}</p>
            </div>
            <div className="ftr-menu-block">
              <p className={styles.footerFirst}> {t('home.footer.para4')}</p>
              <p className={styles.footerSecond}> {t('home.footer.para5')}</p>
            </div>
            <div className="ftr-menu-block">
              <p className={styles.footerFirst}> {t('home.footer.para6')}</p>
              <p className={styles.footerSecond}> {t('home.footer.para7')}</p>
            </div>
            <div className="ftr-menu-block">
              <p className={styles.footerFirst}> {t('home.footer.para8')}</p>
              <p className={styles.footerSecond}> {t('home.footer.para9')}</p>
            </div>
            <p className="main-footer-copyright">
              {t('home.footer.para1a')}
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Home