import React from 'react';
import { mount, shallow } from 'enzyme';

import IntroduceScreen from './IntroduceScreen';

const props = {
  onPlayerNameChange: jest.fn(),
};

describe('<IntroduceScreen />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<IntroduceScreen {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Form
        inline={false}
      >
        <ForwardRef
          noGutters={false}
        >
          <Col>
            <FormControl
              name="name"
              onChange={[Function]}
              placeholder="Type your name here"
              required={true}
              type="text"
            />
          </Col>
          <Col>
            <Button
              active={false}
              disabled={false}
              onClick={[Function]}
              type="button"
              variant="primary"
            >
              Submit
            </Button>
          </Col>
        </ForwardRef>
      </Form>
    `);
  });

  it('simulates submit click', () => {
    expect.assertions(2);

    const wrapper = mount(<IntroduceScreen {...props} />);

    wrapper
      .find('.btn')
      .first()
      .simulate('click');

    expect(props.onPlayerNameChange).toHaveBeenCalledTimes(1);
    expect(props.onPlayerNameChange).toHaveBeenLastCalledWith(null);
  });
});
