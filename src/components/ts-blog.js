import { html } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import { until } from 'lit-html/lib/until.js';
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';

import './ts-icons.js';
import 'date-fns/esm/fp';


class TSBlog extends PageViewElement {
  _render(props) {
    return html `
      ${SharedStyles}
        <style>
        :host {
          display: block;
          padding: 0px;
          h1 {
            margin: 0 0 5px -3px;
            color: #77909c;
          }
          h2 {
            margin-bottom: 40px;
          }
          ul {
            margin-bottom:24px;
          }
        }
        
        /* Smaller than 460 */

        .ts-blog .hero {
          background: none; 
          padding: 34px;
          text-align: center; }

        h1.paper-font-display2 {
          font-size: 42px;
          line-height: 44px;
          padding-right: 0px; }
        
       h2.paper-font-title {
          font-size: 22px;
          white-space: normal;
          padding-right: 0px; }

        h3 {
          padding-top: 20px; }

        paper-input {
          width: 320px;
          max-width: 100%;
          display: inline-block;
        }

        ul {
          padding: 0;
          list-style: none;
        }

        .ts-read-more {
          padding: 13px 28px;
          background-color: #fff;
        }

        .ts-read-more .social_container {
          float: right;
          padding: 0px;
        }

        .social-icon {
          height: 26px;
          width: 26px;
        }

        .gplus-icon:hover {
          color:  #db4437;
        }
        .blogger-icon:hover {
          color: #fb8f3d;
        }
        .twitter-icon:hover {
          color: #1da1f2;
        }
        .facebook-icon:hover {
        color: #3b5998;
        }
        .linkedin-icon:hover {
          color:  #007bb5;
        }

        #axis:hover .slide-left {
          transform: translate(-350px, 0);
          -webkit-transform: translate(-350px, 0);
          /** Safari & Chrome **/
          -o-transform: translate(-350px, 0);
          /** Opera **/
          -moz-transform: translate(-350px, 0);
          /** Firefox **/
        }

        .text-uppercase {
          border-top: 1px solid #e4e4e4;
          display: block;
          padding: 16px 28px;
        }

        #ts-site.ts-blog {
          background: #ffffff url('/images/bg/wordpress-logo.svg') no-repeat;
          background-size: 50%;
          background-position: 110% -80px;
          background-attachment: scroll;
        }

        #ts-site.ts-blog .hero {
          padding: 14px;
        }

        #ts-site.ts-blog .hero>div {
          padding: 44px 20px 0 24px;
        }

        #ts-site.home .hero {
          padding: 20px 64px 30px 96px;
        }

        .ts-grid-wrapper-auto-fill {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          justify-items: left;
        }

        .flex-hover-card {
          width: 100%;
        }

        .inner {
          padding: 20px 28px 0;
          min-height:10px;
          border-bottom: 1px solid #e4e4e4;
        }

        .sidebar {
          background-color: #fff;
          width: 210px;
          margin-left: 34px;
          margin-top: 46px;
        }

        #ts-site .nav li h3 {
          color: #4a5960;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 10px 0 16px;
          padding-bottom: 0;
          padding-left: 20px;
        }

        #ts-site .nav li {
          margin-right: 17px;
        }

        ul.right-side-nav {
          list-style: none;
          padding-left: 0px;
        }

        #ts-site .nav li a {
          padding-left: 20px;
        }

        #resource_loader {
          margin-top: -80px;
        }

        .loader-wrapper {
          text-align: center;
        }

        .collapse-content {
          padding: 15px;
          border: 1px solid #dedede;
        }

        paper-radio-group {
          margin: 0px 0px 0px 24px;
        }

        paper-checkbox {
          display: block;
          margin-bottom: 4px;
          --paper-checkbox-label-color: white;
          --paper-checkbox-unchecked-color: white;
        }

        paper-icon-button {
          color: var(--paper-grey-600);
        }

        paper-icon-button.white {
          color: white !important;
        }

        paper-spinner {
          margin-right: 10px;
          height: 20px;
          width: 20px;
          /* Make the spinner align vertically with the loading text. */
          top: 4px;
        }

        paper-fab.label {
          font-size: 20px;
        }

        paper-fab.purple {
          --paper-fab-background: var(--paper-purple-300);
          --paper-fab-keyboard-focus-background: var(--paper-purple-500);
          float: right;
        }

        @media (min-width: 460px) {
          #ts-site.ts-blog {
            background: #fff url(/images/header/ts-design-header.svg) no-repeat;
            background-size: 35%;
            background-position: 100% 90px;
            background-attachment: fixed;
          }

          #ts-site.ts-blog .hero {
            min-height: 270px;
            padding: 14px;
            position: relative;
          }

          .solutions-section-height {
            min-height:350px;
          }

          .ts-content-body {
            margin-bottom: 24px
          }

          .ts-content-body h2 {
            margin-bottom: 16px;
          }

          #ts-site .ts-pad-right-4 {
            padding-right: 32px;
          }

          #ts-site.ts-showcase.is-split-left .ts-showcase-image {
            right: 0;
          }

          #ts-site .ts-pad-left-38+.ts-showcase-image,
          #ts-site .ts-pad-right-38+.ts-showcase-image {
            max-width: 304px;
          }

          #ts-site.ts-showcase-image {
            position: relative;
            text-align: center;
            top: 0;
            z-index: 1;
          }

          p.fine-print:first-child {
            margin-top: 24px;
          }

          .fine-print {
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 12px;
            padding-left: 24px;
            line-height: 14px;
          }
        }
        @media (max-width: 800px) {
          #ts-site.ts-blog {
            background-size: 40% !important;
            background-position: 100% 120px !important; }

          .ts-right {
            float: none !important;
            margin: 24px 30px 5px; 
          }
        } 
        </style>
        <article id="ts-site" class="ts-blog">
        <header class="hero">
          <div class="ts-max-width-standard">
            <h1 class="paper-font-display2 paper-font-light">WordPress Blog</h1>
            <h2 class="paper-font-title paper-font-light">Pro tips for making the most of your WordPress site</h2>
            <div class="center-button">
              <a href="https://themesurgeons.com/contact/" class="button button-large button-logo ts-button" track-type="navigateTo" track-name="home"
                track-metadata-position="banner">Contact a WordPress Pro</a>
            </div>
          </div>
        </header>
        <div class="ts-content-wrapper">
          <section class="content background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
            <div class="columns">
              <main class="main">
                <div class="ts-content-grid-box">
                  ${until(
                    fetch('http://localhost:8080/api/contents?type=Article')
                      .then(res => res.json())
                      .then(items => {
                        return html`
                          <ul>
                            ${repeat(
                              items.data,
                              item => item.data,
                              item => {
                                return html`
                                  <a id="${item.id}" href="/${item.slug}/" class="flex-hover-card" track-type="navigateTo" track-name="/solutions/headlessWordPress">
                                    <div class="inner ">
                                      <h3 class="paper-font-headline">${item.title}</h3>
                                        <p>${item.excerpt}</p>
                                        <p class="fine-print">Published&nbsp; ${item.timestamp}</p>
                                    </div>
                                    <div class="ts-read-more">Read Article
                                      <div class="social_container">
                                        <div class="social_share">
                                          <div class="slide-icons slide-left">
                                            <paper-icon-button icon="ts-icons:googleplus" class="social-icon gplus-icon" data-href$="http://plus.google.com/share?url=https://themesurgeons.com/blog/${item.slug}/" on-click=""></paper-icon-button>
                                            <paper-icon-button icon="" class="social-icon blogger-icon" data-href$="http://www.blogger.com/blog-this.g?u=https://themesurgeons.com/blog/${item.slug}/" on-click=""></paper-icon-button>
                                            <paper-icon-button icon="" class="social-icon twitter-icon" data-href$="http://twitter.com/share?url=https://themesurgeons.com/blog/${item.slug}/" on-click=""></paper-icon-button>
                                            <paper-icon-button icon="" class="social-icon linkedin-icon" data-href$="http://www.linkedin.com/cws/share?url=https://themesurgeons.com/blog/${item.slug}/" on-click=""></paper-icon-button>
                                            <paper-icon-button icon="" class="social-icon facebook-icon" data-href$="http://www.facebook.com/sharer.php?u=https://themesurgeons.com/blog/${item.slug}/" on-click=""></paper-icon-button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </a> `;
                                }
                              )}
                          </ul> `; 
                        }),
                      html`
                        <span> 💁‍ Getting some posts... </span> 
                      `)};
                </div>
              </main>
              <aside class="sidebar">
                <div class="nav">
                  <div class="sticky">
                    <ul class="right-side-nav l-space-bottom-5">
                      <li>
                        <h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id="more-about-serverless">Solutions Menu</h3>
                      </li>
                      <li>
                        <a track-type="pagespeedOptimization" track-name="web-page" track-metadata-position="body" href="/solutions/pagespeed/">Pagespeed Optimization</a>
                      </li>
                      <li>
                        <a track-type="mobileFirst" track-name="web-page" track-metadata-position="body" href="/solutions/design/">Mobile First Design</a>
                      </li>
                      <li>
                        <a track-type="emergencyResponse" track-name="web-page" track-metadata-position="body" href="/solutions/emergency/">Emergency Response</a>
                      </li>
                      <li>
                        <a track-type="security" track-name="web-page" track-metadata-position="body" href="/solutions/security/">WordPress Security</a>
                      </li>
                      <li>
                        <a track-type="migrations" track-name="web-page" track-metadata-position="body" href="/solutions/migrations/">WordPress Migrations</a>
                      </li>
                      <li>
                        <a track-type="preventiveCare" track-name="web-page" track-metadata-position="body" href="/solutions/care/">Preventive Care</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </section>
          </div>
        </article>
      }
    `;    
  }
}
window.customElements.define('ts-blog', TSBlog);