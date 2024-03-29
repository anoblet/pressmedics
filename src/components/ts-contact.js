import { HP_HOST } from './config';

import { html, css, unsafeCSS } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

import { SharedStyles } from './ts-style-shared';
import { TsFormStyle } from './ts-style-form';
import { TsInputStyle } from './ts-style-input';
import { TsSelectStyle } from './ts-style-select';
import { TsTextAreaStyle } from './ts-style-textarea';
import { announceLabel } from '../actions/app.js';

const cdnHost = unsafeCSS(HP_HOST);

class TSContact extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      TsFormStyle,
      TsInputStyle,
      TsSelectStyle,
      TsTextAreaStyle,
      css`

      :host {
        display: block;
        padding: 0px;
      }

      /* Smaller than 460 */

      #contactForm {
        margin-top: 40px;
      }

      .hero {
        background: var(--app-light-text-color) url('https://${cdnHost}/images/header/ts-care-header-opt.svg') no-repeat;
        background-size: contain;
        background-position: center center;
      }

      h3 {
        padding-top: 20px; }

      ts-button > * {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid var(--app-secondary-color);
        background-color: var(--app-light-text-color);
        font-size: 1rem;
        font-weight: 500;
        color: var(--app-secondary-color);
        margin: 0;
        padding: 8px 44px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
        margin-top:14px;
        width:100%;
      }

      ts-input, ts-select, ts-textarea {
        width: 100%;
      }

      @media (min-width: 460px) {
        ts-input, ts-select, ts-textarea {
          margin-bottom: 20px;
        }
        paper-spinner-lite {
          position: fixed;
          top: calc(50% - 14px);
          left: calc(50% - 14px);
        }

        .hero {
          background-position: 92% center;
        }

        .hero>div {
          min-height: 120px;  
        }

        .ts-contact-body {
          margin-bottom: 24px;
        }

        .ts-contact-wrapper {
          background-color: var(--app-light-text-color);
          border-top: 1px solid #ccc;
        }

        .ts-contact-body h2 {
          margin-bottom: 16px;
        }

        #ts-site .ts-pad-right-4 {
          padding-right: 32px;
        }

        .main-frame {
          transition: opacity 0.5s;
        }
        .main-frame.waiting {
          opacity: 0.1;
        }
        ts-input, ts-select, ts-textarea {
          font-size: 1.15rem;
        }
        .billing-address-picker {
          margin: 28px 0;
          height: 20px;
          display: flex;
        }
        .billing-address-picker > label {
          margin-left: 12px;
        }
        .grid {
          margin-top: 40px;
          display: flex;
        }
        .grid > section {
          flex: 1;
        }
        .grid > section:not(:first-child) {
          margin-left: 80px;
        }
        .row {
          display: flex;
          align-items: flex-end;
        }
        .column {
          display: flex;
          flex-direction: column;
        }
        .row > .flex,
        .input-row > * {
          flex: 1;
        }
        .input-row > *:not(:first-child) {
          margin-left: 8px;
        }
        label.ts-select-label {
          line-height: 20px;
          color: #ccc;
        }
        .order-summary-row {
          line-height: 24px;
        }
        .total-row {
          font-weight: 500;
          margin: 30px 0;
        }

        @media (max-width: 767px) {
        .grid {
            display: block;
            margin-top: 0;
          }
        .grid > section:not(:first-child) {
            margin-left: 0;
          }
        #ts-site.ts-care {
          background-position: 100% 140px !important; }

        .ts-right {
          float: none !important;
          margin: 24px 30px 5px; }
        } 
      }
    `
    ];
  } 

  render() {
    const requestip = location.hostname; 
    const { _response, _state, _waiting } = this;
    return html `
    <article id="ts-site" class="ts-care">
      <header class="hero">
        <div class="ts-header-wrapper fade-in">
          <h1 class="paper-font-display2 paper-font-light">Contact Us</h1>
          <h2 class="paper-font-title paper-font-light">Touch base with one of our WordPress experts</h2>
        </div>
      </header>
      <div class="ts-contact-wrapper delayed-fade-in">
        <div class="${_waiting ? 'main-frame waiting' : 'main-frame'}">
          <div state="init">
            <form id="contactForm">
              <input type="hidden" id="requestip" name="requestip" value="${ requestip }">
              <div class="subsection grid">
                <section>
                  <div class="row input-row">
                    <ts-input>
                    <input type="text" id="first_name" name="first_name" pattern=".{3,}"
                            placeholder="First name" autofocus required
                            autocomplete="first-name">
                        <ts-md-decorator error-message="Invalid Name" aria-hidden="true">
                        <label for="first_name">First name</label>
                          <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-input>
                  </div>
                  <div class="row input-row">
                    <ts-input> 
                    <input type="text" id="last_name" name="last_name" pattern=".{3,}"
                            placeholder="Last name" required
                            autocomplete="last-name">
                      <ts-md-decorator error-message="Invalid Name" aria-hidden="true">
                      <label for="last_name">Last name</label>
                        <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-input>
                  </div>
                  <div class="row input-row">
                  <ts-input>
                    <input type="email" id="email" name="email"
                        placeholder="Email" required
                        aria-labelledby="EmailLabel InfoHeading">
                    <ts-md-decorator error-message="Invalid Email" aria-hidden="true">
                    <label id="EmailLabel">Email</label>
                     <ts-underline></ts-underline>
                    </ts-md-decorator>
                  </ts-input>
                  </div>
                  <div class="column">
                    <ts-select>
                      <select id="type" name="type" required
                          autocomplete="contact type"
                          aria-labelledby="typeLabel typeHeading">
                        <option value="general" selected>General</option>
                        <option value="hosting">Hosting</option>
                        <option value="design">Web Design</option>
                        <option value="pagespeed">PageSpeed</option>
                        <option value="emergency">Emergency</option>
                        <option value="security">Security</option>
                        <option value="migration">Site Migration</option>
                        <option value="press">Press Inquiry</option>
                      </select>
                      <ts-md-decorator aria-hidden="true">               
                      <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-select>
                  </div>
                </section>
                <section>
                  <div class="row input-row">
                    <ts-input>
                      <input type="url" id="website" name="website"
                          placeholder="https://yoursite.com" required
                          aria-labelledby="WebsiteLabel InfoHeading">
                      <ts-md-decorator error-message="Invalid URL" aria-hidden="true">
                        <label id="WebsiteLabel">Website URL</label>
                        <ts-underline></ts-underline>
                      </ts-md-decorator>
                    </ts-input>
                  </div>
                  <div class="row input-row">
                    <ts-textarea style="margin-top:20px;">
                      <textarea id="description" name="description" 
                          placeholder="Description" required 
                          aria-labelledby="DescriptionLabel InfoHeading"></textarea>
                      <ts-md-decorator error-message="Invalid Name" aria-hidden="true">
                          <label ID="DescriptionLabel">Description</label>
                          <ts-underline></ts-underline>
                        </ts-md-decorator>
                    </ts-textarea>
                  </div>
                  <ts-button responsive id="submitBox">
                    <input type="button" @click="${e => this._submit()}" value="Submit Inquiry">
                  </ts-button>
                </section>
              </div>
            </form>
          </div>  
        </div>
      </div>
    </article> 
  <!-- Show spinner when waiting for the server to repond -->
  <paper-spinner-lite ?active="${_waiting}"></paper-spinner-lite>
  `;
  }

  static get properties() { return {
    _waiting: { type: Boolean },
    _type: { type: String },
    _response: { type: Object }
  };}

  stateChanged(state) {
    this._type = state.contact.type;
  }


  _submit() {
    const contactForm = this.shadowRoot.querySelector('#contactForm');
    if (this._validateForm(contactForm)) {
      this._sendRequest(contactForm)
        .then(res => res.json())
        .then(data => this._didReceiveResponse(data))
        .catch(_ => this._didReceiveResponse({
          error: 1,
          errorMessage: 'Transaction failed.'
        }));
    }
  }

  /**
   * Validates the form's inputs and adds the `aria-invalid` attribute to the inputs
   * that don't match the pattern specified in the markup.
   */
  _validateForm(form) {
    let firstInvalid = false;

    for (let el, i = 0; el = form.elements[i], i < form.elements.length; i++) {
      if (el.checkValidity()) {
        el.removeAttribute('aria-invalid');
      } else {
        if (!firstInvalid) {
          // announce error message
          if (el.nextElementSibling) {
            //dispatch(announceLabel(el.nextElementSibling.getAttribute('error-message')));
          }
          if (el.scrollIntoViewIfNeeded) {
            // safari, chrome
            el.scrollIntoViewIfNeeded();
          } else {
            // firefox, edge, ie
            el.scrollIntoView(false);
          }
          el.focus();
          firstInvalid = true;
        }
        el.setAttribute('aria-invalid', 'true');
      }
    }
    return !firstInvalid;
  }

  /**
   * Sends form and cart data to the server and updates the UI to reflect
   * the waiting state.
   */
  _sendRequest(form) {
    this._waiting = true;

    return fetch('https://localhost:10443/api/content/create?type=Contact', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        // ccExpMonth: form.elements.ccExpMonth.value,
        FirstName: form.elements.first_name.value,
        LastName: form.elements.last_name.value,
        Email: form.elements.email.value,
        Subject: form.elements.type.value,
        Website: form.elements.website.value,
        Description: form.elements.description.value
      }),
      headers: {
        'Content-Type': 'multipart/form-data; boundary=------------------------d74496d66958873e--'
      }
    });
  }

  /**
   * Handles the response from the server by checking the response status
   * and transitioning to the success or error UI.
   */
  _didReceiveResponse(response) {
    this._response = response;
    this._waiting = false;
  }

}
window.customElements.define('ts-contact', TSContact);