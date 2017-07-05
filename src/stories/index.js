import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import '../index.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


const flexStories = storiesOf('Flexbox', module)

flexStories.add('blueprint', _ => {
  return <div>blue</div>
})


flexStories.add('btn', _ => {
  return <div>
    <div className="Button">123</div>
  </div>
})

flexStories.add('btn - emoji', _ => {
  return <div>
    <div className="Button">😀 😎 👍 💯</div>
  </div>
})

flexStories.add('grid - few items', _ => {
  return <div style={{width: '300px', background: 'silver', padding: '10px'}}>
    <div className="BtnGrid">
      <div className="Button">1</div>
      <div className="Button">2</div>
      <div className="Button">10</div>
      <div className="Button">50</div>
      <div className="Button">100</div>
      <div className="Button">1000</div>
    </div>
  </div>
})


flexStories.add('grid - lots of items', _ => {
  return <div style={{width: '300px', background: 'silver', padding: '10px'}}>
    <div className="BtnGrid">
      <div className="Button">1</div>
      <div className="Button">2</div>
      <div className="Button">5</div>
      <div className="Button">10</div>
      <div className="Button">20</div>
      <div className="Button">30</div>
      <div className="Button">XXS</div>
      <div className="Button">XXS</div>
      <div className="Button">XXS</div>
      <div className="Button">😎</div>
      <div className="Button">👍</div>
    </div>
  </div>
})