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
                    <img src="../static/images/coffee.jpg"></img>
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
