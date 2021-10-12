it('viewport test', () => {

  cy.visit('/')
  cy.viewport(320, 480)
  cy.viewport('iphone-5')

});

it('touch device', () => {

  cy.visit('/', {
    onBeforeLoad: (win) => {
      win.ontouchstart = true
    }
  })

})


it.only('changing user agent', () => {
  cy.visit('/', {
    onBeforeLoad: (win) => {
      Object.defineProperty(win.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      });    
    }
  })
})
