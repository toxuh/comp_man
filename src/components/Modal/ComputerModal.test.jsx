import React from 'react';
import { shallow } from 'enzyme';

import ComputerModal from './ComputerModal';

const props = {
  isShown: false,
  onClose: jest.fn(),
};

describe('<ComputerModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <ComputerModal {...props}>
        {() => <p>Computer modal here.</p>}
      </ComputerModal>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <SimpleModal
        isShown={false}
      >
        Computer will be here.
         
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
