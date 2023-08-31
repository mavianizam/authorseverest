import Link from "next/link";

const ThemeBtn = () => {
    return (
        <div class="theme-btns">
            <Link class="lets-btn" href="get-a-quote">Get a Quote</Link>
            <a class="chat nos-btn" href="javascript:;">Live Chat</a>
            <a class="nos-btn" href="tel:+(818) 304-9259">(818) 304-9259</a>
        </div>
    );
}

export default ThemeBtn;