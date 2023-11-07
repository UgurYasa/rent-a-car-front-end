import * as React from "react";
import { memo } from "react";

const SvgComponent = (props: any) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.3595 5.06081C4.3615 5.06081 4.3115 5.11281 4.2485 5.17481C4.0065 5.40981 3.5055 5.89881 3.50045 6.92181C3.4925 8.35281 4.4335 11.0098 8.9645 15.5398C13.4745 20.0478 16.1275 20.9998 17.5615 20.9998H17.5825C18.6055 20.9948 19.0935 20.4928 19.3295 20.2518C19.4015 20.1778 19.4595 20.1238 19.5005 20.0898C20.4965 19.0878 21.0065 18.3418 21.0015 17.8638C20.9945 17.3758 20.3875 16.7988 19.5485 16.0008C19.2815 15.7468 18.9915 15.4708 18.6855 15.1648C17.8925 14.3738 17.4995 14.5088 16.6355 14.8128C15.4405 15.2318 13.8005 15.8018 11.2525 13.2528C8.7005 10.7028 9.2715 9.06481 9.6895 7.86981C9.9915 7.00581 10.1295 6.61181 9.3355 5.81781C9.0245 5.50781 8.7455 5.21381 8.4885 4.94381C7.6955 4.10981 7.1235 3.50681 6.6385 3.49981H6.6305C6.1515 3.49981 5.4075 4.01181 4.3545 5.06481C4.3575 5.06181 4.3585 5.06081 4.3595 5.06081ZM17.5625 22.4998C15.0705 22.4998 11.8215 20.5158 7.9045 16.6008C3.9725 12.6698 1.9855 9.41081 2.00042 6.91381C2.0095 5.26381 2.8745 4.41881 3.1995 4.10181C3.2165 4.08081 3.2745 4.02381 3.2945 4.00381C4.7285 2.56881 5.6955 1.98881 6.6575 1.99966C7.7745 2.01481 8.5695 2.85081 9.5755 3.90981C9.8245 4.17181 10.0945 4.45681 10.3955 4.75681C11.8555 6.21681 11.4395 7.40781 11.1055 8.36381C10.7415 9.40681 10.4265 10.3068 12.3125 12.1928C14.2005 14.0788 15.1005 13.7638 16.1395 13.3968C17.0965 13.0628 18.2845 12.6448 19.7465 14.1048C20.0425 14.4008 20.3235 14.6678 20.5825 14.9148C21.6465 15.9258 22.4865 16.7248 22.5007 17.8448C22.5125 18.7998 21.9325 19.7728 20.5005 21.2058L19.8665 20.7758L20.4025 21.2998C20.0855 21.6248 19.2415 22.4908 17.5905 22.4998H17.5625Z"
      fill="#D5D9DB"
    />
  </svg>
);

const Memo = memo(SvgComponent);

export { Memo as PhoneIcon };