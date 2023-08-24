import React, { Component } from "react";
import Fade from "react-reveal";
import { withTranslation } from 'react-i18next';



class About extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    // const bio = this.props.data.bio;
    
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    const { t } = this.props; // 获取翻译函数


    

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Steve Profile"
              />
            </div>
            <div className="nine columns main-col">
              <h2>{t('about me')}</h2>

              <p>{t('bio')}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>{t('contact details')}</h2>
                  <p className="address">
                    <span>
                      {t('name')}<br />
                      
                      {t('email')}: {email}<br />
                      {t('line1')}<br />
                      {t('line2')}<br />
                      {t('line3')}<br />
                    </span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>{t('download resume')}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default withTranslation()(About);
