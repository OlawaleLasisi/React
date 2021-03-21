import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'White');
const color2 = React.createElement('li', {}, 'Black');
const color3 = React.createElement('li', {}, 'Gold');

const artist1 = React.createElement('li', {}, 'Ramsy Noah');
const artist2 = React.createElement('li', {}, 'Buna Boy');
const artist3 = React.createElement('li', {}, 'Wiz Kid');

const food1 = React.createElement('li', {}, 'Fufu');
const food2 = React.createElement('li', {}, 'Amala');
const food3 = React.createElement('li', {}, 'Fried Rice');

const website1 = React.createElement(
  'li',
  {},
  React.createElement('a', { href: 'https://www.mevron.com' }, 'www.mevron.com')
);
const website2 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.crunchhire.com' },
    'www.crunchhire.com'
  )
);
const website3 = React.createElement(
  'li',
  {},
  React.createElement(
    'a',
    { href: 'https://www.linkedin.com' },
    'www.linkedin.com'
  )
);

ReactDOM.render(
  React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'My Favorite Things'),
    React.createElement(
      'ul',
      {},
      React.createElement(
        'li',
        {},
        'Favorite Colors',
        React.createElement('ol', {}, color1, color2, color3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Music',
        React.createElement('ol', {}, artist1, artist2, artist3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Food',
        React.createElement('ol', {}, food1, food2, food3)
      ),
      React.createElement(
        'li',
        {},
        'Favorite Websites',
        React.createElement('ol', {}, website1, website2, website3)
      )
    )
  ),
  document.getElementById('root')
);