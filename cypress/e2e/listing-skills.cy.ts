describe('Listing skills', () => {
  it('shows list of skills for lib', () => {
    const trailSkill = 'Trail Blazer';
    const typeSkill = 'Typescript';

    cy.intercept('GET', 'https://cvcs.herokuapp.com/skills', [
      {name: 'Trail Blazer', count: 2, type: 'Soft Skills'},
      {name: 'Typescript', count: 3, type: 'dev'},
    ]);

    cy.visit('/');
    cy.contains(trailSkill);
    cy.contains(typeSkill);
  });
});
