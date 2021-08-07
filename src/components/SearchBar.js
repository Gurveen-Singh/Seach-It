import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
