import Link from "next/link";

const LetsBtn = () => {

    function Chatopen() {
        return $zopim.livechat.window.toggle(), !1
    }

    return (
        <>
            <Link className="lets-btn" href="get-a-quote">Get a Quote</Link>
            <a className="chat nos-btn" href="javascript:;" onClick={Chatopen}>
                Live Chat
            </a>
            <a className="nos-btn" href="tel:+(818) 304-9259">
                (818) 304-9259
            </a></>
    );
}

export default LetsBtn;