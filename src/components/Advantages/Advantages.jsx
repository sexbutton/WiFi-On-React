import Advantage from "./Advantage/Advantage";
import styles from "./Advantages.module.css";
import iconStar from "./imgs/iconStar.svg";
import iconFree from "./imgs/iconFree.svg";
import iconGeo from "./imgs/iconGeo.svg";
import iconHelp from "./imgs/iconHelp.svg";
import iconManagers from "./imgs/iconManagers.svg";
import iconReviews from "./imgs/iconReviews.svg";
import iconRocket from "./imgs/iconRocket.svg";
import iconSetting from "./imgs/iconSetting.svg";

const Advantages = (props) => {
  return (
    <div className={styles.main}>
      <h2>Воспользуйтесь преимуществами нашего сервиса</h2>
      <div className={styles.AdvantagesContainer}>
        <Advantage title="Актуальность" text="Актуальность тарифов и акций">
          <svg
            width="155"
            height="157"
            viewBox="0 0 155 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M78.7221 14.8348C97.4813 3.62814 106.857 -1.97731 113.746 2C120.635 5.9773 120.469 16.8998 120.143 38.7491L120.059 44.4041C119.965 50.6155 119.918 53.7212 121.06 56.4467C122.202 59.1721 124.416 61.2168 128.845 65.3061L132.867 69.0248C148.422 83.4085 156.195 90.5926 154.374 98.6686C152.55 106.733 142.334 110.35 121.899 117.572L116.612 119.438C110.81 121.491 107.9 122.516 105.677 124.57C103.449 126.63 102.149 129.487 99.5518 135.195L97.1885 140.397C88.0375 160.497 83.4677 170.546 75.4553 171.555C67.4387 172.572 61.2887 163.871 48.995 146.491L45.803 141.991C42.3139 137.047 40.5651 134.583 38.0409 133.125C35.5167 131.668 32.5079 131.386 26.482 130.836L20.9957 130.326C-0.20939 128.365 -10.8156 127.382 -13.9445 119.95C-17.0796 112.495 -10.6621 103.513 2.16976 85.5377L5.48908 80.8973C9.13765 75.7873 10.9619 73.2324 11.6211 70.2763C12.299 67.3214 11.7322 64.288 10.6048 58.2441L9.58129 52.7258C5.61408 31.4243 3.63831 20.7684 9.71466 15.1493C15.7983 9.53447 25.9176 12.6707 46.148 18.9578L51.3793 20.5814C57.1278 22.3677 59.9983 23.2588 62.9371 22.8895C65.8685 22.5159 68.5345 20.9222 73.8665 17.7348L78.7221 14.8348Z" />
            <defs>
              <linearGradient
                id="gradient"
                x1="-79.372"
                y1="83.5079"
                x2="141.866"
                y2="178.52"
              >
                <stop stopColor="#284FDC" />
                <stop offset="1" stopColor="#578FEC" />
              </linearGradient>
            </defs>
          </svg>
        </Advantage>
        <Advantage
          title="Быстрое подключение"
          text="Быстрое подключение к домашнему интернету"
        >
          <svg
            width="159"
            height="156"
            viewBox="0 0 159 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M158.079 2.37461C158.008 2.02882 157.84 1.71054 157.594 1.45709C157.349 1.20364 157.036 1.02552 156.693 0.943609C133.813 -4.65529 80.9493 15.2967 52.3083 43.9519C47.1999 49.0236 42.5429 54.5312 38.3901 60.4124C29.5579 59.6304 20.7258 60.2833 13.1983 63.5676C-8.04028 72.9239 -14.224 97.337 -15.9466 107.839C-16.0444 108.414 -16.0075 109.003 -15.839 109.561C-15.6704 110.12 -15.3748 110.631 -14.9754 111.055C-14.576 111.48 -14.0836 111.806 -13.537 112.007C-12.9905 112.209 -12.4046 112.281 -11.8255 112.218L22.2805 108.453C22.3048 111.026 22.46 113.597 22.7453 116.155C22.917 117.931 23.7048 119.591 24.9719 120.847L38.1792 134.035C39.4346 135.301 41.0926 136.09 42.8667 136.263C45.408 136.548 47.9621 136.703 50.5192 136.729L46.777 170.823C46.7145 171.402 46.7871 171.988 46.9889 172.535C47.1907 173.081 47.5163 173.574 47.9401 173.973C48.364 174.373 48.8745 174.669 49.4318 174.838C49.9891 175.007 50.5779 175.044 51.152 174.947C61.6248 173.266 86.0588 167.077 95.3519 145.819C98.6332 138.285 99.3051 129.488 98.5472 120.69C104.437 116.534 109.954 111.871 115.036 106.756C143.767 78.1435 163.587 26.4123 158.079 2.37461ZM86.3713 72.6228C83.7478 69.9986 81.9608 66.6547 81.2363 63.0138C80.5118 59.373 80.8824 55.5989 82.3012 52.1689C83.72 48.7389 86.1233 45.8072 89.207 43.7445C92.2907 41.6817 95.9164 40.5807 99.6254 40.5807C103.334 40.5807 106.96 41.6817 110.044 43.7445C113.128 45.8072 115.531 48.7389 116.95 52.1689C118.368 55.5989 118.739 59.373 118.014 63.0138C117.29 66.6547 115.503 69.9986 112.88 72.6228C111.14 74.3665 109.074 75.7499 106.8 76.6937C104.525 77.6376 102.087 78.1234 99.6254 78.1234C97.1634 78.1234 94.7255 77.6376 92.4513 76.6937C90.177 75.7499 88.111 74.3665 86.3713 72.6228Z"
              fill="url(#paint0_linear_336_1600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_336_1600"
                x1="-60.2617"
                y1="174.111"
                x2="188.805"
                y2="144.594"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </Advantage>

        <Advantage
          title="Менеджеры"
          text="Квалифицированные менеджеры помогут в подключении"
        >
          <svg
            width="163"
            height="157"
            viewBox="0 0 163 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.5625 2.49515C62.7685 -0.705598 53.0571 -0.265142 44.5648 3.71962C36.0724 7.70439 29.4946 14.907 26.2786 23.7431C23.0625 32.5792 23.4716 42.3248 27.4158 50.8361C31.3599 59.3474 38.5162 65.9271 47.3101 69.1279C56.1041 72.3286 65.8155 71.8882 74.3079 67.9034C82.8002 63.9187 89.378 56.716 92.594 47.8799C95.8101 39.0439 95.401 29.2983 91.4569 20.787C87.5127 12.2756 80.3565 5.69589 71.5625 2.49515ZM-17.4457 80.3863C-15.4666 74.9488 -11.4188 70.5164 -6.1927 68.0642C-0.966623 65.612 5.00961 65.341 10.4213 67.3107L76.7367 91.4475C80.2908 92.7378 83.4447 94.9382 85.8864 97.8309C77.596 100.8 70.0566 105.569 63.8083 111.799C57.56 118.029 52.7573 125.564 49.7443 133.865C48.2711 137.933 47.2486 142.023 46.6768 146.133C39.2968 145.967 30.8437 144.399 21.1922 140.886C-4.44634 131.555 -14.8277 117.096 -18.1962 104.098C-19.9554 97.2143 -19.9875 89.9955 -18.2897 83.0859C-18.1307 82.4681 -17.9538 81.855 -17.7591 81.2474L-17.4457 80.3863ZM161.212 81.5619C158.738 88.3588 153.679 93.8993 147.146 96.9645C140.613 100.03 133.143 100.369 126.379 97.9064C119.614 95.4443 114.109 90.383 111.075 83.8358C108.041 77.2887 107.727 69.792 110.2 62.9951C112.674 56.1981 117.734 50.6576 124.267 47.5924C130.799 44.5272 138.27 44.1884 145.034 46.6505C151.799 49.1126 157.304 54.174 160.338 60.7211C163.372 67.2683 163.686 74.7649 161.212 81.5619ZM151.768 170.998C147.315 183.233 138.207 193.206 126.449 198.723C114.69 204.24 101.244 204.85 89.0673 200.418C76.891 195.987 66.9824 186.876 61.5212 175.091C56.06 163.306 55.4936 149.812 59.9467 137.578C64.3997 125.343 73.5073 115.37 85.266 109.853C97.0246 104.336 110.471 103.726 122.647 108.158C134.824 112.589 144.732 121.7 150.193 133.485C155.655 145.27 156.221 158.764 151.768 170.998ZM135.487 152.209L119.725 146.472L120.56 129.003C120.654 127.829 120.361 126.658 119.728 125.668C119.095 124.679 118.156 123.927 117.054 123.526C115.952 123.125 114.749 123.097 113.628 123.448C112.507 123.799 111.53 124.508 110.847 125.468L100.269 139.391L84.4855 133.646C79.5475 131.849 75.0726 137.731 77.9638 142.232L87.1834 156.581L76.6008 170.515C73.2795 174.878 77.1739 180.94 82.2814 179.351L98.5677 174.284L107.787 188.634C110.678 193.134 117.558 190.994 117.818 185.517L118.668 168.041L134.954 162.975C140.062 161.386 140.415 154.003 135.477 152.206"
              fill="url(#paint0_linear_336_1611)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_336_1611"
                x1="-88.4085"
                y1="134.85"
                x2="176.849"
                y2="195.454"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </Advantage>
        <Advantage
          title="Удобный поиск"
          text="Поиск лучшего провайдера по адресу"
        >
          <svg
            width="175"
            height="175"
            viewBox="0 0 175 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_399_1607)">
              <path
                d="M110.155 28.1099C83.1381 9.91185 46.0713 17.1631 27.8527 44.2104C20.7934 54.6906 17.5685 66.6734 17.8191 78.4823L12.0378 160.826C12.5961 170.33 16.5795 171.281 24.2082 168.544L55.1004 153.678C51.2326 146.89 48.995 139.289 48.5638 131.474C47.9517 120.821 50.723 110.235 56.4808 101.232C44.3966 90.9344 41.7685 73.2566 50.8839 59.7238C60.6946 45.159 80.0754 41.3693 94.623 51.1683C104.083 57.5402 108.947 67.964 108.52 78.4783C118.291 80.2732 127.307 84.9089 134.447 91.8081C140.337 68.2585 131.344 42.3823 110.155 28.1099Z"
                fill="url(#paint0_linear_399_1607)"
              />
              <path
                d="M128.089 96.4751C119.885 89.1749 108.908 84.9863 97.1249 85.6595C73.5602 87.0031 55.4864 107.292 56.8792 130.842C58.1836 152.884 76.1079 170.061 97.721 171.069L98.0639 176.878C97.3334 177.348 96.7577 177.913 96.3766 178.534C95.9955 179.155 95.8181 179.818 95.8568 180.476L98.3509 222.639C98.4224 223.844 99.2122 224.958 100.547 225.737C101.881 226.516 103.651 226.895 105.467 226.792C106.367 226.741 107.251 226.572 108.068 226.297C108.886 226.021 109.621 225.643 110.232 225.185C110.843 224.726 111.318 224.197 111.63 223.625C111.942 223.054 112.084 222.453 112.049 221.856L109.555 179.694C109.515 179.036 109.261 178.398 108.809 177.824C108.357 177.251 107.719 176.755 106.938 176.372L106.594 170.56C127.946 167.102 143.726 148.004 142.423 125.962C141.727 114.186 136.294 103.775 128.089 96.4751ZM121.804 103.531C125.079 106.442 127.747 109.971 129.655 113.914C131.562 117.856 132.671 122.135 132.918 126.505C133.186 130.872 132.588 135.248 131.158 139.381C129.728 143.514 127.495 147.323 124.586 150.588C121.678 153.853 118.151 156.511 114.21 158.409C110.268 160.306 105.988 161.407 101.616 161.646C97.2452 161.905 92.8647 161.299 88.7259 159.862C84.5871 158.425 80.7715 156.186 77.498 153.273C74.2246 150.361 71.5578 146.832 69.6508 142.89C67.7437 138.947 66.634 134.669 66.3853 130.3C66.1176 125.933 66.7158 121.557 68.1455 117.424C69.5752 113.292 71.8082 109.483 74.7165 106.218C77.6247 102.953 81.1509 100.295 85.0925 98.3975C89.0342 96.4997 93.3137 95.3991 97.6854 95.1591C102.056 94.8981 106.437 95.5034 110.577 96.9402C114.716 98.377 118.532 100.617 121.804 103.531Z"
                fill="url(#paint1_linear_399_1607)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_399_1607"
                x1="-57.6149"
                y1="119.031"
                x2="86.5474"
                y2="200.196"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#284FDC" />
                <stop offset="1" stopColor="#578FEC" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_399_1607"
                x1="-2.60297"
                y1="155.52"
                x2="131.608"
                y2="227.278"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#284FDC" />
                <stop offset="1" stopColor="#578FEC" />
              </linearGradient>
              <clipPath id="clip0_399_1607">
                <path
                  d="M0 0H175V175H40C17.9086 175 0 157.091 0 135V0Z"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </Advantage>
        <Advantage title="Бесплатно" text="Наш сервис абсолютно бесплатный!">
          <svg
            width="158"
            height="156"
            viewBox="0 0 158 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119.803 14.4847C120.08 14.3311 120.386 14.2354 120.701 14.2035C121.017 14.1717 121.335 14.2043 121.638 14.2994C121.94 14.3944 122.22 14.55 122.46 14.7567C122.701 14.9633 122.897 15.2166 123.036 15.5013L128.093 25.817L90.0599 46.7398L106.645 53.6166L134.263 38.4266L143.316 56.9278C143.583 57.4756 143.626 58.1061 143.435 58.685C143.244 59.2639 142.835 59.7453 142.294 60.0266L133.372 64.6982L150.165 71.6609C153.508 69.4786 155.937 66.1498 156.996 62.301C158.055 58.4523 157.67 54.3491 155.914 50.764L135.638 9.32889C134.659 7.33185 133.283 5.55527 131.594 4.10765C129.906 2.66003 127.94 1.57175 125.817 0.909279C123.694 0.246811 121.458 0.0240529 119.245 0.254613C117.033 0.485176 114.891 1.16422 112.951 2.25027L57.5542 33.262L74.0532 40.103L119.803 14.4847ZM27.1586 15.5982C25.4403 14.8858 23.5095 14.885 21.7908 15.5961C20.0721 16.3072 18.7064 17.6718 17.994 19.3899C17.2817 21.1079 17.2811 23.0386 17.9924 24.7572C18.7037 26.4758 20.0686 27.8415 21.7868 28.554L134.084 75.1154C141.53 78.2026 147.445 84.1209 150.527 91.5681C153.609 99.0154 153.607 107.382 150.52 114.827L127.242 170.968C124.155 178.413 118.237 184.326 110.789 187.408C103.342 190.489 94.9745 190.486 87.5287 187.398L-16.1304 144.418C-23.5762 141.331 -29.4907 135.413 -32.573 127.966C-35.6552 120.518 -35.6527 112.152 -32.5659 104.707L5.03662 14.0174C7.17365 8.86327 11.2709 4.76931 16.427 2.63611C21.583 0.502914 27.3756 0.505219 32.5304 2.64252L69.8477 18.1153L54.1791 26.8016L27.1586 15.5982ZM86.156 123.567C84.6734 127.142 86.3725 131.248 89.9488 132.731L107.225 139.894C108.944 140.606 110.874 140.607 112.593 139.896C114.312 139.185 115.678 137.82 116.39 136.102C117.102 134.384 117.103 132.454 116.392 130.735C115.68 129.016 114.315 127.651 112.597 126.938L95.3206 119.775C93.6023 119.063 91.6714 119.062 89.9527 119.773C88.2341 120.484 86.8683 121.849 86.156 123.567Z"
              fill="url(#paint0_linear_336_1595)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_336_1595"
                x1="-84.2603"
                y1="115.142"
                x2="153.999"
                y2="184.649"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#284FDC" />
                <stop offset="1" stopColor="#578FEC" />
              </linearGradient>
            </defs>
          </svg>
        </Advantage>
        <Advantage title="Отзывы" text="Хорошие отзывы от клиентов">
          <svg
            width="174"
            height="156"
            viewBox="0 0 174 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5111 131.044L-10.2627 150.215C-11.8909 151.229 -13.4229 151.223 -14.8588 150.196C-16.2947 149.17 -16.7993 147.732 -16.3727 145.884L14.3433 12.8388C15.3489 8.48311 17.7659 5.11505 21.5943 2.73461C25.4227 0.354163 29.5187 -0.335139 33.8822 0.666702L160.94 30.0003C165.308 31.0087 168.69 33.4244 171.086 37.2474C173.482 41.0705 174.175 45.1566 173.166 49.5058L151.226 144.538C150.22 148.894 147.805 152.265 143.981 154.652C140.156 157.039 136.058 157.725 131.687 156.71L20.5111 131.044ZM78.2594 98.2891L91.2449 110.88C92.4875 112.14 93.9506 112.444 95.6344 111.793C97.3182 111.142 98.1603 109.91 98.1606 108.097L98.1667 89.9557L114.363 81.3913C115.961 80.509 116.685 79.1831 116.536 77.4136C116.387 75.6442 115.402 74.4769 113.581 73.9119L96.2318 68.4468L93.0314 50.6078C92.7353 48.8712 91.727 47.8042 90.0064 47.407C88.2858 47.0098 86.9118 47.5267 85.8844 48.9578L75.1878 63.5884L57.1989 60.8951C55.3155 60.5993 53.9183 61.2165 53.0074 62.7468C52.0965 64.2771 52.1663 65.7863 53.2168 67.2745L64.0199 82.0723L56.0727 98.3803C55.2795 100.005 55.4963 101.481 56.723 102.81C57.9497 104.138 59.3983 104.506 61.0687 103.913L78.2594 98.2891Z"
              fill="url(#paint0_linear_336_1606)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_336_1606"
                x1="-57.308"
                y1="139.925"
                x2="174.904"
                y2="164.273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#284FDC" />
                <stop offset="1" stopColor="#578FEC" />
              </linearGradient>
            </defs>
          </svg>
        </Advantage>
        <Advantage title="Гибкая настройка" text="Гибкая настройка тарифов">
          <svg
            width="161"
            height="156"
            viewBox="0 0 161 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M90.0584 4.7967C90.8284 6.29235 91.0231 8.2128 91.4036 12.0537C92.1293 19.3107 92.4921 22.9392 94.0144 24.9393C94.9628 26.1811 96.223 27.1498 97.6671 27.7467C99.1112 28.3436 100.688 28.5475 102.236 28.3377C104.714 28.0103 107.546 25.7004 113.192 21.0807C116.175 18.6292 117.67 17.4079 119.272 16.8946C121.312 16.2427 123.52 16.3528 125.485 17.2044C127.034 17.877 128.405 19.2399 131.122 21.9657L139.034 29.8776C141.76 32.6034 143.123 33.9663 143.796 35.5151C144.647 37.4802 144.757 39.6876 144.105 41.7278C143.592 43.3296 142.371 44.8253 139.928 47.8077C135.3 53.4629 132.99 56.286 132.653 58.7729C132.446 60.3207 132.652 61.8958 133.251 63.3382C133.849 64.7806 134.819 66.039 136.061 66.9857C138.052 68.5079 141.689 68.8707 148.955 69.5964C152.787 69.977 154.708 70.1717 156.212 70.9416C158.11 71.9257 159.588 73.5636 160.372 75.5525C161 77.1189 161 79.0482 161 82.9068V94.0932C161 97.9518 161 99.8811 160.381 101.439C159.594 103.434 158.109 105.076 156.203 106.058C154.708 106.828 152.787 107.023 148.946 107.404C141.689 108.129 138.061 108.492 136.061 110.014C134.819 110.963 133.85 112.223 133.253 113.667C132.656 115.111 132.453 116.688 132.662 118.236C132.999 120.714 135.308 123.546 139.928 129.192C142.371 132.175 143.592 133.662 144.105 135.272C144.757 137.312 144.647 139.52 143.796 141.485C143.123 143.034 141.76 144.397 139.034 147.122L131.122 155.025C128.397 157.76 127.034 159.123 125.485 159.787C123.52 160.638 121.312 160.748 119.272 160.097C117.67 159.583 116.175 158.362 113.192 155.919C107.537 151.3 104.714 148.99 102.236 148.662C100.688 148.453 99.1112 148.656 97.6671 149.253C96.223 149.85 94.9628 150.819 94.0144 152.061C92.4921 154.052 92.1293 157.68 91.4036 164.946C91.0231 168.787 90.8284 170.708 90.0584 172.203C89.0777 174.108 87.4394 175.592 85.4476 176.381C83.8811 177 81.9518 177 78.0932 177H66.9068C63.0482 177 61.1189 177 59.5613 176.381C57.5661 175.594 55.9245 174.109 54.9416 172.203C54.1717 170.708 53.977 168.787 53.5964 164.946C52.8707 157.689 52.5079 154.061 50.9857 152.061C50.038 150.82 48.7792 149.853 47.3368 149.256C45.8945 148.659 44.3199 148.454 42.7729 148.662C40.286 148.99 37.4629 151.3 31.8077 155.919C28.8253 158.371 27.3296 159.592 25.7278 160.105C23.6876 160.757 21.4802 160.647 19.5151 159.796C17.9663 159.123 16.5946 157.76 13.8776 155.034L5.9657 147.122C3.2399 144.397 1.877 143.034 1.2044 141.485C0.352787 139.52 0.242733 137.312 0.89465 135.272C1.40795 133.67 2.62925 132.175 5.07185 129.192C9.7004 123.537 12.0103 120.714 12.3377 118.227C12.5459 116.68 12.3411 115.106 11.7443 113.663C11.1474 112.221 10.1797 110.962 8.9393 110.014C6.94805 108.492 3.3107 108.129 -3.95515 107.404C-7.7872 107.023 -9.70765 106.828 -11.2122 106.058C-13.1101 105.074 -14.5876 103.436 -15.3716 101.448C-16 99.8811 -16 97.9518 -16 94.0932V82.9068C-16 79.0482 -16 77.1189 -15.3805 75.5613C-14.5938 73.5661 -13.1095 71.9245 -11.2033 70.9416C-9.70765 70.1717 -7.7872 69.977 -3.9463 69.5964C3.3107 68.8707 6.94805 68.5079 8.9393 66.9857C10.1813 66.039 11.1508 64.7806 11.7492 63.3382C12.3476 61.8958 12.5537 60.3207 12.3466 58.7729C12.0103 56.286 9.69155 53.4629 5.07185 47.7989C2.62925 44.8164 1.40795 43.3296 0.89465 41.7189C0.242733 39.6787 0.352787 37.4714 1.2044 35.5062C1.877 33.9663 3.2399 32.5946 5.9657 29.8688L13.8776 21.9657C16.6034 19.2399 17.9663 17.8682 19.5151 17.2044C21.4802 16.3528 23.6876 16.2427 25.7278 16.8946C27.3296 17.4079 28.8253 18.6293 31.8077 21.0719C37.4629 25.6916 40.286 28.0014 42.764 28.3377C44.3146 28.5481 45.8933 28.3436 47.3392 27.7451C48.785 27.1465 50.0463 26.1753 50.9945 24.9305C52.499 22.9392 52.8707 19.3107 53.5964 12.0449C53.977 8.2128 54.1717 6.29235 54.9416 4.78785C55.924 2.88662 57.5621 1.40576 59.5525 0.619499C61.1189 -5.96046e-07 63.0482 0 66.9068 0H78.0932C81.9518 0 83.8811 -5.96046e-07 85.4387 0.619499C87.4339 1.40615 89.0755 2.89054 90.0584 4.7967ZM72.5 123.9C81.8887 123.9 90.8928 120.17 97.5316 113.532C104.17 106.893 107.9 97.8887 107.9 88.5C107.9 79.1113 104.17 70.1072 97.5316 63.4684C90.8928 56.8296 81.8887 53.1 72.5 53.1C63.1113 53.1 54.1072 56.8296 47.4684 63.4684C40.8296 70.1072 37.1 79.1113 37.1 88.5C37.1 97.8887 40.8296 106.893 47.4684 113.532C54.1072 120.17 63.1113 123.9 72.5 123.9Z"
              fill="url(#paint0_linear_336_1616)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_336_1616"
                x1="-60.7675"
                y1="176.101"
                x2="191.146"
                y2="146.247"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#284FDC" />
                <stop offset="1" stopColor="#578FEC" />
              </linearGradient>
            </defs>
          </svg>
        </Advantage>
        <Advantage title="Помощь" text="Помощь в смене интернет-провайдера">
          <svg
            width="159"
            height="155"
            viewBox="0 0 159 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.5 0C23.2 0 -16 39.2 -16 87.5C-16 135.8 23.2 175 71.5 175C119.8 175 159 135.8 159 87.5C159 39.2 119.8 0 71.5 0ZM79.4625 141.312C78.851 141.912 78.077 142.319 77.2364 142.483C76.3958 142.647 75.5257 142.56 74.7338 142.234C73.9419 141.908 73.2631 141.357 72.7816 140.648C72.3001 139.94 72.037 139.106 72.025 138.25V131.25H71.5C60.3 131.25 49.1 126.963 40.525 118.475C34.584 112.52 30.4839 104.979 28.715 96.755C26.946 88.531 27.5831 79.9715 30.55 72.1C32.2125 67.6375 38.075 66.5 41.4 69.9125C43.325 71.8375 43.7625 74.6375 42.8875 77.0875C38.8625 87.9375 41.1375 100.537 49.8875 109.287C56.0125 115.412 64.0625 118.3 72.1125 118.125V109.9C72.1125 105.963 76.8375 104.037 79.55 106.838L93.725 121.012C95.475 122.762 95.475 125.475 93.725 127.225L79.4625 141.312ZM101.6 105.175C100.696 104.244 100.075 103.075 99.8117 101.804C99.5482 100.533 99.6526 99.2136 100.113 98C104.138 87.15 101.863 74.55 93.1125 65.8C86.9875 59.675 78.9375 56.7 70.975 56.875V65.1C70.975 69.0375 66.25 70.9625 63.5375 68.1625L49.275 54.075C47.525 52.325 47.525 49.6125 49.275 47.8625L63.45 33.6875C64.0615 33.0879 64.8355 32.681 65.6761 32.5172C66.5167 32.3534 67.3868 32.4399 68.1787 32.766C68.9706 33.0921 69.6494 33.6434 70.1309 34.3516C70.6124 35.0598 70.8755 35.8937 70.8875 36.75V43.8375C82.2625 43.6625 93.725 47.775 102.387 56.525C108.329 62.4805 112.429 70.021 114.198 78.245C115.966 86.469 115.329 95.0285 112.363 102.9C110.7 107.45 104.925 108.588 101.6 105.175Z"
              fill="url(#paint0_linear_336_1627)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_336_1627"
                x1="-60.2617"
                y1="174.111"
                x2="188.805"
                y2="144.594"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#284FDC" />
                <stop offset="1" stopColor="#578FEC" />
              </linearGradient>
            </defs>
          </svg>
        </Advantage>
      </div>
    </div>
  );
};

export default Advantages;