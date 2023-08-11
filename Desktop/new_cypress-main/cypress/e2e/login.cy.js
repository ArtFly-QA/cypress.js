describe('Тестирование формы логина', function () {
   it('Ввожу правильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.wait(1000);
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon');
    })


 it('Забыл пароль', function () {
cy.visit('https://login.qa.studio/');
cy.get('#forgotEmailButton').click();
cy.get('#mailForgot').type('artfly@gmail.com');
cy.get('#restoreEmailButton').click();
cy.wait(1000);
cy.contains('Успешно отправили пароль на e-mail').should('be.visible');

    })
})

it('Негативный кейс авторизации', function () {
cy.visit('https://login.qa.studio/');
cy.get('#mail').type('german@dolnikov.ru');
cy.get('#pass').type('login');
cy.get('#loginButton').click();
cy.wait(1000);
cy.contains('Такого логина или пароля нет').should('be.visible');
cy.get('#exitMessageButton > .exitIcon');
    })
   
it('Негативный кейс авторизации почта', function () {
cy.visit('https://login.qa.studio/');
cy.get('#mail').type('artfly163@qastudio.me');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.wait(1000);
cy.contains('Такого логина или пароля нет').should('be.visible');
cy.get('#exitMessageButton > .exitIcon');
    })

it('Негативный кейс валидации', function () {
cy.visit('https://login.qa.studio/');
cy.get('#mail').type('artfly163qastudio.me');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.wait(1000);
cy.contains('Нужно исправить проблему валидации').should('be.visible');
cy.get('#exitMessageButton > .exitIcon');
    })

 it('Строчные буквы в логине', function () {
cy.visit('https://login.qa.studio/');
cy.get('#mail').type('GerMan@Dolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.wait(1000);
cy.contains('Авторизация прошла успешно').should('be.visible');
cy.get('#exitMessageButton > .exitIcon');
    })