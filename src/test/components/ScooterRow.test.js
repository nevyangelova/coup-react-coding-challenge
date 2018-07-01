import expect from 'expect';
import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';
import ScooterRow from '../../components/ScooterRow';

function setup(fetching) {
  const props = {
    scooter: {
      model: 'dummy_model'
    }
  };
  //
  // return shallow( <ScooterRow { ...props
  //   }
  //   />);
}

  describe('ScooterRow container', () => {
    it('renders table row', () => {
      const wrapper = setup(false);
      expect(wrapper.find('tr').length).toBe(1);
      expect(wrapper.find('td').text()).toEqual('dummy_model');
    });
  });
