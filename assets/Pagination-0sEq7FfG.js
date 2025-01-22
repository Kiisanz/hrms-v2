import{j as t}from"./index-KY55tJ73.js";import{c as a}from"./createReactComponent-DbmPpp2E.js";import{I as d}from"./IconChevronRight-Bwob7db4.js";/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=a("outline","chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]);const p=({currentPage:e,totalPages:s,onPageChange:o})=>{const n=()=>{e>1&&o(e-1)},i=()=>{e<s&&o(e+1)};return t.jsxs("div",{className:"flex justify-center items-center gap-4 bg-white rounded-b-lg py-1 ",children:[t.jsx("button",{onClick:n,disabled:e===1,className:"text-slate-800 disabled:text-gray-400 px-3 py-1 hover:bg-gray-100 disabled:hover:bg-transparent rounded-md transition",children:t.jsx(r,{})}),t.jsxs("span",{className:"text-sm font-medium text-gray-700 px-4 py-1",children:["Page ",e," of ",s]}),t.jsx("button",{onClick:i,disabled:e===s,className:"text-slate-800 disabled:text-gray-400 px-3 py-1 hover:bg-gray-100 disabled:hover:bg-transparent rounded-md transition",children:t.jsx(d,{})})]})};export{p as P};
