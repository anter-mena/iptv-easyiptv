// Every device guide has its own URL (/installation-guide/<slug>) so each one can
// rank for its own search ("install IPTV on Firestick"). Slugs match the old
// #hash anchors, which the hub page still redirects for old links.

export const GUIDES_PATH = "/installation-guide"

export interface DeviceGuide {
  slug: string
  /** Short device name for breadcrumbs and cards. */
  name: string
  /** The page's H1. */
  heading: string
  /** Page title before " | Easy IPTV" — keep it under ~55 characters. */
  title: string
  /** Search snippet, 120–160 characters. */
  description: string
}

export const DEVICE_GUIDES: readonly DeviceGuide[] = [
  {
    slug: "fire-tv",
    name: "Fire TV Stick",
    heading: "Easy IPTV on Fire TV Stick: Setup Guide",
    title: "Firestick IPTV Setup Guide (Fire TV Stick & Cube)",
    description:
      "Get Easy IPTV running on your Amazon Firestick or Fire TV Cube: install Downloader, allow unknown apps, then add V12Mate. Screenshots for every step.",
  },
  {
    slug: "android-tv",
    name: "Android TV / Box",
    heading: "Easy IPTV on Android TV: Setup Guide",
    title: "Android TV & Google TV IPTV Setup Guide",
    description:
      "Set up Easy IPTV on Android TV, Google TV, Nvidia Shield, Chromecast and Android boxes using Downloader and V12Mate. Screenshots for every step.",
  },
  {
    slug: "formuler",
    name: "Formuler / Dreamlink",
    heading: "Easy IPTV on Formuler & Dreamlink: Setup Guide",
    title: "Formuler Z & Dreamlink IPTV Setup (MyTVOnline)",
    description:
      "Connect Easy IPTV to your Formuler Z or Dreamlink T box: open MyTVOnline 2 or 3, add a portal and enter your Xtream Codes login.",
  },
  {
    slug: "smart-tv",
    name: "Smart TV",
    heading: "Easy IPTV on Smart TVs: Setup Guide",
    title: "Smart TV IPTV Setup: Samsung, LG & More",
    description:
      "Stream Easy IPTV on a Samsung, LG, TCL, Hisense or other smart TV with the Hot Player app. Install, activate and load your playlist.",
  },
  {
    slug: "roku",
    name: "Roku",
    heading: "Easy IPTV on Roku: Setup Guide",
    title: "Roku IPTV Setup Guide (Roku TV, Ultra & Stick)",
    description:
      "Watch Easy IPTV on any Roku TV, Roku Ultra, Streaming Stick or Express with the Hot Player channel. Simple steps to install and activate.",
  },
  {
    slug: "apple",
    name: "iPhone, iPad & Apple TV",
    heading: "Easy IPTV on iPhone, iPad & Apple TV: Setup Guide",
    title: "iPhone, iPad & Apple TV IPTV Setup Guide",
    description:
      "Download iMPlayer from the App Store and sign in with your Easy IPTV Xtream Codes details to watch on iPhone, iPad and Apple TV.",
  },
  {
    slug: "windows",
    name: "Windows & Mac",
    heading: "Easy IPTV on Windows & Mac: Setup Guide",
    title: "Windows PC & Mac IPTV Setup Guide",
    description:
      "Three ways to watch Easy IPTV on a computer: IPTV Smarters Pro, MyIPTV Player or VLC. Pick an app and follow the steps for Windows or Mac.",
  },
  {
    slug: "android-phone",
    name: "Android Phone & Tablet",
    heading: "Easy IPTV on Android Phones & Tablets: Setup Guide",
    title: "Android Phone & Tablet IPTV Setup Guide",
    description:
      "Watch Easy IPTV on your Android phone or tablet: install iMPlayer from Google Play, add your Xtream Codes login and start streaming.",
  },
  {
    slug: "buzztv",
    name: "BuzzTV",
    heading: "Easy IPTV on BuzzTV: Setup Guide",
    title: "BuzzTV IPTV Setup Guide (XC API Login)",
    description:
      "Add Easy IPTV to a BuzzTV box in Server Settings with an XC API login. Works on every BuzzTV model, step by step.",
  },
  {
    slug: "mag",
    name: "MAG Box",
    heading: "MAG Boxes Are Not Supported",
    title: "Does Easy IPTV Work on MAG Boxes? (Alternatives)",
    description:
      "Easy IPTV does not support MAG boxes. Here is why, and the devices we recommend instead: Fire TV Stick, Formuler Z and BuzzTV.",
  },
]

export function getDeviceGuide(slug: string): DeviceGuide | undefined {
  return DEVICE_GUIDES.find((guide) => guide.slug === slug)
}

export function deviceGuideHref(slug: string): string {
  return `${GUIDES_PATH}/${slug}`
}
