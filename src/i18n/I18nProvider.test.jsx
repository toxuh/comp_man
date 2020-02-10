import React from 'react';
import { shallow } from 'enzyme';

import I18nProvider from './I18nProvider';

jest.mock('react', () => {
  const r = jest.requireActual('react');

  return { ...r, memo: (x) => x };
});

describe('<I18nProvider />', () => {
  it('renders', () => {
    expect.assertions(1);

    const wrapper = shallow(
      <I18nProvider>
        <div>Children</div>
      </I18nProvider>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
      <Component
        locale="en-US"
        messages={
          Object {
            "containers.AppBootstrap.messages.compMan": "Компьютерщик",
            "containers.ComputerPanel.messages.cd": "CD-ROM",
            "containers.ComputerPanel.messages.computer": "Компьютер",
            "containers.ComputerPanel.messages.hdd": "Винчестер",
            "containers.ComputerPanel.messages.header": "Ваш копьютер",
            "containers.ComputerPanel.messages.memory": "Память",
            "containers.ComputerPanel.messages.modem": "Модем",
            "containers.ComputerPanel.messages.sound": "Sound Blaster",
            "containers.PlayerPanel.messages.bad": "Плохое",
            "containers.PlayerPanel.messages.excellent": "Отличное",
            "containers.PlayerPanel.messages.good": "Хорошее",
            "containers.PlayerPanel.messages.hacker": "Хакер",
            "containers.PlayerPanel.messages.money": "Денег",
            "containers.PlayerPanel.messages.mood": "Настроение",
            "containers.PlayerPanel.messages.newbie": "Чайник",
            "containers.PlayerPanel.messages.normal": "Нормальное",
            "containers.PlayerPanel.messages.points": "Очки",
            "containers.PlayerPanel.messages.programmer": "Прораммист",
            "containers.PlayerPanel.messages.status": "Ваш статус",
            "containers.SoftPanel.messages.antivirus": "Антивирус",
            "containers.SoftPanel.messages.bbs": "BBS'ка",
            "containers.SoftPanel.messages.header": "Установленный soft",
            "containers.SoftPanel.messages.os": "Система",
            "containers.SoftPanel.messages.other": "Другой soft",
            "containers.SoftPanel.messages.programming": "Программи-ие",
          }
        }
      >
        <div>
          Children
        </div>
      </Component>
    `);
  });
});
