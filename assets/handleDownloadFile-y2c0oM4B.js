import{c as e}from"./createReactComponent-DEHqXYcm.js";import{b as h}from"./index-ussJ-EPf.js";/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var s=e("outline","download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var p=e("outline","file-import","IconFileImport",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var v=e("outline","graph","IconGraph",[["path",{d:"M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M7 14l3 -3l2 2l3 -3l2 2",key:"svg-1"}]]);const i=(n,l,r)=>{h.get(n,{method:"GET",responseType:"blob"}).then(o=>{const t=window.URL.createObjectURL(new Blob([o.data])),a=document.createElement("a");a.href=t,a.download=l,a.click(),window.URL.revokeObjectURL(t)}).catch(o=>{r({type:"error",message:"Gagal Mengunduh Laporan Kehadiran"})})};export{v as I,s as a,p as b,i as h};
