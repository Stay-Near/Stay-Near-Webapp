import React from 'react';

import { NewsHeaderCard } from "react-ui-cards";

import UserInfo from './UserInfo';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import NavBar from '../../components/NavBar/NavBar';

const list = [
    { name: 'Ricardo' },
    { name: 'Milos' },
    { name: 'ZeroTwo' },
];

const MenuItem = ({ text, selected }) => {
    return (
        <div className={`menu-item ${selected ? 'active' : ''}`}>
        <NewsHeaderCard
            href='#'
            thumbnail='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/foto-escritorio-1524999265.jpg'
            // title={text}
            author='Room #n'
            date='$10,000'
            // tags={['nature', 'photo', () => (<i>component</i>)]}
        />
        </div>
    );
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { name } = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'Ricardo';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
        this.state = { selected }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col s2" />
                        <div className="col s2">
                            <UserInfo />
                        </div>
                        <div className="col s6">
                            <h5>Information</h5>
                            <hr></hr>
                            <p><b>ID</b>: A0XXXXXXX</p>
                            <p><b>Carrer</b>: ISC</p>
                            <p><b>Age</b>: 22</p>
                            <p><b>Sex</b>: Male</p>

                            <br></br><br></br>
                            <h5>Rooms</h5>
                            <hr></hr>
                            <ScrollMenu
                                data={this.menuItems}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                selected={selected}
                                onSelect={() => { }}
                            />

                            <br></br><br></br>
                            <h5>History</h5>
                            <hr></hr>
                            <p><a href="#">Room #1</a> rented by <i>Person #n</i> on Wed, 24 March 2020.</p>
                            <p><a href="#">Room #2</a> rented by <i>Person #n</i> on Wed, 1 Febreury 2020.</p>
                        </div>
                        <div className="col s2" />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Profile;