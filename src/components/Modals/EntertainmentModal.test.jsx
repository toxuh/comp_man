import React from 'react';
import { shallow } from 'enzyme';

import EntertainmentModal from './EntertainmentModal';

const props = {
  isShown: false,
  onClose: jest.fn(),
};

describe('<EntertainmentModal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <EntertainmentModal {...props}>
        {() => <p>Entertainment modal here</p>}
      </EntertainmentModal>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <SimpleModal
        isShown={false}
      >
        Entertainment will be here.
         
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
