import React from 'react';
import { mount } from 'enzyme';

import AppLayout from './AppLayout';

const props = {
  playerPanel: <div>Player panel</div>,
  computerPanel: <div>Computer panel</div>,
  softPanel: <div>Software panel</div>,
  datePanel: <div>Date panel</div>,
};

describe('<AppLayout />', () => {
  it('renders app', () => {
    expect.assertions(1);

    const wrapper = mount(<AppLayout {...props} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <AppLayout
        computerPanel={
          <div>
            Computer panel
          </div>
        }
        datePanel={
          <div>
            Date panel
          </div>
        }
        playerPanel={
          <div>
            Player panel
          </div>
        }
        softPanel={
          <div>
            Software panel
          </div>
        }
      >
        <Container
          className="Game"
          fluid={true}
        >
          <div
            className="Game container-fluid"
          >
            <ForwardRef
              noGutters={false}
            >
              <div
                className="row"
              >
                <Col
                  style={
                    Object {
                      "padding": "5px",
                    }
                  }
                >
                  <div
                    className="col"
                    style={
                      Object {
                        "padding": "5px",
                      }
                    }
                  >
                    <div>
                      Player panel
                    </div>
                    <div>
                      Computer panel
                    </div>
                    <div>
                      Software panel
                    </div>
                  </div>
                </Col>
                <Col
                  style={
                    Object {
                      "padding": "5px",
                    }
                  }
                >
                  <div
                    className="col"
                    style={
                      Object {
                        "padding": "5px",
                      }
                    }
                  >
                    <div>
                      Date panel
                    </div>
                  </div>
                </Col>
              </div>
            </ForwardRef>
          </div>
        </Container>
      </AppLayout>
    `);
  });
});
