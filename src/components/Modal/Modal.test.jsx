import React from 'react';
import { mount } from 'enzyme';

import Modal from './Modal';

const props = {
  isOpened: false,
  trigger: {
    text: 'Open modal',
  },
  handleOpen: jest.fn(),
  handleClose: jest.fn(),
};

describe('<Modal />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = mount(<Modal {...props}>{() => <p>1</p>}</Modal>);

    expect(wrapper).toMatchInlineSnapshot(`
      <Modal
        handleClose={[MockFunction]}
        handleOpen={[MockFunction]}
        header={false}
        isHeaderCloseButton={true}
        isOpened={false}
        trigger={
          Object {
            "text": "Open modal",
          }
        }
      >
        <Button
          active={false}
          disabled={false}
          onClick={[MockFunction]}
          type="button"
          variant="primary"
        >
          <button
            className="btn btn-primary"
            disabled={false}
            onClick={[MockFunction]}
            type="button"
          >
            Open modal
          </button>
        </Button>
        <Bootstrap(Modal)
          onHide={[MockFunction]}
          show={false}
        >
          <Modal
            animation={true}
            autoFocus={true}
            backdrop={true}
            bsPrefix="modal"
            dialogAs={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "displayName": "ModalDialog",
                "render": [Function],
              }
            }
            enforceFocus={true}
            keyboard={true}
            manager={
              BootstrapModalManager {
                "adjustAndStore": [Function],
                "containers": Array [],
                "data": Array [],
                "handleContainerOverflow": true,
                "hideSiblingNodes": true,
                "modals": Array [],
                "restore": [Function],
                "scrollbarSize": 0,
              }
            }
            onHide={[MockFunction]}
            restoreFocus={true}
            show={false}
          >
            <ForwardRef
              autoFocus={true}
              backdrop={true}
              backdropTransition={[Function]}
              className="modal"
              containerClassName="modal-open"
              enforceFocus={true}
              keyboard={true}
              manager={
                BootstrapModalManager {
                  "adjustAndStore": [Function],
                  "containers": Array [],
                  "data": Array [],
                  "handleContainerOverflow": true,
                  "hideSiblingNodes": true,
                  "modals": Array [],
                  "restore": [Function],
                  "scrollbarSize": 0,
                }
              }
              onClick={[Function]}
              onEnter={[Function]}
              onEntering={[Function]}
              onExited={[Function]}
              onHide={[MockFunction]}
              onMouseUp={[Function]}
              renderBackdrop={[Function]}
              restoreFocus={true}
              show={false}
              style={Object {}}
              transition={[Function]}
            >
              <Modal
                autoFocus={true}
                backdrop={true}
                backdropTransition={[Function]}
                className="modal"
                container={<body />}
                containerClassName="modal-open"
                enforceFocus={true}
                keyboard={true}
                manager={
                  BootstrapModalManager {
                    "adjustAndStore": [Function],
                    "containers": Array [],
                    "data": Array [],
                    "handleContainerOverflow": true,
                    "hideSiblingNodes": true,
                    "modals": Array [],
                    "restore": [Function],
                    "scrollbarSize": 0,
                  }
                }
                onClick={[Function]}
                onEnter={[Function]}
                onEntering={[Function]}
                onExited={[Function]}
                onHide={[MockFunction]}
                onMouseUp={[Function]}
                renderBackdrop={[Function]}
                restoreFocus={true}
                role="dialog"
                show={false}
                style={Object {}}
                transition={[Function]}
              />
            </ForwardRef>
          </Modal>
        </Bootstrap(Modal)>
      </Modal>
    `);
  });
});
