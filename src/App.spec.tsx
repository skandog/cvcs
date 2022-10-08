import react from 'react';
import nock from 'nock';
import '@testing-library/jest-dom/extend-expect';
import fetchSkills from './App';

const BASE_URL = 'http://localhost:3001/';

describe('<App />', () => {
  describe('fetchSkills', () => {
    describe('when the api call is successful', () => {
      it('should return the skills list', async () => {
        // given
        const url = '/skills';
        const skills = [
          {id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
          {id: 2, name: 'Typescript', count: 3, type: 'dev'},
          {id: 3, name: 'Java', count: 0, type: 'dev'},
        ];

        const scope = nock(BASE_URL).get('/skills').once().reply(200, {skills});

        //when
        const result = await fetchSkills();

        //then
        expect(result[0].name).toEqual('Trail Blazer');
      });
    });
  });
});
