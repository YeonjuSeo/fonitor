import { type } from "os";
import { atom, DefaultValue, selector, selectorFamily } from "recoil";
import video2 from "@assets/video_src.mp4";

type basisType = {
  isCapturing: boolean;
  recordChunks: never[] | any;
};

export const isCapturingState = atom<boolean | unknown>({
  key: "isCapturingState",
  default: false,
});

export const recordChunkState = atom<never[] | any>({
  key: "recordChunkState",
  default: [],
});

export const isCapturingSelector = selector({
  key: "isCapturingSelector",
  get: ({ get }) => {
    const state = get(isCapturingState);
    return state;
  },
  set: ({ set }, newValue) => set(isCapturingState, newValue),
});

export const recordChunksSelector = selector({
  key: "recordChunksSelector",
  get: ({ get }) => {
    const state = get(recordChunkState);
    return state;
  },
  set: ({ set }, newValue) => set(recordChunkState, newValue),
});

export type VideoInfoType = {
  customerId: number;
  startTime: string;
  endTime: string;
  atmId: string;
  victim: boolean;
  filePath: string;
  withdraw: number;
  phone: boolean;
  emotions: ValidEmotionType;
};

export type ValidEmotionType = {
  anger: number;
  annoyance: number;
  disapproval: number;
  disquietment: number;
  confusion: number;
  sadness: number;
  suffering: number;
  total: number;
};

export const VideoMockData: VideoInfoType[] = [
  {
    customerId: 87,
    startTime: "2022-09-23T04:59:53Z",
    endTime: "2022-12-19T00:57:06Z",
    atmId: "ULE",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 27,
    phone: false,
    emotions: {
      anger: 33,
      annoyance: 43,
      disapproval: 76,
      disquietment: 26,
      confusion: 76,
      sadness: 57,
      suffering: 35,
      total: 235,
    },
  },
  {
    customerId: 83,
    startTime: "2023-03-20T09:13:48Z",
    endTime: "2022-09-07T04:18:38Z",
    atmId: "SIF",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 72,
    phone: true,
    emotions: {
      anger: 30,
      annoyance: 93,
      disapproval: 9,
      disquietment: 80,
      confusion: 1,
      sadness: 67,
      suffering: 60,
      total: 329,
    },
  },
  {
    customerId: 76,
    startTime: "2023-02-03T08:56:45Z",
    endTime: "2023-01-17T17:10:49Z",
    atmId: "MGW",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 30,
    phone: false,
    emotions: {
      anger: 72,
      annoyance: 95,
      disapproval: 95,
      disquietment: 9,
      confusion: 17,
      sadness: 80,
      suffering: 19,
      total: 360,
    },
  },
  {
    customerId: 43,
    startTime: "2022-08-31T08:42:11Z",
    endTime: "2022-11-07T12:46:15Z",
    atmId: "SIF",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 76,
    phone: false,
    emotions: {
      anger: 90,
      annoyance: 82,
      disapproval: 19,
      disquietment: 96,
      confusion: 12,
      sadness: 1,
      suffering: 44,
      total: 359,
    },
  },
  {
    customerId: 9,
    startTime: "2023-01-24T02:08:27Z",
    endTime: "2022-12-22T09:50:16Z",
    atmId: "BSL",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 67,
    phone: true,
    emotions: {
      anger: 40,
      annoyance: 5,
      disapproval: 13,
      disquietment: 68,
      confusion: 74,
      sadness: 87,
      suffering: 29,
      total: 214,
    },
  },
  {
    customerId: 5,
    startTime: "2022-12-23T14:45:08Z",
    endTime: "2023-02-18T14:52:57Z",
    atmId: "SIR",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 29,
    phone: false,
    emotions: {
      anger: 83,
      annoyance: 15,
      disapproval: 64,
      disquietment: 1,
      confusion: 51,
      sadness: 43,
      suffering: 8,
      total: 247,
    },
  },
  {
    customerId: 84,
    startTime: "2022-08-07T16:25:26Z",
    endTime: "2022-12-29T16:09:54Z",
    atmId: "HRK",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 2,
    phone: true,
    emotions: {
      anger: 17,
      annoyance: 95,
      disapproval: 64,
      disquietment: 76,
      confusion: 6,
      sadness: 73,
      suffering: 56,
      total: 391,
    },
  },
  {
    customerId: 85,
    startTime: "2023-04-10T01:13:57Z",
    endTime: "2022-10-30T06:08:15Z",
    atmId: "NKD",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 31,
    phone: false,
    emotions: {
      anger: 95,
      annoyance: 31,
      disapproval: 30,
      disquietment: 35,
      confusion: 65,
      sadness: 92,
      suffering: 26,
      total: 282,
    },
  },
  {
    customerId: 72,
    startTime: "2022-06-17T03:46:11Z",
    endTime: "2023-03-17T00:57:59Z",
    atmId: "KUA",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 13,
    phone: true,
    emotions: {
      anger: 36,
      annoyance: 11,
      disapproval: 42,
      disquietment: 43,
      confusion: 37,
      sadness: 90,
      suffering: 85,
      total: 226,
    },
  },
  {
    customerId: 24,
    startTime: "2022-05-30T23:07:52Z",
    endTime: "2022-07-09T20:36:38Z",
    atmId: "LGL",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 29,
    phone: true,
    emotions: {
      anger: 62,
      annoyance: 42,
      disapproval: 84,
      disquietment: 54,
      confusion: 77,
      sadness: 69,
      suffering: 35,
      total: 219,
    },
  },
  {
    customerId: 61,
    startTime: "2022-07-26T11:21:57Z",
    endTime: "2023-04-14T13:56:06Z",
    atmId: "WOK",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 27,
    phone: true,
    emotions: {
      anger: 71,
      annoyance: 14,
      disapproval: 76,
      disquietment: 53,
      confusion: 12,
      sadness: 49,
      suffering: 59,
      total: 315,
    },
  },
  {
    customerId: 47,
    startTime: "2022-11-23T03:45:29Z",
    endTime: "2023-05-01T14:54:30Z",
    atmId: "ECO",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 68,
    phone: true,
    emotions: {
      anger: 51,
      annoyance: 90,
      disapproval: 83,
      disquietment: 20,
      confusion: 83,
      sadness: 11,
      suffering: 54,
      total: 372,
    },
  },
  {
    customerId: 14,
    startTime: "2022-07-07T10:22:07Z",
    endTime: "2023-01-17T21:07:51Z",
    atmId: "ODO",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 71,
    phone: false,
    emotions: {
      anger: 42,
      annoyance: 59,
      disapproval: 13,
      disquietment: 11,
      confusion: 94,
      sadness: 4,
      suffering: 29,
      total: 400,
    },
  },
  {
    customerId: 53,
    startTime: "2022-12-30T06:04:38Z",
    endTime: "2023-03-26T09:23:07Z",
    atmId: "BGE",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 85,
    phone: true,
    emotions: {
      anger: 36,
      annoyance: 58,
      disapproval: 69,
      disquietment: 33,
      confusion: 51,
      sadness: 28,
      suffering: 22,
      total: 322,
    },
  },
  {
    customerId: 2,
    startTime: "2022-06-25T10:23:25Z",
    endTime: "2022-08-06T18:06:19Z",
    atmId: "SSA",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 27,
    phone: false,
    emotions: {
      anger: 2,
      annoyance: 62,
      disapproval: 99,
      disquietment: 2,
      confusion: 87,
      sadness: 41,
      suffering: 51,
      total: 212,
    },
  },
  {
    customerId: 49,
    startTime: "2022-12-20T02:06:33Z",
    endTime: "2022-09-11T23:39:18Z",
    atmId: "STW",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 67,
    phone: false,
    emotions: {
      anger: 34,
      annoyance: 23,
      disapproval: 46,
      disquietment: 36,
      confusion: 54,
      sadness: 42,
      suffering: 92,
      total: 365,
    },
  },
  {
    customerId: 94,
    startTime: "2022-09-25T18:42:49Z",
    endTime: "2023-02-08T01:50:09Z",
    atmId: "ATK",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 13,
    phone: true,
    emotions: {
      anger: 86,
      annoyance: 82,
      disapproval: 6,
      disquietment: 19,
      confusion: 35,
      sadness: 22,
      suffering: 45,
      total: 234,
    },
  },
  {
    customerId: 71,
    startTime: "2022-12-11T16:28:51Z",
    endTime: "2022-08-28T01:07:12Z",
    atmId: "YKS",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 42,
    phone: false,
    emotions: {
      anger: 15,
      annoyance: 95,
      disapproval: 80,
      disquietment: 98,
      confusion: 26,
      sadness: 67,
      suffering: 68,
      total: 247,
    },
  },
  {
    customerId: 73,
    startTime: "2022-07-07T19:02:23Z",
    endTime: "2023-01-05T18:06:51Z",
    atmId: "SFI",
    victim: false,
    filePath: "@assets/video_src.mp4",
    withdraw: 63,
    phone: false,
    emotions: {
      anger: 53,
      annoyance: 8,
      disapproval: 56,
      disquietment: 84,
      confusion: 22,
      sadness: 96,
      suffering: 51,
      total: 212,
    },
  },
  {
    customerId: 91,
    startTime: "2022-10-24T03:30:58Z",
    endTime: "2023-04-05T21:44:08Z",
    atmId: "BSN",
    victim: true,
    filePath: "@assets/video_src.mp4",
    withdraw: 82,
    phone: true,
    emotions: {
      anger: 57,
      annoyance: 36,
      disapproval: 76,
      disquietment: 25,
      confusion: 86,
      sadness: 80,
      suffering: 45,
      total: 378,
    },
  },
];
