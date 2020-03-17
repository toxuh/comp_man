import React from 'react';
import { shallow } from 'enzyme';

import SimpleModal from './SimpleModal';

const props = {
  isShown: true,
};

describe('<SimpleModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <SimpleModal {...props}>
        <p>Hello World!</p>
      </SimpleModal>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <Container
        className="SimpleModal"
        fluid={true}
      >
        <ForwardRef
          noGutters={false}
        >
          <Col>
            <p>
              Hello World!
            </p>
          </Col>
        </ForwardRef>
      </Container>
    `);
  });
});
