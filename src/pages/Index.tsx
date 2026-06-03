import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, ChevronRight } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Flowing wave rays overlay */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="30%" stopColor="rgba(251,146,60,1)" />
                <stop offset="70%" stopColor="rgba(249,115,22,0.8)" />
                <stop offset="100%" stopColor="rgba(249,115,22,0)" />
              </radialGradient>
              <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="25%" stopColor="rgba(251,146,60,0.9)" />
                <stop offset="60%" stopColor="rgba(234,88,12,0.7)" />
                <stop offset="100%" stopColor="rgba(234,88,12,0)" />
              </radialGradient>
              <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="35%" stopColor="rgba(251,146,60,1)" />
                <stop offset="75%" stopColor="rgba(234,88,12,0.6)" />
                <stop offset="100%" stopColor="rgba(234,88,12,0)" />
              </radialGradient>
              {/* Adding hero text background gradients and filters */}
              <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
                <stop offset="0%" stopColor="rgba(249,115,22,0.15)" />
                <stop offset="40%" stopColor="rgba(251,146,60,0.08)" />
                <stop offset="80%" stopColor="rgba(234,88,12,0.05)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <filter id="heroTextBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feTurbulence baseFrequency="0.7" numOctaves="4" result="noise" />
                <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
                <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
                  <feFuncA type="discrete" tableValues="0.03 0.06 0.09 0.12" />
                </feComponentTransfer>
                <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
                <feMerge>
                  <feMergeNode in="noisyBlur" />
                </feMerge>
              </filter>
              <linearGradient id="backgroundFade1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="20%" stopColor="rgba(249,115,22,0.15)" />
                <stop offset="80%" stopColor="rgba(249,115,22,0.15)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <linearGradient id="backgroundFade2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="15%" stopColor="rgba(251,146,60,0.12)" />
                <stop offset="85%" stopColor="rgba(251,146,60,0.12)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <linearGradient id="backgroundFade3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="25%" stopColor="rgba(234,88,12,0.18)" />
                <stop offset="75%" stopColor="rgba(234,88,12,0.18)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
              <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="15%" stopColor="rgba(249,115,22,0.8)" />
                <stop offset="85%" stopColor="rgba(249,115,22,0.8)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="12%" stopColor="rgba(251,146,60,0.7)" />
                <stop offset="88%" stopColor="rgba(251,146,60,0.7)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                <stop offset="18%" stopColor="rgba(234,88,12,0.8)" />
                <stop offset="82%" stopColor="rgba(234,88,12,0.8)" />
                <stop offset="100%" stopColor="rgba(0,0,0,1)" />
              </linearGradient>
              <filter id="backgroundBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feTurbulence baseFrequency="0.9" numOctaves="3" result="noise" />
                <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
                <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
                  <feFuncA type="discrete" tableValues="0.05 0.1 0.15 0.2" />
                </feComponentTransfer>
                <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
                <feMerge>
                  <feMergeNode in="noisyBlur" />
                </feMerge>
              </filter>
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g>
              {/* Adding hero text background shape */}
              <ellipse
                cx="300"
                cy="350"
                rx="400"
                ry="200"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.6"
              />
              <ellipse
                cx="350"
                cy="320"
                rx="500"
                ry="250"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.4"
              />
              <ellipse
                cx="400"
                cy="300"
                rx="600"
                ry="300"
                fill="url(#heroTextBg)"
                filter="url(#heroTextBlur)"
                opacity="0.2"
              />

              {/* Thread 1 - Smooth S-curve from bottom-left to right */}
              <path
                id="thread1"
                d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.8"
              />
              <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#thread1" />
                </animateMotion>
              </circle>

              {/* Thread 2 - Gentle wave flow */}
              <path
                id="thread2"
                d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370"
                stroke="url(#threadFade2)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
              <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5s" repeatCount="indefinite">
                  <mpath href="#thread2" />
                </animateMotion>
              </circle>

              {/* Thread 3 - Organic curve */}
              <path
                id="thread3"
                d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330"
                stroke="url(#threadFade3)"
                strokeWidth="1.2"
                fill="none"
                opacity="0.8"
              />
              <circle r="2.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.5s" repeatCount="indefinite">
                  <mpath href="#thread3" />
                </animateMotion>
              </circle>

              {/* Thread 4 - Flowing curve */}
              <path
                id="thread4"
                d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390"
                stroke="url(#threadFade1)"
                strokeWidth="0.6"
                fill="none"
                opacity="0.6"
              />
              <circle r="1.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.5s" repeatCount="indefinite">
                  <mpath href="#thread4" />
                </animateMotion>
              </circle>

              {/* Thread 5 - Natural wave */}
              <path
                id="thread5"
                d="M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350"
                stroke="url(#threadFade2)"
                strokeWidth="1.0"
                fill="none"
                opacity="0.7"
              />
              <circle r="2.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.2s" repeatCount="indefinite">
                  <mpath href="#thread5" />
                </animateMotion>
              </circle>

              {/* Thread 6 - Smooth flow */}
              <path
                id="thread6"
                d="M150 735 Q300 660 480 610 Q660 560 800 590 Q940 620 1080 530 Q1220 440 1400 410"
                stroke="url(#threadFade3)"
                strokeWidth="1.3"
                fill="none"
                opacity="0.6"
              />
              <circle r="2.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.2s" repeatCount="indefinite">
                  <mpath href="#thread6" />
                </animateMotion>
              </circle>

              {/* Thread 7 - Organic S-curve */}
              <path
                id="thread7"
                d="M40 715 Q190 585 340 535 Q490 485 630 515 Q770 545 910 455 Q1050 365 1250 335"
                stroke="url(#threadFade1)"
                strokeWidth="0.9"
                fill="none"
                opacity="0.8"
              />
              <circle r="2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.8s" repeatCount="indefinite">
                  <mpath href="#thread7" />
                </animateMotion>
              </circle>

              {/* Thread 8 - Gentle wave */}
              <path
                id="thread8"
                d="M100 728 Q260 630 420 580 Q580 530 720 560 Q860 590 1000 500 Q1140 410 1320 380"
                stroke="url(#threadFade2)"
                strokeWidth="1.4"
                fill="none"
                opacity="0.7"
              />
              <circle r="3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.8s" repeatCount="indefinite">
                  <mpath href="#thread8" />
                </animateMotion>
              </circle>

              {/* Thread 9 - Thin flowing curve */}
              <path
                id="thread9"
                d="M30 722 Q170 595 310 545 Q450 495 590 525 Q730 555 870 465 Q1010 375 1180 345"
                stroke="url(#threadFade3)"
                strokeWidth="0.5"
                fill="none"
                opacity="0.6"
              />
              <circle r="1.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath href="#thread9" />
                </animateMotion>
              </circle>

              {/* Thread 10 - Medium thick wave */}
              <path
                id="thread10"
                d="M90 732 Q240 625 390 575 Q540 525 680 555 Q820 585 960 495 Q1100 405 1300 375"
                stroke="url(#threadFade1)"
                strokeWidth="1.1"
                fill="none"
                opacity="0.8"
              />
              <circle r="2.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.3s" repeatCount="indefinite">
                  <mpath href="#thread10" />
                </animateMotion>
              </circle>

              {/* Thread 11 - Very thin thread */}
              <path
                id="thread11"
                d="M70 727 Q210 605 360 555 Q510 505 650 535 Q790 565 930 475 Q1070 385 1260 355"
                stroke="url(#threadFade2)"
                strokeWidth="0.4"
                fill="none"
                opacity="0.5"
              />
              <circle r="1" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.7s" repeatCount="indefinite">
                  <mpath href="#thread11" />
                </animateMotion>
              </circle>

              {/* Thread 12 - Thick flowing line */}
              <path
                id="thread12"
                d="M110 738 Q270 645 430 595 Q590 545 730 575 Q870 605 1010 515 Q1150 425 1380 395"
                stroke="url(#threadFade3)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
              <circle r="3.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.7s" repeatCount="indefinite">
                  <mpath href="#thread12" />
                </animateMotion>
              </circle>

              {/* Thread 13 - Thin organic curve */}
              <path
                id="thread13"
                d="M45 718 Q185 588 325 538 Q465 488 605 518 Q745 548 885 458 Q1025 368 1220 338"
                stroke="url(#threadFade1)"
                strokeWidth="0.7"
                fill="none"
                opacity="0.6"
              />
              <circle r="1.8" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.3s" repeatCount="indefinite">
                  <mpath href="#thread13" />
                </animateMotion>
              </circle>

              {/* Thread 14 - Medium wave */}
              <path
                id="thread14"
                d="M130 721 Q290 630 460 580 Q630 530 770 560 Q910 590 1050 500 Q1190 410 1350 380"
                stroke="url(#threadFade2)"
                strokeWidth="1.0"
                fill="none"
                opacity="0.8"
              />
              <circle r="2.3" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.9s" repeatCount="indefinite">
                  <mpath href="#thread14" />
                </animateMotion>
              </circle>

              {/* Thread 15 - Very thin delicate line */}
              <path
                id="thread15"
                d="M25 713 Q165 583 305 533 Q445 483 585 513 Q725 543 865 453 Q1005 363 1200 333"
                stroke="url(#threadFade3)"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              <circle r="0.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="6.2s" repeatCount="indefinite">
                  <mpath href="#thread15" />
                </animateMotion>
              </circle>

              {/* Thread 16 - Thick prominent thread */}
              <path
                id="thread16"
                d="M85 719 Q235 605 385 555 Q535 505 675 535 Q815 565 955 475 Q1095 385 1320 355"
                stroke="url(#threadFade1)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.9"
              />
              <circle r="3.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.1s" repeatCount="indefinite">
                  <mpath href="#thread16" />
                </animateMotion>
              </circle>

              {/* Thread 17 */}
              <path
                id="thread17"
                d="M50 720 Q180 660 320 620 Q460 580 600 600 Q740 620 880 560 Q1020 500 1200 340"
                stroke="url(#threadFade2)"
                strokeWidth="0.6"
                fill="none"
                opacity="0.5"
              />
              <circle r="1.5" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.1s" repeatCount="indefinite">
                  <mpath href="#thread17" />
                </animateMotion>
              </circle>

              {/* Thread 18 */}
              <path
                id="thread18"
                d="M50 720 Q200 680 350 640 Q500 600 650 620 Q800 640 950 580 Q1100 520 1200 340"
                stroke="url(#threadFade3)"
                strokeWidth="1.2"
                fill="none"
                opacity="0.7"
              />
              <circle r="2.8" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.6s" repeatCount="indefinite">
                  <mpath href="#thread18" />
                </animateMotion>
              </circle>

              {/* Thread 19 */}
              <path
                id="thread19"
                d="M50 720 Q160 670 280 630 Q400 590 540 610 Q680 630 820 570 Q960 510 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
              <circle r="2" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.4s" repeatCount="indefinite">
                  <mpath href="#thread19" />
                </animateMotion>
              </circle>

              {/* Thread 20 */}
              <path
                id="thread20"
                d="M50 720 Q220 690 380 650 Q540 610 680 630 Q820 650 960 590 Q1100 530 1200 340"
                stroke="url(#threadFade2)"
                strokeWidth="1.4"
                fill="none"
                opacity="0.8"
              />
              <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.4s" repeatCount="indefinite">
                  <mpath href="#thread20" />
                </animateMotion>
              </circle>

              {/* Thread 21 */}
              <path
                id="thread21"
                d="M50 720 Q170 675 300 635 Q430 595 570 615 Q710 635 850 575 Q990 515 1200 340"
                stroke="url(#threadFade3)"
                strokeWidth="0.5"
                fill="none"
                opacity="0.4"
              />
              <circle r="1.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.9s" repeatCount="indefinite">
                  <mpath href="#thread21" />
                </animateMotion>
              </circle>

              {/* Thread 22 */}
              <path
                id="thread22"
                d="M50 720 Q190 745 340 705 Q490 665 630 685 Q770 705 910 645 Q1050 585 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="1.1"
                fill="none"
                opacity="0.7"
              />
              <circle r="2.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.8s" repeatCount="indefinite">
                  <mpath href="#thread22" />
                </animateMotion>
              </circle>

              {/* Thread 23 */}
              <path
                id="thread23"
                d="M50 720 Q150 725 270 685 Q390 645 530 665 Q670 685 810 625 Q950 565 1200 340"
                stroke="url(#threadFade2)"
                strokeWidth="0.9"
                fill="none"
                opacity="0.6"
              />
              <circle r="2.2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.2s" repeatCount="indefinite">
                  <mpath href="#thread23" />
                </animateMotion>
              </circle>

              {/* Thread 24 */}
              <path
                id="thread24"
                d="M50 720 Q210 755 370 715 Q530 675 670 695 Q810 715 950 655 Q1090 595 1200 340"
                stroke="url(#threadFade3)"
                strokeWidth="1.3"
                fill="none"
                opacity="0.8"
              />
              <circle r="2.9" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.2s" repeatCount="indefinite">
                  <mpath href="#thread24" />
                </animateMotion>
              </circle>

              {/* Thread 25 */}
              <path
                id="thread25"
                d="M50 720 Q165 730 290 690 Q415 650 555 670 Q695 690 835 630 Q975 570 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="0.7"
                fill="none"
                opacity="0.5"
              />
              <circle r="1.8" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.6s" repeatCount="indefinite">
                  <mpath href="#thread25" />
                </animateMotion>
              </circle>

              {/* Thread 26 */}
              <path
                id="thread26"
                d="M50 720 Q230 760 390 720 Q550 680 690 700 Q830 720 970 660 Q1110 600 1200 340"
                stroke="url(#threadFade2)"
                strokeWidth="1.0"
                fill="none"
                opacity="0.7"
              />
              <circle r="2.4" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.7s" repeatCount="indefinite">
                  <mpath href="#thread26" />
                </animateMotion>
              </circle>

              {/* Thread 27 */}
              <path
                id="thread27"
                d="M50 720 Q175 740 310 700 Q445 660 585 680 Q725 700 865 640 Q1005 580 1200 340"
                stroke="url(#threadFade3)"
                strokeWidth="0.4"
                fill="none"
                opacity="0.4"
              />
              <circle r="1" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="6.1s" repeatCount="indefinite">
                  <mpath href="#thread27" />
                </animateMotion>
              </circle>

              {/* Thread 28 */}
              <path
                id="thread28"
                d="M50 720 Q195 750 350 710 Q505 670 645 690 Q785 710 925 650 Q1065 590 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.9"
              />
              <circle r="3.1" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.3s" repeatCount="indefinite">
                  <mpath href="#thread28" />
                </animateMotion>
              </circle>

              {/* Thread 29 */}
              <path
                id="thread29"
                d="M50 720 Q155 735 285 695 Q415 655 555 675 Q695 695 835 635 Q975 575 1200 340"
                stroke="url(#threadFade2)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
              <circle r="2" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.3s" repeatCount="indefinite">
                  <mpath href="#thread29" />
                </animateMotion>
              </circle>

              {/* Thread 30 */}
              <path
                id="thread30"
                d="M50 720 Q215 765 375 725 Q535 685 675 705 Q815 725 955 665 Q1095 605 1200 340"
                stroke="url(#threadFade3)"
                strokeWidth="1.2"
                fill="none"
                opacity="0.8"
              />
              <circle r="2.7" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.5s" repeatCount="indefinite">
                  <mpath href="#thread30" />
                </animateMotion>
              </circle>

              {/* Thread 31 */}
              <path
                id="thread31"
                d="M50 720 Q185 745 325 705 Q465 665 605 685 Q745 705 885 645 Q1025 585 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="0.6"
                fill="none"
                opacity="0.5"
              />
              <circle r="1.5" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.8s" repeatCount="indefinite">
                  <mpath href="#thread31" />
                </animateMotion>
              </circle>

              {/* Thread 32 */}
              <path
                id="thread32"
                d="M50 720 Q205 755 365 715 Q525 675 665 695 Q805 715 945 655 Q1085 595 1200 340"
                stroke="url(#threadFade2)"
                strokeWidth="1.4"
                fill="none"
                opacity="0.8"
              />
              <circle r="3" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.1s" repeatCount="indefinite">
                  <mpath href="#thread32" />
                </animateMotion>
              </circle>

              {/* Thread 33 */}
              <path
                id="thread33"
                d="M50 720 Q160 730 295 690 Q430 650 570 670 Q710 690 850 630 Q990 570 1200 340"
                stroke="url(#threadFade3)"
                strokeWidth="0.9"
                fill="none"
                opacity="0.6"
              />
              <circle r="2.1" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="5.1s" repeatCount="indefinite">
                  <mpath href="#thread33" />
                </animateMotion>
              </circle>

              {/* Thread 34 */}
              <path
                id="thread34"
                d="M50 720 Q225 770 385 730 Q545 690 685 710 Q825 730 965 670 Q1105 610 1200 340"
                stroke="url(#threadFade1)"
                strokeWidth="1.1"
                fill="none"
                opacity="0.7"
              />
              <circle r="2.6" fill="url(#neonPulse3)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.9s" repeatCount="indefinite">
                  <mpath href="#thread34" />
                </animateMotion>
              </circle>

              {/* Thread 35 */}
              <path
                id="thread35"
                d="M50 720 Q170 740 305 700 Q440 660 580 680 Q720 700 860 640 Q1000 580 1200 340"
                stroke="url(#threadFade2)"
                strokeWidth="0.3"
                fill="none"
                opacity="0.4"
              />
              <circle r="0.8" fill="url(#neonPulse1)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="6.3s" repeatCount="indefinite">
                  <mpath href="#thread35" />
                </animateMotion>
              </circle>

              {/* Thread 36 */}
              <path
                id="thread36"
                d="M50 720 Q240 715 400 675 Q560 635 700 655 Q840 675 980 615 Q1120 555 1200 340"
                stroke="url(#threadFade3)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.9"
              />
              <circle r="3.2" fill="url(#neonPulse2)" opacity="1" filter="url(#neonGlow)">
                <animateMotion dur="4.0s" repeatCount="indefinite">
                  <mpath href="#thread36" />
                </animateMotion>
              </circle>
            </g>
          </svg>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 lg:px-12">
        <div className="flex items-center space-x-2 pl-3 sm:pl-6 lg:pl-12">
          <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">ЧеченскиеВойны.рф</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#history" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            История
          </a>
          <a href="#war1" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Первая война
          </a>
          <a href="#war2" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Вторая война
          </a>
          <a href="#materials" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">
            Материалы
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        <ShimmerButton className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-xl text-sm lg:text-base font-medium shadow-lg">
          Читать
        </ShimmerButton>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <a href="#history" className="text-white/80 hover:text-white transition-colors">
              История
            </a>
            <a href="#war1" className="text-white/80 hover:text-white transition-colors">
              Первая война
            </a>
            <a href="#war2" className="text-white/80 hover:text-white transition-colors">
              Вторая война
            </a>
            <a href="#materials" className="text-white/80 hover:text-white transition-colors">
              Материалы
            </a>
            <ShimmerButton className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium shadow-lg w-fit">
              Читать
            </ShimmerButton>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-start justify-start sm:justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-12 max-w-6xl pt-4 sm:-mt-12 lg:-mt-24 pl-6 sm:pl-12 lg:pl-20">
        <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
          Чеченские
          <br />
          <LineShadowText className="italic font-light" shadowColor="white">
            войны
          </LineShadowText>
        </h1>

        <p className="text-white/70 text-sm sm:text-base md:text-sm lg:text-2xl mb-6 sm:mb-8 max-w-2xl text-pretty">
          История вооружённых конфликтов 1994–1996 и 1999–2009 годов.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Статьи, документальные фильмы и архивные материалы.
        </p>

        <Button
          className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base md:text-xs lg:text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          onClick={() => document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })}
        >
          Изучить материалы
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </main>

      {/* Раздел: Введение */}
      <section id="history" className="bg-zinc-950 py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">О конфликтах</h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            Чеченские войны — два крупных вооружённых конфликта между Россией и Чечнёй, произошедших в конце XX — начале XXI века. Корни конфликта уходят в советский период: в 1944 году Сталин депортировал весь чеченский народ в Сибирь и Среднюю Азию, что оставило глубокую травму. После реабилитации в 1957 году чеченцы вернулись на родину, однако напряжённость с Москвой не исчезла.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            С распадом СССР в 1991 году Чечня под руководством генерала Джохара Дудаева провозгласила независимость. Москва отказалась её признавать, что привело к нарастающему противостоянию. В декабре 1994 года федеральные войска вошли на территорию республики — началась Первая чеченская война. Несмотря на военное превосходство, Россия была вынуждена подписать Хасавюртовские соглашения в 1996 году.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">
            Межвоенный период (1996–1999) сопровождался хаосом, похищениями людей и распространением радикального ислама. В августе 1999 года полевые командиры вторглись в Дагестан, что послужило поводом для начала Второй чеченской войны. На этот раз федеральным силам удалось установить контроль над республикой, а Рамзан Кадыров стал во главе новой чеченской власти.
          </p>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10">
            Оба конфликта унесли десятки тысяч жизней — как военных, так и мирных жителей. Они оказали огромное влияние на политическую жизнь России, права человека и международный имидж страны.
          </p>

          {/* Ключевые цифры */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Лет конфликтов суммарно", value: "~15" },
              { label: "Погибших военных (обе стороны)", value: "~25 000" },
              { label: "Мирных жертв (оценочно)", value: "~50 000" },
              { label: "Беженцев в период войн", value: "~200 000" },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <div className="text-orange-400 text-2xl font-bold mb-1">{s.value}</div>
                <div className="text-white/50 text-xs leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Хронология */}
      <section className="bg-black py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="Clock" size={28} className="text-orange-500" />
            <h2 className="text-white text-3xl sm:text-4xl font-bold">Хронология</h2>
          </div>
          <div className="relative border-l-2 border-orange-500/40 pl-8 space-y-10">
            {[
              { year: "Ноя 1990", text: "Общенациональный конгресс чеченского народа провозглашает суверенитет Чечни." },
              { year: "Окт 1991", text: "Джохар Дудаев избран президентом Чечни и объявляет полную независимость от СССР." },
              { year: "Нояб 1991", text: "Борис Ельцин вводит чрезвычайное положение в Чечне. Попытка блокады проваливается." },
              { year: "Дек 1994", text: "Российские войска входят в Чечню — начало Первой чеченской войны. Штурм Грозного начинается 31 декабря." },
              { year: "Янв 1995", text: "Провальный штурм Грозного в новогоднюю ночь. Колонны бронетехники уничтожены. Начинаются затяжные городские бои." },
              { year: "Мар 1995", text: "Федеральные войска устанавливают контроль над Грозным после многонедельных боёв." },
              { year: "Июн 1995", text: "Захват заложников в Будённовске: боевики Шамиля Басаева удерживают более 1500 человек в больнице." },
              { year: "Янв 1996", text: "Рейд на Кизляр: боевики захватывают город и берут заложников в Первомайском." },
              { year: "Апр 1996", text: "Гибель Джохара Дудаева в результате авиаудара по спутниковому телефону." },
              { year: "Авг 1996", text: "Операция «Джихад»: чеченские отряды захватывают Грозный. Хасавюртовские соглашения. Федеральные войска выходят." },
              { year: "1996–1999", text: "Межвоенный период. Чечня де-факто независима. Хаос, похищения людей, распространение радикального ислама." },
              { year: "Авг 1999", text: "Вторжение отрядов Басаева и Хаттаба в Дагестан. Владимир Путин назначен и. о. премьер-министра." },
              { year: "Сен 1999", text: "Серия взрывов жилых домов в Москве, Буйнакске и Волгодонске. Погибают около 300 человек. Начало Второй чеченской войны." },
              { year: "Окт 1999", text: "Российские войска входят в Чечню. Авиация начинает массированные бомбардировки." },
              { year: "Фев 2000", text: "Второй штурм Грозного завершён. Город почти полностью разрушен." },
              { year: "Авг 2000", text: "Теракт на Пушкинской площади в Москве. Взрывы в подземном переходе." },
              { year: "Окт 2002", text: "Теракт «Норд-Ост»: захват заложников в московском театре. Погибли 130 заложников при штурме." },
              { year: "Май 2004", text: "Убийство Ахмата Кадырова на стадионе в Грозном. Его сын Рамзан Кадыров начинает путь к власти." },
              { year: "Сен 2004", text: "Захват школы в Беслане. Погибло более 330 человек, в том числе 186 детей." },
              { year: "2007", text: "Рамзан Кадыров становится президентом Чечни. Начало «чеченизации» управления республикой." },
              { year: "Апр 2009", text: "Россия официально прекращает «контртеррористическую операцию» в Чечне. Конец Второй чеченской войны." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[2.65rem] top-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-black" />
                <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">{item.year}</span>
                <p className="text-white/70 mt-1 text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Первая война */}
      <section id="war1" className="bg-zinc-950 py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">Первая чеченская война <span className="text-orange-500">1994–1996</span></h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
            В декабре 1994 года федеральные войска вошли на территорию Чечни с целью «восстановления конституционного порядка». Военное командование рассчитывало на быструю победу, однако столкнулось с хорошо подготовленным сопротивлением.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
            Штурм Грозного в новогоднюю ночь с 31 декабря 1994 на 1 января 1995 года обернулся катастрофой для российских войск: бронеколонны были окружены и уничтожены в городских кварталах. Погибли сотни солдат. Бои за Грозный продолжались несколько недель и превратили город в руины.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
            Война приобрела широкий резонанс в обществе. Журналисты — в том числе Андрей Некрасов, Анна Политковская и корреспонденты НТВ — вели репортажи с передовой, формируя антивоенные настроения. В июне 1995 года отряд Шамиля Басаева захватил больницу в Будённовске — свыше 1500 заложников.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
            В августе 1996 года чеченские силы провели операцию «Джихад» и вновь захватили Грозный. Секретарь Совета безопасности Александр Лебедь подписал Хасавюртовские соглашения. Федеральные войска отступили. Итог войны был воспринят как поражение России.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Длительность", value: "21 месяц" },
              { label: "Потери России (военные)", value: "~6 000" },
              { label: "Потери чеченцев (оценочно)", value: "~15 000" },
              { label: "Итог", value: "Хасавюрт" },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-orange-400 text-xs uppercase tracking-wider mb-1">{s.label}</div>
                <div className="text-white font-semibold text-lg">{s.value}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">Ключевые участники</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/60">
              <div><span className="text-orange-400 font-medium">Джохар Дудаев</span> — первый президент ЧРИ, погиб в 1996 г.</div>
              <div><span className="text-orange-400 font-medium">Аслан Масхадов</span> — начальник штаба, подписал Хасавюртовские соглашения.</div>
              <div><span className="text-orange-400 font-medium">Шамиль Басаев</span> — полевой командир, организатор теракта в Будённовске.</div>
              <div><span className="text-orange-400 font-medium">Александр Лебедь</span> — подписал мирное соглашение от имени России.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Вторая война */}
      <section id="war2" className="bg-black py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">Вторая чеченская война <span className="text-orange-500">1999–2009</span></h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
            Межвоенный период (1996–1999) обнажил несостоятельность чеченского государства: власть была раздроблена между полевыми командирами, а республика превратилась в центр работорговли и терроризма. В августе 1999 года отряды Басаева и арабского командира Хаттаба вторглись в Дагестан — официальный повод для начала второй кампании.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
            В сентябре 1999 года серия взрывов жилых домов унесла жизни около 300 человек. Это резко изменило общественное мнение в пользу войны. Новый премьер-министр Владимир Путин объявил о начале контртеррористической операции (КТО).
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
            В отличие от первой войны, федеральные силы действовали методичнее. К февралю 2000 года Грозный был взят снова — ценой его полного разрушения. Сопротивление продолжалось в горных районах ещё несколько лет. Крупнейшие теракты этого периода — захват театра «Норд-Ост» (2002) и школы в Беслане (2004).
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
            После гибели Ахмата Кадырова в 2004 году его сын Рамзан возглавил республику и установил жёсткий контроль. К 2009 году режим КТО был официально отменён. Чечня получила широкую автономию в обмен на лояльность Кремлю.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Длительность", value: "10 лет" },
              { label: "Потери России (военные)", value: "~7 000" },
              { label: "Мирных жертв (оценочно)", value: "~25 000" },
              { label: "Итог", value: "КТО завершена" },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-orange-400 text-xs uppercase tracking-wider mb-1">{s.label}</div>
                <div className="text-white font-semibold text-lg">{s.value}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">Ключевые участники</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/60">
              <div><span className="text-orange-400 font-medium">Владимир Путин</span> — объявил КТО, стал президентом России в 2000 г.</div>
              <div><span className="text-orange-400 font-medium">Аслан Масхадов</span> — президент ЧРИ, убит российским спецназом в 2005 г.</div>
              <div><span className="text-orange-400 font-medium">Шамиль Басаев</span> — организатор «Норд-Оста» и Беслана, убит в 2006 г.</div>
              <div><span className="text-orange-400 font-medium">Рамзан Кадыров</span> — с 2007 года глава Чечни.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Материалы */}
      <section id="materials" className="bg-zinc-950 py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12">Материалы для изучения</h2>

          {/* Статьи */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Icon name="BookOpen" size={22} className="text-orange-500" />
              <h3 className="text-white text-xl font-semibold">Статьи и тексты</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Первая чеченская война — Википедия", url: "https://ru.wikipedia.org/wiki/Первая_чеченская_война", desc: "Подробная энциклопедическая статья о событиях 1994–1996 гг." },
                { title: "Вторая чеченская война — Википедия", url: "https://ru.wikipedia.org/wiki/Вторая_чеченская_война", desc: "Полная хронология и участники конфликта 1999–2009 гг." },
                { title: "Штурм Грозного (1994–1995) — Википедия", url: "https://ru.wikipedia.org/wiki/Штурм_Грозного_(1994—1995)", desc: "Городские бои за столицу Чечни в начале войны." },
                { title: "Штурм Грозного (1999–2000) — Википедия", url: "https://ru.wikipedia.org/wiki/Штурм_Грозного_(1999—2000)", desc: "Второй штурм — методичное уничтожение города." },
                { title: "Хасавюртовские соглашения — Википедия", url: "https://ru.wikipedia.org/wiki/Хасавюртовские_соглашения", desc: "Мирный договор 1996 года, завершивший Первую войну." },
                { title: "Захват заложников в Будённовске — Википедия", url: "https://ru.wikipedia.org/wiki/Захват_заложников_в_Будённовске", desc: "Теракт Шамиля Басаева в июне 1995 года." },
                { title: "Захват театрального центра «Норд-Ост» — Википедия", url: "https://ru.wikipedia.org/wiki/Захват_заложников_на_Дубровке", desc: "Теракт 2002 года в Москве." },
                { title: "Теракт в Беслане — Википедия", url: "https://ru.wikipedia.org/wiki/Захват_школы_в_Беслане", desc: "Захват школы в 2004 году — крупнейший теракт в истории России." },
                { title: "Депортация чеченцев (1944) — Википедия", url: "https://ru.wikipedia.org/wiki/Депортация_чеченцев_и_ингушей", desc: "Исторические корни конфликта — операция «Чечевица»." },
                { title: "First Chechen War — Britannica (англ.)", url: "https://www.britannica.com/event/First-Chechen-War", desc: "Международный взгляд на Первую войну." },
                { title: "Second Chechen War — Britannica (англ.)", url: "https://www.britannica.com/event/Second-Chechen-War", desc: "Международный взгляд на Вторую войну." },
                { title: "Правозащитный центр «Мемориал»", url: "https://www.memo.ru/", desc: "Архивные документы, свидетельства очевидцев и базы данных жертв." },
              ].map((a, i) => (
                <a
                  key={i}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 rounded-xl p-5 transition-all duration-200 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-white font-medium group-hover:text-orange-400 transition-colors">{a.title}</span>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-orange-500 shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <span className="text-white/50 text-sm">{a.desc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Лекции */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Icon name="GraduationCap" size={22} className="text-orange-500" />
              <h3 className="text-white text-xl font-semibold">Лекции историков и публицистов</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "«Чеченские войны» — Егор Яковлев", url: "https://www.youtube.com/results?search_query=чеченские+войны+егор+яковлев+лекция", desc: "Историк Егор Яковлев разбирает причины и ход конфликтов." },
                { title: "«Первая чеченская» — Юрий Пивоваров", url: "https://www.youtube.com/results?search_query=первая+чеченская+война+пивоваров", desc: "Академик РАН о политическом контексте войны 1994–1996 гг." },
                { title: "«Чечня: от Дудаева до Кадырова» — Борис Соколов", url: "https://www.youtube.com/results?search_query=чечня+дудаев+кадыров+соколов+лекция", desc: "Военный историк о трансформации чеченского конфликта." },
                { title: "«Чечня. Цена независимости» — Леонид Млечин", url: "https://www.youtube.com/results?search_query=чечня+цена+независимости+млечин", desc: "Журналист и историк о политических решениях, приведших к войне." },
                { title: "«Вторая чеченская: как это было» — ПостНаука", url: "https://www.youtube.com/results?search_query=вторая+чеченская+война+постнаука", desc: "Научно-популярная лекция о причинах и итогах второго конфликта." },
                { title: "«Чеченские войны» — Арзамас (лекция)", url: "https://www.youtube.com/results?search_query=чеченская+война+арзамас+лекция", desc: "Образовательный проект «Арзамас» — история для широкой аудитории." },
              ].map((v, i) => (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 rounded-xl p-5 transition-all duration-200 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-white font-medium group-hover:text-orange-400 transition-colors">{v.title}</span>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-orange-500 shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <span className="text-white/50 text-sm">{v.desc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Документальные фильмы */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Icon name="Video" size={22} className="text-orange-500" />
              <h3 className="text-white text-xl font-semibold">Документальные фильмы</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "«Чистилище» (1997) — Александр Невзоров", url: "https://www.youtube.com/results?search_query=чистилище+невзоров+1997", desc: "Жёсткий документальный фильм о штурме Грозного." },
                { title: "«Война» (2002) — Алексей Балабанов", url: "https://www.youtube.com/results?search_query=война+балабанов+2002+фильм", desc: "Художественный фильм о событиях Второй чеченской войны." },
                { title: "«Блокпост» (1998) — Александр Рогожкин", url: "https://www.youtube.com/results?search_query=блокпост+рогожкин+1998", desc: "Фильм о буднях федеральных солдат на блокпостах Чечни." },
                { title: "«Грозный — город-призрак» — BBC (англ.)", url: "https://www.youtube.com/results?search_query=grozny+documentary+bbc", desc: "Репортаж BBC о разрушенном Грозном." },
                { title: "«Беслан» — документальный фильм НТВ", url: "https://www.youtube.com/results?search_query=беслан+документальный+фильм+нтв", desc: "Подробная хроника трагедии в Беслане в 2004 году." },
                { title: "«Норд-Ост. Неизвестные страницы»", url: "https://www.youtube.com/results?search_query=норд+ост+документальный+фильм", desc: "Документальное расследование теракта на Дубровке." },
              ].map((v, i) => (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 rounded-xl p-5 transition-all duration-200 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-white font-medium group-hover:text-orange-400 transition-colors">{v.title}</span>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-orange-500 shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <span className="text-white/50 text-sm">{v.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black border-t border-white/10 py-10 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white font-bold text-lg">ЧеченскиеВойны.рф</span>
          <span className="text-white/40 text-sm text-center">Образовательный проект. Все материалы собраны из открытых источников.</span>
          <span className="text-white/30 text-sm">2024</span>
        </div>
      </footer>
    </div>
  )
}