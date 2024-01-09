import {
  Airplay,
  AlarmClock,
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Book,
  Boxes,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  Circle,
  Copy,
  Cpu,
  CreditCard,
  Crop,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeOff,
  FileTerminal,
  Filter,
  Footprints,
  HardHat,
  HelpCircle,
  Home,
  Image,
  LayoutDashboard,
  Loader2,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  PenLine,
  Pencil,
  PercentCircle,
  Phone,
  Pin,
  Plus,
  PlusCircle,
  RefreshCw,
  Save,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  Star,
  SunMedium,
  ThumbsUpIcon,
  Trash,
  Trash2,
  Truck,
  Twitter,
  UploadCloud,
  User,
  UserRound,
  Users,
  Volume2,
  VolumeX,
  Wallet,
  X,
  XCircle,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  mail: Mail,
  home: Home,
  archive: Archive,
  save: Save,
  creditCard: CreditCard,
  loader: Loader2,
  camera: Camera,
  placeholder: Image,
  lock: Lock,
  moon: Moon,
  star: Star,
  users: Users,
  pin: Pin,
  twitter: Twitter,
  close: X,
  spinner: Loader2,
  messageCircle: MessageCircle,
  airplay: Airplay,
  helpCircle: HelpCircle,
  messageCircleCode: MessageCircle,
  doubleChevronRight: ChevronsRight,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  eye: Eye,
  book: Book,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  menu: Menu,
  verticalThreeDots: MoreVertical,
  horizontalThreeDots: MoreHorizontal,
  verticalSliders: Sliders,
  horizontalSliders: SlidersHorizontal,
  circle: Circle,
  check: Check,
  checkCircle: CheckCircle2,
  xCircle: XCircle,
  layoutDashboard: LayoutDashboard,
  userRound: UserRound,
  add: Plus,
  addCircle: PlusCircle,
  remove: Minus,
  view: Eye,
  hide: EyeOff,
  trash: Trash,
  trash2: Trash2,
  edit: Edit,
  PenLine: PenLine,
  crop: Crop,
  reset: RefreshCw,
  send: Send,
  copy: Copy,
  downlaod: Download,
  warning: AlertTriangle,
  search: Search,
  filter: Filter,
  alarm: AlarmClock,
  calendar: CalendarDays,
  map: MapPin,
  phone: Phone,
  user: User,
  terminal: FileTerminal,
  settings: Settings,
  logout: LogOut,
  volumne: Volume2,
  volumneMute: VolumeX,
  message: MessageSquare,
  billing: CreditCard,
  wallet: Wallet,
  dollarSign: DollarSign,
  cart: ShoppingCart,
  product: Package,
  store: ShoppingBag,
  chart: BarChart3,
  upload: UploadCloud,
  clothing: Shirt,
  shieldCheck: ShieldCheck,
  shoes: Footprints,
  accessories: HardHat,
  pencil: Pencil,
  image: Image,
  cpu: Cpu,
  truck: Truck,
  moreHorizontal: MoreHorizontal,
  mapPin: MapPin,
  alertCircle: AlertCircle,
  thumbsUpIcon: ThumbsUpIcon,
  boxes: Boxes,
  percentCircle: PercentCircle,
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="7" cy="15" r="2" />
      <circle cx="17" cy="15" r="2" />
      <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
    </svg>
  ),
  nextjs: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="discord"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  boleto: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="600"
      version="1.1"
      {...props}
    >
      <rect
        width="3410.932"
        height="2170.593"
        x="342.534"
        y="962.703"
        fill="#f9f9f9"
        strokeWidth="62.017"
        rx="124.034"
      ></rect>
      <path
        fill="#010101"
        strokeWidth="62.017"
        d="M764.745 1333.937h29.21v775.584h-29.21zm58.42 0h29.21v775.584h-29.21zm175.384 0h29.21v775.584h-29.21zm568.572 0h29.21v775.584h-29.21zm190.081 0h29.21v775.584h-29.21zm184.315 0h29.21v775.584h-29.21zm47.505 0h29.21v775.584h-29.21zm47.567 0h29.21v775.584h-29.21zm53.458 0h29.21v775.584h-29.21zm53.46 0h29.21v775.584h-29.21zm148.592 0h29.21v775.584h-29.21zm368.442 0h29.21v775.584h-29.21zm384.32 0h29.21v775.584h-29.21zm105.118 0h29.21v775.584h-29.21zm75.97 0h29.21v775.584h-29.21zm46.762 0h29.21v775.584h-29.21zm-2081.29 0h29.21v775.584h-29.21zm-292.285 0h52.59v775.584h-52.59zm347.109 0h52.59v775.584h-52.59zm243.726 0h52.59v775.584h-52.59zm124.779 0h52.59v775.584h-52.59zm196.097 0h52.59v775.584h-52.59zm559.083 0h81.8v775.584h-81.8zm106.855 0h64.312v775.584h-64.312zm112.747 0h52.59v775.584h-52.59zm149.089 0h87.692v775.584h-87.692zm171.725 0h87.692v775.584h-87.692zm-1853.377 0h105.18v775.584h-105.18zm272.627 0h81.8v775.584h-81.8z"
      ></path>
      <path
        strokeWidth="62.017"
        d="M802.576 2798.157V2354.24h166.577a206.144 206.144 0 0181.614 13.457 104.933 104.933 0 0148.126 41.49 109.336 109.336 0 0117.426 58.606 100.654 100.654 0 01-15.442 53.582 110.266 110.266 0 01-46.637 40.56 115.972 115.972 0 0162.017 40.248 107.847 107.847 0 0121.644 67.227 129.677 129.677 0 01-13.147 57.986 112.25 112.25 0 01-32.683 41.365 135.88 135.88 0 01-48.621 21.954 295.573 295.573 0 01-71.568 7.442zm58.792-257.37h96.002a214.207 214.207 0 0055.815-5.148 62.017 62.017 0 0033.737-22.078 63.691 63.691 0 0011.35-38.76 71.382 71.382 0 00-10.605-38.885 53.645 53.645 0 00-30.017-23.07 252.905 252.905 0 00-67.536-6.202h-88.746zm0 205.028h110.514a254.27 254.27 0 0040-2.109 95.754 95.754 0 0033.924-12.403 64.312 64.312 0 0022.388-24.807 77.273 77.273 0 008.807-37.21 73.738 73.738 0 00-12.714-43.412 67.102 67.102 0 00-35.288-25.737 218.734 218.734 0 00-64.931-7.442h-102.7zm362.365-163.85a241.246 241.246 0 0159.35-173.088 201.803 201.803 0 01153.244-62.514 212.594 212.594 0 01110.824 29.397 191.818 191.818 0 0175.227 81.924 266.053 266.053 0 0125.86 119.134 261.587 261.587 0 01-27.225 120.81 186.05 186.05 0 01-77.21 80.622 220.594 220.594 0 01-107.786 27.411 209.927 209.927 0 01-112.003-30.202 194.857 194.857 0 01-74.854-82.73 250.548 250.548 0 01-25.427-110.763zm60.59.931a177.865 177.865 0 0043.412 126.453 141.957 141.957 0 00108.282 46.202 141.709 141.709 0 00108.778-46.698 188.532 188.532 0 0042.853-132.345 227.416 227.416 0 00-18.047-94.637 140.778 140.778 0 00-53.582-62.7 145.306 145.306 0 00-79.196-22.264 150.205 150.205 0 00-107.351 42.854 191.384 191.384 0 00-45.149 143.073zm460.228 215.261V2354.24h58.73v391.513h218.61v52.404zm371.482 0V2354.24h321v52.404h-262.27v135.941h245.587v52.094h-245.587v151.074h272.564v52.404zm548.354 0v-391.513h-146.299v-52.404h351.885v52.404h-146.856v391.513zm259.726-216.191a241.246 241.246 0 0159.475-173.09 201.803 201.803 0 01153.244-62.513 212.594 212.594 0 01110.824 29.397 191.818 191.818 0 0175.226 81.924 266.053 266.053 0 0125.861 119.134 261.587 261.587 0 01-27.225 120.81 186.05 186.05 0 01-77.46 80.684 220.594 220.594 0 01-107.785 27.411 209.927 209.927 0 01-112.064-30.264 194.857 194.857 0 01-74.669-82.73 250.548 250.548 0 01-25.427-110.763zm60.591.93a177.865 177.865 0 0043.412 126.453 141.957 141.957 0 00108.282 46.202 141.709 141.709 0 00109.15-46.636 188.532 188.532 0 0042.853-132.345 227.416 227.416 0 00-18.605-94.637 140.778 140.778 0 00-53.583-62.7 145.306 145.306 0 00-79.195-22.264 150.205 150.205 0 00-107.352 42.854 191.384 191.384 0 00-45.024 143.011z"
      ></path>
    </svg>
  ),
}