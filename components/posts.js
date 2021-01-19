const React = require('react');
import ARTICLES from "./articles";

class Posts extends React.PureComponent {

constructor(props) {
    super(props);
    this.toggleInteractive = this.toggleInteractive.bind(this);
}

toggleInteractive(article) {
    if (article.interactive) {
        return (
            <div className="interactive-icon article-tag">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="49.98" height="43.758" viewBox="0 0 980 858">
                    <image width="980" height="858" style={{fill: "#4F4F4F"}} href="data:img/png;base64,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"/>
                </svg>
            </div>
        );
    } else {
        return null
    }
}

render() {
    const articles = ARTICLES;
    return (
        <div className="articles-list">
            <div className="article-wrapper">
                <div className="article-labels">
                    {this.toggleInteractive(articles[0])}
                    <p className="article-tag">{articles[0].category}</p>
                </div>
                <div className="article-title">
                    <a href={`${articles[0].slug}`}>
                        <h2>{articles[0].title}</h2>
                    </a>
                </div>
                <div className="article-contributors">{articles[0].contributors != '' ? "Contributors: " + articles[0].contributors : null }</div>
                <div className="article-description">
                    {articles[0].description + " "} 
                    {/* <a href={`${articles[0].slug}`}>Continue reading...</a> */}
                </div>
            </div>
            <div className="article-wrapper">
                <div className="article-labels">
                    {this.toggleInteractive(articles[1])}
                    <p className="article-tag">{articles[1].category}</p>
                </div>
                <div className="article-title">
                    <a href={`${articles[1].slug}`}>
                        <h2>{articles[1].title}</h2>
                    </a>
                </div>
                <div className="article-contributors">{articles[1].contributors !== '' ? "Contributors: " + articles[1].contributors : null }</div>
                <div className="article-description">
                    {articles[1].description + " "}
                    {/* <a href={`${articles[1].slug}`}>Continue reading...</a> */}
                </div>
            </div>
        </div>
    )
  }
}

module.exports = Posts;




// [div className:"articles-list" ]
// [div className:"article-link-container"]
// [`if (articles[0].interactive`]
// [/]
//   [div className:"article-title"] 
//     [a href:`"./" + articles[0].slug + "/"`]
//       [Display value:`articles[0].title` /]
//     [/a]
//     [Display value:`articles[0].description` /]
//   [/div]
//   [div className:"article-authors"]
//     [Display value:`articles[0].author` /]
//   [/div]
// [/div]