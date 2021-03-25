import Link from 'next/link'
import styles from '../styles/Landing.module.css'
import { Navbar } from '../components/Navbar'

export function Landing() {
    return (
        <div>
            <section className={styles.bgSection}>
                <Navbar />
                <div className="pt-4 pb-5 d-flex flex-column flex-md-row justify-content-around align-items-center h-100 w-100">

                    <div className="col">
                        <div className="flex flex-row ms-4">
                            <div className="ms-5">
                                <h1 className="fw-bolder text-white">
                                    Arthur Balboa.
                                    </h1>
                                <p className="mt-4 text-white">
                                    Bem-vindo ao meu portfólio.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src="icons/pc.svg" alt="Laptop" />
                    </div>
                </div>
            </section>

            <section className="">

            </section>
        </div>
    );
}