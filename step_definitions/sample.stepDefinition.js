import { defineSupportCode } from 'cucumber';
import samplePage from '../functions/sample.page.js';

defineSupportCode(function({ Given, When, Then }) {

  Given(/^User goes to SampleAutoamtion Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User clicks Sign in button$/, () => {
    samplePage.goToSignInPage();
  });

  When(/^User enter value into Email input field$/, () => {
    samplePage.clickEmailField();
  });

  When(/^User click Emailid Submit Button$/, () => {
    samplePage.clickEmailIdSubmit();
  });

  When(/^User Enter Form$/, () => {
    samplePage.enterForm();
  });

  When(/^User Enter Search Item$/, () => {
    samplePage.searchItem();
  });

  When(/^User Add item to Cart$/, () => {
    samplePage.addItemToCart();
  });
});
