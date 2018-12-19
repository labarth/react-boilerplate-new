import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { v4 } from 'uuid';
import { actions } from 'redux/notes/actions';
import { TextField } from 'components/TextField/TextField';
import { Checkbox } from 'components/Checkbox/Checkbox';

const mapDispatchToProps = (dispatch) => ({
  addNote: (data) => dispatch(actions.addNote(data)),
});

@connect(null, mapDispatchToProps)
class AddNotesForm extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    type: false,
    category: 'all',
    disabled: false,
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  handleChangeCheckbox = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.checked });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleClick = () => {
    const { price, description, isInc, date, category } = this.state;

    const note = Map({
      price,
      description,
      isInc,
      date: new Date(date),
      category,
      id: v4(),
      currency: 'BYN',
    });

    if (!this.state.disabled) {
      this.props.addNote({ note });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <textarea name="" id="" cols="30" rows="10" placeholder="description" name="description" onChange={this.handleChange} required />
        </div>
        <div>
          <TextField
            name="price"
            type="number"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input name="date" type="date" onChange={this.handleChange} />
        </div>
        <div>
          <Checkbox
            name="isInc"
            onChange={this.handleChangeCheckbox}
          />
        </div>
        <div>
          <select name="" id="" name="category" onChange={this.handleChange} defaultValue="All" required>
            <option value="All">All</option>
          </select>
        </div>
        <button onClick={this.handleClick} disabled={this.state.disabled} type="submit">Add Note</button>
      </form>
    );
  }
}

export { AddNotesForm };
