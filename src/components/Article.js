import React, { PureComponent } from "react";
import "./css/Article.css";

export default class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen,
    };
    this.handleClick = this.handleClick.bind(this);
  }


  render() {
    const { article } = this.props;
    const body = (
      <section>{this.state.isOpen ? article.text : article.textShort}</section>
    );
    return (
      <article>
        <header className="articleHeader">
          <h2>{article.title}</h2>
          <button onClick={this.handleClick} className="btn-article-open">         
            {this.state.isOpen ? "close" : "open"}
          </button>
        </header>
        <div className="content">{body}</div>
      </article>
    );
  }

  // componentDidUpdate Необходим для работы revert!
  // Иначе останется открытой последняя статья, бывшая первой
  // Это происходит потому, что статьи не инициализируются заново, а отображаются в другом порядке
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.isOpen !== this.props.defaultOpen) {
      this.setState({ isOpen: this.props.defaultOpen });
    }
  }
  handleClick() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
}
