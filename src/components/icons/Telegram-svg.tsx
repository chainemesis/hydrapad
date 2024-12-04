import { SVGProps } from "react";

const TelegramSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10 20C9.82865 20 9.65573 19.9958 9.48543 19.9869C9.31513 19.978 9.14588 19.9654 8.97768 19.9481C8.80947 19.9308 8.64284 19.9099 8.47726 19.8847C8.31167 19.8596 8.14714 19.8323 7.9847 19.7967C7.66244 19.7307 7.34018 19.6479 7.0263 19.5504C6.71243 19.4529 6.40694 19.3408 6.10773 19.214C5.80853 19.0872 5.51719 18.9468 5.2337 18.7948C4.95022 18.6428 4.67512 18.4736 4.40945 18.2939C4.14379 18.1141 3.88545 17.9213 3.6397 17.7175C3.39394 17.5136 3.155 17.2983 2.92968 17.0719C2.70436 16.8455 2.4869 16.6076 2.28411 16.3619C2.08132 16.1161 1.88692 15.8567 1.70771 15.5921C1.52851 15.3275 1.3624 15.0477 1.2052 14.7663C1.048 14.4849 0.909663 14.1899 0.785999 13.8923C0.662335 13.5946 0.546007 13.2839 0.449591 12.9737C0.353175 12.6635 0.269336 12.3376 0.203312 12.0153C0.169776 11.8529 0.140432 11.6868 0.11528 11.5227C0.0901279 11.3587 0.0686439 11.189 0.0523999 11.0223C0.0361559 10.8557 0.022532 10.6833 0.013624 10.5146C0.00471599 10.3458 0 10.1713 0 10C0 9.82865 0.00419199 9.65573 0.0131 9.48543C0.022008 9.31513 0.0345839 9.14536 0.0518759 8.97768C0.0691679 8.81 0.0901279 8.64232 0.11528 8.47726C0.140432 8.3122 0.16768 8.14766 0.203312 7.9847C0.269336 7.66244 0.352127 7.34018 0.449591 7.0263C0.547055 6.71243 0.659191 6.40694 0.785999 6.10773C0.912807 5.80853 1.05324 5.51719 1.2052 5.2337C1.35716 4.95022 1.52641 4.67512 1.70614 4.40945C1.88587 4.14379 2.0787 3.88545 2.28254 3.6397C2.48638 3.39394 2.70174 3.155 2.92811 2.92968C3.15447 2.70436 3.39237 2.4869 3.63813 2.28411C3.88388 2.08132 4.14378 1.88692 4.40788 1.70771C4.67198 1.52851 4.95232 1.35978 5.23318 1.2052C5.51404 1.05062 5.80958 0.909663 6.10721 0.785999C6.40484 0.662335 6.71557 0.546007 7.02578 0.449591C7.33599 0.353175 7.66192 0.269336 7.98418 0.203312C8.14662 0.1703 8.3122 0.140432 8.47673 0.11528C8.64127 0.0901279 8.81052 0.0686439 8.97715 0.0518759C9.14379 0.0351079 9.3167 0.021484 9.48438 0.0131C9.65206 0.00471599 9.82865 0 10 0C10.1713 0 10.3443 0.00419199 10.5146 0.0131C10.6849 0.022008 10.8546 0.0345839 11.0223 0.0518759C11.19 0.0691679 11.3572 0.0901279 11.5227 0.11528C11.6883 0.140432 11.8529 0.16768 12.0153 0.203312C12.3376 0.269336 12.6598 0.352127 12.9737 0.449591C13.2876 0.547055 13.5931 0.659191 13.8923 0.785999C14.1915 0.912807 14.4828 1.05324 14.7663 1.2052C15.0498 1.35716 15.3249 1.52641 15.5905 1.70614C15.8562 1.88587 16.1145 2.0787 16.3603 2.28254C16.6061 2.48638 16.845 2.70174 17.0703 2.92811C17.2956 3.15447 17.5131 3.39237 17.7159 3.63813C17.9187 3.88388 18.1131 4.14378 18.2923 4.40788C18.4715 4.67198 18.6402 4.95074 18.7932 5.23213C18.9462 5.51352 19.0888 5.80853 19.2124 6.10616C19.3361 6.40379 19.4524 6.71453 19.5488 7.02473C19.6453 7.33494 19.7291 7.66087 19.7951 7.98313C19.8281 8.14557 19.858 8.31167 19.8831 8.47569C19.9083 8.6397 19.9298 8.80947 19.9466 8.9761C19.9633 9.14274 19.9764 9.31513 19.9853 9.48386C19.9942 9.65259 19.9984 9.82708 19.9984 9.99843C19.9984 10.1698 19.9942 10.3427 19.9853 10.513C19.9764 10.6833 19.9638 10.8531 19.9466 11.0208C19.9293 11.1884 19.9083 11.3561 19.8831 11.5212C19.858 11.6862 19.8307 11.8508 19.7951 12.0137C19.7291 12.336 19.6463 12.6582 19.5488 12.9721C19.4514 13.286 19.3392 13.5915 19.2124 13.8907C19.0856 14.1899 18.9452 14.4812 18.7932 14.7647C18.6413 15.0482 18.472 15.3233 18.2923 15.589C18.1126 15.8546 17.9197 16.113 17.7159 16.3587C17.5121 16.6045 17.2967 16.8434 17.0703 17.0687C16.844 17.2941 16.6061 17.5115 16.3603 17.7143C16.1145 17.9171 15.8552 18.1115 15.5905 18.2907C15.3259 18.4699 15.0472 18.6386 14.7663 18.7917C14.4854 18.9447 14.1899 19.0872 13.8923 19.2109C13.5946 19.3345 13.2839 19.4508 12.9737 19.5473C12.6635 19.6437 12.3376 19.7275 12.0153 19.7935C11.8529 19.8266 11.6873 19.8564 11.5227 19.8816C11.3582 19.9067 11.189 19.9282 11.0223 19.945C10.8557 19.9617 10.6833 19.9748 10.5146 19.9838C10.3458 19.9927 10.1713 20 10 20ZM12.4628 7.82016C12.5028 7.81994 12.5419 7.83142 12.5755 7.85318C12.6064 7.87326 12.6306 7.90207 12.6451 7.93597C12.658 7.96622 12.6614 7.99962 12.6551 8.03186C12.6476 8.06894 12.6294 8.10301 12.6027 8.12985C12.5168 8.21788 11.8277 8.84196 11.2235 9.38482C10.6377 9.90882 9.86114 10.6047 9.59914 10.8279C9.54377 10.8747 9.49127 10.9247 9.44194 10.9778C9.40171 11.0207 9.36541 11.0672 9.33347 11.1166C9.30717 11.1571 9.28621 11.2008 9.27112 11.2466C9.25828 11.2864 9.25209 11.328 9.25278 11.3697C9.25387 11.4102 9.26166 11.4502 9.27583 11.4882C9.29153 11.529 9.31249 11.5675 9.33819 11.6029C9.40342 11.689 9.48092 11.7651 9.56822 11.8288C9.76577 11.9807 10.3385 12.3983 10.9306 12.8217C11.6333 13.3243 12.1929 13.7125 12.4665 13.8912C12.6691 14.0437 12.9107 14.1362 13.1634 14.1579C13.4532 14.1579 13.6638 13.9572 13.8084 13.5438C13.8393 13.4547 13.8834 13.287 13.9394 13.0455C13.9918 12.8233 14.0526 12.5351 14.1239 12.1903C14.2496 11.5778 14.4026 10.7881 14.5661 9.90725C14.7092 9.13697 14.8543 8.32949 14.9638 7.69178C15.0755 7.0415 15.1399 6.63278 15.1446 6.53899C15.1446 6.52379 15.1446 6.50912 15.1446 6.49445C15.1528 6.39855 15.1528 6.30214 15.1446 6.20625C15.1388 6.11473 15.1031 6.02767 15.043 5.95839C15.0253 5.93981 15.0054 5.92345 14.9838 5.90966C14.9596 5.89438 14.9337 5.8819 14.9067 5.87246C14.8374 5.84973 14.7648 5.83892 14.6919 5.84049C14.5998 5.8417 14.5081 5.85153 14.4178 5.86984C14.2948 5.89455 14.1734 5.92657 14.0542 5.96573C12.86 6.3493 10.3144 7.31765 8.33002 8.09579L7.3297 8.48722C6.5664 8.75786 5.8178 9.06832 5.08698 9.41731C5.01919 9.4561 4.95857 9.50626 4.90778 9.5656C4.87022 9.60824 4.84904 9.66285 4.84804 9.71966C4.85091 9.77248 4.87202 9.82267 4.90778 9.86166C4.95863 9.91762 5.01916 9.96395 5.08646 9.99843C5.34087 10.12 5.60458 10.2211 5.87508 10.3008C6.20834 10.4056 6.53741 10.4962 6.73444 10.545L6.80256 10.5617C6.98997 10.6173 7.18361 10.6492 7.37896 10.6566C7.49381 10.6567 7.60812 10.6406 7.71851 10.6089C7.78196 10.5908 7.84411 10.5684 7.90453 10.5418C7.97329 10.5109 8.04013 10.4759 8.1047 10.437C8.47149 10.2201 10.0351 9.26169 11.1764 8.56162L11.1853 8.55638C11.7816 8.18958 12.2521 7.90191 12.3302 7.85579C12.3708 7.83162 12.4172 7.81911 12.4644 7.81964L12.4628 7.82016Z" fill="#CBD5E1" />
    </svg>

  )
}
export default TelegramSvg;