import Wordlistitem from './Wordlistnewitem.jsx';
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';
Enzyme.configure({ adapter: new Adapter() });

const setUp = (props) => shallow(<Wordlistitem {...props}/>);

describe('should render Wordlistitem component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should contain tr wrapper', () => {
    const wrapper = component.find("tr");
    expect(wrapper.length).toBe(1);
  });
  
  it('should contain button', () => {
    const wrapper = component.find("button");
    expect(wrapper.length).toBe(1);
  });

  it('should render selected .edit', () => {
    const selected = true;
    component = setUp({selected});
    const wrapper2 = component.find("button");
    const wrapper = component.find(".edit");
    expect(wrapper.length).toBe(1);
    expect(wrapper2.length).toBe(2);
  });
});

