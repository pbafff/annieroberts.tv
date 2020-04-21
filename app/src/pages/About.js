import React, {Component} from 'react';
import './About.css';

class About extends Component {

    render() {
        return (
            <div id={"About"}>
                <div className={'container'}>
                    <h2 className={'title'}>My name is Annie Roberts</h2>
                    <p className={'text'}>
                        I am a 23 year old trans woman from Michigan. I create content to give representation to the LGBTQIA+ community.
                        A lot of current LGBT media representation contains harmful conspiracies, caricatures,
                        often produced by people with malicious intent. I want to give a real portrayal of a transgender person, by being a charming, skilled, & down to earth human being. One of my ultimate goals is to eventually raise $1 million for charity.
                    </p>
                    <img alt={'annie'} className={'image'} src={"EUs9RyFXsAI9Q2k.jpg"}/>
                </div>
            </div>
        )
    }
}

export default About;
