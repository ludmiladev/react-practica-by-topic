import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './Redux.styles';

class Redux extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Redux will mount');
  }

  componentDidMount = () => {
    console.log('Redux mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Redux will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Redux will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Redux did update');
  }

  componentWillUnmount = () => {
    console.log('Redux will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ReduxWrapper">
        Test content
      </div>
    );
  }
}

Redux.propTypes = {
  // bla: PropTypes.string,
};

Redux.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Redux);
