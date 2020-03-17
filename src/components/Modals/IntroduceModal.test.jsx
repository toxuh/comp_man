import React from 'react';
import { shallow } from 'enzyme';

import IntroduceModal from './IntroduceModal';

const props = {
  handlePlayerNameChange: jest.fn(),
};

describe('<IntroduceModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<IntroduceModal {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Form
        className="IntroduceModal"
        inline={false}
      >
        <ForwardRef
          noGutters={false}
        >
          <Col>
            <img
              alt="Intro"
              src="assets/intro.png"
            />
          </Col>
        </ForwardRef>
        <ForwardRef
          noGutters={false}
        >
          <Col
            className="IntroduceModal__label"
          >
            <FormLabel
              column={false}
              srOnly={false}
            >
              Type your name here
            </FormLabel>
          </Col>
          <Col>
            <FormControl
              className="IntroduceModal__input"
              name="name"
              onChange={[Function]}
              required={true}
              type="text"
            />
          </Col>
        </ForwardRef>
        <ForwardRef
          noGutters={false}
        >
          <Col
            className="IntroduceModal__buttonHolder"
          >
            <Button
              active={false}
              className="IntroduceModal__button"
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
});
