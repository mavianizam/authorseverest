import Link from "next/link";

const ChatBtn = () => {

    function Chatopen() {
        return $zopim.livechat.window.toggle(), !1
    }

    return (
        <Link href="javascript:;" className="chat nos-btn" onClick={Chatopen}> Live Chat </Link>
    );
}

export default ChatBtn;