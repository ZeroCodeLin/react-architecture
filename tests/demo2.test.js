import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import Demo2 from '../src/routes/Demo2.jsx'
configure({ adapter: new Adapter() });

test('checkbox change', () => {
    const checkbox = shallow(<Demo2 labelOn="On" labelOff="Off" />);
    expect(checkbox.text()).toEqual('Off');
  
    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
  
});