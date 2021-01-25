// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { exec } from 'cordova'

export enum NativeActions {
  bannerHide = 'bannerHide',
  bannerShow = 'bannerShow',
  configRequest = 'configRequest',
  interstitialIsLoaded = 'interstitialIsLoaded',
  interstitialLoad = 'interstitialLoad',
  interstitialShow = 'interstitialShow',
  ready = 'ready',
  rewardedIsLoaded = 'rewardedIsLoaded',
  rewardedLoad = 'rewardedLoad',
  rewardedShow = 'rewardedShow',
  setAppMuted = 'setAppMuted',
  setAppVolume = 'setAppVolume',
  start = 'start',
}

export enum Events {
  bannerClick = 'admob.banner.click',
  bannerClose = 'admob.banner.close',
  bannerImpression = 'admob.banner.impression',
  bannerLoad = 'admob.banner.load',
  bannerLoadFail = 'admob.banner.loadFail',
  bannerOpen = 'admob.banner.open',
  interstitialClick = 'admob.interstitial.click',
  interstitialClose = 'admob.interstitial.close',
  interstitialImpression = 'admob.interstitial.impression',
  interstitialLoad = 'admob.interstitial.load',
  interstitialLoadFail = 'admob.interstitial.loadFail',
  interstitialOpen = 'admob.interstitial.open',
  ready = 'admob.ready',
  rewardedClose = 'admob.rewarded.close',
  rewardedLoad = 'admob.rewarded.load',
  rewardedLoadFail = 'admob.rewarded.loadFail',
  rewardedOpen = 'admob.rewarded.open',
  rewardedReward = 'admob.rewarded.reward',
  rewardedShowFail = 'admob.rewarded.showFail',
}

export enum AdSizeType {
  BANNER,
  LARGE_BANNER,
  MEDIUM_RECTANGLE,
  FULL_BANNER,
  LEADERBOARD,
  SMART_BANNER,
}

export const execAsync = (action: NativeActions, args?: any[]) => {
  return new Promise((resolve, reject) => {
    exec(resolve, reject, 'AdMob', action, args)
  })
}

export function fireDocumentEvent(eventName: string, data = null) {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

export function waitEvent(
  successEvent: string,
  failEvent = '',
): Promise<CustomEvent> {
  return new Promise((resolve, reject) => {
    document.addEventListener(
      successEvent as any,
      (event: CustomEvent) => {
        resolve(event)
      },
      false,
    )

    if (failEvent) {
      document.addEventListener(
        failEvent as any,
        (failedEvent: CustomEvent) => {
          reject(failedEvent)
        },
        false,
      )
    }
  })
}

export const initPlugin = () => {
  document.addEventListener(
    'deviceready',
    () => {
      exec(
        (event) => {
          fireDocumentEvent(event.type, event.data)
        },
        console.error,
        'AdMob',
        NativeActions.ready,
      )
    },
    false,
  )
}
