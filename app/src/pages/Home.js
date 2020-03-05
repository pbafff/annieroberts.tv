import React, { Component } from 'react';

class Home extends Component {
    fadeout() {
        const eyeInDark = document.getElementById('eye-in-dark');
        const logo = document.getElementById('logo');
        const title = document.getElementById('site-title');
        const description = document.getElementById('site-description');
        const diamond = document.getElementById('diamond');
        setTimeout(() => {eyeInDark.classList.add('fadeout')}, 750);
        setTimeout(() => {
            logo.classList.add('fadein');
            title.classList.add('fadein');
            description.classList.add('fadein');
        }, 1250);
        setTimeout(() => {diamond.classList.add('fadein')}, 3750);
        setTimeout(() => {eyeInDark.style.visibility = 'hidden';}, 2500);
    }

    scroll_down() {
        document.getElementById('text-1').scrollIntoView({behavior: "smooth", block: "center"});
    }

    componentDidMount() {
        this.fadeout();
    }

    render() {
        return (
            <div id="home">
                <header style={{marginTop: '11vh'}}>
                    <div id="banner" style={{backgroundImage: "url('banner.png')"}}>
                        <div id="eye-in-dark" style={{backgroundImage: "url('eye-in-dark.png')"}}/>
                    </div>
                </header>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div id="site-branding" style={{marginRight: "35px", transform: 'translate(0)', position: 'absolute', top: '100px'}}>
                        <div id="logo">
                            <img src="annie2.png" alt={"logo"}/>
                        </div>
                        <h1 id="site-title" style={{marginTop: "220px", marginBottom: "0", fontSize: "2.0736rem", textAlign: 'center'}}>
                            Annie Roberts
                        </h1>
                        <p id="site-description" style={{marginTop: "2px", fontSize: "1.0736rem", textAlign: 'center'}}>
                            LGBTQIA+ Influencer
                        </p>
                    </div>
                </div>
                <div id={"diamond-wrapper"}>
                    <img id={"diamond"}
                         src="diamond.png"
                         alt={"diamond"}
                         onClick={this.scroll_down}/>
                </div>
                <div style={{backgroundColor: "black",
                    opacity: '1',
                    width: '101%',
                    height: '30%',
                    transform: 'translateZ(-0.5px) scale(1.5)',
                    position: 'absolute',
                    top: '895px'}}/>
                <div id={"home-block-2"} className={"home-block"}>
                    <iframe id={"fluid"} src={'fluid.html'} style={{width: '50%', opacity: '0.9'}} frameBorder={'0'}/>
                    <div id={"image-wrapper"}>
                        <div style={{backgroundImage: 'url("headphones.jpg")'}}/>
                        <div style={{backgroundImage: 'url("catears.jpg")'}}/>
                        <div style={{backgroundImage: 'url("headshot.jpg")'}}/>
                    </div>
                </div>
                <div id={"description-wrapper"}>
                    <div id={"text-1"}>
                        <h2>Streaming</h2>
                        <p>
                            I’m a full-time streamer on Twitch. My dream is to eventually develop a “show”,
                            using the talents that I learn through streaming: graphic design, video editing,
                            entertaining, acting, camera, and audio production.
                            My live times are available on my Twitch!
                        </p>
                    </div>
                    <div id={"text-2"}>
                        <h2>Music</h2>
                        <p>
                            I play guitar and have been in various bands since middle school. I also play piano,
                            bass, drums, & sing. For over 8 years I have worked with multiple mixing programs
                            such as Pro Tools, Ableton, and FL Studio. One day I hope to write my own music, as
                            well as produce video.
                        </p>
                    </div>
                    <div id={"text-3"}>
                        <h2>Modelling</h2>
                        <p>
                            Recently I decided to branch into other types of art, photography.
                            I shoot photos using a Sony a6300 mirrorless camera and do amateur modeling & cosplay
                            on my Patreon. I currently take all the photos by myself, but have an ultimate goal to
                            find a dedicated photographer.
                        </p>
                    </div>
                </div>
                <footer className={"home-block"}>
                    <div style={{backgroundImage: 'url("background.png")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '650px'}}/>
                </footer>
            </div>
        )
    }
}

export default Home;
