import React, { Component } from 'react';

class Two extends Component {
    render() {
        return (
            <div></div>
//                 <body style=""> 
//                     <div id="container">
//                         <div class="desktop-mIzBX" style="min-width: 800px;">
//                             <div class="titlebarContainer-28xKL">
//                                 <header class="header-2WtjF globalHeader-1B8CX" data-auto="navBarContainer">
//                                         <div class="left-3q9g8">
//                                             <div class="breadCrumbContainer-2alxE" data-auto="specViewBreadCrumb">
//                                                 <div class="allScreensContainer-Nz3xn" tabindex="0" data-stringtype="allScreens">
//                                                     <span role="img" class="SVGInline gridViewBreadCrumbIcon-cqcNX">
//                                                         <svg class="SVGInline-svg gridViewBreadCrumbIcon-cqcNX-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
//                                                             <defs>
//                                                                 {/* <style>.a,.b,.d{fill:none;}.a,.b{stroke:#6E6E6E;}.a{opacity:0;}.c{stroke:none;}
//                                                                 </style> */}
//                                                             </defs>
//                                                             <g class="a">
//                                                                 <rect class="c" width="16" height="16"></rect>
//                                                                 <rect class="d" x="0.5" y="0.5" width="15" height="15"></rect>
//                                                             </g>
//                                                             <g class="b" transform="translate(0.889 0.889)">
//                                                                 <rect class="c" width="6.222" height="6.222" rx="0.5"></rect>
//                                                                 <rect class="d" x="0.5" y="0.5" width="5.222" height="5.222"></rect>
//                                                             </g>
//                                                             <g class="b" transform="translate(8.889 0.889)">
//                                                                 <rect class="c" width="6.222" height="6.222" rx="0.5"></rect>
//                                                                 <rect class="d" x="0.5" y="0.5" width="5.222" height="5.222"></rect>
//                                                             </g>
//                                                             <g class="b" transform="translate(0.889 8.889)">
//                                                                 <rect class="c" width="6.222" height="6.222" rx="0.5"></rect>
//                                                                 <rect class="d" x="0.5" y="0.5" width="5.222" height="5.222"></rect>
//                                                             </g>
//                                                             <g class="b" transform="translate(8.889 8.889)">
//                                                                 <rect class="c" width="6.222" height="6.222" rx="0.5"></rect>
//                                                                 <rect class="d" x="0.5" y="0.5" width="5.222" height="5.222"></rect>
//                                                             </g>
//                                                         </svg>
//                                                     </span>
//                                                     <div class="allScreens-3mfxP allScreensText-2tuMX" data-auto="allScreens">Vault Business</div>
//                                                 </div>
//                                                 <div class="lastBreadCrumb-2dwx3">
//                                                     <div class="arrowSeparator-21xKR">
//                                                         {/* <span role="img" class="SVGInline">
//                                                             <svg class="SVGInline-svg" id="S_NavRight_22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0px" y="0px" width="19px" height="19px">
//                                                                 <g id="Layer%201">
//                                                                     <path d="M 14.4775 10.3975 L 9.2876 5.2178 C 8.9878 4.9277 8.5176 4.9277 8.2178 5.2178 C 7.9277 5.5078 7.9277 5.9775 8.2178 6.2778 L 12.8779 10.9277 L 8.2178 15.5879 C 7.9277 15.8779 7.9277 16.3477 8.2178 16.6475 C 8.5176 16.9277 8.9878 16.9277 9.2876 16.6475 L 14.4678 11.4575 C 14.7578 11.1577 14.7578 10.6875 14.4775 10.3975 L 14.4775 10.3975 Z" fill="#b6b6b6"></path>
//                                                                 </g>
//                                                             </svg>
//                                                         </span> */}
//                                                     </div>
//                                                     <div class="breadCrumbString-2Voxn" tabindex="-1" data-stringtype="artboardName" data-auto="artboardName">
//                                                         001
//                                                         <div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="right-3BAYU react-spectrum-provider spectrum spectrum--lightest spectrum--medium">
//                                             <div class="zoomHeader-1jFQB" id="zoomHeader" data-auto="zoomOptions" tabindex="-1">
//                                                     <div class="inputContainer-vp079 " data-auto="zoomContainer">
//                                                         <input tabindex="0" class="zoomInput-1wfLE" data-auto="zoomInputBox"></input>
//                                                             <img data-auto="zoomDropdown" class="zoomDropdownIcon-3K0Km" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIGlkPSJTX0Ryb3Bkb3duXzEwX04iIHZpZXdCb3g9IjAgMCAxMCAxMCIgdmVyc2lvbj0iMS4xIgoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKCXg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4Igo+Cgk8ZyBpZD0iTGF5ZXIlMjAxIj4KCQk8ZyBpZD0iU19Ecm9wZG93bl8xMF9OX2x0Ij4KCQkJPHBhdGggZD0iTSA1LjUyNTkgNy40NzUzIEwgOC43MDggNC4yOTM1IEMgOS4wMDEgNC4wMDA1IDkuMDAxIDMuNTI1NiA4LjcwOCAzLjIzMjkgQyA4LjQxNSAyLjkzOTkgNy45NDAyIDIuOTM5OSA3LjY0NzIgMy4yMzI5IEwgNC45OTU2IDUuODg0NSBMIDIuMzQ0IDMuMjMyOSBDIDIuMDUxIDIuOTM5OSAxLjU3NjIgMi45Mzk5IDEuMjgzMiAzLjIzMjkgQyAwLjk5MDIgMy41MjU2IDAuOTkwMiA0LjAwMDUgMS4yODMyIDQuMjkzNSBMIDQuNDY1MyA3LjQ3NTMgQyA0Ljc1ODMgNy43NjgzIDUuMjMyOSA3Ljc2ODMgNS41MjU5IDcuNDc1MyBaIiBmaWxsPSIjNjY2NjY2Ii8+CgkJPC9nPgoJPC9nPgo8L3N2Zz4="></img>
//                                                     </div>
//                                                     <div class="optionsContainerHide-hE7y7" data-auto="zoomOptionContainer">
//                                                         <div class="unselectedZoomIndex-ueFrB" value="Default">
//                                                             <label class="zoomLabel-3I7YR" value="Default">Default</label>
//                                                         </div>
//                                                         <div class="unselectedZoomIndex-ueFrB" value="0.25">
//                                                             <label class="zoomLabel-3I7YR" value="0.25">25%</label>
//                                                         </div>
//                                                         <div class="unselectedZoomIndex-ueFrB" value="0.5">
//                                                             <label class="zoomLabel-3I7YR" value="0.5">50%</label>
//                                                         </div>
//                                                         <div class="unselectedZoomIndex-ueFrB" value="0.75">
//                                                             <label class="zoomLabel-3I7YR" value="0.75">75%</label>
//                                                             </div>
//                                                         <div class="unselectedZoomIndex-ueFrB" value="1">
//                                                             <label class="zoomLabel-3I7YR" value="1">100%</label>
//                                                             </div>
//                                                         <div class="unselectedZoomIndex-ueFrB" value="1.5">
//                                                             <label class="zoomLabel-3I7YR" value="1.5">150%</label>
//                                                             </div>
//                                                         <div class="unselectedZoomIndex-ueFrB" value="2">
//                                                             <label class="zoomLabel-3I7YR" value="2">200%</label>
//                                                         </div>
//                                                     </div>
//                                         </div>
//                                         <div class="fullScreenIcon-1FXT5" data-auto="fullScreen" tabindex="0">
//                                             <span class="SVGInline">
//                                                 <svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
//                                                     <path fill="#707070" d="M12.26,1a.251.251,0,0,0-.18.43l1.59,1.59L10.18,6.51a.254.254,0,0,0,0,.36l.96.96a.242.242,0,0,0,.35,0l3.5-3.5,1.58,1.59A.255.255,0,0,0,17,5.74V1.25A.254.254,0,0,0,16.75,1ZM5.764,17a.25.25,0,0,0,.17-.43L4.36,14.99l3.5-3.49a.274.274,0,0,0,0-.36l-.96-.96a.274.274,0,0,0-.36,0l-3.49,3.5L1.46,12.1a.25.25,0,0,0-.43.17l-.016,4.48a.261.261,0,0,0,.25.25Z"></path>
//                                                 </svg>
//                                             </span>
//                                         </div>
//                                         <div>
//                                             <div class="utilNavParent-9DQfl">
//                                                 <div class="utilnav-container" style="height: 100%;">
//                                                     <div class="utility-nav-wrapper react-spectrum-provider spectrum spectrum--light spectrum--medium">
//                                                         <div class="utility-nav utility-nav-light">
//                                                             <div class="utility-nav-icon help">
//                                                                 <div class="wrapper">
//                                                                     <div tabindex="0" class="unav-icon-span custom-focus" aria-label="Support and Feedback" role="button" aria-haspopup="true" aria-expanded="false">
//                                                                         <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS help-icon" data-element-type="icon">
//                                                                             <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm.047 26.876a2.69 2.69 0 1 1 0-5.375 2.62 2.62 0 0 1 2.8 2.67 2.581 2.581 0 0 1-2.8 2.705zm3.566-12.818l-.2.21c-.789.829-1.684 1.768-1.684 2.351a2.772 2.772 0 0 0 .358 1.348l.146.278-.113.429a.617.617 0 0 1-.567.377h-2.682a.868.868 0 0 1-.65-.235 4.113 4.113 0 0 1-.845-2.524c0-1.678.934-2.714 2.225-4.15.2-.219.391-.42.575-.61.629-.65 1.014-1.07 1.014-1.515 0-.307 0-1.244-1.786-1.244a5.916 5.916 0 0 0-3.159.919.6.6 0 0 1-.653-.02l-.236-.169-.056-.443v-2.9a.879.879 0 0 1 .394-.82 8.271 8.271 0 0 1 4.3-1.1c3.291 0 5.5 2.118 5.5 5.272a6.134 6.134 0 0 1-1.881 4.546z">
//                                                                             </path>
//                                                                         </svg>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="uv-icon">
//                                                                     <a id="utilnav-feedback-target">
//                                                                     </a>
//                                                                 </div>
//                                                                 <div class="utility-nav-overlay-container" style="left: -706.22px; top: -13px;">
//                                                                 </div>
//                                                             </div>
//                                                             <div class="utility-nav-icon">
//                                                                 <div class="signin-wrapper">
//                                                                     <span class="helper"></span>
//                                                                         <a href="#" data-element-type="icon" class="signin custom-focus">Sign In</a>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </header>
//                         </div>
//                         <div class="prototypeAndComments-1zvNW widthPrototypeAndCommentsSideRail-1OOnV" data-auto="pinningOverlay">
//                             <div class="prototypeAndFooterPanel-2IFPk" data-auto="prototypeAndFooterPanel">
//                                 <div class="prototypeScrollerPanel-2L7l3" tabindex="0" data-auto="scrollableArea">
//                                     <div class="webglPlayer-2kRdH">
//                                         <div class="annotationsContainer-2hI-w" touch-action="auto" style="display: block; touch-action: auto;">
//                                             <div class="annotations-28TsN" data-auto="annotationsContainer" style="left: 1px; top: 0.205688px; right: -565px; bottom: -84.5px;">
//                                                 <div style="position: absolute; width: 977px; height: 549.294px; transform: translate(0px, 0px); transform-origin: initial; z-index: 1;">
//                                                     <div class="_38VdqrTgodNNjLWAqV19B1 medium-scale" id="ccx-annotations-overlay" data-scalefactorx="0.715226948261261" data-scalefactory="0.715226948261261"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div id="root-1" tabindex="-1" style="position: relative; width: 100%; height: 100%; overflow: hidden; -webkit-tap-highlight-color: transparent; cursor: default;">
//                                             <div id="scroll-container-1" style="display: block; position: absolute; overflow: hidden; left: 1px; top: 1px; right: 1px; bottom: 1px;">
//                                                     <div id="scroll-1" style="display: block; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; overflow: hidden; user-select: none; padding-right: 17px;">
//                                                         <div style="display: block; position: absolute; width: 977px; height: 549px;">
//                                                         </div>
//                                                     </div>
//                                             </div>
//                                             <canvas id="canvas-1" width="826" height="930" style="display: block; width: 100%; height: 100%; touch-action: pinch-zoom;"></canvas>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="pinningModeBackground-2rEZo" style="left: 1px; top: 80.2057px; width: 401px; height: 464.794px;"></div>
//                                     <div class="desktopFooter-3KoiP" data-auto="footer" style="width: calc(100% - 388px);">
//                                         <div class="customStyleRail-2gLwS" data-auto="leftSideFooter">
//                                             <a class="appInfo-zu6qk customMargin-2qBno" href="http://www.adobe.com/go/get_xd" target="_blank" data-auto="cometLink" rel="noopener noreferer">
//                                                 <div class="appLink-2WcdD">
//                                                     <div>
//                                                         <span>Made with Adobe XD</span>
//                                                     </div>
//                                                 </div><div class="ccLogo-FXO_1"><span role="img" aria-label="Creative Cloud Logo" class="SVGInline"><svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                                                             <path fill="#bbb" d="M11.09,7.72a9.155,9.155,0,0,1,1.08.71,3.261,3.261,0,0,1,2.44-.82,4.443,4.443,0,0,1,4.76,4.43,4.571,4.571,0,0,1-4.76,4.6,5.012,5.012,0,0,1-3.52-1.35L8.36,12.55a.736.736,0,0,0-.91-.02.625.625,0,0,0-.01.83l2.89,2.78a6.227,6.227,0,0,0,4.29,1.78,5.935,5.935,0,0,0,5.98-5.87,5.9,5.9,0,0,0-6.02-5.77,4.979,4.979,0,0,0-3.73,1.27ZM3.4,13.17a4.848,4.848,0,0,0,4.88,4.75H9.66a2.362,2.362,0,0,1-.94-1.2l-.36-.02a3.536,3.536,0,0,1-3.63-3.57A3.181,3.181,0,0,1,8.19,9.82a3.278,3.278,0,0,1,2.4.71l2.09,2.17c.21.21.81.09,1.02-.11a.494.494,0,0,0,.01-.73L11.52,9.7A4.635,4.635,0,0,0,8.26,8.49,4.772,4.772,0,0,0,3.4,13.17ZM14.5,4a8.21,8.21,0,0,0-3.41.73A8.4,8.4,0,0,0,8.8,6.23c-.18-.01-.36-.02-.53-.02a7.277,7.277,0,0,0-2.82.56A7.4,7.4,0,0,0,3.14,8.25a7.232,7.232,0,0,0-1.56,2.24A6.791,6.791,0,0,0,1,13.24a6.914,6.914,0,0,0,.57,2.75,7.308,7.308,0,0,0,1.56,2.23,7.4,7.4,0,0,0,2.33,1.51A4.341,4.341,0,0,0,7.18,20H15a8.8,8.8,0,0,0,2.86-.37,8.416,8.416,0,0,0,2.67-1.73,8.147,8.147,0,0,0,1.8-2.58A8.6,8.6,0,0,0,23,12a7.322,7.322,0,0,0-.66-3.04,8.3,8.3,0,0,0-4.49-4.33A9.111,9.111,0,0,0,14.5,4Zm0,.8a8.154,8.154,0,0,1,3.05.58,7.761,7.761,0,0,1,2.42,1.57A7.545,7.545,0,0,1,21.6,9.28,6.476,6.476,0,0,1,22.2,12a7.783,7.783,0,0,1-.6,2.99,7.488,7.488,0,0,1-4.05,3.9A6.931,6.931,0,0,1,15,19.2H7.18a3.716,3.716,0,0,1-1.42-.21,6.635,6.635,0,0,1-2.07-1.34,6.376,6.376,0,0,1-1.38-1.98,6.02,6.02,0,0,1,0-4.85A6.4,6.4,0,0,1,3.69,8.83,6.561,6.561,0,0,1,5.75,7.5a6.693,6.693,0,0,1,2.52-.49,3.7,3.7,0,0,1,.47.02l.34.02.26-.23a7.7,7.7,0,0,1,2.07-1.35A7.393,7.393,0,0,1,14.5,4.8Z"></path>
//                                 </svg>
//                                                     </span>
//                                                 </div>
//                                                 </a>
//                                             </div>
//                                             <div class="navButtons-3iZyd" data-auto="navigationButtons">
//                                                 <div>
//                                                     <div class="navButtons-1Qqr7 fixedNavButtons-13Y5J">
//                                                         <div class="navButton-2FYM- homeButton-25MiB">
//                                                             <button data-auto="homeBtn" style="outline: none;"> 
//                                                                 <span role="img" class="SVGInline">
//                                                                     {/* <svg class="SVGInline-svg" id="S_NavHome_S_22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0px" y="0px" width="22px" height="22px"> */}
//                                                                 <g id="Background">
//                                                                     {/* <path d="M 11.7168 3.1748 C 11.3276 2.7646 10.7573 2.7246 10.3477 3.1147 L 3.0073 10.1748 C 2.5977 10.5947 2.5977 11.2749 3.0176 11.6846 C 3.2173 11.875 3.4775 11.9844 3.7476 11.9844 L 5.0073 12.0254 L 5.0073 17.4844 C 5.0073 17.7852 5.2373 18.0254 5.5376 18.0254 L 9.0073 18.0254 L 9.0073 12.0254 L 13.0078 12.0254 L 13.0078 18.0254 L 16.4873 18.0254 C 16.7773 18.0254 17.0078 17.7852 17.0078 17.4941 L 17.0078 12.0254 L 18.2578 12.0254 C 18.8379 12.0547 19.3281 11.6055 19.3574 11.0249 C 19.377 10.7246 19.2578 10.4248 19.0371 10.2148 L 11.7168 3.1748 Z" fill="#707070"></path> */}
//                                                                 </g>
//                                                                 <g id="Layer%201"></g>
//                                                                 {/* </svg> */}</span>
//                                                             </button>
//                                                         </div>
//                         <div class="navButton-2FYM- prevButton-zKghk">
//                             <button data-auto="prevBtn" style="outline: none;">
//                                 <span role="img" class="SVGInline">
//                                     {/* <svg class="SVGInline-svg" id="S_NavLeft_S_22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0px" y="0px" width="22px" height="22px"> */}
//                                         <g id="Layer%201">
//                                             <path d="M 7.2092 10.3975 L 12.3992 5.2178 C 12.699 4.9277 13.1692 4.9277 13.469 5.2178 C 13.759 5.5078 13.759 5.9775 13.469 6.2778 L 8.8089 10.9277 L 13.469 15.5879 C 13.759 15.8779 13.759 16.3477 13.469 16.6475 C 13.1692 16.9277 12.699 16.9277 12.3992 16.6475 L 7.219 11.4575 C 6.929 11.1577 6.929 10.6875 7.2092 10.3975 L 7.2092 10.3975 Z" fill="#707070"></path>
//                                         </g>
//                                     {/* </svg> */}
//                                 </span>
//                         </button>
//                         </div>
//                         <div data-auto="screenNumbers" class="screenNumbers-_CcC_" style="min-width: 39.1125px;">
//                             <span>20 of 38</span>
//                         </div>
//                         <div class="navButton-2FYM- nextButton-1UXH_">
//                             <button data-auto="nextBtn" style="outline: none;"><span role="img" class="SVGInline">
//                             {/* <svg class="SVGInline-svg" id="S_NavRight_S_22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0px" y="0px" width="22px" height="22px"> */}
//                                 <g id="Layer%201">
//                                    <path d="M 14.4775 10.3975 L 9.2876 5.2178 C 8.9878 4.9277 8.5176 4.9277 8.2178 5.2178 C 7.9277 5.5078 7.9277 5.9775 8.2178 6.2778 L 12.8779 10.9277 L 8.2178 15.5879 C 7.9277 15.8779 7.9277 16.3477 8.2178 16.6475 C 8.5176 16.9277 8.9878 16.9277 9.2876 16.6475 L 14.4678 11.4575 C 14.7578 11.1577 14.7578 10.6875 14.4775 10.3975 L 14.4775 10.3975 Z" fill="#707070"></path>
//                                 </g>
//                             {/* </svg> */}
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//                     </div>
//             </div>
// </div>
// <div class="panelViewMainContainer-1GqIp" data-auto="mySidenav" style="width: 337px; opacity: 1;">
//     <div class="sidenavStyleview-3Eetz"><div class="commentsPanel-5OJJb" id="commentsPanel" data-auto="commentsPanel" style="width: 336px;">
//         <div class="_1vKtKhOGDc44ZCInt3cW1F lightest-theme medium-scale" id="ccx-comments-full">
//             <div class="react-spectrum-provider spectrum spectrum--lightest spectrum--medium" style="height: 100%;">
//                 <div class="comments-list-wrapper">
//                     <div class="flex-flow-wrapper">
//                                 <div class="_30J0NKF4PjdDezSuALHPP9"></div>
//                                 <div aria-labelledby="new-comment-heading" class="_1vnedgCf6NvWwBA1uRn18x " id="ccx-comments-submit">
//                                 <h2 id="new-comment-heading" class="visually-hidden">Submit New Comment</h2>
//                     <div class="sign-in-buttons-container">
//                         <div class="oYJXP2c9VOc6giKUlKKBi new-comment-textarea">
//                             <div class="textbox no-action-bar">
//                                 <div class="textarea-container ql-container">
//                                 <div class="ql-editor ql-blank" data-gramm="false" contenteditable="true" data-placeholder="Make a comment" aria-placeholder="Make a comment" aria-autocomplete="list" aria-multiline="true" aria-owns="ccx-suggestion-list" role="textbox" tabindex="0">
//                                     <div><br></br>
//                                     </div>
//                                     </div>
//                                     <div class="ql-clipboard" contenteditable="true" tabindex="-1">
//                                     </div>
//                                 </div>
//                                 <div class="action-bar-container">
//                                     <div class="action-bar">
//                                         <button data-annotation-button="true" data-test="pin-button" class="spectrum-Tool tool-button">
//                                         <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
//                                             <path d="M11.646 21.998l2.379 2.381L3.924 34.406 0 36l1.645-3.975 10.001-10.027zm12.305 4.322h.008L24 20.289 32.293 12l2.27-.023.006-.009a1.446 1.446 0 0 0 1.01-2.47L31.041 4.96 26.5.483a1.445 1.445 0 0 0-2.469 1.011h-.008L24 3.708 15.707 12l-6.025.044v.007a1.44 1.44 0 0 0-1.106 2.461l6.459 6.458 6.457 6.459a1.442 1.442 0 0 0 2.463-1.107z">
//                                             </path>
//                                         </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div class="submit-button-container">
//                                 <button id="ccx-comments-cancel-btn" class="spectrum-Button spectrum-Button--quiet spectrum-Button--secondary is-disabled" disabled="">Cancel</button>
//                                 <button id="ccx-comments-submit-btn" class="spectrum-Button spectrum-Button--cta is-disabled" disabled="">Submit</button>
//                             </div>
//                         </div>
//                             <div class="_1dGZXGAEw6Y6_z9MpS04ua comments-divider"></div>
//                     </div>
//                     <div class="_3Pc8VSB7VmQ7rka2_PQLMx">
//                         <div aria-labelledby="comment-list-heading" id="ccx-comments-list" class="_1iqYEs91veRW8mTIiLM4jh">
//                         <h2 id="comment-list-heading" class="visually-hidden">Comment List</h2>
//                             <ul role="list" class="_22sRkhFo-bJUWE6zxJusPG" data-testid="comment-list">
//                                 <div class="j1Z4HpAXh1r4cPLDJy-8M">
//                                     <div class="_13hyiU2lg5zM6Bs_HEGLDK" data-testid="empty-state">
//                                         <div class="_1PjdL_rZKLeBDdgOF-p32Z">
//                                             <svg id="S_IlluXdComments_72x56" xmlns="http://www.w3.org/2000/svg" width="72" height="56" viewBox="0 0 72 56" class="ccx-comment-illustration">
//                                                 <path class="bubble-path" d="M44,18.75H19a.75.75,0,0,1,0-1.5H44a.75.75,0,0,1,0,1.5Z"></path>
//                                                 <path class="bubble-path" d="M37,24.75H19a.75.75,0,0,1,0-1.5H37a.75.75,0,0,1,0,1.5Z"></path>
//                                                 <path class="bubble-path" d="M23.00391,44.76465A2.00777,2.00777,0,0,1,21,42.7627V35H14a5.00588,5.00588,0,0,1-5-5V12a5.00588,5.00588,0,0,1,5-5H49a5.00588,5.00588,0,0,1,5,5V30a5.00588,5.00588,0,0,1-5,5H33.103l-8.65088,9.1377A1.99246,1.99246,0,0,1,23.00391,44.76465ZM14,9a3.00328,3.00328,0,0,0-3,3V30a3.00328,3.00328,0,0,0,3,3h8a.99974.99974,0,0,1,1,1v8.7627l8.94678-9.4502A1.00064,1.00064,0,0,1,32.67285,33H49a3.00328,3.00328,0,0,0,3-3V12a3.00328,3.00328,0,0,0-3-3Z"></path>
//                                                 <path class="bubble-path" d="M47.99512,50.21582a1.98957,1.98957,0,0,1-1.46582-.64648L40.47559,43H32a6.9751,6.9751,0,0,1-2.334-.39941.99982.99982,0,0,1,.668-1.88477A4.97724,4.97724,0,0,0,32,41h8.91406a1.00164,1.00164,0,0,1,.73535.32227L48,48.21387V42a.99974.99974,0,0,1,1-1H59a3.00328,3.00328,0,0,0,3-3V24a3.00328,3.00328,0,0,0-3-3H56a1,1,0,0,1,0-2h3a5.00588,5.00588,0,0,1,5,5V38a5.00588,5.00588,0,0,1-5,5H50v5.21387a1.98808,1.98808,0,0,1-1.27246,1.86328A2.00831,2.00831,0,0,1,47.99512,50.21582Z"></path>
//                                             </svg>
//                                         </div>
//                                         <div class="_8zeyTRyaooD8ZytkuZJpu">Got something to say?</div>
//                                             <div class="_2UwJatmEe-5uaH20W4Eopz">Comment to start a discussion, make a note, or annotate the artboard.
//                                             </div>
//                                     </div>
//                                 </div>
//                             </ul>
//                         </div>
//                         <div class="_3CX3IY2ah6eMwCC_FvI0pH">
//                         </div>
//                     </div>
//                     <div class="_1dGZXGAEw6Y6_z9MpS04ua comments-divider"></div>
//                     <footer aria-labelledby="footer-heading" class="_2j7mgh4TU4BC-eh9vU4gRY" id="ccx-comments-filter">
//                         <h2 class="visually-hidden" id="footer-heading">Comment List Footer</h2>
//                         <div class="filter-container">
//                                 <div class="view-switch-wrapper">
//                                     <div class="spectrum-ToggleSwitch is-disabled">
//                                         <input type="checkbox" class="spectrum-ToggleSwitch-input" disabled="" aria-checked="true" role="switch" id="ccx-comments-switch-view" value="" checked=""></input>
//                                         <span class="spectrum-ToggleSwitch-switch"></span>
//                                     </div>
//                                     <label class="switch-label" for="ccx-comments-switch-view">All Screen Comments</label>
//                                 </div>
//                                 <div class="toggle-right-container">
//                                     <button aria-label="Show annotations" aria-pressed="true" data-testid="annotation-switch" class="spectrum-Tool is-disabled annotation-toggle-icon annotation-visible" disabled="">
//                                         <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
//                                             <path d="M24.613 8.58A14.973 14.973 0 0 0 18 6.937c-8.664 0-15.75 8.625-15.75 11.424 0 3 7.458 10.7 15.686 10.7 8.295 0 15.814-7.706 15.814-10.7 0-2.361-4.214-7.342-9.137-9.781zM18 27.225A9.225 9.225 0 1 1 27.225 18 9.225 9.225 0 0 1 18 27.225z"></path>
//                                             <path d="M20.667 18.083A2.667 2.667 0 0 1 18 15.417a2.631 2.631 0 0 1 1.35-2.269 4.912 4.912 0 0 0-1.35-.21A5.063 5.063 0 1 0 23.063 18a4.7 4.7 0 0 0-.175-1.2 2.623 2.623 0 0 1-2.221 1.283z"></path>
//                                         </svg>
//                                     </button>
//                                     <div>
//                                         <div class="filter-icon">
//                                             <button aria-label="Filter comments by reviewers, time, and status. No filter applied" data-testid="ccx-comments-filter-button" id="ccx-filter-button" class="spectrum-Tool is-disabled" disabled="">
//                                                 <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" class="spectrum-Icon spectrum-Icon--sizeS">
//                                                     <path d="M30.946 2H3.054a1 1 0 0 0-.787 1.617L14 18.589V33.9a.992.992 0 0 0 1.68.825l3.98-4.153a1.221 1.221 0 0 0 .34-.845V18.589L31.733 3.617A1 1 0 0 0 30.946 2z"></path>
//                                                 </svg>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                     </footer>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
// </div>
// </div>
// <div>
//             <div class="sideNavBarContainer-3Wtts sideNavBarContainerBorder-3PeM6" data-auto="sideNavBarContainer">
//             <div class="floatTop-2G0aQ" data-auto="sideNavBarTopContainer">
//             <div class="buttonContainer-37nqv buttonContainerSelected-2biQK" data-auto="commentViewButton" tabindex="0">
//             <div class="commentView-1D2EW" tabindex="-1">
//             <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNjY2IiBkPSJNMTksNiBDMTksNS40NDc4IDE4LjU1MjIsNSAxOCw1IEw1LDUgQzQuNDQ3OCw1IDQsNS40NDc4IDQsNiBMNCwxNSBDNCwxNS41NTIyIDQuNDQ3OCwxNi4wMDA5IDUsMTYuMDAyIEw4LDE2IEw4LjAwNDExNTk5LDIwLjM0MTM3ODUgQzguMDA0MTE1OTksMjAuNjE1OTc4NSA4LjMzOTIzNDc3LDIwLjczODU4OTMgOC41MjczMjg0OSwyMC41MzkwNDcyIEwxMi4wMDczLDE2LjAwNzggTDE4LDE2LjAwMTEgQzE4LjU1MjIsMTYuMDAwNSAxOSwxNS41NTIyIDE5LDE1IEwxOSw2IFoiLz4KPC9zdmc+Cg=="></img>
//             </div>
//             </div>
//             <div class="buttonContainer-37nqv" data-auto="specViewButton" tabindex="0">
//             <div class="specView-2Dn54" tabindex="-1">
//             <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iU21vY2tfQ29kZV8xOF9OIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8cmVjdCBpZD0iQ2FudmFzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNmZjEzZGMiIG9wYWNpdHk9IjAiLz4KICA8cGF0aCBpZD0iUGF0aF8zNjEwNSIgZGF0YS1uYW1lPSJQYXRoIDM2MTA1IiBkPSJNOC4yMjYsMTQuNDczYS41LjUsMCwwLDEtLjQ4My4zNzFINy4yMjdhLjUuNSwwLDAsMS0uNDcyLS42NjZMOS43ODYsMi42OTNhLjUuNSwwLDAsMSwuNDgzLS4zN2guNWEuNS41LDAsMCwxLC40NzIuNjY1WiIgZmlsbD0iIzcwNzA3MCIvPgogIDxwYXRoIGlkPSJQYXRoXzM2MTA2IiBkYXRhLW5hbWU9IlBhdGggMzYxMDYiIGQ9Ik0xNy43NDYsOS41M2wtNC4wOTUsNC4xNmEuNS41LDAsMCwxLS43MTMsMGwtLjQ0Ni0uNDUzYS41LjUsMCwwLDEsMC0uN0wxNS45NzEsOSwxMi40OTIsNS40NjRhLjUuNSwwLDAsMSwwLS43bC40NDYtLjQ1NGEuNS41LDAsMCwxLC43MTMsMGw0LjA5NSw0LjE2QS43Ni43NiwwLDAsMSwxNy43NDYsOS41M1oiIGZpbGw9IiM3MDcwNzAiLz4KICA8cGF0aCBpZD0iUGF0aF8zNjEwNyIgZGF0YS1uYW1lPSJQYXRoIDM2MTA3IiBkPSJNLjI1NCw4LjQ3bDQuMS00LjE2MWEuNS41LDAsMCwxLC43MTMsMGwuNDQ2LjQ1NGEuNS41LDAsMCwxLDAsLjdMMi4wMjksOWwzLjQ3OSwzLjUzNWEuNS41LDAsMCwxLDAsLjdsLS40NDYuNDUzYS41LjUsMCwwLDEtLjcxMywwTC4yNTQsOS41M2EuNzYuNzYsMCwwLDEsMC0xLjA2WiIgZmlsbD0iIzcwNzA3MCIvPgo8L3N2Zz4K"></img>
//             </div>
//             </div>
//             <div class="buttonContainer-37nqv" data-auto="variableViewButton" tabindex="0">
//             <div class="variableView-1akQg" tabindex="-1">
//             <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNjY2IiBkPSJNMTUuMDc0MDM3OCw0Ljk5NjU0NDcxIEMxNi42MjQ4MDcsNC45OTY1NDQ3MSAxNy42NzcxMTQ3LDUuNjYxMTYwMDkgMTcuNjc3MTE0Nyw3LjE5ODA4MzE3IEMxNy42NzcxMTQ3LDcuNjI3MzEzOTQgMTcuNjIxNzMwMSw4LjA3MDM5MDg2IDE3LjU1MjQ5OTMsOC41MjczMTM5NCBDMTcuNDk3MTE0Nyw4Ljk3MDM5MDg2IDE3LjM3MjQ5OTMsOS4yNzUwMDYyNSAxNy4zNzI0OTkzLDkuNzA0MjM3MDIgQzE3LjM3MjQ5OTMsMTAuMjMwMzkwOSAxOS4wMzQwMzc4LDEwLjc5ODA4MzIgMjAuMjUyNDk5MywxMC44MjU3NzU1IEwyMC4yNTI0OTkzLDEwLjgyNTc3NTUgTDIwLjI1MjQ5OTMsMTIuMjY1Nzc1NSBDMTkuMDM0MDM3OCwxMi4yOTM0Njc4IDE3LjQyNzg4MzksMTIuOTQ0MjM3IDE3LjQyNzg4MzksMTMuNDE1MDA2MiBDMTcuNDI3ODgzOSwxMy44NDQyMzcgMTcuNDk3MTE0NywxNC4wOTM0Njc4IDE3LjU1MjQ5OTMsMTQuNTM2NTQ0NyBDMTcuNjIxNzMwMSwxNC45Nzk2MjE2IDE3LjY3NzExNDcsMTUuNDM2NTQ0NyAxNy42NzcxMTQ3LDE1LjgzODA4MzIgQzE3LjY3NzExNDcsMTcuNDk5NjIxNiAxNi41ODMyNjg1LDE4LjA5NTAwNjIgMTUuMDc0MDM3OCwxOC4wOTUwMDYyIEwxNS4wNzQwMzc4LDE4LjA5NTAwNjIgTDEyLjk5NzExNDcsMTguMDk1MDA2MiBMMTIuOTk3MTE0NywxNi42MjczMTM5IEwxNC40NTA5NjA5LDE2LjYyNzMxMzkgQzE1LjM5MjQ5OTMsMTYuNjI3MzEzOSAxNi4wOTg2NTMyLDE2LjI2NzMxMzkgMTYuMDk4NjUzMiwxNS42MzAzOTA5IEMxNi4wOTg2NTMyLDE1LjI5ODA4MzIgMTYuMDQzMjY4NSwxNC45NTE5MjkzIDE1Ljk3NDAzNzgsMTQuNTkxOTI5MyBDMTUuOTQ2MzQ1NSwxNC4yMzE5MjkzIDE1Ljg3NzExNDcsMTMuODQ0MjM3IDE1Ljg3NzExNDcsMTMuNDAxMTYwMSBDMTUuODYzMjY4NSwxMi4yNTE5MjkzIDE2Ljg3NDAzNzgsMTEuNzI1Nzc1NSAxNy43NzQwMzc4LDExLjUzMTkyOTMgQzE2Ljg3NDAzNzgsMTEuMzM4MDgzMiAxNS44NjMyNjg1LDEwLjgyNTc3NTUgMTUuODc3MTE0Nyw5LjY3NjU0NDcxIEMxNS44NzcxMTQ3LDkuMjQ3MzEzOTQgMTUuOTQ2MzQ1NSw4Ljg1OTYyMTYzIDE1Ljk3NDAzNzgsOC40OTk2MjE2MyBDMTYuMDQzMjY4NSw4LjEzOTYyMTYzIDE2LjA5ODY1MzIsNy43OTM0Njc3OSAxNi4wOTg2NTMyLDcuNDYxMTYwMDkgQzE2LjA5ODY1MzIsNi42NTgwODMxNyAxNS41NDQ4MDcsNi40NjQyMzcwMiAxNC40NTA5NjA5LDYuNDY0MjM3MDIgTDE0LjQ1MDk2MDksNi40NjQyMzcwMiBMMTIuOTk3MTE0Nyw2LjQ2NDIzNzAyIEwxMi45OTcxMTQ3LDQuOTk2NTQ0NzEgWiBNMTAuOTg3ODAwOSw0Ljk5NjU0NDcxIEwxMC45ODc4MDA5LDYuNDY0MjM3MDIgTDkuNTMzOTU0NzIsNi40NjQyMzcwMiBDOC40NDAxMDg1Nyw2LjQ2NDIzNzAyIDcuODg2MjYyNDEsNi42NTgwODMxNyA3Ljg4NjI2MjQxLDcuNDYxMTYwMDkgQzcuODg2MjYyNDEsNy43OTM0Njc3OSA3Ljk0MTY0NzAzLDguMTM5NjIxNjMgOC4wMTA4Nzc4LDguNDk5NjIxNjMgQzguMDM4NTcwMTEsOC44NTk2MjE2MyA4LjEwNzgwMDg3LDkuMjQ3MzEzOTQgOC4xMDc4MDA4Nyw5LjY3NjU0NDcxIEM4LjEyMTY0NzAzLDEwLjgyNTc3NTUgNy4xMTA4Nzc4LDExLjMzODA4MzIgNi4yMTA4Nzc4LDExLjUzMTkyOTMgQzcuMTEwODc3OCwxMS43MjU3NzU1IDguMTIxNjQ3MDMsMTIuMjUxOTI5MyA4LjEwNzgwMDg3LDEzLjQwMTE2MDEgQzguMTA3ODAwODcsMTMuODQ0MjM3IDguMDM4NTcwMTEsMTQuMjMxOTI5MyA4LjAxMDg3NzgsMTQuNTkxOTI5MyBDNy45NDE2NDcwMywxNC45NTE5MjkzIDcuODg2MjYyNDEsMTUuMjk4MDgzMiA3Ljg4NjI2MjQxLDE1LjYzMDM5MDkgQzcuODg2MjYyNDEsMTYuMjY3MzEzOSA4LjU5MjQxNjI2LDE2LjYyNzMxMzkgOS41MzM5NTQ3MiwxNi42MjczMTM5IEwxMC45ODc4MDA5LDE2LjYyNzMxMzkgTDEwLjk4NzgwMDksMTguMDk1MDA2MiBMOC45MTA4Nzc4LDE4LjA5NTAwNjIgQzcuNDAxNjQ3MDMsMTguMDk1MDA2MiA2LjMwNzgwMDg3LDE3LjQ5OTYyMTYgNi4zMDc4MDA4NywxNS44MzgwODMyIEM2LjMwNzgwMDg3LDE1LjQzNjU0NDcgNi4zNjMxODU0OSwxNC45Nzk2MjE2IDYuNDMyNDE2MjYsMTQuNTM2NTQ0NyBDNi40ODc4MDA4NywxNC4wOTM0Njc4IDYuNTU3MDMxNjQsMTMuODQ0MjM3IDYuNTU3MDMxNjQsMTMuNDE1MDA2MiBDNi41NTcwMzE2NCwxMi45NDQyMzcgNC45NTA4Nzc4LDEyLjI5MzQ2NzggMy43MzI0MTYyNiwxMi4yNjU3NzU1IEwzLjczMjQxNjI2LDEwLjgyNTc3NTUgQzQuOTUwODc3OCwxMC43OTgwODMyIDYuNjEyNDE2MjYsMTAuMjMwMzkwOSA2LjYxMjQxNjI2LDkuNzA0MjM3MDIgQzYuNjEyNDE2MjYsOS4yNzUwMDYyNSA2LjQ4NzgwMDg3LDguOTcwMzkwODYgNi40MzI0MTYyNiw4LjUyNzMxMzk0IEM2LjM2MzE4NTQ5LDguMDcwMzkwODYgNi4zMDc4MDA4Nyw3LjYyNzMxMzk0IDYuMzA3ODAwODcsNy4xOTgwODMxNyBDNi4zMDc4MDA4Nyw1LjY2MTE2MDA5IDcuMzYwMTA4NTcsNC45OTY1NDQ3MSA4LjkxMDg3NzgsNC45OTY1NDQ3MSBMMTAuOTg3ODAwOSw0Ljk5NjU0NDcxIFoiLz4KPC9zdmc+Cg=="></div></div></div><div class="floatBottom-yIa1z" data-auto="sideNavBarBottomContainer">
//             <div class="reportAbuseContainer-3neVk" tabindex="0" data-auto="reportAbuseButtonContainer">
//             <div class="reportAbuse-mE4tV" tabindex="-1" data-auto="reportAbuseButton">
//             <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjM3IDcxNyAxNC4zMDIgMTQuMjMyIj4KCTxwYXRoIGZpbGw9IiNiYmIiIGQ9Ik0zNy4wNjcsNzE4LjAwNmEuNzA4LjcwOCwwLDAsMSwxLjI4Mi0uNmw1Ljk3OCwxMi44MTlhLjcwOC43MDgsMCwwLDEtMS4yODIuNmwtNS45NzgtMTIuODE5bTYuNDEsNi44MjRjLS4yLS4zNDMtMy44MDctNy42ODUtMy44MDctNy43MjMsMS4xMTQtLjEyMSw0LjA3OC0uMTM2LDUuMzQ4LjYyM2EzMi40NzUsMzIuNDc1LDAsMCwxLDUuOTU2LjA1Yy40MTUuMDY1LjQzMi4yODcuMDY5LjVhMzYuNTA3LDM2LjUwNywwLDAsMC03LjU2Niw2LjU1eiIvPgo8L3N2Zz4K"></div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="container-1jIEe react-spectrum-provider spectrum spectrum--lightest spectrum--medium" data-auto="coachMarkContainer"></div>
//             </div>
//             <div data-auto="contentTooltip" class="tooltipText-Nezg9" style="visibility: hidden; top: 0px; left: 0px;"></div>
//             <span class="tip-2hkxQ" style="visibility: hidden; left: 0px; top: 0px;"></span>
//         </div>
//     </div> 
//                         <button aria-label="Don’t enable" class="disable-all-btn" tabindex="0">
//                             Don’t enable
//                         </button>
//                         <button aria-label="Enable all" class="enable-all-btn" id="accept-recommended-btn-handler" tabindex="0">Enable all</button>
//                         <button aria-label="Confirm my choices" class="save-and-close pc-save-and-close save-preference-btn-handler onetrust-close-btn-handler" tabindex="0" style="display: none;">Confirm my choices</button>
// </div>
//                         <div class="ot-general">
//                             <div class="ot-general-width">
//                                 <h3>
//                                     General information
//                                 </h3>
//                                 <ul aria-label="General Information">
//                                     <li id="ot-content-1-list">
//                                         <button aria-controls="ot-content-1" aria-expanded="false" class="ot-general-question" id="ot-question-1" tabindex="0">
//                                             You are in control of your data.
//                                         </button>
//                                         <div aria-hidden="true" class="ot-answer" id="ot-content-1">
//                                             <p>
//                                                 You can control how Adobe websites use cookies and similar technologies by making choices below. But note that if you disable cookies and similar technologies entirely, Adobe websites may not function properly.
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li id="ot-content-2-list">
//                                         <button aria-controls="ot-content-2" aria-expanded="false" class="ot-general-question" id="ot-question-2" tabindex="0">
//                                             What are cookies and why does Adobe use them?
//                                         </button>
//                                         <div aria-hidden="true" class="ot-answer" id="ot-content-2">
//                                             <p>
//                                                 Cookies are small text files stored by your web browser when you use websites. There are also other technologies that can be used for similar purposes like HTML5 Local Storage and local shared objects, web beacons, and embedded scripts. These technologies help us do things like remembering you and your preferences when you return to our sites, measure how you use the website, conduct market research, and gather information about the ads you see and interact with.
//                                             </p>
//                                         </div>
//                                     </li>
//                                     <li id="ot-content-3-list">
//                                         <button aria-controls="ot-content-3" aria-expanded="false" class="ot-general-question" id="ot-question-3" tabindex="0">
//                                             How do I make choices?
//                                         </button>
//                                         <div aria-hidden="true" class="ot-answer" id="ot-content-3">
//                                             <p>
//                                                 You can make choices in the menu below about what cookies and other technologies you want us to use on Adobe sites when you visit them from this browser. You can always change those choices later by clicking on the Cookie Preferences link at the bottom of the page.
//                                             </p>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div style="clear:both">
//                             </div>
//                         </div>
//                         <div class="ot-enable-disabled">
//                             <div class="ot-enable">
//                                 <h3 class="ot-ed-title">
//                                     If enabled:
//                                 </h3>
//                                 <ul>
//                                     <li>
//                                         We can improve your experience by tailoring the site and the content to things we think might be of interest
//                                     </li>
//                                     <li>
//                                         We can better keep track of your preferences — like what language you prefer to use
//                                     </li>
//                                     <li>
//                                         We will better understand your likely interests so we can provide you more relevant Adobe ads and content on non-Adobe websites and in non-Adobe apps
//                                     </li>
//                                     <li>
//                                         It will help us improve the performance of our website and those of our partners who use the Adobe Experience Cloud
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div class="ot-disable">
//                                 <h3 class="ot-ed-title">
//                                     If disabled:
//                                 </h3>
//                                 <ul>
//                                     <li>
//                                         We won’t be able to remember you from session to session so the experience may not be tailored to your interests
//    </li>
//                                     <li>
//                                         You’ll still have access to the content of the site but certain features that depend on cookies may not function
//    </li>
//                                     <li>
                                        
//                                         You’ll still see ads, they just may not be as relevant to you
//                                         </li>
//                                 </ul>
//                             </div>
//                             <div style="clear:both">
//                             </div>
//                         </div>
//                         <style nouce="Cv/S3XyRTpSP6FpPsDB87g==">
//                             .ot-cookie-settings .cs-text::before {
//                                 content: "We’ve saved your settings"
//     }
// .ot-cookie-settings .cs-settings-text::before {
//                                 content: "Manage Cookie Settings"
//     }
// .always-active::after {
//                                 content: "First party cookies always active when the category is enabled"
//     }
// #onetrust-pc-sdk #select-all-container::before {
//                                 /* FOR WEBKIT */
//                                 content: "Host"
//     }
// #onetrust-pc-sdk #select-all-container::after {
//                                 /* FOR WEBKIT */
//                                 content: "Description"
//     }
// #onetrust-pc-sdk.ot-sdk-not-webkit #select-all-container::before {
//                                 content: "Host"
//     }
// #onetrust-pc-sdk.ot-sdk-not-webkit #select-all-container::after {
//                                 content: "Description"
//     }
// #onetrust-pc-sdk .accordion-text .ot-switch::before {
//                                 content: "Enable"
//     }
// #onetrust-pc-sdk .accordion-text .ot-switch.checked::before {
//                                 content: "Enabled"
//     }
// #onetrust-pc-sdk #vendor-list-content [type="checkbox"]:disabled + label::before {
//                                 content: "Always active"
//     }
// #vendors-list.strictly .always-active::after {
//                                 content: "Always active"
//     }
// </style>
//                     </div><div id="accept-recommended-container" class="ot-sdk-row"><div class="ot-sdk-column"><button id="accept-recommended-btn-handler" class="button-theme">Accept recommended settings</button></div></div><section id="cookie-preferences" class="ot-sdk-row category-group"><h3 id="manage-cookies-text"></h3><div class="accordion-text category-item ot-always-active-group" data-optanongroupid="C0001"><!-- Group name --><h4 class="category-header" id="ot-header-id-C0001">Operate the site and core services</h4><div class="ot-always-active">Always active</div><!-- Group toggle --><div class="ot-switch ot-toggle ot-hide-tgl checked"><input type="checkbox" name="ot-group-id-C0001" class="switch-checkbox category-switch-handler" id="ot-group-id-C0001" aria-checked="true" role="switch" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001" aria-hidden="true" data-optanongroupid="C0001" checked=""> <label class="ot-switch-label" for="ot-group-id-C0001"><span class="ot-switch-inner"></span> <span class="ot-switch-nob"></span> <span class="label-text">Operate the site and core services</span></label></div><!-- Group description --><p class="ot-category-desc" id="ot-desc-id-C0001"><div class="ot-cookie-description cookie-description">These cookies are required, and they are used to enable the site and related services core functionality. Without them the site could not operate, so they cannot be disabled.</div></p><!-- sub groups --><!-- view vendors link --><!-- View host link --><div class="category-host-list-container"><a class="category-host-list-btn category-host-list-handler" role="button" href="javascript:void(0)" data-parent-id="C0001">Cookie details‎</a></div></div><div class="accordion-text category-item" data-optanongroupid="C0002"><!-- Group name --><h4 class="category-header" id="ot-header-id-C0002">Measure performance</h4><!-- Group toggle --><div class="ot-switch ot-toggle checked"><input type="checkbox" name="ot-group-id-C0002" class="switch-checkbox category-switch-handler" id="ot-group-id-C0002" aria-checked="true" role="switch" aria-controls="ot-desc-id-C0002" aria-labelledby="ot-header-id-C0002" data-optanongroupid="C0002" checked=""> <label class="ot-switch-label" for="ot-group-id-C0002"><span class="ot-switch-inner"></span> <span class="ot-switch-nob"></span> <span class="label-text">Measure performance</span></label></div><!-- Group description --><p class="ot-category-desc" id="ot-desc-id-C0002"><div class="ot-cookie-description cookie-description">These cookies are used to analyze site usage to measure and improve performance. Without them Adobe cannot know what content is most valued and how often unique visitors return to the site, making it hard to improve information we offer to you.</div></p><!-- sub groups --><!-- view vendors link --><!-- View host link --><div class="category-host-list-container"><a class="category-host-list-btn category-host-list-handler" role="button" href="javascript:void(0)" data-parent-id="C0002">Cookie details‎</a></div></div><div class="accordion-text category-item" data-optanongroupid="C0003"><!-- Group name --><h4 class="category-header" id="ot-header-id-C0003">Extend functionality</h4><!-- Group toggle --><div class="ot-switch ot-toggle checked"><input type="checkbox" name="ot-group-id-C0003" class="switch-checkbox category-switch-handler" id="ot-group-id-C0003" aria-checked="true" role="switch" aria-controls="ot-desc-id-C0003" aria-labelledby="ot-header-id-C0003" data-optanongroupid="C0003" checked=""> <label class="ot-switch-label" for="ot-group-id-C0003"><span class="ot-switch-inner"></span> <span class="ot-switch-nob"></span> <span class="label-text">Extend functionality</span></label></div><!-- Group description --><p class="ot-category-desc" id="ot-desc-id-C0003"><div class="ot-cookie-description cookie-description">These cookies are used to enhance the functionality of Adobe sites such as remembering your settings and preferences to deliver a personalized experience; for example, your username, your repeated visits, preferred language, your country, or any other saved preference.</div></p><!-- sub groups --><!-- view vendors link --><!-- View host link --><div class="category-host-list-container"><a class="category-host-list-btn category-host-list-handler" role="button" href="javascript:void(0)" data-parent-id="C0003">Cookie details‎</a></div></div><div class="accordion-text category-item" data-optanongroupid="C0004"><!-- Group name --><h4 class="category-header" id="ot-header-id-C0004">Personalize advertising</h4><!-- Group toggle --><div class="ot-switch ot-toggle checked"><input type="checkbox" name="ot-group-id-C0004" class="switch-checkbox category-switch-handler" id="ot-group-id-C0004" aria-checked="true" role="switch" aria-controls="ot-desc-id-C0004" aria-labelledby="ot-header-id-C0004" data-optanongroupid="C0004" checked=""> <label class="ot-switch-label" for="ot-group-id-C0004"><span class="ot-switch-inner"></span> <span class="ot-switch-nob"></span> <span class="label-text">Personalize advertising</span></label></div><!-- Group description --><p class="ot-category-desc" id="ot-desc-id-C0004"><div class="ot-cookie-description cookie-description">These cookies are used to enable Adobe to serve ads more relevant to your interests on this and other sites. Without them you will still see ads, but they might not be as relevant to you.
// </div></p><div class="category-host-list-container"><a class="category-host-list-btn category-host-list-handler" role="button" href="javascript:void(0)" data-parent-id="C0004">Cookie details‎</a></div></div><!-- Groups sections starts --><!-- Group section ends --><!-- Accordion Group section starts --><!-- Accordion Group section ends --><!-- Footer section starts --><div class="save-preference-btn-container"> <button class="save-preference-btn-handler onetrust-close-btn-handler button-theme">Confirm my choices</button><div class="ot-pc-footer-logo"><a class="powered-by-logo" href="https://onetrust.com/poweredbyonetrust" target="_blank" rel="noopener" aria-label="Powered by Onetrust" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg&quot;)"></a></div></div><!-- Footer section ends --></section></div><section id="vendors-list" class="ot-hide hosts-list"><div id="vendors-list-header"><a class="back-btn-handler" role="button" href="javascript:void(0)" aria-label="Back"><svg id="ot-back-arrow" xmlns="http://www.w3.org/2000/svg" xmlns: <title>Back Button</title><g><path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
//                       l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
//                       c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
//                       s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
//                       L213.13,222.409z"></path></g></svg><p class="pc-back-button-text">Back</p></a> <button id="vendor-close-pc-btn-handler" class="vendors-list pc-close-button ot-close-icon" aria-label="Close"></button><!-- Close Button --><h3 id="vendors-list-title">Performance Cookies</h3><div id="search-container"><label for="vendor-search-handler" class="screen-reader-only">Vendor Search</label> <input id="vendor-search-handler" type="text" placeholder="Search..." name="vendor-search-handler"> <svg xmlns="http://www.w3.org/2000/svg" xmlns: <title>Search Icon</title><path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
//                   s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
//                   c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
//                   s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg> <a href="javascript:void(0)" id="filter-btn-handler" role="button" aria-label="Filter Icon"><svg role="presentation" aria-hidden="true" id="filter-icon" xmlns="http://www.w3.org/2000/svg" xmlns: <title>Filter Icon</title><g><path id="filter-icon-path" fill="#656565" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
//                 c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
//                 c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
//                 C402.765,25.895,404.093,19.231,400.858,11.427z"></path></g></svg></a><div id="ot-triangle"></div><section id="ot-filter-modal"><div id="ot-options"><div id="clear-filters-container"><a href="javascript:void(0)" id="clear-filters-handler" role="button"><p>Clear Filters</p></a></div><div class="ot-group-options"><div class="ot-group-option"><div class="ot-checkbox"><input id="storage-access-group" class="ot-group-option-box category-filter-handler" type="checkbox"> <label for="storage-access-group"><span>Information storage and access</span></label></div></div></div><button id="filter-apply-handler" class="ot-pill">Apply</button></div></section></div><div id="select-all-container"><div class="ot-checkbox"><div class="leg-int-sel-all-hdr"><span class="consent-hdr">Consent</span> <span class="leg-int-hdr">Leg.Interest</span></div><div id="select-all-text-container"><p>All Consent Allowed</p></div><!-- select all vendor leg.int toggle container --><div id="select-all-vendors-leg-input-container"><input id="select-all-vendor-leg-handler" class="ot-group-option-box" type="checkbox"> <label for="select-all-vendor-leg-handler"><span class="label-text">Select All Vendors</span></label></div><!-- select all vendor consent toggle container --><div id="select-all-vendors-input-container"><input id="select-all-vendor-groups-handler" class="ot-group-option-box" type="checkbox"> <label for="select-all-vendor-groups-handler"><span class="label-text">Select All Vendors</span></label></div><!-- Hosts select all input container --><div id="select-all-hosts-input-container"><input id="select-all-hosts-groups-handler" class="ot-group-option-box" type="checkbox"> <label for="select-all-hosts-groups-handler"><span class="label-text">All Consent Allowed</span></label></div></div></div></div><section id="vendor-list-content" class="host-list-content"><div id="vendors-list-text" class="ot-sdk-row"><div class="ot-sdk-column"><ul id="hosts-list-container"><li class="host-item"><input type="checkbox" class="host-box" role="button" aria-expanded="false" aria-label="33Across"><section class="accordion-header"><div class="host-info"><h3 class="host-title">33Across</h3><h4 class="host-description">host description</h4><!-- view third party cookie link with arrow --><div class="host-notice"><h4 class="host-view-cookies">View Cookies</h4><div class="ot-arrow-container"></div></div></div><!-- Checkbox --><div class="ot-checkbox ot-host-tgl"><input id="REPLACE-WITH-DYANMIC-HOST-ID" class="host-checkbox-handler ot-group-option-box" type="checkbox"> <label for="REPLACE-WITH-DYANMIC-HOST-ID"><span class="label-text">REPLACE-WITH-DYANMIC-HOST-ID</span></label></div><!-- Checkbox END --></section><div class="accordion-text"><div class="host-options"><!-- HOST LIST VIEW UPDATE *** --><ul class="host-option-group"><li class="vendor-host"><div class="cookie-name-container"><div>Name</div><div>cookie name</div></div></li></ul><!-- HOST LIST VIEW UPDATE END *** --></div></div></li></ul><ul id="vendors-list-container"><li class="vendor-item"><input type="checkbox" class="vendor-box" role="button" aria-expanded="false" aria-label="33Across"><section class="accordion-header"><!-- Vendor name policy link --><div class="vendor-info"><h3 class="vendor-title">33Across</h3><a class="vendor-privacy-notice" href="#">View Privacy Notice</a></div><!-- purposes count --><div class="vendor-purposes"><p>3 Purposes</p></div><!-- toggles and arrow --><div class="ot-toggle-group"><!-- Checkbox --><div class="ot-checkbox"><input id="REPLACE-WITH-DYANMIC-VENDOR-ID" class="vendor-checkbox vendor-checkbox-handler ot-group-option-box" type="checkbox"> <label for="REPLACE-WITH-DYANMIC-VENDOR-ID"><span class="label-text">REPLACE-WITH-DYANMIC-VENDOR-ID</span></label></div><!-- Checkbox END --><div class="ot-arrow-container"><svg class="ot-arrow" xmlns="http://www.w3.org/2000/svg" xmlns: <title>Arrow</title><g><path fill="#7b7b7b" d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
//                         L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
//                         c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></g></svg></div></div></section><div class="accordion-text"><div class="vendor-options"><!-- VENDOR PURPOSE UPDATE *** --><div class="vendor-purpose-groups"><!-- vendor purposes --><div class="vendor-option vendor-option-purpose"><p>Consent Purposes</p></div><div class="vendor-consent-group"><p class="consent-category">Location Based Ads</p><p class="consent-status">Consent Allowed</p></div><!-- vendor legitimate interest purposes --><div class="vendor-option vendor-option-purpose legitimate-interest"><p>Legitimate Interest Purposes</p></div><div class="vendor-consent-group legitimate-interest-group"><p class="consent-category">Personalize</p><a href="#" class="vendor-opt-out-handler" aria-label="Require Opt-Out"><div class="op-out-group"><span>Require Opt-Out</span> <svg x="0px" y="0px" width="15" height="15" viewBox="0 0 511.626 511.627" style="enable-background:new 0 0 511.626 511.627;" xml: <g fill="#718593"><g><path d="M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361
//                                   c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414
//                                   c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418
//                                   h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563
//                                   c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542
//                                   c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13
//                                   c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57
//                                   C397.709,293.209,395.519,292.354,392.857,292.354z"></path><path d="M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424
//                                   c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067
//                                   c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852
//                                   s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426
//                                   c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"></path></g></g></svg></div></a></div><!-- Vendor special purposes --><div class="vendor-option-purpose spl-purpose"><p>Special Purposes</p></div><div class="vendor-consent-group spl-purpose-grp"><p class="consent-category">Location Based Ads</p></div><!-- Vendor features --><div class="vendor-option-purpose vendor-feature"><p>Features</p></div><div class="vendor-consent-group vendor-feature-group"><p class="consent-category">Location Based Ads</p></div><!-- Vendor special features --><div class="vendor-option-purpose vendor-spl-feature"><p>Special Features</p></div><div class="vendor-consent-group vendor-spl-feature-grp"><p class="consent-category">Location Based Ads</p></div></div><!-- VENDOR PURPOSE UPDATE END *** --></div></div></li></ul></div></div></section><div id="vendor-list-save-btn" class="save-preference-btn-container"> <button class="save-preference-btn-handler onetrust-close-btn-handler button-theme">Confirm my choices</button><div class="ot-pc-footer-logo"><a class="powered-by-logo" href="https://onetrust.com/poweredbyonetrust" target="_blank" rel="noopener" aria-label="Powered by One Trust"></a></div></div></section></div></div><div id="ot-cookie-button"></div><div id="ot-cookie-settings" class="ot-cookie-settings"><div class="cs-container"><div class="cs-cols"><div class="cs-check"></div><div class="cs-text"></div></div><div class="cs-cols"><a href="javascript:void(0)" class="ot-sdk-show-settings"><div class="cs-settings-text"></div></a><div class="cs-close"><span>x</span> </div></div></div></div><script src="https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-profile/latest/adobe-profile.min.js"></script><div class="CCX-COMMENTS-login-wrapper"></div></body>
             //</div>
        );
    }
}

export default Two;