import Wordlistitem from './Wordlistitem.jsx';
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('should render Wordlistitem component', () => {
  const component = shallow(<Wordlistitem/>);
  expect(component.find("tr")).toHaveLength(1);
});



