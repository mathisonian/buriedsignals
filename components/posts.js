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
            <div className="interactive-icon">
                <img></img>
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
                    <p>{articles[0].category}</p>
                </div>
                <div className="article-title">
                    <a href={`${articles[0].slug}`}>
                        <h2>{articles[0].title}</h2>
                    </a>
                </div>
                <div className="article-description">
                    {articles[0].description + " "} 
                    <a href={`${articles[0].slug}`}>Continue reading</a>
                </div>
                <div className="article-contributors">{articles[0].contributors}</div>
                <hr className="article-divider"></hr>
            </div>
            <div className="article-wrapper">
                <div className="article-labels">
                    {this.toggleInteractive(articles[1])}
                    <p>{articles[1].category}</p>
                </div>
                <div className="article-title">
                    <a href={`${articles[1].slug}`}>
                        <h2>{articles[1].title}</h2>
                    </a>
                </div>
                <div className="article-description">
                    {articles[1].description + " "}
                    <a href={`${articles[0].slug}`}>Continue reading</a>
                </div>
                <div className="article-contributors">{articles[1].contributors}</div>
                <hr className="article-divider"></hr>
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