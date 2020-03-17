import React from 'react';
import { shallow } from 'enzyme';

import HackingModal from './HackingModal';

const props = {
  isShown: false,
  onClose: jest.fn(),
};

describe('<HackingModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <HackingModal {...props}>{() => <p>Hacking modal here</p>}</HackingModal>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <SimpleModal
        isShown={false}
      >
        Hacking will be here.
         
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
