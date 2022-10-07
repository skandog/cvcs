import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

describe('<App />', () => {
  describe('fetchSkills', () => {
    describe('when the api call is successful', () => {
      it('should return the skills list', async () => {
        // given
        const skills = [
          {id: 1, name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
          {id: 2, name: 'Typescript', count: 3, type: 'dev'},
          {id: 3, name: 'Java', count: 0, type: 'dev'},
        ];

        (axios.get as jest.Mock).mockResolvedValueOnce(skills);

        //when
        const result = await fetchSkills();

        //then
        expect(axios.get as jest.Mock).toHaveBeenCalledWith(
          `${BASE_URL}/skills`,
        );
        expect(result).toEqual(skills);
      });
    });
  });
});
