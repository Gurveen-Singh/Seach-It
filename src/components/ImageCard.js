import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans.bind(this));
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 250);
    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img
          style={{ gridRowEnd: `${this.state.spans}` }}
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
