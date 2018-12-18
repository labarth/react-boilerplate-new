import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { v4 } from 'uuid';
import { actions } from 'redux/notes/actions';

const mapDispatchToProps = (dispatch) => ({
  addNote: (data) => dispatch(actions.addNote(data)),
});

@connect(null, mapDispatchToProps)
class AddNotesForm extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    type: false,
    category: 'AlL',
    disabled: false,
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleChangeCheckbox = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.checked });
  }

  handleClick = () => {
    const note = Map({
      id: v4(),
      price: Math.random() * 100,
      description: 'Носоччкм',
      type: 'dec',
      currency: 'BYN',
      date: new Date(),
      category: 'Одежда'
    });

    console.log({ note });

    if (!this.state.disabled) {
      this.props.addNote({ note });
    }

  }

  render() {
    return (
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10" placeholder="description" name="description" onChange={this.handleChange}></textarea>
        </div>
        <div>
          <input type="number" placeholder="price" name="price" onChange={this.handleChange}/>
        </div>
        <div>
          <input name="date" type="date" onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="inc">
            type
            <input name="type" type="checkbox" id="inc"  onChange={this.handleChangeCheckbox} />
          </label>
        </div>
        <div>
          <select name="" id="" name="category" onChange={this.handleChange} defaultValue="All">
            <option value="All">All</option>
          </select>
        </div>
        <button onClick={this.handleClick} disabled={this.state.disabled}>Add Note</button>
      </div>
    );
  }
}

export { AddNotesForm };
