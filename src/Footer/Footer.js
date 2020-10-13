import React from 'react';
import classes from './Footer.module.css';

function Footer(){
    return(
        <div className={classes.footerContainer}>
        <div className={classes.footerItemContainer}>
            <div className={classes.footerLinkSection}>
            <div className={classes.footerSectionHeading}>
                Edyoda
            </div>
            <div className={classes.footerItem}><a href="https://university.edyoda.com/about/">About Us</a></div>
            <div className={classes.footerItem}><a href="https://university.edyoda.com/contact-us/">Contact Us</a></div>
            <div className={classes.footerItem}><a href="https://university.edyoda.com/terms/">Terms Of Use</a></div>
            <div className={classes.footerItem}><a href="https://university.edyoda.com/privacy/">Privacy Policy</a></div>
        </div>
        
        <div className={classes.footerLinkSection}>
            <div className={classes.footerSectionHeading}>
                Resources
            </div>
            <div className={classes.footerItem}><a target="_blank" rel="noopener noreferrer" href="https://www.edyoda.com/courses/all"> Courses </a></div>
            <div className={classes.footerItem}><a target="_blank" rel="noopener noreferrer" href="https://www.edyoda.com/videos/all"> Learning Videos </a></div>
            <div className={classes.footerItem}><a target="_blank" rel="noopener noreferrer" href="https://www.edyoda.com/stories"> EdYoda Stories </a></div>
            <div className={classes.footerItem}><a target="_blank" href="https://university.edyoda.com">University</a></div>
        </div>
        
        <div className={classes.footerLinkSection}>
            <div className={classes.footerSectionHeading}>
                For Enterprises
            </div>
            <div className="footer-item"><a target="_blank" rel="noopener noreferrer" href="https://www.edyoda.com/enterprise/hiring"> Hire EdYoda Graduates </a></div>
            <div className={classes.footerSectionHeading}>
                Quick Links
            </div>
            <div className={classes.footerItem}><a href="https://www.edyoda.com/learn-and-earn" target="_blank" rel="noopener noreferrer">Learn and Earn</a></div>
            <div className={classes.footerItem}><a href="https://www.edyoda.com/become-learning-enabler">Become a Learning-Enabler</a></div>
            <div className={classes.footerItem}><a href="https://www.edyoda.com/learning-enabler-tips">Tips for Learning-Enabler</a></div>
            <div className={classes.footerItem}><a href="https://www.edyoda.com/requestnewtopic">Request New Topic</a></div>
        </div>
        <div className={classes.footerLinkSection}>
            <div className={classes.footerSectionHeading}>
                Connect
            </div>
            <div className={classes.footerItem}>
                2nd Floor #188, Survey No. - 123/1,
                Incubes Building Next to McDonalds,
                ITPL Main Rd, Brookefield,
                Bengaluru, Karnataka-560037,
                India
            </div>
            <div className={classes.footerItemWithIcon}>
                <img src="https://assessments.edyoda.com/static/images/Email.svg" alt="email" />
                hello@edyoda.com
            </div>
            <div className={classes.footerItemWithIcon}>
                <img src="https://assessments.edyoda.com/static/images/Call.svg" alt="call"/>
                +91 8971554184
            </div>
            <div className={classes.footerSectionSocialLinks}>
                <img src="https://assessments.edyoda.com/static/images/landmark.png" alt="lo"  className={classes.land}/>
                <img src="https://assessments.edyoda.com/static/images/twitter.svg" alt="tw"  className={classes.tweet}/>
                <img src="https://assessments.edyoda.com/static/images/fbimage.png" alt="fb"  className={classes.fb}/>
                <img src="https://assessments.edyoda.com/static/images/linkden.png" alt="li"  className={classes.linkden}/>
            </div>
            <div className={classes.footerSectionCopyright}>
                © 2020  zekeLabs Technologies Private Limited
            </div>
        </div>

        </div>
    </div>
    
    
    )
}

export default Footer;