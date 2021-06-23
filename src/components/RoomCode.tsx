import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';

interface RoomCodeProps {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala -1234534876234</span>
        </button>
    )
}

