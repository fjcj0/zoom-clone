"use client";
import { DeviceSettings, useCall, VideoPreview } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
const MeetingSetup = ({ setIsSetupComplete }: {
    setIsSetupComplete: (value: boolean) => void
}) => {
    const [isMicCamToogledOn, setIsMicCamToogledOn] = useState(false);
    const call = useCall();
    if (!call) {
        throw new Error('usecall must bet used within StreamCall Component');
    }
    useEffect(() => {
        if (isMicCamToogledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isMicCamToogledOn, call?.camera, call?.microphone]);
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center gap-3 text-white">
            <h1 className="text-4xl font-bold">SetUp</h1>
            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input type="checkbox"
                        checked={isMicCamToogledOn}
                        onChange={(e) => setIsMicCamToogledOn(e.target.checked)} />
                    Join With Mic and Camera off
                </label>
                <DeviceSettings />
            </div>
            <Button className="rounded-md bg-green-500 px-4 py-2.5 hover:bg-green-800" onClick={() => {
                call.join();
                setIsSetupComplete(true);
            }}>
                Join Meeting
            </Button>
        </div>
    );
}

export default MeetingSetup;