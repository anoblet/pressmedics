import { html } from '@polymer/lit-element';
import { SharedStyles } from './shared-styles.js';
import { PageViewElement } from './page-view-element.js';

class TSSolutions extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
      :host {
          display: block;
          padding: 0px;
        }

        h1 {
          margin: 0 0 5px -3px;
          color: #77909c;
        }
        h2 {
          margin-bottom: 40px;
        }

        #ts-site.ts-solutions {
            background: #ffffff url(/images/bg/wordpress-logo.svg) no-repeat;
            background-size: 80%;
            background-position: 50% 70px;
            background-attachment: fixed;
        }

        #ts-site.ts-solutions .hero {
          padding-bottom: 34px;
          padding: 14px;
        }

        #ts-site.ts-solutions .hero>div {
            padding: 24px 10px 24px 10px;
        }

        #ts-site.home .hero {
          padding: 20px 64px 30px 96px;
        }

        @media (min-width: 460px) {
          #ts-site {
            background-size: 35% !important;
            background-position: 100% 60px !important; }

          #ts-site.ts-solutions .hero {
            min-height: 270px;
            padding: 14px; }

          #ts-site.ts-solutions .hero>div {
              padding: 50px 20px 0 20px; }

          h1.paper-font-display2 {
              font-size: 42px;
              line-height: 44px;
              padding-right: 120px;
              margin-left: -3px; }

          h2.mdc-typography--headline3 {
              font-size: 16px;
              white-space: normal;
              padding-right: 120px; }
        } 
      </style>
      <article id="ts-site" class="ts-solutions">
      <header class="hero">
        <div class="ts-max-width-standard">
          <h1 class="mdc-typography--headline1 paper-font-light">Intelligent WordPress Solutions</h1>
          <h2 class="mdc-typography--headline2 paper-font-light">Lightning fast, functionally superior, masters of self-defense</h2>
          <div class="center-button">
            <a href="/contact/" class="button button-large button-logo ts-button mdc-button--raised" track-type="navigateTo" track-name="home"
              track-metadata-position="banner">Contact a WordPress Pro</a>
          </div>
        </div>
      </header>
        <section class="background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home">
          <iron-selector selected="[[page]]" attr-for-selected="name" class="main-navigation" role="navigation">
            <div class="ts-grid-wrapper-standard">
              <div class="ts-grid-wrapper-auto-fill">
                <a href="/design" class="flex-hover-card" track-type="navigateTo" track-name="headlessWordPress">
                  <div class="inner ">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 120 120" width="62" height="62">
                      <defs>
                        <path d="M110.55 1.33C115.14 1.33 118.85 5.05 118.85 9.63C118.85 31.44 118.85 88.56 118.85 110.37C118.85 114.95 115.14 118.67 110.55 118.67C88.67 118.67 31.33 118.67 9.45 118.67C4.86 118.67 1.15 114.95 1.15 110.37C1.15 88.56 1.15 31.44 1.15 9.63C1.15 5.05 4.86 1.33 9.45 1.33C31.33 1.33 88.67 1.33 110.55 1.33Z"
                          id="b1lo7zuvLE"></path>
                        <path d="M96.8 14.77L96.92 14.78L97.04 14.81L97.16 14.84L97.28 14.88L97.39 14.92L97.51 14.97L97.63 15.03L97.74 15.09L97.85 15.16L97.96 15.24L98.07 15.31L98.18 15.4L98.28 15.49L98.39 15.58L98.49 15.68L98.58 15.78L98.68 15.89L98.77 16L98.86 16.11L98.94 16.23L99.03 16.35L99.11 16.47L99.18 16.6L99.25 16.73L99.32 16.86L99.38 17L99.44 17.14L99.5 17.28L99.55 17.42L99.59 17.56L99.64 17.7L99.67 17.85L99.7 18L99.73 18.14L99.75 18.29L99.76 18.44L99.77 18.59L99.77 18.74L99.77 102.54L99.77 102.69L99.77 102.83L99.75 102.98L99.74 103.13L99.72 103.28L99.69 103.43L99.66 103.57L99.63 103.72L99.59 103.86L99.54 104L99.5 104.14L99.44 104.28L99.39 104.41L99.33 104.54L99.27 104.67L99.2 104.8L99.13 104.93L99.05 105.05L98.97 105.16L98.89 105.28L98.8 105.39L98.71 105.5L98.62 105.6L98.52 105.7L98.42 105.79L98.32 105.88L98.21 105.96L98.1 106.04L97.99 106.11L97.88 106.18L97.76 106.25L97.63 106.3L97.51 106.35L97.38 106.4L97.25 106.44L97.12 106.47L96.98 106.49L96.84 106.51L96.7 106.52L96.56 106.53L25.83 106.53L25.71 106.52L25.59 106.51L25.47 106.5L25.35 106.48L25.23 106.45L25.11 106.42L24.99 106.38L24.88 106.34L24.76 106.29L24.65 106.24L24.53 106.18L24.42 106.12L24.32 106.05L24.21 105.97L24.1 105.89L24 105.81L23.9 105.72L23.8 105.63L23.71 105.53L23.62 105.43L23.53 105.32L23.44 105.21L23.36 105.09L23.28 104.97L23.21 104.85L23.13 104.72L23.07 104.59L23 104.45L22.94 104.31L22.89 104.17L22.84 104.02L22.79 103.87L22.75 103.71L22.72 103.56L22.68 103.39L22.66 103.23L22.64 103.06L22.62 102.89L22.62 102.71L22.61 102.54L22.61 18.74L22.62 18.59L22.62 18.44L22.64 18.29L22.66 18.14L22.68 18L22.72 17.85L22.75 17.7L22.79 17.56L22.84 17.42L22.89 17.28L22.94 17.14L23 17L23.07 16.86L23.13 16.73L23.21 16.6L23.28 16.47L23.36 16.35L23.44 16.23L23.53 16.11L23.62 16L23.71 15.89L23.8 15.78L23.9 15.68L24 15.58L24.1 15.49L24.21 15.4L24.32 15.31L24.42 15.24L24.53 15.16L24.65 15.09L24.76 15.03L24.88 14.97L24.99 14.92L25.11 14.88L25.23 14.84L25.35 14.81L25.47 14.78L25.59 14.77L25.71 14.75L25.83 14.75L96.56 14.75L96.68 14.75L96.8 14.77ZM25.83 102.54L96.56 102.54L96.56 34.7L25.83 34.7L25.83 102.54ZM51.55 30.71L96.56 30.71L96.56 18.74L51.55 18.74L51.55 30.71ZM25.83 30.71L48.33 30.71L48.33 18.74L25.83 18.74L25.83 30.71Z"
                          id="b3ZN88Cv4g"></path>
                        <path d="M30.65 22.73C29.76 22.73 29.04 23.62 29.04 24.73C29.04 25.83 29.76 26.72 30.65 26.72C31.54 26.72 32.26 25.83 32.26 24.73C32.26 23.62 31.54 22.73 30.65 22.73Z"
                          id="g4Sq3GPCC"></path>
                        <path d="M37.08 22.73C36.19 22.73 35.47 23.62 35.47 24.73C35.47 25.83 36.19 26.72 37.08 26.72C37.97 26.72 38.69 25.83 38.69 24.73C38.69 23.62 37.97 22.73 37.08 22.73Z"
                          id="aXQuGuzc"></path>
                        <path d="M43.51 22.73C42.62 22.73 41.9 23.62 41.9 24.73C41.9 25.83 42.62 26.72 43.51 26.72C44.4 26.72 45.12 25.83 45.12 24.73C45.12 23.62 44.4 22.73 43.51 22.73Z"
                          id="c1goEhiqVm"></path>
                        <path d="M30.65 46.67C29.69 46.67 29.04 45.87 29.04 44.68C29.04 44.68 29.04 44.68 29.04 44.68C29.04 43.48 29.69 42.68 30.65 42.68C32.26 42.68 45.12 42.68 46.73 42.68C47.69 42.68 48.33 43.48 48.33 44.68C48.33 44.68 48.33 44.68 48.33 44.68C48.33 45.87 47.69 46.67 46.73 46.67C43.51 46.67 32.26 46.67 30.65 46.67Z"
                          id="a1pU3UvUPx"></path>
                        <path d="M30.65 58.64C29.69 58.64 29.04 57.85 29.04 56.65C29.04 56.65 29.04 56.65 29.04 56.65C29.04 55.45 29.69 54.65 30.65 54.65C33.22 54.65 53.8 54.65 56.37 54.65C57.34 54.65 57.98 55.45 57.98 56.65C57.98 56.65 57.98 56.65 57.98 56.65C57.98 57.85 57.34 58.64 56.37 58.64C51.23 58.64 33.22 58.64 30.65 58.64Z"
                          id="dB1cPAPO9"></path>
                        <path d="M53.16 46.67C52.19 46.67 51.55 45.87 51.55 44.68C51.55 44.68 51.55 44.68 51.55 44.68C51.55 43.48 52.19 42.68 53.16 42.68C54.44 42.68 64.73 42.68 66.02 42.68C66.98 42.68 67.62 43.48 67.62 44.68C67.62 44.68 67.62 44.68 67.62 44.68C67.62 45.87 66.98 46.67 66.02 46.67C63.44 46.67 54.44 46.67 53.16 46.67Z"
                          id="bSzcrl57q"></path>
                        <path d="M62.8 58.64C61.84 58.64 61.19 57.85 61.19 56.65C61.19 56.65 61.19 56.65 61.19 56.65C61.19 55.45 61.84 54.65 62.8 54.65C63.44 54.65 68.59 54.65 69.23 54.65C70.2 54.65 70.84 55.45 70.84 56.65C70.84 56.65 70.84 56.65 70.84 56.65C70.84 57.85 70.2 58.64 69.23 58.64C67.95 58.64 63.44 58.64 62.8 58.64Z"
                          id="d8IVlTzke"></path>
                        <path d="M30.65 70.61C29.69 70.61 29.04 69.82 29.04 68.62C29.04 68.62 29.04 68.62 29.04 68.62C29.04 67.42 29.69 66.62 30.65 66.62C31.29 66.62 36.44 66.62 37.08 66.62C38.05 66.62 38.69 67.42 38.69 68.62C38.69 68.62 38.69 68.62 38.69 68.62C38.69 69.82 38.05 70.61 37.08 70.61C35.79 70.61 31.29 70.61 30.65 70.61Z"
                          id="a2NX5lXxW0"></path>
                        <path d="M46.73 70.61C45.76 70.61 45.12 69.82 45.12 68.62C45.12 68.62 45.12 68.62 45.12 68.62C45.12 67.42 45.76 66.62 46.73 66.62C47.05 66.62 49.62 66.62 49.94 66.62C50.91 66.62 51.55 67.42 51.55 68.62C51.55 68.62 51.55 68.62 51.55 68.62C51.55 69.82 50.91 70.61 49.94 70.61C49.3 70.61 47.05 70.61 46.73 70.61Z"
                          id="a69UUHqHL9"></path>
                        <path d="M75.66 58.64C74.7 58.64 74.05 57.85 74.05 56.65C74.05 56.65 74.05 56.65 74.05 56.65C74.05 55.45 74.7 54.65 75.66 54.65C76.63 54.65 84.34 54.65 85.31 54.65C86.27 54.65 86.91 55.45 86.91 56.65C86.91 56.65 86.91 56.65 86.91 56.65C86.91 57.85 86.27 58.64 85.31 58.64C83.38 58.64 76.63 58.64 75.66 58.64Z"
                          id="bn8SOyAT4"></path>
                      </defs>
                      <g>
                        <g>
                          <g>
                            <use xlink:href="#b1lo7zuvLE" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#b1lo7zuvLE" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#b3ZN88Cv4g" opacity="1" fill="#000000" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#b3ZN88Cv4g" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="1" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#g4Sq3GPCC" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#g4Sq3GPCC" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#aXQuGuzc" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#aXQuGuzc" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#c1goEhiqVm" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#c1goEhiqVm" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#a1pU3UvUPx" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#dB1cPAPO9" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#bSzcrl57q" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#d8IVlTzke" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#a2NX5lXxW0" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#a69UUHqHL9" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#bn8SOyAT4" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h3 id="mobile-applications" class="paper-font-title">Mobile Web Design</h3>
                    <p>We transform WordPress into modern, responsive, instant loading, progressive web applications that leave all
                      others in their dust.</p>
                  </div>
                  <span class="text-uppercase">Learn More</span>
                </a>
                <a href="/pagespeed" class="flex-hover-card" track-type="navigateTo" track-name="pageSpeed">
                  <div class="inner">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 120 120" width="62" height="62">
                      <defs>
                        <path d="M162.75 147.5L290.75 147.5L290.75 275.5L162.75 275.5L162.75 147.5Z" id="ciiZWmCYs"></path>
                        <clipPath id="cliplXMfN6MQQ">
                          <use xlink:href="#ciiZWmCYs" opacity="1"></use>
                        </clipPath>
                        <path d="M107.75 5.63C112.03 5.63 115.5 9.1 115.5 13.38C115.5 33.83 115.5 87.42 115.5 107.87C115.5 112.15 112.03 115.63 107.75 115.63C87.3 115.63 33.7 115.63 13.25 115.63C8.97 115.63 5.5 112.15 5.5 107.87C5.5 87.42 5.5 33.83 5.5 13.38C5.5 9.1 8.97 5.63 13.25 5.63C33.7 5.63 87.3 5.63 107.75 5.63Z"
                          id="gb34TyWTK"></path>
                        <path d="M115.5 19.47L5.5 19.47" id="hJnqWCPd8"></path>
                        <path d="M18.19 11.5C18.19 13.16 16.85 14.5 15.19 14.5C13.54 14.5 12.19 13.16 12.19 11.5C12.19 9.84 13.54 8.5 15.19 8.5C16.85 8.5 18.19 9.84 18.19 11.5Z"
                          id="cHpqFYBGb"></path>
                        <path d="M28.19 11.5C28.19 13.16 26.85 14.5 25.19 14.5C23.54 14.5 22.19 13.16 22.19 11.5C22.19 9.84 23.54 8.5 25.19 8.5C26.85 8.5 28.19 9.84 28.19 11.5Z"
                          id="dZ3lVVCpk"></path>
                        <path d="M95.5 70.88C95.5 90.19 79.82 105.88 60.5 105.88C41.18 105.88 25.5 90.19 25.5 70.88C25.5 51.56 41.18 35.88 60.5 35.88C79.82 35.88 95.5 51.56 95.5 70.88Z"
                          id="fWvbPXTs6"></path>
                        <path d="M60.5 35.03L60.5 31.83L60.5 30.1" id="aplUVhHCy"></path>
                        <path d="M31.23 44.47L37.83 38.53L39.75 40.66L33.16 46.6L31.23 44.47Z" id="dNUlCZFfO"></path>
                        <path d="M37.56 44.66L36.39 43.26L34.74 41.3" id="e2pklwoNgs"></path>
                        <path d="M64 70.29C64 72.22 62.43 73.79 60.5 73.79C58.57 73.79 57 72.22 57 70.29C57 68.35 58.57 66.79 60.5 66.79C62.43 66.79 64 68.35 64 70.29Z"
                          id="bjYq6XmHx"></path>
                        <path d="M60.5 43.01L60.5 41.17L60.5 39.6" id="g1Yldu1Cmy"></path>
                        <path d="M60.5 102.47L60.5 100.64L60.5 99.06" id="b5whlaaaY1"></path>
                        <path d="M33.23 70.29L29.23 70.29" id="bwCKSIC"></path>
                        <path d="M92 70.29L88 70.29" id="a1id8SzC8"></path>
                        <path d="M60.5 44.66L60.5 44.66L62.63 69.62L58.38 69.62L60.5 44.66Z" id="bcgCWyIIl"></path>
                        <path d="M54.88 29.75L65.63 29.75L65.63 34L54.88 34L54.88 29.75Z" id="e5k6gXsxhZ"></path>
                      </defs>
                      <g>
                        <g>
                          <g>
                            <g clip-path="url(#cliplXMfN6MQQ)" opacity="1">
                              <image xlink:href="data:image/png;base64,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"
                                x="0" y="0" width="128" height="128" transform="matrix(1 0 0 1 162.75 147.5)"></image>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#gb34TyWTK" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#gb34TyWTK" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#hJnqWCPd8" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#cHpqFYBGb" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#dZ3lVVCpk" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#fWvbPXTs6" opacity="1" fill="#a434b7" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#fWvbPXTs6" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#aplUVhHCy" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="5" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#dNUlCZFfO" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#e2pklwoNgs" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="4" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#bjYq6XmHx" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#g1Yldu1Cmy" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#b5whlaaaY1" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#bwCKSIC" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#a1id8SzC8" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#bcgCWyIIl" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                          <g>
                            <use xlink:href="#e5k6gXsxhZ" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h3 id="mobile-applications" class="paper-font-title">PageSpeed Optimization</h3>
                    <p>Online success is measured in milliseconds. We supercharge WordPress sites to deliver instant, secure, content
                      to any screen.</p>
                  </div>
                  <span class=" text-uppercase">Learn More</span>
                </a>
                <a href="/emergency" class="flex-hover-card " track-type="navigateTo" track-name="emergencyResponse">
                  <div class="inner ">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 120 120" width="62" height="62">
                      <defs>
                        <path d="M110.16 24.44L110.19 24.44L110.22 24.45L110.25 24.45L110.28 24.46L110.31 24.47L110.33 24.48L110.36 24.49L110.39 24.5L110.42 24.51L110.44 24.53L110.47 24.54L110.5 24.56L110.52 24.57L110.55 24.59L110.57 24.61L110.59 24.63L110.61 24.65L110.63 24.67L110.66 24.69L110.67 24.71L110.69 24.74L110.71 24.76L110.73 24.78L110.74 24.81L110.76 24.84L110.77 24.86L110.79 24.89L110.8 24.92L110.81 24.95L110.82 24.97L110.83 25L110.84 25.03L110.84 25.06L110.85 25.1L110.85 25.13L110.86 25.16L110.86 25.19L110.86 25.22L110.86 40.9L126.21 40.9L126.24 40.9L126.27 40.9L126.3 40.91L126.33 40.91L126.36 40.92L126.39 40.92L126.42 40.93L126.45 40.94L126.48 40.95L126.51 40.96L126.53 40.98L126.56 40.99L126.59 41L126.61 41.02L126.64 41.04L126.66 41.05L126.69 41.07L126.71 41.09L126.73 41.11L126.75 41.13L126.77 41.15L126.79 41.18L126.81 41.2L126.83 41.22L126.85 41.25L126.86 41.27L126.88 41.3L126.89 41.32L126.9 41.35L126.92 41.38L126.93 41.41L126.94 41.44L126.95 41.47L126.95 41.5L126.96 41.53L126.97 41.56L126.97 41.59L126.97 41.62L126.98 41.65L126.98 41.69L126.98 54.23L126.98 54.26L126.97 54.29L126.97 54.32L126.97 54.36L126.96 54.39L126.95 54.42L126.95 54.45L126.94 54.48L126.93 54.5L126.92 54.53L126.9 54.56L126.89 54.59L126.88 54.61L126.86 54.64L126.85 54.67L126.83 54.69L126.81 54.71L126.79 54.74L126.77 54.76L126.75 54.78L126.73 54.8L126.71 54.82L126.69 54.84L126.66 54.86L126.64 54.88L126.61 54.89L126.59 54.91L126.56 54.92L126.53 54.94L126.51 54.95L126.48 54.96L126.45 54.97L126.42 54.98L126.39 54.99L126.36 55L126.33 55L126.3 55.01L126.27 55.01L126.24 55.01L126.21 55.01L110.86 55.01L110.86 70.69L110.86 70.72L110.86 70.75L110.85 70.79L110.85 70.82L110.84 70.85L110.84 70.88L110.83 70.91L110.82 70.94L110.81 70.97L110.8 71L110.79 71.02L110.77 71.05L110.76 71.08L110.74 71.1L110.73 71.13L110.71 71.15L110.69 71.18L110.67 71.2L110.66 71.22L110.63 71.24L110.61 71.27L110.59 71.29L110.57 71.3L110.55 71.32L110.52 71.34L110.5 71.36L110.47 71.37L110.44 71.39L110.42 71.4L110.39 71.41L110.36 71.42L110.33 71.43L110.31 71.44L110.28 71.45L110.25 71.46L110.22 71.46L110.19 71.47L110.16 71.47L110.12 71.47L110.09 71.47L97.81 71.47L97.78 71.47L97.75 71.47L97.72 71.47L97.69 71.46L97.66 71.46L97.63 71.45L97.6 71.44L97.57 71.43L97.54 71.42L97.51 71.41L97.49 71.4L97.46 71.39L97.43 71.37L97.41 71.36L97.38 71.34L97.36 71.32L97.34 71.3L97.31 71.29L97.29 71.27L97.27 71.24L97.25 71.22L97.23 71.2L97.21 71.18L97.19 71.15L97.18 71.13L97.16 71.1L97.15 71.08L97.13 71.05L97.12 71.02L97.11 71L97.09 70.97L97.08 70.94L97.08 70.91L97.07 70.88L97.06 70.85L97.06 70.82L97.05 70.79L97.05 70.75L97.05 70.72L97.05 70.69L97.05 55.01L81.7 55.01L81.66 55.01L81.63 55.01L81.6 55.01L81.57 55L81.54 55L81.51 54.99L81.48 54.98L81.45 54.97L81.43 54.96L81.4 54.95L81.37 54.94L81.34 54.92L81.32 54.91L81.29 54.89L81.27 54.88L81.24 54.86L81.22 54.84L81.2 54.82L81.17 54.8L81.15 54.78L81.13 54.76L81.11 54.74L81.09 54.71L81.08 54.69L81.06 54.67L81.04 54.64L81.03 54.61L81.01 54.59L81 54.56L80.99 54.53L80.98 54.5L80.97 54.48L80.96 54.45L80.95 54.42L80.94 54.39L80.94 54.36L80.93 54.32L80.93 54.29L80.93 54.26L80.93 54.23L80.93 41.69L80.93 41.65L80.93 41.62L80.93 41.59L80.94 41.56L80.94 41.53L80.95 41.5L80.96 41.47L80.97 41.44L80.98 41.41L80.99 41.38L81 41.35L81.01 41.32L81.03 41.3L81.04 41.27L81.06 41.25L81.08 41.22L81.09 41.2L81.11 41.18L81.13 41.15L81.15 41.13L81.17 41.11L81.2 41.09L81.22 41.07L81.24 41.05L81.27 41.04L81.29 41.02L81.32 41L81.34 40.99L81.37 40.98L81.4 40.96L81.43 40.95L81.45 40.94L81.48 40.93L81.51 40.92L81.54 40.92L81.57 40.91L81.6 40.91L81.63 40.9L81.66 40.9L81.7 40.9L97.05 40.9L97.05 25.22L97.05 25.19L97.05 25.16L97.05 25.13L97.06 25.1L97.06 25.06L97.07 25.03L97.08 25L97.08 24.97L97.09 24.95L97.11 24.92L97.12 24.89L97.13 24.86L97.15 24.84L97.16 24.81L97.18 24.78L97.19 24.76L97.21 24.74L97.23 24.71L97.25 24.69L97.27 24.67L97.29 24.65L97.31 24.63L97.34 24.61L97.36 24.59L97.38 24.57L97.41 24.56L97.43 24.54L97.46 24.53L97.49 24.51L97.51 24.5L97.54 24.49L97.57 24.48L97.6 24.47L97.63 24.46L97.66 24.45L97.69 24.45L97.72 24.44L97.75 24.44L97.78 24.44L97.81 24.44L110.09 24.44L110.12 24.44L110.16 24.44Z"
                          id="c3MbzMNeM7"></path>
                        <path d="M125.93 96.76C125.93 104.35 120.26 110.5 113.28 110.5C106.3 110.5 100.63 104.35 100.63 96.76C100.63 89.18 106.3 83.03 113.28 83.03C120.26 83.03 125.93 89.18 125.93 96.76Z"
                          id="aM0x44Skl"></path>
                        <path d="M110.87 1.5C115.45 1.5 119.17 5.21 119.17 9.8C119.17 31.6 119.17 88.73 119.17 110.54C119.17 115.12 115.45 118.83 110.87 118.83C88.99 118.83 31.64 118.83 9.76 118.83C5.18 118.83 1.46 115.12 1.46 110.54C1.46 88.73 1.46 31.6 1.46 9.8C1.46 5.21 5.18 1.5 9.76 1.5C31.64 1.5 88.99 1.5 110.87 1.5Z"
                          id="a171UYsxjL"></path>
                        <path d="M51.29 36.01L26.25 36.01C15.33 49.92 8.51 58.62 5.78 62.1C5.56 62.37 5.76 62.77 6.1 62.77C12.25 62.77 27.64 62.77 52.25 62.77C52.25 38.48 52.25 23.3 52.25 17.23C52.25 16.4 52.92 15.73 53.75 15.73C54.23 15.73 55.44 15.73 57.37 15.73L125.93 15.73"
                          id="a19xQWOMpf"></path>
                        <path d="M15.33 97.55L1.46 97.55L1.46 91.92L5.18 91.92" id="av076dkgq"></path>
                        <path d="M41.46 96.51C41.46 104.1 35.79 110.25 28.81 110.25C21.83 110.25 16.16 104.1 16.16 96.51C16.16 88.93 21.83 82.78 28.81 82.78C35.79 82.78 41.46 88.93 41.46 96.51Z"
                          id="a2cl5WMmma"></path>
                        <path d="" id="b1U1x6dJ3f"></path>
                        <path d="M5.69 62.77L5.69 92.84" id="a2KGvWBOh"></path>
                        <path d="M99.81 96.51L42.48 96.76" id="j3RPJdLPsD"></path>
                      </defs>
                      <g>
                        <g>
                          <g>
                            <use xlink:href="#c3MbzMNeM7" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#c3MbzMNeM7" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#aM0x44Skl" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#aM0x44Skl" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#a171UYsxjL" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#a171UYsxjL" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#a19xQWOMpf" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#av076dkgq" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#a2cl5WMmma" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#a2cl5WMmma" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#b1U1x6dJ3f" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#a2KGvWBOh" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <g>
                              <use xlink:href="#j3RPJdLPsD" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h3 id="mobile-applications" class="paper-font-title">Emergency Response</h3>
                    <p>Unexpexted site outages can cost you dollars and ruin your day. Our WordPress experts will have you back up and
                      running in no time.</p>
                  </div>
                  <span class="text-uppercase">Learn More</span>
                </a>
                <a href="/security" class="flex-hover-card" track-type="navigateTo" track-name="security">
                  <div class="inner ">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 120 120" width="62" height="62">
                      <defs>
                        <path d="M110.87 1.5C115.45 1.5 119.17 5.21 119.17 9.8C119.17 31.6 119.17 88.73 119.17 110.54C119.17 115.12 115.45 118.83 110.87 118.83C88.99 118.83 31.64 118.83 9.76 118.83C5.18 118.83 1.46 115.12 1.46 110.54C1.46 88.73 1.46 31.6 1.46 9.8C1.46 5.21 5.18 1.5 9.76 1.5C31.64 1.5 88.99 1.5 110.87 1.5Z"
                          id="aevHZzcIW"></path>
                        <path d="M67.65 28.66L68.33 28.73L69 28.84L69.68 28.98L70.35 29.15L71.02 29.35L71.69 29.58L72.36 29.84L73.02 30.13L73.69 30.45L74.35 30.8L75.01 31.18L75.67 31.59L76.32 32.04L76.98 32.51L77.63 33.02L78.28 33.55L78.93 34.12L79.57 34.71L80.22 35.34L80.86 36L81.5 36.69L82.14 37.41L82.78 38.16L83.41 38.94L84.05 39.75L84.68 40.59L85.31 41.46L85.94 42.36L86.56 43.3L87.19 44.26L87.81 45.25L88.43 46.28L89.05 47.33L89.67 48.42L90.28 49.54L90.89 50.68L91.51 51.86L92.12 53.07L92.71 53.23L93.3 53.41L93.87 53.61L94.44 53.83L95 54.06L95.56 54.32L96.1 54.59L96.63 54.88L97.15 55.19L97.66 55.52L98.16 55.86L98.64 56.21L99.12 56.58L99.58 56.97L100.03 57.37L100.46 57.78L100.89 58.21L101.3 58.65L101.69 59.11L102.07 59.57L102.44 60.05L102.79 60.54L103.12 61.04L103.44 61.55L103.74 62.06L104.02 62.59L104.29 63.13L104.54 63.68L104.77 64.23L104.99 64.8L105.18 65.37L105.36 65.95L105.52 66.53L105.65 67.12L105.77 67.71L105.87 68.31L105.94 68.92L106 69.53L106.03 70.14L106.04 70.76L106.03 71.5L105.98 72.24L105.91 72.97L105.8 73.69L105.67 74.4L105.51 75.1L105.32 75.79L105.1 76.47L104.86 77.14L104.6 77.8L104.3 78.44L103.99 79.07L103.65 79.68L103.28 80.28L102.9 80.87L102.49 81.44L102.06 81.99L101.61 82.53L101.14 83.05L100.65 83.55L100.14 84.03L99.61 84.49L99.07 84.93L98.51 85.36L97.93 85.76L97.33 86.14L96.72 86.49L96.1 86.83L95.46 87.14L94.8 87.43L94.14 87.69L93.46 87.93L92.77 88.14L92.07 88.32L91.35 88.48L90.63 88.61L89.9 88.72L89.16 88.79L88.41 88.83L87.65 88.85L33.7 88.85L32.88 88.83L32.07 88.78L31.27 88.7L30.48 88.59L29.71 88.45L28.94 88.28L28.18 88.08L27.44 87.85L26.71 87.6L25.99 87.31L25.29 87L24.6 86.67L23.93 86.31L23.28 85.92L22.64 85.51L22.02 85.08L21.42 84.62L20.83 84.15L20.27 83.65L19.72 83.13L19.2 82.59L18.69 82.03L18.21 81.46L17.75 80.86L17.32 80.25L16.9 79.62L16.51 78.98L16.15 78.32L15.81 77.64L15.5 76.95L15.22 76.25L14.96 75.54L14.73 74.81L14.53 74.07L14.36 73.32L14.21 72.56L14.1 71.79L14.02 71.01L13.97 70.22L13.96 69.43L13.97 68.9L13.99 68.37L14.03 67.84L14.09 67.32L14.16 66.79L14.25 66.26L14.35 65.74L14.47 65.22L14.61 64.7L14.75 64.18L14.92 63.66L15.09 63.15L15.28 62.65L15.49 62.14L15.7 61.65L15.93 61.15L16.18 60.67L16.43 60.18L16.7 59.71L16.98 59.24L17.27 58.78L17.58 58.32L17.89 57.87L18.22 57.43L18.56 57L18.91 56.57L19.27 56.16L19.64 55.75L20.01 55.36L20.4 54.97L20.8 54.6L21.21 54.23L21.63 53.88L22.05 53.53L22.49 53.2L22.93 52.89L23.38 52.58L23.84 52.29L24.3 52.01L24.77 51.74L24.77 51.21L24.79 50.65L24.82 50.1L24.88 49.56L24.96 49.02L25.06 48.49L25.18 47.96L25.32 47.45L25.48 46.94L25.66 46.44L25.86 45.95L26.08 45.46L26.32 44.99L26.58 44.53L26.85 44.08L27.14 43.64L27.45 43.21L27.77 42.8L28.11 42.4L28.46 42.01L28.83 41.63L29.21 41.27L29.61 40.92L30.02 40.59L30.44 40.27L30.88 39.97L31.32 39.68L31.78 39.42L32.25 39.16L32.73 38.93L33.22 38.71L33.72 38.52L34.23 38.34L34.74 38.18L35.27 38.04L35.8 37.92L36.34 37.82L36.89 37.74L37.44 37.69L38 37.65L38.57 37.64L38.6 37.64L38.63 37.64L38.66 37.64L38.69 37.64L38.73 37.65L38.76 37.65L38.79 37.65L38.83 37.65L38.86 37.66L38.89 37.66L38.93 37.67L38.97 37.67L39 37.67L39.04 37.68L39.07 37.68L39.11 37.69L39.15 37.69L39.18 37.7L39.26 37.71L39.3 37.71L39.34 37.72L39.38 37.72L39.41 37.73L39.45 37.73L39.49 37.74L39.53 37.74L39.57 37.75L39.61 37.75L39.65 37.75L39.69 37.76L39.73 37.76L39.77 37.76L39.81 37.77L39.85 37.77L39.89 37.77L39.93 37.77L39.97 37.77L40.01 37.77L40.05 37.77L40.06 37.78L40.08 37.79L40.09 37.8L40.1 37.81L40.11 37.82L40.12 37.83L40.13 37.83L40.14 37.84L40.15 37.84L40.16 37.85L40.17 37.86L40.18 37.86L40.19 37.87L40.2 37.87L40.21 37.87L40.22 37.88L40.23 37.88L40.24 37.88L40.25 37.89L40.26 37.89L40.27 37.89L40.28 37.89L40.29 37.9L40.3 37.9L40.31 37.9L40.32 37.9L40.33 37.9L40.34 37.9L40.35 37.9L40.36 37.9L40.37 37.91L40.38 37.91L40.39 37.91L40.4 37.91L40.42 37.91L40.43 37.91L40.45 37.91L40.52 37.91L40.55 37.91L40.58 37.91L40.61 37.91L40.63 37.91L40.66 37.91L40.69 37.91L40.72 37.91L40.74 37.91L40.77 37.91L40.8 37.91L40.82 37.91L40.85 37.91L40.87 37.91L40.9 37.92L40.93 37.92L40.95 37.92L40.98 37.92L41 37.92L41.03 37.93L41.05 37.93L41.08 37.93L41.1 37.94L41.13 37.94L41.15 37.94L41.18 37.95L41.21 37.95L41.23 37.96L41.26 37.96L41.29 37.97L41.31 37.97L41.34 37.98L41.37 37.99L41.4 38L41.42 38L41.45 38.01L41.48 38.02L41.51 38.03L41.54 38.04L41.55 38.04L41.56 38.04L41.57 38.04L41.59 38.04L41.6 38.05L41.61 38.05L41.62 38.05L41.64 38.05L41.65 38.06L41.66 38.06L41.68 38.06L41.69 38.07L41.71 38.07L41.72 38.08L41.74 38.08L41.75 38.09L41.78 38.1L41.84 38.12L41.87 38.13L41.89 38.13L41.9 38.14L41.92 38.14L41.93 38.14L41.95 38.15L41.96 38.15L41.97 38.16L41.99 38.16L42 38.16L42.01 38.16L42.03 38.17L42.04 38.17L42.05 38.17L42.06 38.17L42.07 38.17L42.08 38.17L42.1 38.18L42.12 38.19L42.15 38.2L42.17 38.21L42.19 38.22L42.21 38.22L42.24 38.23L42.26 38.24L42.28 38.25L42.31 38.25L42.33 38.26L42.36 38.26L42.38 38.27L42.41 38.27L42.43 38.28L42.46 38.29L42.48 38.29L42.51 38.3L42.53 38.3L42.58 38.31L42.61 38.32L42.63 38.32L42.66 38.33L42.68 38.33L42.71 38.34L42.73 38.34L42.76 38.35L42.78 38.35L42.81 38.36L42.83 38.37L42.85 38.37L42.88 38.38L42.9 38.39L42.92 38.39L42.94 38.4L42.97 38.41L42.99 38.42L43.01 38.43L43.03 38.44L43.05 38.44L43.07 38.44L43.09 38.44L43.1 38.44L43.11 38.44L43.12 38.44L43.14 38.44L43.15 38.44L43.17 38.44L43.18 38.44L43.2 38.44L43.21 38.44L43.22 38.45L43.24 38.45L43.25 38.45L43.27 38.45L43.28 38.45L43.3 38.46L43.32 38.46L43.33 38.46L43.35 38.46L43.36 38.47L43.38 38.47L43.39 38.48L43.41 38.48L43.42 38.48L43.43 38.49L43.45 38.49L43.46 38.5L43.48 38.51L43.49 38.51L43.5 38.52L43.51 38.53L43.53 38.54L43.54 38.54L43.55 38.55L43.56 38.56L43.57 38.57L43.6 38.58L43.63 38.59L43.66 38.6L43.69 38.61L43.72 38.62L43.74 38.63L43.77 38.64L43.8 38.65L43.83 38.66L43.85 38.67L43.88 38.68L43.9 38.69L43.93 38.7L43.95 38.71L43.98 38.72L44 38.73L44.02 38.74L44.05 38.75L44.07 38.76L44.09 38.77L44.12 38.78L44.14 38.79L44.16 38.8L44.18 38.81L44.21 38.82L44.23 38.83L44.25 38.84L44.27 38.85L44.29 38.86L44.31 38.87L44.33 38.88L44.35 38.89L44.39 38.91L44.42 38.92L44.46 38.94L44.48 38.95L44.52 38.97L44.53 38.97L44.54 38.97L44.55 38.97L44.56 38.97L44.57 38.98L44.58 38.98L44.59 38.98L44.6 38.98L44.61 38.99L44.62 38.99L44.63 39L44.64 39L44.65 39L44.66 39.01L44.67 39.01L44.68 39.02L44.7 39.03L44.74 39.05L44.76 39.06L44.77 39.06L44.78 39.07L44.79 39.07L44.8 39.08L44.81 39.08L44.82 39.08L44.83 39.09L44.84 39.09L44.85 39.09L44.86 39.1L44.87 39.1L44.88 39.1L44.89 39.1L44.9 39.1L44.91 39.1L44.92 39.1L45.3 38.62L45.7 38.15L46.1 37.68L46.51 37.23L46.93 36.78L47.37 36.35L47.81 35.92L48.26 35.51L48.72 35.11L49.19 34.71L49.67 34.33L50.16 33.96L50.66 33.6L51.16 33.25L51.67 32.91L52.19 32.59L52.72 32.28L53.25 31.97L53.79 31.68L54.34 31.41L54.89 31.14L55.45 30.89L56.02 30.65L56.59 30.42L57.16 30.2L57.74 30L58.33 29.81L58.92 29.63L59.52 29.47L60.12 29.32L60.72 29.19L61.33 29.06L61.94 28.95L62.55 28.86L63.17 28.78L63.79 28.71L64.41 28.66L65.03 28.63L65.66 28.6L66.29 28.6L66.97 28.61L67.65 28.66ZM64.81 31.81L64.27 31.85L63.73 31.89L63.19 31.95L62.66 32.02L62.12 32.1L61.59 32.19L61.06 32.3L60.53 32.42L60 32.55L59.48 32.69L58.96 32.84L58.44 33.01L57.93 33.18L57.42 33.37L56.91 33.57L56.41 33.78L55.91 34L55.42 34.23L54.93 34.47L54.45 34.73L53.98 34.99L53.51 35.26L53.05 35.55L52.59 35.84L52.14 36.15L51.7 36.46L51.27 36.79L50.84 37.12L50.42 37.46L50.01 37.82L49.61 38.18L49.22 38.55L48.84 38.93L48.47 39.32L48.11 39.72L47.76 40.13L47.42 40.54L47.09 40.97L47.31 41.16L47.52 41.35L47.74 41.55L47.95 41.76L48.15 41.97L48.35 42.18L48.54 42.4L48.73 42.62L48.92 42.84L49.1 43.07L49.28 43.31L49.45 43.54L49.62 43.78L49.78 44.03L49.93 44.27L50.08 44.52L50.23 44.78L50.37 45.03L50.51 45.29L50.64 45.55L50.76 45.82L50.88 46.09L50.99 46.36L51.1 46.64L51.2 46.91L51.29 47.19L51.38 47.47L51.47 47.76L51.54 48.05L51.61 48.34L51.68 48.63L51.73 48.92L51.78 49.22L51.83 49.51L51.87 49.81L51.9 50.12L51.92 50.42L51.94 50.73L51.95 51.03L51.95 51.34L51.95 51.4L51.95 51.46L51.94 51.52L51.93 51.58L51.92 51.63L51.91 51.69L51.9 51.74L51.88 51.8L51.86 51.85L51.84 51.91L51.81 51.96L51.79 52.01L51.76 52.06L51.73 52.11L51.7 52.15L51.66 52.2L51.63 52.25L51.59 52.29L51.55 52.33L51.51 52.37L51.47 52.41L51.43 52.45L51.39 52.48L51.34 52.52L51.29 52.55L51.25 52.58L51.2 52.61L51.15 52.64L51.09 52.66L51.04 52.69L50.99 52.71L50.93 52.73L50.88 52.75L50.82 52.76L50.76 52.77L50.71 52.78L50.65 52.79L50.59 52.8L50.53 52.8L50.47 52.8L50.41 52.8L50.35 52.8L50.29 52.79L50.23 52.78L50.17 52.77L50.11 52.76L50.06 52.75L50 52.73L49.95 52.71L49.89 52.69L49.84 52.66L49.79 52.64L49.74 52.61L49.69 52.58L49.64 52.55L49.59 52.52L49.55 52.48L49.5 52.45L49.46 52.41L49.42 52.37L49.38 52.33L49.34 52.29L49.3 52.25L49.27 52.2L49.24 52.15L49.2 52.11L49.18 52.06L49.15 52.01L49.12 51.96L49.1 51.91L49.08 51.85L49.06 51.8L49.04 51.74L49.02 51.69L49.01 51.63L49 51.58L48.99 51.52L48.98 51.46L48.98 51.4L48.98 51.34L48.98 51.06L48.97 50.79L48.95 50.51L48.92 50.24L48.89 49.96L48.85 49.7L48.81 49.43L48.76 49.16L48.7 48.9L48.64 48.64L48.57 48.38L48.49 48.13L48.41 47.87L48.32 47.62L48.22 47.38L48.12 47.13L48.02 46.89L47.9 46.65L47.78 46.42L47.66 46.19L47.53 45.96L47.4 45.73L47.26 45.51L47.11 45.3L46.96 45.09L46.8 44.88L46.64 44.67L46.47 44.47L46.3 44.28L46.13 44.08L45.95 43.9L45.76 43.71L45.57 43.54L45.37 43.36L45.17 43.19L44.97 43.03L44.76 42.87L44.55 42.72L44.33 42.57L44.11 42.43L44.08 42.42L44.05 42.41L44.02 42.4L43.99 42.39L43.97 42.37L43.94 42.36L43.91 42.35L43.88 42.34L43.86 42.32L43.83 42.31L43.8 42.29L43.78 42.28L43.75 42.27L43.72 42.25L43.7 42.24L43.67 42.22L43.65 42.21L43.62 42.19L43.6 42.18L43.55 42.15L43.52 42.13L43.49 42.12L43.47 42.1L43.44 42.09L43.42 42.07L43.39 42.06L43.37 42.05L43.34 42.03L43.31 42.02L43.29 42L43.26 41.99L43.23 41.98L43.2 41.96L43.18 41.95L43.15 41.94L43.12 41.93L43.09 41.92L43.06 41.91L43.03 41.9L43.03 41.9L43.02 41.89L43.01 41.88L43 41.87L42.99 41.86L42.98 41.85L42.97 41.85L42.97 41.85L42.96 41.84L42.95 41.84L42.95 41.83L42.94 41.83L42.93 41.82L42.92 41.82L42.91 41.81L42.9 41.81L42.9 41.8L42.89 41.8L42.88 41.79L42.87 41.79L42.86 41.78L42.85 41.78L42.84 41.78L42.83 41.77L42.82 41.77L42.81 41.77L42.8 41.77L42.79 41.77L42.78 41.76L42.77 41.76L42.76 41.76L42.73 41.74L42.7 41.73L42.67 41.71L42.64 41.69L42.61 41.67L42.58 41.65L42.55 41.64L42.52 41.62L42.49 41.6L42.45 41.59L42.42 41.57L42.39 41.56L42.36 41.54L42.33 41.53L42.3 41.51L42.27 41.5L42.24 41.49L42.21 41.47L42.18 41.46L42.15 41.45L42.12 41.44L42.09 41.42L42.06 41.41L42.03 41.4L42 41.39L41.97 41.38L41.94 41.37L41.91 41.36L41.88 41.34L41.85 41.33L41.82 41.32L41.79 41.31L41.76 41.3L41.72 41.29L41.69 41.28L41.66 41.27L41.63 41.26L41.6 41.25L41.54 41.23L41.41 41.23L41.38 41.22L41.35 41.21L41.32 41.2L41.29 41.2L41.25 41.19L41.22 41.18L41.19 41.17L41.16 41.17L41.13 41.16L41.1 41.15L41.07 41.15L41.04 41.14L41.01 41.14L40.98 41.13L40.95 41.12L40.92 41.12L40.89 41.11L40.86 41.11L40.83 41.1L40.77 41.09L40.74 41.09L40.71 41.08L40.68 41.08L40.65 41.07L40.62 41.07L40.59 41.06L40.56 41.06L40.52 41.05L40.49 41.04L40.46 41.04L40.43 41.03L40.4 41.03L40.37 41.02L40.34 41.01L40.31 41L40.28 40.99L40.25 40.98L40.22 40.98L40.19 40.97L39.78 40.97L39.75 40.96L39.72 40.95L39.69 40.94L39.66 40.93L39.63 40.92L39.59 40.91L39.56 40.91L39.53 40.9L39.49 40.89L39.46 40.89L39.42 40.88L39.39 40.88L39.36 40.87L39.32 40.87L39.29 40.87L39.25 40.86L39.21 40.86L39.18 40.86L39.14 40.85L39.11 40.85L39.07 40.85L39.04 40.85L39 40.84L38.97 40.84L38.93 40.84L38.9 40.84L38.86 40.84L38.83 40.84L38.79 40.84L38.76 40.84L38.72 40.83L38.69 40.83L38.66 40.83L38.62 40.83L38.59 40.83L38.56 40.83L38.53 40.83L38.49 40.83L38.43 40.83L38 40.84L37.57 40.87L37.14 40.91L36.72 40.97L36.3 41.04L35.89 41.14L35.49 41.24L35.09 41.36L34.7 41.5L34.31 41.65L33.93 41.82L33.56 42L33.2 42.19L32.84 42.4L32.5 42.61L32.16 42.85L31.83 43.09L31.51 43.35L31.21 43.61L30.91 43.89L30.62 44.18L30.35 44.48L30.09 44.79L29.84 45.11L29.6 45.44L29.37 45.78L29.16 46.13L28.96 46.49L28.77 46.86L28.6 47.23L28.44 47.61L28.3 48L28.18 48.4L28.06 48.8L27.97 49.21L27.89 49.62L27.83 50.05L27.79 50.47L27.76 50.9L27.75 51.34L27.75 53.73L26.94 54.13L26.52 54.34L26.1 54.56L25.69 54.8L25.28 55.04L24.88 55.3L24.49 55.58L24.11 55.86L23.73 56.16L23.36 56.47L23 56.79L22.65 57.12L22.3 57.46L21.97 57.81L21.64 58.17L21.32 58.54L21.01 58.91L20.71 59.3L20.42 59.69L20.14 60.09L19.87 60.5L19.61 60.92L19.37 61.34L19.13 61.76L18.91 62.2L18.69 62.64L18.49 63.08L18.3 63.53L18.13 63.98L17.96 64.43L17.81 64.89L17.67 65.35L17.55 65.81L17.44 66.28L17.34 66.75L17.26 67.21L17.19 67.68L17.14 68.15L17.1 68.62L17.07 69.09L17.07 69.56L17.08 70.24L17.12 70.91L17.19 71.57L17.28 72.22L17.4 72.86L17.55 73.5L17.72 74.12L17.91 74.74L18.13 75.34L18.37 75.94L18.64 76.52L18.92 77.09L19.23 77.64L19.56 78.19L19.91 78.71L20.27 79.23L20.66 79.73L21.07 80.21L21.49 80.68L21.94 81.13L22.39 81.57L22.87 81.99L23.36 82.39L23.87 82.77L24.4 83.13L24.93 83.47L25.49 83.8L26.05 84.1L26.63 84.38L27.22 84.64L27.82 84.88L28.44 85.09L29.06 85.28L29.7 85.45L30.34 85.59L31 85.71L31.66 85.8L32.33 85.87L33.01 85.91L33.7 85.92L87.52 85.92L88.15 85.91L88.78 85.87L89.4 85.81L90.02 85.73L90.63 85.62L91.22 85.48L91.81 85.33L92.39 85.15L92.96 84.95L93.52 84.73L94.06 84.49L94.6 84.24L95.12 83.96L95.63 83.66L96.12 83.34L96.61 83.01L97.07 82.66L97.53 82.29L97.96 81.9L98.39 81.5L98.79 81.08L99.18 80.65L99.55 80.21L99.9 79.75L100.24 79.27L100.55 78.79L100.85 78.29L101.12 77.78L101.37 77.25L101.61 76.72L101.82 76.18L102.01 75.62L102.18 75.06L102.32 74.49L102.44 73.91L102.53 73.32L102.6 72.72L102.65 72.12L102.67 71.51L102.66 70.89L102.65 70.36L102.62 69.82L102.57 69.29L102.5 68.76L102.42 68.24L102.31 67.72L102.19 67.21L102.04 66.7L101.88 66.2L101.71 65.7L101.51 65.21L101.3 64.73L101.07 64.26L100.83 63.79L100.57 63.33L100.3 62.88L100.01 62.44L99.71 62.01L99.39 61.59L99.06 61.18L98.72 60.78L98.36 60.4L97.99 60.02L97.61 59.66L97.22 59.31L96.81 58.97L96.39 58.65L95.96 58.34L95.52 58.04L95.08 57.76L94.62 57.5L94.15 57.25L93.67 57.01L93.18 56.8L92.68 56.6L92.18 56.41L91.67 56.25L91.15 56.1L90.62 55.97L90.09 55.86L90.07 55.86L90.04 55.86L90 55.85L89.94 55.85L89.88 55.84L89.8 55.83L89.71 55.82L89.61 55.81L89.5 55.8L89.39 55.79L89.26 55.78L89.12 55.76L88.97 55.75L88.82 55.74L88.65 55.72L88.48 55.71L88.3 55.7L88.11 55.69L87.92 55.67L87.72 55.66L87.51 55.65L87.3 55.65L87.09 55.64L86.86 55.63L86.64 55.63L86.41 55.63L86.17 55.63L85.93 55.63L85.69 55.63L85.45 55.64L85.2 55.65L84.95 55.66L84.7 55.67L84.45 55.69L84.19 55.71L83.94 55.73L83.68 55.76L83.43 55.79L83.17 55.83L82.92 55.86L82.65 55.86L82.6 55.86L82.55 55.86L82.5 55.85L82.45 55.85L82.4 55.84L82.35 55.83L82.3 55.82L82.25 55.8L82.2 55.79L82.15 55.77L82.1 55.75L82.06 55.73L82.01 55.7L81.96 55.68L81.92 55.65L81.87 55.62L81.83 55.6L81.79 55.56L81.74 55.53L81.7 55.5L81.66 55.46L81.62 55.42L81.59 55.39L81.55 55.35L81.51 55.3L81.48 55.26L81.45 55.22L81.42 55.17L81.39 55.13L81.36 55.08L81.33 55.03L81.3 54.98L81.28 54.93L81.26 54.87L81.24 54.82L81.22 54.76L81.2 54.71L81.19 54.65L81.17 54.59L81.16 54.53L81.15 54.47L81.15 54.41L81.14 54.35L81.14 54.29L81.14 54.23L81.15 54.18L81.15 54.12L81.16 54.06L81.17 54L81.18 53.94L81.2 53.89L81.21 53.83L81.23 53.78L81.25 53.72L81.27 53.67L81.3 53.62L81.33 53.57L81.35 53.52L81.38 53.47L81.42 53.42L81.45 53.37L81.49 53.33L81.52 53.28L81.56 53.24L81.6 53.2L81.64 53.16L81.69 53.12L81.73 53.09L81.78 53.05L81.83 53.02L81.88 52.99L81.93 52.96L81.98 52.93L82.03 52.91L82.09 52.88L82.14 52.86L82.2 52.84L82.26 52.83L82.32 52.82L82.38 52.8L82.55 52.78L82.72 52.77L82.9 52.75L83.07 52.73L83.24 52.72L83.41 52.7L83.58 52.69L83.75 52.68L83.92 52.66L84.09 52.65L84.26 52.64L84.43 52.63L84.6 52.62L84.76 52.62L84.93 52.61L85.09 52.6L85.26 52.6L85.42 52.59L85.58 52.59L85.74 52.59L85.9 52.59L86.06 52.58L86.22 52.58L86.37 52.58L86.52 52.58L86.68 52.59L86.83 52.59L86.97 52.59L87.12 52.59L87.27 52.6L87.41 52.6L87.55 52.61L87.69 52.61L87.83 52.62L87.96 52.63L88.09 52.64L88.22 52.64L88.35 52.65L88.48 52.66L88.6 52.67L88.51 51.81L88.39 50.95L88.24 50.11L88.05 49.27L87.84 48.45L87.59 47.64L87.32 46.84L87.02 46.06L86.68 45.28L86.32 44.53L85.94 43.78L85.52 43.06L85.09 42.35L84.62 41.65L84.13 40.98L83.62 40.32L83.09 39.68L82.53 39.06L81.95 38.47L81.35 37.89L80.73 37.33L80.09 36.8L79.43 36.29L78.75 35.81L78.05 35.34L77.34 34.91L76.6 34.5L75.86 34.11L75.1 33.75L74.32 33.42L73.53 33.12L72.72 32.85L71.91 32.61L71.08 32.39L70.24 32.21L69.38 32.06L68.52 31.94L67.65 31.86L66.77 31.81L65.88 31.79L65.34 31.79L64.81 31.81Z"
                          id="amxsKPE1t"></path>
                        <path d="M64.45 53.43L65.15 53.71L65.81 54.09L66.4 54.55L66.92 55.1L67.37 55.71L67.73 56.39L68 57.11L68.17 57.89L68.23 58.7L68.23 61.03L68.63 61.03L68.88 61.05L69.12 61.11L69.34 61.2L69.56 61.33L69.75 61.48L69.92 61.66L70.07 61.86L70.19 62.08L70.28 62.31L70.33 62.56L70.35 62.82L70.35 69.83L70.37 70.12L70.34 70.4L70.27 70.66L70.16 70.89L70.02 71.11L69.85 71.3L69.65 71.45L69.42 71.58L69.18 71.68L68.91 71.73L68.63 71.75L57.22 71.75L56.97 71.74L56.73 71.68L56.5 71.58L56.29 71.46L56.1 71.31L55.92 71.13L55.78 70.93L55.66 70.71L55.57 70.48L55.51 70.23L55.49 69.97L55.49 62.96L55.51 62.7L55.57 62.45L55.66 62.22L55.78 62L55.92 61.8L56.1 61.62L56.29 61.47L56.5 61.34L56.73 61.25L56.97 61.19L57.22 61.17L57.62 61.17L57.62 58.7L57.67 57.89L57.84 57.11L58.11 56.39L58.47 55.71L58.92 55.1L59.45 54.55L60.04 54.09L60.69 53.71L61.39 53.43L62.14 53.26L62.92 53.2L63.7 53.26L64.45 53.43ZM57.19 62.2L57.06 62.28L56.95 62.36L56.85 62.44L56.78 62.53L56.73 62.62L56.7 62.72L56.69 62.82L56.69 69.83L56.7 69.98L56.73 70.11L56.79 70.23L56.87 70.33L56.97 70.41L57.08 70.47L57.21 70.51L57.35 70.52L68.76 70.52L68.9 70.51L69.03 70.47L69.14 70.41L69.24 70.33L69.32 70.23L69.38 70.11L69.41 69.98L69.42 69.83L69.42 62.82L69.41 62.67L69.38 62.54L69.32 62.42L69.24 62.32L69.14 62.24L69.03 62.18L68.9 62.15L68.76 62.13L57.35 62.13L57.19 62.2ZM60.63 56.05L59.88 57.19L59.61 58.56L59.61 61.03L66.5 61.03L66.5 58.56L66.23 57.19L65.48 56.05L64.38 55.27L63.06 54.99L61.73 55.27L60.63 56.05Z"
                          id="diPBSfA60"></path>
                      </defs>
                      <g>
                        <g>
                          <g>
                            <use xlink:href="#aevHZzcIW" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#aevHZzcIW" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#amxsKPE1t" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#amxsKPE1t" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#diPBSfA60" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#diPBSfA60" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h3 id="mobile-applications" class="paper-font-title">Security</h3>
                    <p>Cyber attacks put your data and reputation at risk. We audit, restore compromised sites, mitigate loss, and prevent
                      future attacks.</p>
                  </div>
                  <span class="text-uppercase">Learn More</span>
                </a>
                <a href="/care" class="flex-hover-card" track-type="navigateTo" track-name="preventiveCare">
                  <div class="inner">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 120 120" width="62" height="62">
                      <defs>
                        <path d="M110.55 1.33C115.14 1.33 118.85 5.05 118.85 9.63C118.85 31.44 118.85 88.56 118.85 110.37C118.85 114.95 115.14 118.67 110.55 118.67C88.67 118.67 31.33 118.67 9.45 118.67C4.86 118.67 1.15 114.95 1.15 110.37C1.15 88.56 1.15 31.44 1.15 9.63C1.15 5.05 4.86 1.33 9.45 1.33C31.33 1.33 88.67 1.33 110.55 1.33Z"
                          id="adiODyQb"></path>
                        <path d="M56.2 12.08C53.28 12.08 51.65 12.08 51.33 12.08C47.65 12.08 44.71 15.39 44.91 19.36C45.52 33.92 48.99 65.35 66.69 65.35C84.38 65.35 87.86 33.92 88.46 19.36C88.66 15.39 85.72 12.08 82.05 12.08C81.72 12.08 80.1 12.08 77.17 12.08"
                          id="a2sJ2agP3P"></path>
                        <path d="M66.62 65.11C66.62 80.72 66.62 89.39 66.62 91.13C66.62 100.93 58.81 108.9 49.19 108.9C48.34 108.9 41.56 108.9 40.71 108.9C32.56 108.9 25.81 102.84 24.61 94.87"
                          id="e3mVHcxyvR"></path>
                        <path d="M53.06 15.1C52.19 15.1 51.46 14.31 51.46 13.37C51.46 13.12 51.46 11.1 51.46 10.85C51.46 9.91 52.19 9.12 53.06 9.12C53.42 9.12 56.25 9.12 56.6 9.12C57.47 9.12 58.2 9.91 58.2 10.85C58.2 11.1 58.2 13.12 58.2 13.37C58.2 14.31 57.47 15.1 56.6 15.1C55.89 15.1 53.42 15.1 53.06 15.1Z"
                          id="a2VO5oYLPc"></path>
                        <path d="M76.64 15.1C75.77 15.1 75.03 14.31 75.03 13.37C75.03 13.12 75.03 11.1 75.03 10.85C75.03 9.91 75.77 9.12 76.64 9.12C76.99 9.12 79.82 9.12 80.18 9.12C81.04 9.12 81.78 9.91 81.78 10.85C81.78 11.1 81.78 13.12 81.78 13.37C81.78 14.31 81.04 15.1 80.18 15.1C79.47 15.1 76.99 15.1 76.64 15.1Z"
                          id="f15YmiG9zp"></path>
                        <path d="M70.02 66.42C70.02 67.29 69.62 68.01 69.02 68.51C69.02 68.58 69.02 69.16 69.02 69.23C69.02 70.6 67.95 71.75 66.69 71.75C66.67 71.75 66.57 71.75 66.55 71.75C65.28 71.75 64.21 70.6 64.21 69.23C64.21 69.16 64.21 68.58 64.21 68.51C63.61 68.01 63.21 67.29 63.21 66.42C63.21 66.41 63.21 66.29 63.21 66.28C63.21 64.91 64.28 63.75 65.55 63.75C65.76 63.75 67.47 63.75 67.69 63.75C68.96 63.75 70.02 64.83 70.02 66.28C70.02 66.31 70.02 66.41 70.02 66.42Z"
                          id="c1dzQn7Fu"></path>
                        <path d="M24.41 79C20.65 79 17.6 82.29 17.6 86.35C17.6 90.41 20.65 93.71 24.41 93.71C28.17 93.71 31.22 90.41 31.22 86.35C31.22 82.29 28.17 79 24.41 79Z"
                          id="c5h94GdA9m"></path>
                      </defs>
                      <g>
                        <g>
                          <g>
                            <use xlink:href="#adiODyQb" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#adiODyQb" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#a2sJ2agP3P" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#a2sJ2agP3P" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#e3mVHcxyvR" opacity="1" fill="#000000" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#e3mVHcxyvR" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#a2VO5oYLPc" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#a2VO5oYLPc" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#f15YmiG9zp" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#f15YmiG9zp" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#c1dzQn7Fu" opacity="1" fill="#a434b7" fill-opacity="1"></use>
                            <g>
                              <use xlink:href="#c1dzQn7Fu" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#c5h94GdA9m" opacity="1" fill="#000000" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#c5h94GdA9m" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2.5" stroke-opacity="1"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h3 id="mobile-applications" class="paper-font-title">Preventive Care</h3>
                    <p>Let us monitor, protect, and maintain your site round the clock and act as your personal WordPress advisor.</p>
                  </div>
                  <span class="text-uppercase">Learn More</span>
                </a>
                <a href="/migrations" class="flex-hover-card" track-type="navigateTo" track-name="wordpressMigrations">
                  <div class="inner ">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 120 120" width="62" height="62">
                      <defs>
                        <path d="M110.87 1.5C115.45 1.5 119.17 5.21 119.17 9.8C119.17 31.6 119.17 88.73 119.17 110.54C119.17 115.12 115.45 118.83 110.87 118.83C88.99 118.83 31.64 118.83 9.76 118.83C5.18 118.83 1.46 115.12 1.46 110.54C1.46 88.73 1.46 31.6 1.46 9.8C1.46 5.21 5.18 1.5 9.76 1.5C31.64 1.5 88.99 1.5 110.87 1.5Z"
                          id="eRNcStffM"></path>
                        <path d="M69.73 23.06C81.72 23.06 91.44 35.76 91.44 51.42C91.44 52.01 91.42 52.6 91.39 53.18C100.05 55.56 106.42 63.54 106.42 73.02C106.42 73.02 106.42 73.02 106.42 73.02C106.42 84.37 97.28 93.58 86 93.58C80.88 93.58 39.91 93.58 34.79 93.58C23.51 93.58 14.37 84.37 14.37 73.02C14.37 73.02 14.37 73.02 14.37 73.02C14.37 63.12 21.32 54.85 30.57 52.9C31.4 42.16 38.33 33.79 46.77 33.79C48.62 33.79 50.4 34.19 52.06 34.93C56 27.75 62.45 23.06 69.73 23.06Z"
                          id="h1aEcQa4Su"></path>
                        <path d="M49.4 54.67L33.33 67.6L49.4 80.54L49.4 72.13L71.39 72.13L71.39 80.54L87.46 67.6L71.39 54.67L71.39 63.08L49.4 63.08L49.4 54.67Z"
                          id="bbUlP95xM"></path>
                      </defs>
                      <g>
                        <g>
                          <g>
                            <use xlink:href="#eRNcStffM" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#eRNcStffM" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#h1aEcQa4Su" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#h1aEcQa4Su" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                          <g>
                            <use xlink:href="#bbUlP95xM" opacity="1" fill="#ffffff" fill-opacity="0"></use>
                            <g>
                              <use xlink:href="#bbUlP95xM" opacity="1" fill-opacity="0" stroke="#a434b7" stroke-width="2" stroke-opacity="1"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h3 id="mobile-applications" class="paper-font-title">Site Migrations</h3>
                    <p>Moving WordPress can be downright stressful. No matter how complex, no matter the size, we'll safely and quickly
                      move your site to it's new home.</p>
                  </div>
                  <span class="text-uppercase">Learn More</span>
                </a>
              </div>
            </div>
        </section>
      </iron-selector>
    </article>

    `;
  }
}

window.customElements.define('ts-solutions', TSSolutions);
