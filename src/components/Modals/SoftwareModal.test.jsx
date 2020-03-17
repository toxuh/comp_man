import React from 'react';
import { shallow } from 'enzyme';

import SoftwareModal from './SoftwareModal';

const props = {
  isShown: false,
  onClose: jest.fn(),
};

describe('<SoftwareModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <SoftwareModal {...props}>
        {() => <p>Software modal here</p>}
      </SoftwareModal>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <SimpleModal
        isShown={false}
      >
        Software will be here.
         
        <span
          onClick={[MockFunction]}
          role="presentation"
        >
          Close
        </span>
      </SimpleModal>
    `);
  });
});
