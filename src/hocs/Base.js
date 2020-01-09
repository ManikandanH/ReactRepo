import React from 'react';
import { connect } from 'react-redux';
import { commonActions } from '../actions';
import { bindActionCreators } from 'redux';

const base = MainComponent => {
    class BaseComponent extends React.Component {
        componentDidMount() {}
        render() {
            return <MainComponent {...this.props} />;
        }
    }
    const mapDispatchToProps = dispatch => {
        const { showSnackBar, showLoading, hideLoading } = commonActions;
        return bindActionCreators({showSnackBar, showLoading, hideLoading}, dispatch)
    };
    return connect(null, mapDispatchToProps)(BaseComponent);
};

export default base;
