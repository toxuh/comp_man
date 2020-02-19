import React from 'react';
import { mount, shallow } from 'enzyme';

import AgreeScreen from './AgreeScreen';

const props = {
  onSubmitAgree: jest.fn(),
};

describe('<IntroduceScreen />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<AgreeScreen {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Container
        className="AgreeScreen"
        fluid={true}
      >
        <ForwardRef
          noGutters={false}
        >
          <Col>
            <h1>
              Play and enjoy
            </h1>
          </Col>
        </ForwardRef>
        <ForwardRef
          noGutters={false}
        >
          <p>
            When you complete this game, blah blah blah
          </p>
        </ForwardRef>
        <ForwardRef
          noGutters={false}
        >
          <Button
            active={false}
            disabled={false}
            onClick={[Function]}
            type="button"
            variant="primary"
          >
            OK
          </Button>
        </ForwardRef>
      </Container>
    `);
  });

  it('simulates submit click', () => {
    expect.assertions(2);

    const wrapper = mount(<AgreeScreen {...props} />);

    wrapper.find('.btn').simulate('click');

    expect(props.onSubmitAgree).toHaveBeenCalledTimes(1);
    expect(props.onSubmitAgree).toHaveBeenLastCalledWith();
  });
});
