import React, {Component} from 'react';
import './WhatsNew.css';

class WhatsNew extends Component {
    render() {
        return (
               <div id={'embed-container'}>
                   <iframe className={'embeds'} src={"twitterfeed.html"} frameBorder="0"/>
                   <iframe className={'embeds'} src={"instagram.html"} frameBorder="0"/>
               </div>
        )
    }
}

export default WhatsNew;
