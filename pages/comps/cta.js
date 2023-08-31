import Link from "next/link";

const Cta = () => {
    return (
        <>
            <a className="chat nos-btn" href="javascript:;">
                Start Live Chat
            </a>
            <Link class="lets-btn" href="get-a-quote" style={{ marginLeft: 20 }}>Get a Quote</Link>
            <a className="nos-btn" href="tel:+(818) 304-9259">
                (818) 304-9259
            </a></>
    );
}

export default Cta;