import React from 'react';
import { shallow } from 'enzyme';

import AgreeModal from './AgreeModal';

const props = {
  handleAgreeChange: jest.fn(),
};

describe('<AgreeModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<AgreeModal {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Container
        className="AgreeModal"
        fluid={true}
      >
        <ForwardRef
          noGutters={false}
        >
          <Col
            className="AgreeModal__textHolder"
          >
            <h1
              className="AgreeModal__heading"
            >
              Play and enjoy
            </h1>
            <p>
              When you complete this game, blah blah blah
            </p>
          </Col>
        </ForwardRef>
        <ForwardRef
          noGutters={false}
        >
          <Col
            className="AgreeModal__buttonHolder"
          >
            <Button
              active={false}
              className="AgreeModal__button"
              disabled={false}
              onClick={[Function]}
              type="button"
              variant="primary"
            >
              OK
            </Button>
          </Col>
        </ForwardRef>
      </Container>
    `);
  });
});
