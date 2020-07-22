import React from 'react';
import { shallow } from 'enzyme';

import AgreeScreen from './AgreeScreen';

const props = {
  handleSetAgree: jest.fn(),
};

describe('~/components/AgreeScreen/AgreeScreen', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<AgreeScreen {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <Container
        className="AgreeScreen"
        fluid={true}
      >
        <Row
          noGutters={false}
        >
          <Col
            className="AgreeScreen__textHolder"
          >
            <h1
              className="AgreeScreen__heading"
            >
              Play and enjoy!
            </h1>
            <p>
              Пройдя эту игру вы станете настоящим компьютерным асом. Вам предстоит устроится на работу, купить компьютер, устанавливать полезный софт, взламывать банки :), а также многое другое! Вобщем играйте и, конечно, выигрывайте !
            </p>
          </Col>
        </Row>
        <Row
          noGutters={false}
        >
          <Col
            className="AgreeScreen__buttonHolder"
          >
            <Button
              active={false}
              className="AgreeScreen__button"
              disabled={false}
              onClick={[Function]}
              variant="primary"
            >
              Okey
            </Button>
          </Col>
        </Row>
      </Container>
    `);
  });
});
