import { SVGProps } from "react";

const SettingSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.592 4.53L10.458 4.152L10.992 3.084C11.0461 2.97221 11.0642 2.84638 11.0438 2.72386C11.0234 2.60135 10.9655 2.48819 10.878 2.4L9.6 1.122C9.51134 1.03325 9.39709 0.974526 9.27333 0.954077C9.14956 0.933628 9.02249 0.952487 8.91 1.008L7.842 1.542L7.464 0.408002C7.42408 0.289797 7.3483 0.186977 7.24722 0.113851C7.14613 0.0407242 7.02476 0.000928604 6.9 2.00012e-06H5.1C4.97421 -0.000322697 4.85151 0.0388934 4.74922 0.112107C4.64694 0.185321 4.57025 0.288829 4.53 0.408002L4.152 1.542L3.084 1.008C2.97221 0.95387 2.84638 0.935764 2.72386 0.956183C2.60135 0.976602 2.48819 1.03454 2.4 1.122L1.122 2.4C1.03325 2.48866 0.974526 2.60291 0.954077 2.72667C0.933628 2.85044 0.952487 2.97751 1.008 3.09L1.542 4.158L0.408002 4.536C0.289797 4.57592 0.186977 4.6517 0.113851 4.75278C0.0407242 4.85387 0.000928604 4.97524 2.00012e-06 5.1V6.9C-0.000322697 7.02579 0.0388934 7.14849 0.112107 7.25078C0.185321 7.35306 0.288829 7.42975 0.408002 7.47L1.542 7.848L1.008 8.916C0.95387 9.02779 0.935764 9.15362 0.956183 9.27614C0.976602 9.39865 1.03454 9.51181 1.122 9.6L2.4 10.878C2.48866 10.9667 2.60291 11.0255 2.72667 11.0459C2.85044 11.0664 2.97751 11.0475 3.09 10.992L4.158 10.458L4.536 11.592C4.57625 11.7112 4.65294 11.8147 4.75522 11.8879C4.85751 11.9611 4.98021 12.0003 5.106 12H6.906C7.03179 12.0003 7.15449 11.9611 7.25678 11.8879C7.35906 11.8147 7.43575 11.7112 7.476 11.592L7.854 10.458L8.922 10.992C9.03307 11.0448 9.15768 11.0621 9.27895 11.0417C9.40022 11.0213 9.51229 10.9642 9.6 10.878L10.878 9.6C10.9667 9.51134 11.0255 9.39709 11.0459 9.27333C11.0664 9.14956 11.0475 9.02249 10.992 8.91L10.458 7.842L11.592 7.464C11.7102 7.42408 11.813 7.3483 11.8862 7.24722C11.9593 7.14613 11.9991 7.02476 12 6.9V5.1C12.0003 4.97421 11.9611 4.85151 11.8879 4.74922C11.8147 4.64694 11.7112 4.57025 11.592 4.53ZM10.8 6.468L10.08 6.708C9.91443 6.7617 9.76253 6.85078 9.63483 6.96906C9.50713 7.08734 9.40669 7.23198 9.34048 7.39295C9.27426 7.55392 9.24386 7.72737 9.25137 7.90127C9.25889 8.07516 9.30414 8.24534 9.384 8.4L9.726 9.084L9.066 9.744L8.4 9.384C8.24613 9.30734 8.07759 9.26464 7.90579 9.25878C7.73398 9.25292 7.56292 9.28404 7.40419 9.35004C7.24546 9.41603 7.10276 9.51536 6.98575 9.6413C6.86874 9.76724 6.78016 9.91685 6.726 10.08L6.486 10.8H5.532L5.292 10.08C5.2383 9.91443 5.14922 9.76253 5.03094 9.63483C4.91266 9.50713 4.76802 9.40669 4.60705 9.34048C4.44608 9.27426 4.27263 9.24386 4.09874 9.25137C3.92484 9.25889 3.75466 9.30414 3.6 9.384L2.916 9.726L2.256 9.066L2.616 8.4C2.69586 8.24534 2.74111 8.07516 2.74863 7.90127C2.75614 7.72737 2.72574 7.55392 2.65952 7.39295C2.59331 7.23198 2.49287 7.08734 2.36517 6.96906C2.23747 6.85078 2.08557 6.7617 1.92 6.708L1.2 6.468V5.532L1.92 5.292C2.08557 5.2383 2.23747 5.14922 2.36517 5.03094C2.49287 4.91266 2.59331 4.76802 2.65952 4.60705C2.72574 4.44608 2.75614 4.27263 2.74863 4.09874C2.74111 3.92484 2.69586 3.75466 2.616 3.6L2.274 2.934L2.934 2.274L3.6 2.616C3.75466 2.69586 3.92484 2.74111 4.09874 2.74863C4.27263 2.75614 4.44608 2.72574 4.60705 2.65952C4.76802 2.59331 4.91266 2.49287 5.03094 2.36517C5.14922 2.23747 5.2383 2.08557 5.292 1.92L5.532 1.2H6.468L6.708 1.92C6.7617 2.08557 6.85078 2.23747 6.96906 2.36517C7.08734 2.49287 7.23198 2.59331 7.39295 2.65952C7.55392 2.72574 7.72737 2.75614 7.90127 2.74863C8.07516 2.74111 8.24534 2.69586 8.4 2.616L9.084 2.274L9.744 2.934L9.384 3.6C9.30734 3.75387 9.26464 3.92241 9.25878 4.09421C9.25292 4.26602 9.28404 4.43708 9.35004 4.59581C9.41603 4.75454 9.51536 4.89724 9.6413 5.01425C9.76724 5.13126 9.91685 5.21984 10.08 5.274L10.8 5.514V6.468ZM6 3.6C5.52533 3.6 5.06131 3.74076 4.66663 4.00447C4.27195 4.26819 3.96434 4.64302 3.78269 5.08156C3.60104 5.5201 3.55351 6.00266 3.64612 6.46822C3.73872 6.93377 3.9673 7.36141 4.30294 7.69706C4.63859 8.0327 5.06623 8.26128 5.53178 8.35388C5.99734 8.44649 6.4799 8.39896 6.91844 8.21731C7.35698 8.03566 7.73181 7.72805 7.99553 7.33337C8.25924 6.93869 8.4 6.47468 8.4 6C8.4 5.36348 8.14714 4.75303 7.69706 4.30294C7.24697 3.85286 6.63652 3.6 6 3.6ZM6 7.2C5.76266 7.2 5.53065 7.12962 5.33332 6.99776C5.13598 6.86591 4.98217 6.67849 4.89135 6.45922C4.80052 6.23995 4.77676 5.99867 4.82306 5.76589C4.86936 5.53311 4.98365 5.3193 5.15147 5.15147C5.3193 4.98365 5.53311 4.86936 5.76589 4.82306C5.99867 4.77676 6.23995 4.80052 6.45922 4.89135C6.67849 4.98217 6.86591 5.13598 6.99776 5.33332C7.12962 5.53065 7.2 5.76266 7.2 6C7.2 6.31826 7.07357 6.62348 6.84853 6.84853C6.62348 7.07357 6.31826 7.2 6 7.2Z" fill="#F6851B" />
    </svg>



  )
}
export default SettingSvg;