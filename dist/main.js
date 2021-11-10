'use strict';

window.onload = function () {
    //React switcher and text component
    class Switcher extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick(e) {
            if (e.target.checked) {
                document.getElementById('upperLayer').style.backgroundColor = '#f8f9fe';
                document.querySelector('#leftContent h1').style.color = '#1f1f27';
                document.querySelector('#leftContent p').style.color = '#67687a';
                document.querySelector('body').style.backgroundColor = '#ffffff';
                document.querySelector('#overview').style.color = '#6d6f84';
                [...document.querySelectorAll('.followers_num')].map(v => {
                    return v.style.color = '#1a1c28';
                });
                [...document.querySelectorAll('.media_tile')].map(v => {
                    return v.style.backgroundColor = '#f0f3fa';
                });
                [...document.querySelectorAll('.activity_tile')].map(v => {
                    return v.style.backgroundColor = '#f0f3fa';
                });
                [...document.querySelectorAll('.activity_amount p')].map(v => {
                    return v.style.color = '#1c1f26';
                });
                [...document.querySelectorAll('.activity_link')].map(v => {
                    return v.style.color = '#67687a';
                });
            }
            if (!e.target.checked) {
                document.getElementById('upperLayer').style.backgroundColor = '#20222f';
                document.querySelector('#leftContent h1').style.color = 'white';
                document.querySelector('body').style.backgroundColor = '#1d2029';
                document.querySelector('#overview').style.color = 'white';
                [...document.querySelectorAll('.activity_tile')].map(v => {
                    return v.style.backgroundColor = '#252b43';
                });
                [...document.querySelectorAll('.media_tile')].map(v => {
                    return v.style.backgroundColor = '#252b43';
                });
                [...document.querySelectorAll('.activity_amount p')].map(v => {
                    return v.style.color = 'white';
                });
                [...document.querySelectorAll('.activity_link')].map(v => {
                    return v.style.color = '#929bc2';
                });
            }
        }
        render() {
            return React.createElement(
                'div',
                { className: 'switch-container' },
                React.createElement('input', { type: 'checkbox', id: 'switch', onClick: this.handleClick }),
                React.createElement('div', { className: 'switch-color' }),
                React.createElement(
                    'label',
                    { htmlFor: 'switch' },
                    React.createElement('i', { className: 'switch-off' }),
                    React.createElement('i', { className: 'switch-on' })
                )
            );
        }
    }

    //Followers Component
    class MediaTile extends React.Component {
        constructor(props) {
            super(props);
            this.handleMouseEnter = this.handleMouseEnter.bind(this);
            this.handleMouseOut = this.handleMouseOut.bind(this);
        }
        handleMouseEnter(event) {
            if (document.getElementById('switch').checked) {
                event.currentTarget.style.background = '#e1e3f0';
            } else {
                event.currentTarget.style.background = '#333a56';
            }
        }
        handleMouseOut(event) {
            if (document.getElementById('switch').checked) {
                event.currentTarget.style.background = '#f0f3fa';
            } else {
                event.currentTarget.style.background = '#252b43';
            }
        }
        render() {
            return React.createElement(
                'div',
                { className: 'media_tile', onMouseOver: this.handleMouseEnter, onMouseOut: this.handleMouseOut },
                React.createElement('div', { className: 'header_tile', style: {
                        background: this.props.mediaUrl.includes('facebook') ? 'hsl(208, 92%, 53%)' : this.props.mediaUrl.includes('twitter') ? 'hsl(203, 89%, 53%)' : this.props.mediaUrl.includes('instagram') ? 'linear-gradient(to right, hsl(37, 97%, 70%),hsl(329, 70%, 58%)' : 'hsl(348, 97%, 39%)'

                    } }),
                React.createElement(
                    'div',
                    { className: 'media_nik' },
                    React.createElement('img', { src: this.props.mediaUrl }),
                    React.createElement(
                        'div',
                        null,
                        this.props.nikName
                    )
                ),
                React.createElement(
                    'p',
                    { className: 'followers_num' },
                    this.props.followers_num
                ),
                React.createElement(
                    'p',
                    { className: 'type' },
                    this.props.type
                ),
                React.createElement(
                    'p',
                    { className: 'exchange' },
                    React.createElement('img', { src: this.props.url }),
                    React.createElement(
                        'span',
                        { style: { color: this.props.url.includes('up') ? '#36ac94' : '#bd4c5e' } },
                        ' ',
                        this.props.amount,
                        ' Today'
                    )
                )
            );
        }
    }
    ReactDOM.render(React.createElement(
        'div',
        { className: 'media' },
        React.createElement(MediaTile, { mediaUrl: 'images/icon-facebook.svg', nikName: '@nathanf', followers_num: '1987', type: 'followers', url: 'images/icon-up.svg', amount: '12' }),
        React.createElement(MediaTile, { mediaUrl: 'images/icon-twitter.svg', nikName: '@nathanf', followers_num: '1044', type: 'followers', url: 'images/icon-up.svg', amount: '99' }),
        React.createElement(MediaTile, { mediaUrl: 'images/icon-instagram.svg', nikName: '@realnathanf', followers_num: '11K', type: 'followers', url: 'images/icon-up.svg', amount: '1099' }),
        React.createElement(MediaTile, { mediaUrl: 'images/icon-youtube.svg', nikName: 'Nathan F', followers_num: '8239', type: 'subscribers', url: 'images/icon-down.svg', amount: '144' })
    ), document.getElementById('followers'));
    ReactDOM.render(React.createElement(
        'div',
        { id: 'flex_switcher' },
        React.createElement(
            'span',
            null,
            'Dark Mode'
        ),
        React.createElement(Switcher, null)
    ), document.getElementById('rightContent'));

    //Activity Component

    class ActivityTile extends React.Component {
        constructor(props) {
            super(props);
            this.handleMouseEnter = this.handleMouseEnter.bind(this);
            this.handleMouseOut = this.handleMouseOut.bind(this);
        }
        handleMouseEnter(event) {
            if (document.getElementById('switch').checked) {
                event.currentTarget.style.background = '#e1e3f0';
            } else {
                event.currentTarget.style.background = '#333a56';
            }
        }
        handleMouseOut(event) {
            if (document.getElementById('switch').checked) {
                event.currentTarget.style.background = '#f0f3fa';
            } else {
                event.currentTarget.style.background = '#252b43';
            }
        }
        render() {
            return React.createElement(
                'div',
                { className: 'activity_tile', onMouseOver: this.handleMouseEnter, onMouseOut: this.handleMouseOut },
                React.createElement(
                    'div',
                    { className: 'activity_link' },
                    React.createElement(
                        'div',
                        null,
                        this.props.typeActivity
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement('img', { src: this.props.activityUrl })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'activity_amount' },
                    React.createElement(
                        'p',
                        null,
                        this.props.amount
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement('img', { src: this.props.url }),
                        ' ',
                        React.createElement(
                            'span',
                            { style: { color: this.props.url.includes('up') ? '#36ac94' : '#bd4c5e' } },
                            this.props.percent
                        )
                    )
                )
            );
        }
    }
    ReactDOM.render(React.createElement(
        'div',
        { className: 'activity' },
        React.createElement(ActivityTile, { typeActivity: 'Page Views', activityUrl: 'images/icon-facebook.svg', amount: '87', url: 'images/icon-up.svg', percent: '3%' }),
        React.createElement(ActivityTile, { typeActivity: 'Likes', activityUrl: 'images/icon-facebook.svg', amount: '52', url: 'images/icon-down.svg', percent: '2%' }),
        React.createElement(ActivityTile, { typeActivity: 'Likes', activityUrl: 'images/icon-instagram.svg', amount: '5462', url: 'images/icon-up.svg', percent: '2257%' }),
        React.createElement(ActivityTile, { typeActivity: 'Profile Views', activityUrl: 'images/icon-instagram.svg', amount: '52K', url: 'images/icon-up.svg', percent: '1375%' }),
        React.createElement(ActivityTile, { typeActivity: 'Retweets', activityUrl: 'images/icon-twitter.svg', amount: '117', url: 'images/icon-up.svg', percent: '303%' }),
        React.createElement(ActivityTile, { typeActivity: 'Likes', activityUrl: 'images/icon-twitter.svg', amount: '507', url: 'images/icon-up.svg', percent: '553%' }),
        React.createElement(ActivityTile, { typeActivity: 'Likes', activityUrl: 'images/icon-youtube.svg', amount: '107', url: 'images/icon-down.svg', percent: '19%' }),
        React.createElement(ActivityTile, { typeActivity: 'Total Views', activityUrl: 'images/icon-youtube.svg', amount: '1407', url: 'images/icon-down.svg', percent: '12%' })
    ), document.getElementById('followers_activity'));
};