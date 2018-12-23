import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { v4 } from 'uuid';
import { actions } from 'redux/notes/actions';
import { TextField } from 'components/TextField/TextField';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { Textarea } from 'components/Textarea/Textarea';
import { SelectField } from 'components/SelectField/SelectField';
import { Button } from 'components/Button/Button';

const currentDate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;

const mapDispatchToProps = (dispatch) => ({
  addNote: (data) => dispatch(actions.addNote(data)),
});

const mapStateToProps = (state) => ({
  categories: state.categories,
});

@connect(mapStateToProps, mapDispatchToProps)
class AddNotesForm extends PureComponent {
  static propTypes = {
    addNote: PropTypes.func.isRequired,
    categories: PropTypes.instanceOf(List),
  };

  static defaultProps = {
    categories: List(),
  }

  constructor(props) {
    super(props);

    this.state = {
      isInc: false,
      category: props.categories.get(0).get('label'),
      disabled: false,
      date: currentDate,
    };
  }


  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    this.setState({ [name]: value });
  }

  handleChangeCheckbox = (e) => {
    const { name } = e.target;
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
        <h1>Добавить запись</h1>
        <div>
          <Textarea
            placeholder="description"
            name="description"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            placeholder="price"
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input name="date" type="date" onChange={this.handleChange} defaultValue={currentDate} />
        </div>
        <div>
          <Checkbox
            name="isInc"
            onChange={this.handleChangeCheckbox}
          />
        </div>
        <div>
          <SelectField
            name="category"
            onChange={this.handleChange}
            source={this.props.categories}
          />
        </div>
        <Button
          onClick={this.handleClick}
          disabled={this.state.disabled}
          type="submit"
        >
          Добавить
        </Button>
      </form>
    );
  }
}

export { AddNotesForm };
