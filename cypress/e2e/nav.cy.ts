describe('Navbar', () => {
  it('loads on skills page', () => {
    const PageTitle = 'CV Cheat Sheet';
    const SkillsLink = 'Skills';
    const StoriesLink = 'Stories';

    cy.visit('/');
    cy.contains(PageTitle);
    cy.contains('a', SkillsLink);
    cy.contains('a', StoriesLink);
  });
});
