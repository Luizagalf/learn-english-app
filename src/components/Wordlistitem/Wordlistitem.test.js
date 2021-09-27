import { render, screen } from '@testing-library/react';
import Wordlistitem from './Wordlistitem';

test('should render Wordlistitem component', () => {
  const itemofWordlist = shallow(<Wordlistitem/>);
  const wrapper = itemofWordlist.find(".Wordlistitem");
  expect(wrapper)
});
