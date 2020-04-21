import React, {Component} from 'react';
import './Contact.css';

class About extends Component {

    render() {
        return (
            <div id={"Contact"}>
                <div className={'container'}>
                    <h2 className={'title'}>Get in touch</h2>
                    <p className={'text'}>
                        Let’s talk 👋 Don’t hesitate to reach out! I’m always interested in new opportunities. Shoot me
                        an email at:
                        <span>
                            <a className={'link'} href={"mailto:annedromedia@gmail.com"}>
                             <br/> annedromedia<br/> @gmail.com
                            </a>
                        </span>
                    </p>
                    <img alt={'annie'} className={'image'} src={"IMG_20200118_151030_865.jpg"}/>
                </div>
            </div>
        )
    }
}

export default About;
