import { html } from '@polymer/lit-element';
import './page-view-element.js';

export const SharedStyles = html `
 
<style>
  :host {
    display:none;
  }
  /* All screens smaller than 460px wide */

  /* Base Styles */

  h1, h2, h3, h4, h5, h6 {
    color: --app-dark-text-color; }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 10px 0; }

  h1, h2, h3, h4, h5, h6, a {
    text-rendering: optimizeLegibility; }

  h1 {
    font-size:48px;
    line-height: 56px;
    letter-spacing: -.018em;
    color: var(--app-secondary-color); }

  h2 {
    font-size: 34px;
    font-weight: 400;
    letter-spacing: -.01em;
    line-height: 40px;
    color: var(--app-secondary-color); }

  h3 {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -.012em;
    line-height: 26px; 
    text-align: center;}

  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; }

  h5, h6 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px; }

  p {
    margin: 0 0 25px 0;
    font-size: 1em;
    font-weight: 300;
    line-height: 26px; }

  a { 
    color: #a434b7;
    text-decoration: none; }

  a:active, a:hover {
    outline: 0; }

  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block; }

  section {
    margin: 0; }

  /* Material Design Styles */

  .mdc-typography {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased; }

  .mdc-typography--headline1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 2.5rem;
    line-height: 2.7rem;
    font-weight: 300;
    letter-spacing: -0.01562em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.75rem;
    line-height: 1.75rem;
    font-weight: 300;
    letter-spacing: -0.00833em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline3 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.3rem;
    line-height: 1.325rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline4 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.00735em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline5 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--headline6 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--subtitle1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.00937em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--subtitle2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.00714em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--body1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.03125em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--body2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.01786em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--caption {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.03333em;
    text-decoration: inherit;
    text-transform: inherit; }

  .mdc-typography--button {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.08929em;
    text-decoration: none;
    text-transform: uppercase; }

  .mdc-typography--overline {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.16667em;
    text-decoration: none;
    text-transform: uppercase; }

  .mdc-elevation--z0 {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z1 {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z2 {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z3 {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z4 {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z5 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z6 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z7 {
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z8 {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z9 {
    box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z10 {
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z11 {
    box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z12 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z13 {
    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z14 {
    box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z15 {
    box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z16 {
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z17 {
    box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z18 {
    box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z19 {
    box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z20 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z21 {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z22 {
    box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z23 {
    box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }

  .mdc-elevation--z24 {
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }

  .mdc-elevation-transition {
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: box-shadow; }

  /* Custom Font Weights */

  .paper-font-light {
    font-weight: 300; }

  .paper-font-medium {
    font-weight: 400; }

  .paper-font-semibold {
    font-weight: 500; }

  /* Base Classes */

  .nav {
    display: inline; }

  .sticky {
    display: none; } 

  #ts-site .hero>div {
    padding: 0; 
    text-align: center; }

  .hero-section p {
    margin: 0 0 25px 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px; }

  .text-uppercase {
    border-top: 1px solid #e4e4e4;
    display: block;
    padding: 16px 28px; 
    text-align: center; }

  .left {
    float: left;
    margin-left: 5px; }

  .ts-left {
    float: left;
    margin: 24px 0 24px;
    padding-right: 50px; }

  .ts-right {
    float: none;
    margin: 24px 30px 5px; }

  .ts-left img {
    margin-top: 14px; }

  /* Classes - Custom Buttons */

  .button-secondary-cta, .button-primary-cta {
    line-height: 30px;
    max-height: 30px; }

  .button.button-primary-cta {
    background: transparent;
    border: 2px solid #a434b7;
    color: #a434b7; }

  .button.button-secondary-cta {
    background: #a434b7;
    border: 2px solid #a434b7;
    color: #fff; }

  .button.button-primary-cta:hover, .button.button-primary-cta:active {
    background: #a434b7; }

  .button.button-secondary-cta:hover, .button.button-secondary-cta:active {
    color: #fff;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

  #ts-site .button.button-logo.ts-button {
    background-image: url(/images/bg/icon-send.svg); }

  #ts-site .button.button-logo {
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    padding: 0 48px 0 62px; }

  .hero .button, #ts-site .button .button-logo {
    background: #a434b7 16px 50% no-repeat;
    color: #fff;
    padding: 0 40px 0 62px; }

  #ts-site .button {
    border-radius: 2px;
    font-weight: 500;
    margin: 0 16px 0 0;
    text-align: center;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }

  #ts-site .button:hover {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

  #ts-site .button {
    border-radius: 2px;
    box-sizing: border-box;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    height: auto;
    letter-spacing: .01em;
    margin: 0;
    overflow: hidden;
    padding: 0 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: box-shadow .3s, background-color .3s, color .3s, transform .3s; }

  #ts-site .button-secondary-cta,  #ts-site .button-primary-cta {
    line-height: 0px; }

  #ts-site .button.button-primary-cta {
    background: transparent;
    border: 2px solid #a434b7;
    color: #fff; }

  #ts-site .button.button-secondary-cta {
    background: #a434b7;
    border: 2px solid #a434b7;
    color: #fff;
    margin: 24px 0; 
    padding: 24px 24px; }

  #ts-site .button.button-primary-cta:hover, #ts-site .button.button-primary-cta:active {
    background: #a434b7; }

  #ts-site .button.button-secondary-cta:hover, #ts-site .button.button-secondary-cta:active {
    color: #fff;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }

  /* Classes - Section Layout */

  #ts-site .background-servers {
    background: linear-gradient(#253238, #3A464B);
    background-color: #253238;
    background-position: fixed;
    color: #fff; }

  #ts-site .ts-max-width-standard {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px; }

  #ts-site .ts-full-bleed-section, #ts-social-footer.ts-full-bleed-section {
    margin-left: -10000px;
    margin-right: -10000px;
    padding-left: 10000px;
    padding-right: 10000px; }

  #ts-site .background-grey {
    background: #f7f7f7;
    color: var(--app-dark-text-color); }

  #ts-site .ts-pad-bottom-12 {
    padding-bottom: 96px; }

  #ts-site .ts-pad-top-6 {
    padding-top: 3px; }

  .ts-content-body {
    padding: 0px 34px 0 34px; }

  /* CSS Grid - No, we're not using Flexbox this tume */
  /* Simple 1/3 - 2/3 two colum grid justified */

  .ts-content-wrapper {
    min-height: 100vh;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    padding: 0 24px 0 34px; }

  .content {
    flex: 1;
    background: #f7f7f7;
    display: flex;
    flex-wrap: wrap; }

  .columns {
    display: flex;
    flex-wrap: wrap;
    flex: 1; }

  .main {
    flex: 1;
    background: #f7f7f7; }

  .sidebar {
    width: 293px;
    background: #f7f7f7; }

  .sidebar-selected {
    background:#edf0f2;
    color:#a434b7;
    text-decoration:none; }

  .ts-content-grid-box {
    padding:0 14px 10px 0;
    min-height: 230px; 
    text-align: center; }

  .ts-content-grid-box p, .ts-content-grid-box ul {
    max-width: 525px; 
    text-align: left; }
    
  .ts-grid-wrapper-standard {
    margin: 0px; }

  .inner {
    color: #111;
    background-color: #fff;
    min-height: 246px;
    padding: 40px 28px 0; }

  .inner {
    text-align: center;
  }

  .inner h3 {
    margin: 24px 0;
  }

  .inner p{
    text-align: center; }

  .ts-grid-wrapper-auto-fill {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(283px, 1fr));
    justify-items: center;
    margin: 20px; }

  .ts-grid-wrapper-auto-fit {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center; }

  #ts-site .l-space-bottom-5 {
    margin-bottom: 40px; }

  ul.right-side-nav {
    list-style: none;
    padding-left: 10px; }

  #ts-site .nav li {
    border-bottom: 1px solid #eceff1;
    margin: 0;
    padding: 0; }

  li, li p {
    margin: 8px 0;
    padding: 0; }

  #ts-site ul.body-checks {
    list-style: none;
    margin-left: 0px;
    padding: 0 0 0 5px; }

  #ts-site ul.body-checks li {
    background-image: url(/images/icons/ts-check-purple.svg);
    background-repeat: no-repeat;
    line-height: 30px;
    padding: 0 0 0 36px;
    background-size: 22px 16px;
    background-position: 0px 8px; }

  #ts-site .nav li h3 {
    color: #4a5960;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 42px 0 16px;
    padding-bottom: 0; }

  #ts-site .nav li a {
    color: var(--app-secondary-color);
    display: block;
    font-size: 13px;
    line-height: 40px;
    margin: 0;
    overflow: hidden;
    padding: 0 16px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap; }

  #ts-site .nav li a:hover{
    background: #edf0f2;
    color: #a434b7;
    text-decoration: none; }

  #ts-site .l-pad-right-2 {
    padding-right: 16px; }

  #ts-site .l-pad-left-2 {
    padding-left: 16px; }

  #ts-site .text-uppercase {
    text-transform: uppercase;
    border-top: 0px; }

  /* Classes - Custom Card Styles */

  .flex-hover-card {
    box-sizing: border-box;
    margin-right: 20px;
    background: #fff;
    border-radius: 2px;
    cursor: pointer;
    -ms-flex: 1;
    flex: 1;
    letter-spacing: .01em;
    transition: all .3s;
    margin-bottom: 16px; }

  .flex-hover-card {
    box-shadow: none;
    margin: 5px 10px;
    padding: 0;
    width: 100%; 
    text-align: left; }

  .flex-hover-card:hover {
    transform: translate3d(0, -2px, 0);
    text-decoration: none; }

  .flex-hover-card:hover {
    box-shadow: -1px 5px 25px -5px rgba(0, 0, 0, 0.8); }

  .flex-hover-card .inner>h3 {
    font-size: 22px;
    margin: 24px 0; }

  .flex-hover-card .inner>p {
    font-size: 18px; }

  #ts-site .ts-pad-left-30 {
    padding-left: 240px; }

  #ts-site .ts-pad-right-38 {
    padding-right: 304px; }

  #ts-site .ts-showcase-content {
    margin: 0 8px; }

  .text-uppercase {
    text-transform: uppercase;
    text-align: center; }

  .mdc-button--raised {
      box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); }

  .mdc-button--raised, .mdc-button--unelevated {
      padding: 0 16px 0 16px; }

  .mdc-button--raised:hover, .mdc-button--raised:focus {
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12); }

  .mdc-button--raised.mdc-ripple-upgraded, .mdc-button--unelevated.mdc-ripple-upgraded {
      --mdc-ripple-fg-opacity: .32; }

  /* All screens larger than 460px */

  @media (min-width: 460px) {
    h3 {
      text-align: left;
    }

    figure {
      margin-top: 0px; }

    .sticky {
      display:block;
      width: 228px;
      max-width: 293px;
      padding-top: 0px; }

    #ts-site .hero>div {
      padding: 50px 0px 0 24px; 
      text-align: left; }

    #ts-site .hero {
        min-height: 270px;
        padding: 14px;
    }

    .center-button {
      margin: 0 auto;
      width: 100%;
      text-align: left; 
      margin-top: 24px; }

    #ts-site .ts-pad-top-6 {
      padding-top: 5; }

    .ts-grid-wrapper-standard {
      margin: auto auto;
      max-width: 960px; }
    
    .ts-grid-wrapper-auto-fit {
      grid-gap: 16px;
      padding: 0px; }

    .flex-hover-card {
      width: 300px;
      text-align: left; }

    .inner {
      min-height: 260px; 
      text-align: left; }

    .flex-hover-card .inner>h3 {
      margin: 14px 0;
    }

    .inner p{
      text-align: left; }

    .flex-hover-card .inner>p {
      font-size: 17px; }

    .text-uppercase {
      text-transform: uppercase;
      text-align: left; }

    .ts-grid-wrapper-autofill, .ts-grid-wrapper-standard {
      padding: 10px; }

    .flex-hover-card {
      margin-bottom: 5px; }

    .ts-grid-wrapper-auto-fill {
      grid-gap: 24px;
      padding: 0px; }

    .ts-content-grid-box {
      text-align: left; }

    .ts-left {
      float: none;
      margin: 0;
      text-align: center;
    }
    .ts-right {
      float: right;
      margin: 24px 30px 5px; }
  }
</style>
`;