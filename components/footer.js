const React = require('react');

class Footer extends React.Component {


    render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div className="footer">
        <div className="footer-first-row">
          <div className="substack-embed">
            <p>Sign up for my newsletter</p>
            <iframe src="https://buriedsignals.substack.com/embed" width="300" height="90" frameBorder="0" scrolling="no" style={{background: '#ECECEC', backgroundColor: '#ECECEC'}}></iframe>
          </div>
          <div className="footer-right">
            <a href="mailto:tom@wallrunners.org">tom@wallrunners.org</a>
          </div>
        </div>
        <div className="footer-second-row">
          <div className="footer-slogan">
            <span>Experiments in visual storytelling.</span>
          </div>
          <div className="footer-social-icons">
            <a href="https://twitter.com/buriedsignals" rel="me" target="_blank">
                <svg className="footer-social-icon" data-icon="twitter" viewBox="0 0 512 512" fill="currentColor">
                  <title>twitter icon</title>
                  <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
                </svg>
              </a>        
              <a href="https://www.linkedin.com/in/tomvaillant" rel="me" target="_blank">
                <svg className="footer-social-icon" data-icon="linkedin" viewBox="0 0 512 512" fill="currentColor">
                  <title>linkedin icon</title>
                  <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
                </svg>
              </a>
            </div>            
          </div>
      </div>
    );
  }
}

module.exports = Footer;
