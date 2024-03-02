import React from "react";
import s from "./biggerPage.module.scss";

export default function BiggerPage() {
    return (
        <>
            <section className={s.biggerPage__box}>
                <div>
                    <h3>Format page : 150vh</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quidem
                        architecto omnis, mollitia amet quis rerum perspiciatis aspernatur rem
                        repudiandae quam quod incidunt. Nam tempore ipsam nisi accusantium enim
                        doloribus!
                    </p>
                </div>
            </section>
        </>
    );
}
