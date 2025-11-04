import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
const EndCallButton = () => {
    const call = useCall();
    const router = useRouter();
    const { useLocalParticipant } = useCallStateHooks();
    const localParticipant = useLocalParticipant();
    const isMeetingOwner = localParticipant &&
        call?.state.createdBy &&
        localParticipant.userId === call.state.createdBy.id;
    if (!isMeetingOwner) {
        return null;
    }
    const handleEndCall = async () => {
        try {
            if (call) {
                await call.endCall();
                router.push('/');
            }
        } catch (error) {
            console.error('Error ending call:', error);
        }
    };
    return (
        <Button
            onClick={handleEndCall}
            className="bg-red-500 hover:bg-red-600"
        >
            End call for everyone
        </Button>
    );
}
export default EndCallButton;