import React from "react";
import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      method: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    let userInput = event.target.value;
    this.setState({ value: userInput });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // }
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //eventually set method = whichever button is selected
    const method = "get";
    const route = event.target.value;
    const fieldName = event.target.name;
    this.setState({ [fieldName]: route, method });
    //eventually create a new div with this.state info, in the section
    console.log("URL SUBMITTED: ", this.state.value);
  };

  render() {
    return (
      <>
        <div id="form">
          <form onSubmit={this.handleSubmit}>
            <label>URL: </label>
            <input
              type="text"
              id="urlText"
              name="urlText"
              onChange={this.handleChange}
            ></input>

            <input type="submit" id="submitForm" value="Go!"></input>
          </form>
          <section id="restMethods">
            {/* GET */}
            <input
              type="button"
              id="get"
              name="get"
              value="GET"
              onClick={() => this.setState({ method: "GET" })}
            ></input>

            {/* POST */}
            <input
              type="button"
              id="post"
              name="post"
              value="POST"
              onClick={() => this.setState({ method: "POST" })}
            ></input>

            {/* PUT */}
            <input
              type="button"
              id="put"
              name="put"
              value="PUT"
              onClick={() => this.setState({ method: "PUT" })}
            ></input>

            {/* DELETE */}
            <input
              type="button"
              id="delete"
              name="delete"
              value="DELETE"
              onClick={() => this.setState({ method: "DELETE" })}
            ></input>

            {/* DISPLAY API REQUEST */}

            <p id="results">
              {this.state.method} {this.state.value}
            </p>
          </section>
        </div>
      </>
    );
  }
}

export default Form;
