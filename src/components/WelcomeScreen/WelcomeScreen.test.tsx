import React from 'react';
import { shallow } from 'enzyme';

import WelcomeScreen from './WelcomeScreen';

const props = {
  handleSetPlayerName: jest.fn(),
};

describe('~/components/WelcomeScreen/WelcomeScreen', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<WelcomeScreen {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Form
        className="WelcomeScreen"
        inline={false}
      >
        <Row
          noGutters={false}
        >
          <Col>
            <img
              alt="Компьютерщик"
              src="intro.png"
            />
          </Col>
        </Row>
        <Row
          noGutters={false}
        >
          <Col
            className="WelcomeScreen__label"
          >
            <FormLabel
              column={false}
              srOnly={false}
            >
              <Component />
            </FormLabel>
          </Col>
          <Col>
            <FormControl
              className="WelcomeScreen__input"
              name="name"
              onChange={[Function]}
              required={true}
              type="text"
            />
          </Col>
        </Row>
        <Row
          noGutters={false}
        >
          <Col
            className="WelcomeScreen__buttonHolder"
          >
            <Button
              active={false}
              className="WelcomeScreen__button"
              disabled={false}
              onClick={[Function]}
              variant="primary"
            >
              <Component />
            </Button>
          </Col>
        </Row>
      </Form>
    `);
  });
});
