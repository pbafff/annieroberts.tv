import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    fadeout() {
        const eyeInDark = document.getElementById('eye-in-dark');
        const eyeHalfOpen = document.getElementById('eye-half-open-2');
        const logo = document.getElementById('logo');
        const title = document.getElementById('site-title');
        const description = document.getElementById('site-description');
        const diamond = document.getElementById('diamond');
        const socials = document.getElementsByClassName('socials');
        setTimeout(() => {
            eyeHalfOpen.style.visibility = 'hidden';
        }, 750);
        setTimeout(() => {
            eyeInDark.classList.add('fadeout');
        }, 1250);
        setTimeout(() => {
            logo.classList.add('fadein');
            title.classList.add('fadein');
            description.classList.add('fadein');
        }, 1750);
        setTimeout(() => {
            Array.prototype.forEach.call(socials, (x) => {
                x.classList.add('fadein');
            });
            diamond.classList.add('fadein');
        }, 4250);
        setTimeout(() => {
            eyeInDark.style.visibility = 'hidden';
        }, 3000);
    }

    intro_fade() {
        const eyeClosed = document.getElementById('eye-closed');
        //const eyeHalfOpen = document.getElementById('eye-half-open');
        setTimeout(() => {
            //eyeClosed.classList.add('fadeout');
            eyeClosed.style.visibility = 'hidden';
        }, 750);
        // setTimeout(() => {
        //     eyeHalfOpen.classList.add('fadeout')
        // }, 2250);
    }

    scroll_down() {
        document.getElementById('text-1').scrollIntoView({behavior: "smooth", block: "center"});
    }

    componentDidMount() {
        document.getElementsByTagName('body')[0].style.height = '101vh';
        this.intro_fade();
        setTimeout(() => {
            this.setState({isLoading: false});
            this.fadeout();
            document.getElementsByTagName('body')[0].style.height = 'inherit';
            }, 750);
    }

    homepage() {
        return (
            <div id="home">
                <header>
                    <div id="banner" style={{backgroundImage: "url('banner.png')"}}>
                        <div id="eye-in-dark" style={{backgroundImage: "url('eye-in-dark.png')"}}>
                            <div id={"eye-half-open-2"} style={{backgroundImage: 'url("eye-half-open.png")', backgroundPosition: 'center center', height: '69vh', backgroundSize: 'cover'}}/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div id="site-branding">
                                <div id="logo">
                                    <img src="annie2.png" alt={"logo"}/>
                                </div>
                                <h1 id="site-title">
                                    Annie Roberts
                                </h1>
                                <p id="site-description">
                                    LGBTQIA+ Influencer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: "black",
                        opacity: '1',
                        width: '100%',
                        height: '15.4vh',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingTop: '7.68vh'
                    }}
                    >
                        <a className={"socials"} href={"https://youtube.com/annedro"} target="_blank">
                            <svg height="50px" viewBox="0 -77 512.00213 512" width="50px" xmlns="http://www.w3.org/2000/svg">
                                <title>Youtube</title>
                                <path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00"/>
                                <path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#000"/>
                            </svg>
                        </a>
                        <a className={"socials"} href={"https://patreon.com/annieroberts/"} target="_blank">
                            <svg viewBox="0 0 567.18 545.8" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
                                <title>Patreon</title>
                                <circle cx="362.59" cy="204.59" fill="#e85b46" r="204.59"/>
                                <path d="M0 0h100v545.8H0z" fill="#003049"/>
                            </svg>
                        </a>
                        <a className={"socials"} href={"https://twitch.tv/annie"} target="_blank">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 viewBox="0 0 2400 2800" style={{width: '50px'}}>
                                <title>Twitch</title>
                                <g>
                                    <polygon className="st0"
                                             points="2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200 	"/>
                                    <g>
                                        <g id="Layer_1-2">
                                            <path className="st1" d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600
                                            V1300z"/>
                                            <rect x="1700" y="550" className="st1" width="200" height="600"/>
                                            <rect x="1150" y="550" className="st1" width="200" height="600"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a className={"socials"} href={"https://instagram.com/annie_dro"} target="_blank">
                            <svg x="0px" y="0px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{width: '50px'}}>
                                <title>Instagram</title>
                                <path style={{fill: 'purple'}} d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"/>
                            </svg>
                        </a>
                        <a className={"socials"} href={"https://twitter.com/Annie_Dro"} target="_blank">
                            <svg id="Logo_FIXED" data-name="Logo — FIXED" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="20 0 300 300" x="0px" y="0px" style={{width: '50px'}}>
                                <title>Twitter</title>
                                <path className="cls-2"
                                      d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>
                            </svg>
                        </a>
                    </div>
                    <div id={"diamond-wrapper"}>
                        <img id={"diamond"}
                             src="diamond.png"
                             alt={"diamond"}
                             onClick={this.scroll_down}/>
                    </div>
                </header>
                <main>
                    <div id={"home-block-2"} className={"home-block"}>
                        <iframe id={"fluid"} src={'fluid.html'} style={{width: '50%', opacity: '0.9'}} frameBorder={'0'}/>
                        <div id={"image-wrapper"}>
                            <div style={{backgroundImage: 'url("IMG_20190930_234351.jpg")'}}/>
                            <div style={{backgroundImage: 'url("Snapchat-1510533050.jpg")'}}/>
                            <div style={{backgroundImage: 'url("Snapchat-382335841.jpg")'}}/>
                        </div>
                    </div>
                    <div id={"description-wrapper"}>
                        <div id={"text-1"}>
                            <h2>Streaming</h2>
                            <p>
                                I’m a full-time streamer on Twitch. My dream is to eventually develop a “show”,
                                using the talents that I learn through streaming: graphic design, video editing,
                                entertaining, acting, camera, and audio production.
                                My live times are available on <span><a href={"https://twitch.tv/annie"} style={{textDecoration: 'none', color: '#9146FF'}}>my Twitch</a></span>!
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
                </main>
                <footer>
                    <div id={"catgirl"} style={{backgroundImage: 'url("annietextfinal.png")'}}/>
                    <div id={"sponsors-and-footer-socials"}>
                        <h2 style={{textAlign: 'center', marginBottom: '0'}}>
                            Sponsors
                        </h2>
                        <div id={"sponsors-wrapper"}>
                            <a href={"https://twitch.tv"}>
                                <img src={"Twitch_UnextrudedWordmarkPurple.png"} style={{width: '175px'}} alt={"Twitch"}/>
                            </a>
                            <a href={"https://mayhem.overwatchleague.com"}>
                                <img src={"1200px-Florida_Mayhem_logo.svg.png"} style={{width: '175px'}} alt={"Florida Mayhem"}/>
                            </a>
                            <a href={"https://discordapp.com"}>
                                <img src={"Discord-Logo+Wordmark-Color.png"} style={{width: '175px'}} alt={"Discord"}/>
                            </a>
                            <a href={"https://secretlab.co"}>
                                <img src={"secretlabslogo-1.png"} style={{width: '175px'}}  alt={"Secret Lab"}/>
                            </a>
                        </div>
                        <p style={{textAlign: 'center', fontSize: '1.3em', marginTop: '55px'}}>
                            Welcome to My Experience
                        </p>
                        <div id={"footer-socials-wrapper"}>
                            <a className={"footer-socials"} href={"https://youtube.com/annedro"} style={{color: '#800000'}} target="_blank">
                                youtube
                            </a>
                            <a className={"footer-socials"} href={"https://patreon.com/annieroberts/"} style={{color: '#742d23'}} target="_blank">
                                patreon
                            </a>
                            <a className={"footer-socials"} href={"https://twitch.tv/annie"} style={{color: '#492380'}} target="_blank">
                                twitch
                            </a>
                            <a className={"footer-socials"} href={"https://instagram.com/annie_dro"} style={{color: '#400040'}} target="_blank">
                                instagram
                            </a>
                            <a className={"footer-socials"} href={"https://twitter.com/Annie_Dro"} style={{color: '#0e5179'}} target="_blank">
                                twitter
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

    intro() {
        return (
            <div id={"eye-half-open"} style={{backgroundImage: 'url("eye-half-open.png")', backgroundPosition: 'center center', height: '69vh', backgroundSize: 'cover', marginTop: '-52px'}}>
                <div id={"eye-closed"} style={{backgroundImage: 'url("eye-closed.png")', backgroundPosition: 'center center', height: '69vh', backgroundSize: 'cover'}}/>
            </div>
        )
    }

    render() {
        return (
            this.state.isLoading ? this.intro() : this.homepage()
        )
    }
}

export default Home;
