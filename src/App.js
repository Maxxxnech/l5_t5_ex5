import React, {PureComponent} from 'react';
import ArticleList from "./components/ArticlesList"
import articles from "./data/data.json"
import './App.css';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {reverted : false}
    this.revert = this.revert.bind(this);
  }

  render(){
    return (
      <div className="container">
      <header>
        <h1>l5_t5_задание_5</h1>
        <button className="btn-revert" onClick={this.revert}>Revert</button>
      </header>
      <p>для корректной работы кнопки  Revert (открыта всегда первая статья в списке) используется <strong>componentDidUpdate</strong></p>
      <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
      </div>
    );
  }

  revert(){
      this.setState(prevState => ({reverted: !prevState.reverted}))
  }
}

export default App;
