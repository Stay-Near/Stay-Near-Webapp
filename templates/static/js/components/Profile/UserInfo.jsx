import React from 'react';
import Avatar from 'react-avatar';
import Ratings from 'react-ratings-declarative';
import PropTypes from 'prop-types'

const UserInfo = (props) => {
    return (
        <div className="row center-align">
            <Avatar facebookId="100003900903883" size="100" round={true} />
            <div className="row center-align">
                <h5>{props.firstName}</h5>
                <p>{props.lastName}</p>
                {/* RANKING */}
                <Ratings rating={props.rating} widgetDimensions="25px" widgetSpacings="0px" widgetRatedColors="rgb(253,204,13)">
                    <Ratings.Widget /><Ratings.Widget /><Ratings.Widget /><Ratings.Widget /><Ratings.Widget />
                </Ratings>
            </div>
        </div>
    );
};

UserInfo.defaultProps = {
    firstName: "FirstName",
    lastName: "LastName",
    rating: 2.5,
}

UserInfo.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default UserInfo;