import React from 'react';
import renderer from 'react-test-renderer';
import CustomSwitch from '../index';

jest.useFakeTimers();

describe('<CustomSwitch />', () => {
  it('should render HomeView', async (done) => {
    const value = true;
    const onChange = jest.fn();
    const tree = await renderer.create(<CustomSwitch onChange={onChange} value={value} />);
    expect(tree.toJSON().children.length).toEqual(1);
    done();
  });
});
