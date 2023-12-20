// export default function Modal() {
//   return (
//     <>
//       {/* <button
//         type="button"
//         className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//         data-hs-overlay="#hs-basic-modal"
//         onClick={onClick}
//       >
//         Open modal
//       </button> */}

//       <div
//         id="hs-basic-modal"
//         className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
//       >
//         <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
//           <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
//             <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
//               <h3 className="font-bold text-gray-800 dark:text-white">
//                 Modal title
//               </h3>
//               <button
//                 type="button"
//                 className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                 data-hs-overlay="#hs-basic-modal"
//               >
//                 <span className="sr-only">Close</span>
//                 <svg
//                   className="flex-shrink-0 w-4 h-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="M18 6 6 18" />
//                   <path d="m6 6 12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4 overflow-y-auto">
//               <p className="mt-1 text-gray-800 dark:text-gray-400">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content.
//               </p>
//             </div>
//             <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
//               <button
//                 type="button"
//                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                 data-hs-overlay="#hs-basic-modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//               >
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
export default function Modal({ show, onClose, children }: any) {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div>
          {children}

          <div className="text-right mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
