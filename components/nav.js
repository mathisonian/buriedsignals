const React = require('react');

class Nav extends React.Component {
  
    render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="#">
                <h4>Buried Signals</h4>
            </a>
            </div>
        
            <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
                <li><a href="#">About</a></li>
                <li><a href="#">Now</a></li>
                <li><a href="#">Consulting</a></li>
                <li><a href="#">Subscribe</a></li>
            </ul>
            </div>
        </div>
      </nav>  
    );
  }
}

module.exports = Nav;
