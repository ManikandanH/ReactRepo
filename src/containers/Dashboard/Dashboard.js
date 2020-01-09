import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardWidgets from './DashboardWidgets';
import { dashboardActions } from '../../actions';
import { base } from '../../hocs';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.getOrders()
    }

    render() {
        console.log()
        return <DashboardWidgets orders={this.props.orders} />;
    }
}

const mapStateToProps = state => ({
    orders: state.dashboard.orders,
});

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => {
            dispatch(dashboardActions.getOrders());
        },
    };
};

Dashboard.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.object).isRequired,
    getOrders: PropTypes.func.isRequired,
};
export default base(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
