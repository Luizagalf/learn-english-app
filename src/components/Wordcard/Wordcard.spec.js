import Wordcard from './Wordcard.jsx';
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';
Enzyme.configure({ adapter: new Adapter() });

const setUp = (props) => shallow(<Wordcard {...props}/>);

describe('should render Wordcard component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should contain .card', () => {
    const wrapper = component.find(".card");
    expect(wrapper.length).toBe(1);
  });

  it('should render change p', () => {
    const change = true;
    component = setUp({change});
    const wrapper = component.find("p").text();
    expect(wrapper).toEqual("Ghbdtn");
  });

  it('should render change button', () => {
    const change = false;
    component = setUp({change});
    const wrapper = component.find("button");
    expect(wrapper.length).toBe(1);
  });
});

