import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: "",
        };
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    HandleSubmit = event => {
        console.log(this.state);    // to check result for input change
        event.preventDefault();     //prevent to load the page after submit button is clicked
    }

    HandleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={this.HandleSubmit}>
                    <label>Book Name:</label> <br />
                    <input type='text' name='bookName' value={this.state.bookName} onChange={event => this.HandleInputChange(event)} />
                    <br />
                    <label>Writer:</label> <br />
                    <input type='text' name='writer' value={this.state.writer} onChange={event => this.HandleInputChange(event)} />
                    <br />
                    <label>Description:</label> <br />
                    <textarea name='description' value={this.state.description} onChange={event => this.HandleInputChange(event)} />
                    <br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default NewBook;