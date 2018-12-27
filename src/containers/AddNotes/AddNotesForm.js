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
import { isNumber, isMinLength } from 'utils/validate';
import {
  CATEGORY_FIELD_NAME,
  DATE_FIELD_NAME,
  DESCRIPTION_FIELD_NAME,
  IS_INCREMENT_FIELD_NAME,
  PRICE_FIELD_NAME,
} from 'contstants/constants';

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
      date: currentDate,
      isValidPrice: false,
      isValidDescription: false,
      price: 0,
      description: '',
    };
  }


  handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleChangeCheckbox = (e) => {
    const { name } = e.target;
    this.setState({ [name]: e.target.checked });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChangePrice = (e) => {
    this.setState({
      [PRICE_FIELD_NAME]: e.target.value,
      isValidPrice: isNumber(e.target.value),
    });
  }

  handleChangeDescription = (e) => {
    this.setState({
      [DESCRIPTION_FIELD_NAME]: e.target.value,
      isValidDescription: isMinLength(e.target.value, 3),
    });
  }

  handleClick = () => {
    const { price, description, isInc, date, category } = this.state;

    const note = Map({
      price,
      description,
      isInc,
      date: new Date(date || currentDate),
      category,
      id: v4(),
      currency: 'BYN',
    });

    this.props.addNote({ note });

    this.setState({
      price: 0,
      description: '',
    });
  }

  render() {
    const { isValidPrice, price, description, isValidDescription } = this.state;
    const { categories } = this.props;

    const isFormValidate = !(isValidDescription && isValidPrice);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Добавить запись</h1>
        <div>
          <Textarea
            name={DESCRIPTION_FIELD_NAME}
            placeholder="Описание"
            onChange={this.handleChangeDescription}
            value={description}
          />
        </div>
        <div>
          <TextField
            name={PRICE_FIELD_NAME}
            placeholder="Сумма"
            type="number"
            value={price}
            onChange={this.handleChangePrice}
            validate={isValidPrice}
          />
        </div>
        <div>
          <input
            name={DATE_FIELD_NAME}
            type="date"
            onChange={this.handleChange}
            defaultValue={currentDate}
          />
        </div>
        <div>
          <Checkbox
            name={IS_INCREMENT_FIELD_NAME}
            onChange={this.handleChangeCheckbox}
            label="Доход"
          />
        </div>
        <div>
          <SelectField
            name={CATEGORY_FIELD_NAME}
            onChange={this.handleChange}
            source={categories}
          />
        </div>
        <Button
          onClick={this.handleClick}
          disabled={isFormValidate}
          type="submit"
        >
          Добавить
        </Button>
      </form>
    );
  }
}

export { AddNotesForm };
