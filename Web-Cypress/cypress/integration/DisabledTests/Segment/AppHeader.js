import AppHeader from "../../../support/pageobjects/AppHeader.js";
import WorkoutsPage from "../../../support/pageobjects/WorkoutsPage.js";

const appHeader = new AppHeader();
const workoutsPage = new WorkoutsPage();

const intercept = {
  intercept() {
    /*
     * this function is used to spy on the intercept and keep track
     * of how many times each intercept has been called.
     */
  },

  intercept2() {
    /*
     * this function is used to spy on the intercept and keep track
     * of how many times each intercept has been called.
     */
  },

  intercept3() {
    /*
     * this function is used to spy on the intercept and keep track
     * of how many times each intercept has been called.
     */
  },
};

describe("Segment - Header CTA Segment Test", function () {
  it("Segment - Authenticated CTA Click Events", function () {
    workoutsPage.visitPage();
    cy.loginSubscribedUser();

    const spyDropDownAccountButton = cy
      .spy(intercept, "intercept")
      .as("intercept");
    const spyShopButton = cy.spy(intercept, "intercept2").as("intercept2");
    const spyDropDownLogoutButton = cy
      .spy(intercept, "intercept3")
      .as("intercept3");

    cy.intercept("POST", "https://api.segment.io/v1/t", (req) => {
      if (req.body.includes('"event":"CTA Clicked"')) {
        if (req.body.includes('"cta_name":"menu-account"')) {
          intercept.intercept();
          req.alias = "dropdownAccount";
        } else if (req.body.includes('"cta_name":"topnav-shop-all"')) {
          intercept.intercept2();
          req.alias = "headerShop";
        } else if (req.body.includes('"cta_name":"menu-logout"')) {
          intercept.intercept3();
          req.alias = "dropdownLogout";
        }
      }
    });
    appHeader.getToggleDropDownButton().click();
    appHeader
      .getDropDownAccountButton()
      .click()
      .then(($spyDropDownAccountButton) => {
        cy.wrap($spyDropDownAccountButton, { timeout: 5000 }).should(() => {
          expect(spyDropDownAccountButton).to.have.callCount(1);
        });
      });
    cy.wait(2000);
    appHeader
      .getShopButton()
      .click()
      .then(($spyShopButton) => {
        cy.wrap($spyShopButton, { timeout: 5000 }).should(() => {
          expect(spyShopButton).to.have.callCount(1);
        });
      });
    cy.wait(2000);
    appHeader.getToggleDropDownButton().click();
    appHeader
      .getDropDownLogoutButton()
      .click({ force: true })
      .then(($spyDropDownLogoutButton) => {
        cy.wrap($spyDropDownLogoutButton, { timeout: 5000 }).should(() => {
          expect(spyDropDownLogoutButton).to.have.callCount(1);
        });
      });
  });

  /* Keeppass QB-825
    it('Segment - PVolve Logo', function () {
        workoutsPage.visitPage();
        cy.waitForAppPageLoad();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', ' https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'topnavPvolveLogo';
            }
        });
        appHeader.getPvolveLogoButton().click().then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Home Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'topnavHomeButton';
            }
        });
        appHeader.getHomeButton().click().then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Classes Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'topnavClassesButton';
            }
        });
        appHeader.getClassesButton().click().then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Series Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'topnavSeriesButton';
            }
        });
        appHeader.getSeriesButton().click().then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Free Trial Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'topnavFreeTrial';
            }
        });
        appHeader.getFreeTrialButton().click().then(($spy) => {
            cy.wrap($spy, { timeout: 5000 }).should($spy => {
                expect(spy).to.have.callCount(1);
            });
        });
    });

    it('Segment - Log In Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'topnavLogIn';
            }
        });
        appHeader.getToggleDropDownButton().click();
        appHeader.getDropDownLoginButton().click()
            .then(($spy) => {
                cy.wrap($spy, { timeout: 5000 }).should($spy => {
                    expect(spy).to.have.callCount(1);
                });
            });
    });

    it('Segment - New York Studio Dropdown Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'dropdownNewYork';
            }
        });
        appHeader.getToggleDropDownButton().click;
        appHeader.getDropDownNYCStudioButton().click({ force: true })
            .then(($spy) => {
                cy.wrap($spy, { timeout: 5000 }).should($spy => {
                    expect(spy).to.have.callCount(1);
                });
            });
    });

    it('Segment - Chicago Studio Dropdown Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'dropdownChicago';
            }
        });
        appHeader.getToggleDropDownButton().click;
        appHeader.getDropDownChicagoStudioButton().click({ force: true })
            .then(($spy) => {
                cy.wrap($spy, { timeout: 5000 }).should($spy => {
                    expect(spy).to.have.callCount(1);
                });
            });
    });

    it('Segment - Los Angeles Studio Dropdown Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'dropdownLosAngeles';
            }
        });
        appHeader.getToggleDropDownButton().click;
        appHeader.getDropDownLAStudioButton().click({ force: true })
            .then(($spy) => {
                cy.wrap($spy, { timeout: 5000 }).should($spy => {
                    expect(spy).to.have.callCount(1);
                });
            });
    });

    it('Segment - Live Virtual Studio Dropdown Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'dropdownLVS';
            }
        });
        appHeader.getToggleDropDownButton().click;
        appHeader.getDropDownLVSStudioButton().click({ force: true })
            .then(($spy) => {
                cy.wrap($spy, { timeout: 5000 }).should($spy => {
                    expect(spy).to.have.callCount(1);
                });
            });
    });

    it('Segment - Shop Dropdown Button Click', function () {
        workoutsPage.visitPage();

        const spy = cy.spy(intercept, 'intercept').as('intercept');

        cy.intercept('POST', 'https://api.segment.io/v1/t', (req) => {
            if (req.body.includes('"event":"CTA Clicked"')) {
                intercept.intercept();
                req.alias = 'dropdownLVS';
            }
        });
        appHeader.getToggleDropDownButton().click;
        appHeader.getDropDownShopButton().click({ force: true })
            .then(($spy) => {
                cy.wrap($spy, { timeout: 5000 }).should($spy => {
                    expect(spy).to.have.callCount(1);
                });
            });
    });
    */
});
