import React from 'react';
import { shallow } from 'enzyme';

import JobModal from './JobModal';

const props = {
  isShown: false,
  onClose: jest.fn(),
};

describe('<JobModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <JobModal {...props}>{() => <p>Job modal here</p>}</JobModal>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <SimpleModal
        isShown={false}
      >
        Job will be here.
         
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
