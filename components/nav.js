const React = require('react');

class Nav extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
        this.state = {
          showSideDrawer: true,
        }
    }

    sideDrawerToggleHandler() {
        this.setState({
            showSideDrawer: !this.state.showSideDrawer 
        });
        this.toggleHamburger();
    }

    toggleHamburger() {
        const hamburger = document.getElementById("hamburger")
        const sideDrawer = document.getElementById("side-drawer")
        if (this.state.showSideDrawer) {
            hamburger.classList.add("is-active");
            sideDrawer.classList.add("open");
        } else {
            hamburger.classList.remove("is-active");
            sideDrawer.classList.remove("open");
        }
    }

    render() {
    // const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <span className="nav-blue"></span>
                <a href="#">
                    buried signals
                </a>
            </div>

            <div className="navbar-right">
                <a href="https://www.buymeacoffee.com/buriedsignals" target="_blank">
                <svg width="210" height="308" viewBox="0 0 210 308" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <g id="Canvas" transform="translate(-3824 -418)">
                    <g id="Page 1">
                    <g id="Fill 1">
                    <use href="#path0_fill" transform="translate(3851.41 481.289)" fill="#FF9100"/>
                    </g>
                    <g id="Fill 2">
                    <use href="#path1_fill" transform="translate(3851.41 481.289)" fill="#FFDD00"/>
                    </g>
                    <g id="Fill 3">
                    <use href="#path2_fill" transform="translate(3829.34 459.215)" fill="#FFFFFF"/>
                    </g>
                    <g id="Stroke 4">
                    <use href="#path3_stroke" transform="translate(3829.34 459.215)"/>
                    </g>
                    <g id="Fill 6">
                    <use href="#path4_fill" transform="translate(3852.1 423.345)" fill="#FFFFFF"/>
                    </g>
                    <g id="Group 11">
                    <g id="Stroke 7">
                    <use href="#path5_stroke" transform="translate(3852.1 423.345)" fill="#050505"/>
                    </g>
                    <g id="Stroke 9">
                    <use href="#path6_stroke" transform="translate(3837.62 481.289)"/>
                    </g>
                    </g>
                    <g id="Fill 12">
                    <use href="#path7_fill" transform="translate(3834.17 548.891)" fill="#FFFFFF"/>
                    </g>
                    <g id="Stroke 13">
                    <use href="#path8_stroke" transform="translate(3834.17 548.891)"/>
                    </g>
                    </g>
                    </g>
                    <defs>
                    <path id="path0_fill" fill="evenodd" d="M 77.2414 0.464935L 0 0L 37.931 239.366L 46.2069 239.366L 122.069 239.366L 130.345 239.366L 168.276 0L 77.2414 0.464935Z"/>
                    <path id="path1_fill" fill="evenodd" d="M 77.2414 0.464935L 0 0L 37.931 239.366L 46.2069 239.366L 102.759 239.366L 111.034 239.366L 148.966 0L 77.2414 0.464935Z"/>
                    <path id="path2_fill" fill="evenodd" d="M 0 22.0741L 199.31 22.0741L 199.31 0L 0 0L 0 22.0741Z"/>
                    <path id="path3_stroke" d="M 0 22.0741L -5.17241 22.0741L -5.17241 27.2465L 0 27.2465L 0 22.0741ZM 199.31 22.0741L 199.31 27.2465L 204.483 27.2465L 204.483 22.0741L 199.31 22.0741ZM 199.31 0L 204.483 0L 204.483 -5.17241L 199.31 -5.17241L 199.31 0ZM 0 0L 0 -5.17241L -5.17241 -5.17241L -5.17241 0L 0 0ZM 0 27.2465L 199.31 27.2465L 199.31 16.9017L 0 16.9017L 0 27.2465ZM 204.483 22.0741L 204.483 0L 194.138 0L 194.138 22.0741L 204.483 22.0741ZM 199.31 -5.17241L 0 -5.17241L 0 5.17241L 199.31 5.17241L 199.31 -5.17241ZM -5.17241 0L -5.17241 22.0741L 5.17241 22.0741L 5.17241 0L -5.17241 0Z"/>
                    <path id="path4_fill" fill="evenodd" d="M 137.931 0L 90.3448 0L 62.069 0L 14.4828 0L 0 33.1111L 62.069 33.1111L 90.3448 33.1111L 152.414 33.1111L 137.931 0Z"/>
                    <path id="path5_stroke" d="M 137.931 0L 142.67 -2.0728L 141.314 -5.17241L 137.931 -5.17241L 137.931 0ZM 14.4828 0L 14.4828 -5.17241L 11.0996 -5.17241L 9.74384 -2.0728L 14.4828 0ZM 0 33.1111L -4.73892 31.0383L -7.90797 38.2835L 0 38.2835L 0 33.1111ZM 152.414 33.1111L 152.414 38.2835L 160.322 38.2835L 157.153 31.0383L 152.414 33.1111ZM 137.931 -5.17241L 90.3448 -5.17241L 90.3448 5.17241L 137.931 5.17241L 137.931 -5.17241ZM 90.3448 -5.17241L 62.069 -5.17241L 62.069 5.17241L 90.3448 5.17241L 90.3448 -5.17241ZM 62.069 -5.17241L 14.4828 -5.17241L 14.4828 5.17241L 62.069 5.17241L 62.069 -5.17241ZM 9.74384 -2.0728L -4.73892 31.0383L 4.73892 35.1839L 19.2217 2.0728L 9.74384 -2.0728ZM 0 38.2835L 62.069 38.2835L 62.069 27.9387L 0 27.9387L 0 38.2835ZM 62.069 38.2835L 90.3448 38.2835L 90.3448 27.9387L 62.069 27.9387L 62.069 38.2835ZM 90.3448 38.2835L 152.414 38.2835L 152.414 27.9387L 90.3448 27.9387L 90.3448 38.2835ZM 157.153 31.0383L 142.67 -2.0728L 133.192 2.0728L 147.675 35.1839L 157.153 31.0383Z"/>
                    <path id="path6_stroke" d="M 91.0345 0.464935L 91.0081 5.63728L 91.0345 5.63742L 91.0609 5.63728L 91.0345 0.464935ZM 0 0L 0.0264164 -5.17235L -6.06152 -5.20344L -5.10867 0.809544L 0 0ZM 37.931 239.366L 32.8224 240.175L 33.5137 244.538L 37.931 244.538L 37.931 239.366ZM 144.138 239.366L 144.138 244.538L 148.555 244.538L 149.247 240.175L 144.138 239.366ZM 182.069 0L 187.178 0.809544L 188.13 -5.20344L 182.043 -5.17235L 182.069 0ZM 91.0609 -4.70741L 0.0264164 -5.17235L -0.0264164 5.17235L 91.0081 5.63728L 91.0609 -4.70741ZM -5.10867 0.809544L 32.8224 240.175L 43.0397 238.556L 5.10867 -0.809544L -5.10867 0.809544ZM 37.931 244.538L 46.2069 244.538L 46.2069 234.193L 37.931 234.193L 37.931 244.538ZM 46.2069 244.538L 135.862 244.538L 135.862 234.193L 46.2069 234.193L 46.2069 244.538ZM 135.862 244.538L 144.138 244.538L 144.138 234.193L 135.862 234.193L 135.862 244.538ZM 149.247 240.175L 187.178 0.809544L 176.96 -0.809544L 139.029 238.556L 149.247 240.175ZM 182.043 -5.17235L 91.0081 -4.70741L 91.0609 5.63728L 182.095 5.17235L 182.043 -5.17235Z"/>
                    <path id="path7_fill" fill="evenodd" d="M 188.276 0L 97.4062 0L 90.8697 0L 0 0L 16.9972 95.1944L 94.1379 94.3646L 171.279 95.1944L 188.276 0Z"/>
                    <path id="path8_stroke" d="M 188.276 0L 193.368 0.90917L 194.454 -5.17241L 188.276 -5.17241L 188.276 0ZM 0 0L 0 -5.17241L -6.17777 -5.17241L -5.09188 0.90917L 0 0ZM 16.9972 95.1944L 11.9054 96.1036L 12.6749 100.414L 17.0529 100.367L 16.9972 95.1944ZM 94.1379 94.3646L 94.1936 89.1925L 94.1379 89.1919L 94.0823 89.1925L 94.1379 94.3646ZM 171.279 95.1944L 171.223 100.367L 175.601 100.414L 176.371 96.1036L 171.279 95.1944ZM 188.276 -5.17241L 97.4062 -5.17241L 97.4062 5.17241L 188.276 5.17241L 188.276 -5.17241ZM 97.4062 -5.17241L 90.8697 -5.17241L 90.8697 5.17241L 97.4062 5.17241L 97.4062 -5.17241ZM 90.8697 -5.17241L 0 -5.17241L 0 5.17241L 90.8697 5.17241L 90.8697 -5.17241ZM -5.09188 0.90917L 11.9054 96.1036L 22.0891 94.2853L 5.09188 -0.90917L -5.09188 0.90917ZM 17.0529 100.367L 94.1936 99.5367L 94.0823 89.1925L 16.9416 90.0223L 17.0529 100.367ZM 94.0823 99.5367L 171.223 100.367L 171.334 90.0223L 94.1936 89.1925L 94.0823 99.5367ZM 176.371 96.1036L 193.368 0.90917L 183.184 -0.90917L 166.187 94.2853L 176.371 96.1036Z"/>
                    </defs>
                </svg>
                </a>
                <div className="three col">
                    <div className="hamburger" id="hamburger" onClick={this.sideDrawerToggleHandler.bind()}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </div>
        <div id="side-drawer" className="overlay">
            <nav className="overlay-menu">
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/now">Now</a></li>
                    <li><a href="/consulting">Consulting</a></li>
                    <li><a href="https://buriedsignals.substack.com/p/coming-soon" target="_blank">Subscribe</a></li>
                </ul>
            </nav>
        </div>
      </div>  
    );
  }
}

module.exports = Nav;
