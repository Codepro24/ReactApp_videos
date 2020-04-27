import React from "react";

class SearchBar extends React.Component {
  //one way of solving the property setState undefined error
  // constructor(props) {
  //     super(props);
  //     this.state = { term: ''};

  // this.onFormSubmit = this.onFormSubmit.bind(this);
  // this.onChangeSubmit = this.onChangeSubmit.bind(this);
  // }

  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    //console.log(this.state.term);
  };

  onFormSubmit = event => {
    event.preventDefault();
    //console.log(this);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
