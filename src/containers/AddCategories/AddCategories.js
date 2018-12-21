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
    categories: PropTypes.instanceOf(List).isRequired,
  };

  state = {
    text: null,
    isAddCategoryValidate: true,
    isDeleteCategoryValidate: true,
  }

  isCategoryValidate = (value) => (
    this.props.categories.filter((item) => item.get('label') === value).size || value.length < 3
  );

  isDeleteCategoryValidate = (isReturnValue = false, value) => {
    const findCategory = this.props.categories.filter((item) => item.get('label') === value);

    if (!isReturnValue) {
      return !!!findCategory.size;
    }

    return findCategory.get(0).get('value');
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      isAddCategoryValidate: this.isCategoryValidate(e.target.value),
      isDeleteCategoryValidate: this.isDeleteCategoryValidate(false, e.target.value),
    });
  }

  handleClick = () => {
    const category = Map({
      label: this.state.text,
      value: v4(),
    });

    this.props.addCategory({ category });
  }

  handleDelete = () => {
    this.props.deleteCategory({ value: this.isDeleteCategoryValidate(true, this.state.text) });
  }

  render() {
    return (
      <div>
        <TextField onChange={this.handleChange} />
        <Button onClick={this.handleClick} disabled={this.state.isAddCategoryValidate}>Add category</Button>
        <Button onClick={this.handleDelete} disabled={this.state.isDeleteCategoryValidate}>delete category</Button>
      </div>
    );
  }
}

export { AddCategories };
