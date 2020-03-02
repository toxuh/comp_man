import React from 'react';
import { shallow } from 'enzyme';

import BbsModal from './BbsModal';

const props = {
  isShown: false,
  onClose: jest.fn(),
};

describe('<BbsModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <BbsModal {...props}>{() => <p>Bbs modal here</p>}</BbsModal>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <SimpleModal
        isShown={false}
      >
        BBS will be here.
         
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
