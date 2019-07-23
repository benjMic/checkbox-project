import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/app';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({adapter: new Adapter()});


it('Le component s\'affiche', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Les checkboxs contenus dans le tableau \'affichent', () => {
  const wrapper = mount(<App/>);
  expect(mount(<App />).find('input').length).toBe(6);
});



