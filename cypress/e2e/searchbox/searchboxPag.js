const SEARCHTEXTBOX= "#searchTerm"
const SEARCHRESULTS = 'h2'


class SearchPage{
static typeTextInSearchBox(text){
    cy.get(SEARCHTEXTBOX).type(text)
    cy.get(SEARCHTEXTBOX).type('{enter}')
    // cy.get(SEARCHTEXTBOX).type('{enter}')
}

static assertSearchResultsContainsText(text){
    cy.get(SEARCHRESULTS).contains(text)
   cy.log(typeof(SEARCHRESULTS))

}
}
export default SearchPage;