import { ZegoExpressEngine } from "zego-express-engine-webrtc";

import { ZEGO_VIDEO_APP_ID, ZEGO_VIDEO_APP_SIGN } from "../utility/utility";

export const zg = new ZegoExpressEngine(ZEGO_VIDEO_APP_ID, ZEGO_VIDEO_APP_SIGN);
