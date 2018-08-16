import Page from './page.js';

class samplePage extends Page {
  get signInButton() { return browser.element('//a[@class="login"]'); }
  get emailInputField() { return browser.element('//*[@id="email_create"]'); }
  get emailIdSubmitButton() { return browser.element('//*[@id="SubmitCreate"]'); }
  get selectGenderButton() { return browser.element('//*[@id="id_gender2"]'); }
  get enterFirstName() { return browser.element('//*[@id="customer_firstname"]'); }
  get enterSecondName() { return browser.element('//*[@id="customer_lastname"]'); }
  get enterPassword() { return browser.element('//*[@id="passwd"]'); }
  get selectDate() { return browser.element('//*[@id="days"]'); }
  get selectMonth() { return browser.element('//*[@id="months"]'); }
  get selectYear() { return browser.element('//*[@id="years"]'); }
  get enterAddress() { return browser.element('//*[@id="address1"]'); }
  get enterCity() { return browser.element('//*[@id="city"]'); }
  get enterState() { return browser.element('//*[@id="id_state"]'); }
  get enterPostalAddress() { return browser.element('//*[@id="postcode"]'); }
  get enterCountry() { return browser.element('//*[@id="phone_mobile"]'); }
  get clickEmailSubmit() { return browser.element('//*[@id="submitAccount"]'); }
  get enterItem() { return browser.element('//*[@id="search_query_top"]'); }
  get submitSearchItem() { return browser.element('//*[@id="searchbox"]/button'); }
  get addToCart() { return browser.element('//*[@class="button ajax_add_to_cart_button btn btn-default"]'); }

  goToHome() {
    browser.url('http://automationpractice.com/');
  }

  goToSignInPage() {
    this.signInButton.click();
    // browser.pause(4000);
  }

  clickEmailField() {
    this.emailInputField.setValue('asd1@g.com');
    browser.pause(1000);
  }

  clickEmailIdSubmit() {
    this.emailIdSubmitButton.click();
    browser.pause(2000);
  }

  enterForm() {
    this.selectGenderButton.click();
    this.enterFirstName.setValue('Karun')
    this.enterSecondName.setValue('Cherian')
    this.enterPassword.setValue('12345')
    this.selectDate.selectByVisibleText('6')
    this.selectMonth.selectByVisibleText('January')
    this.selectYear.selectByVisibleText('1995')
    this.enterAddress.setValue('Pynedath h, Gothuruth P O')
    this.enterCity.setValue('Ernakulam')
    this.enterState.selectByVisibleText('California')
    this.enterPostalAddress.setValue('55555')
    this.enterCountry.setValue('1234567890')
    this.clickEmailSubmit.click();
    browser.pause(2000);
  }

  searchItem() {
    this.enterItem.setValue('shirt');
    this.submitSearchItem.click();
    browser.pause(2000);
  }

  addItemToCart() {
    this.addToCart.click();
    browser.pause(9000);
  }
};
export default new samplePage();
