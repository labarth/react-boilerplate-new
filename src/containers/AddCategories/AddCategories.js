import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { v4 } from 'uuid';
import { Button } from 'components/Button/Button';
import { TextField } from 'components/TextField/TextField';
import { addCategory, deleteCategory } from 'redux/categories/actions';


const mapDispatchToProps = (dispatch) => ({
  addCategory: (data) => dispatch(addCategory(data)),
  deleteCategory: (value) => dispatch(deleteCategory(value)),
});

const mapStateToProps = (state) => ({
  categories: state.categories,
});

@connect(mapStateToProps, mapDispatchToProps)
class AddCategories extends PureComponent {
  static propTypes = {
    addCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    categories: PropTypes.instanceOf(List),
  };

  static defaultProps = {
    categories: List(),
  }

  state = {
    text: '',
    isAddCategoryValidate: true,
    isDeleteCategoryValidate: true,
  }

  findCategory = (value) => this.props.categories.find((item) => item.get('label') === value) || false;

  isCategoryValidate = (value) => Boolean(this.findCategory(value)) || value.length < 3;

  isDeleteCategoryValidate = (value) => !this.findCategory(value) || false;

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      isAddCategoryValidate: this.isCategoryValidate(e.target.value),
      isDeleteCategoryValidate: this.isDeleteCategoryValidate(e.target.value),
    });
  }

  handleClick = () => {
    const category = Map({
      label: this.state.text,
      value: v4(),
    });

    this.props.addCategory({ category });
    this.setState({ text: '' });
  }

  handleDelete = () => {
    this.props.deleteCategory({ value: this.findCategory(this.state.text).get('value') });
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <h1>Добавить категорию</h1>
        <TextField
          onChange={this.handleChange}
          value={this.state.text}
        />
        <Button onClick={this.handleClick} disabled={this.state.isAddCategoryValidate}>Добавить категорию</Button>
        <Button onClick={this.handleDelete} disabled={this.state.isDeleteCategoryValidate}>Удалить категорию</Button>
      </div>
    );
  }
}

export { AddCategories };
