import React from "react";
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.fileInput = React.createRef();
  }
  handleLoad(event) {
    event.preventDefault();
    console.log(`selected file: ${this.fileInput.current.files[0].name}`);
  }
  render() {
    return (
      <label>
        Upload a file:
        <input
          type="file"
          ref={this.fileInput}
          onChange={e => this.handleLoad(e)}
        />
      </label>
    );
  }
}

export default FileInput;
