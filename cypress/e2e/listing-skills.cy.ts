describe('Listing skills', () => {
  it('shows list of skills for lib', () => {
    const trailSkill = 'Trail Blazer';
    const typeSkill = 'Typescript';

    cy.intercept('GET', 'http://localhost:3001/skills', [
      {name: 'Trail Blazer', type: 'Soft Skills'},
      {name: 'Typescript', type: 'dev'},
    ]);

    cy.visit('/');
    cy.contains(trailSkill);
    cy.contains(typeSkill);
  });
});
