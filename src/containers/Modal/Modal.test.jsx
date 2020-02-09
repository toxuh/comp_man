import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(<Modal>Modal content</Modal>);

    expect(wrapper).toMatchInlineSnapshot(`
      <Modal
        handleClose={[Function]}
        handleOpen={[Function]}
        header={false}
        isHeaderCloseButton={true}
        isOpened={false}
      >
        Modal content
      </Modal>
    `);
  });
});
