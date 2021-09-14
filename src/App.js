import React from 'react'

const App = () => {
    return (
        <section className="container">
            <h1 className="container__heading">Contact List</h1>

            <section className="contact-input-container">
                <form className="contact-form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="name-input" name="name" id="name" placeholder="Eg: John Smith"/>
                    <label htmlFor="name">Email: </label>
                    <input type="email" className="email-input" name="email" id="email" placeholder="Eg: john@aol.com"/>
                    <label htmlFor="phone-number">Phone number: </label>
                    <input type="tel" className="phone-number-input" name="phone-number" id="phone-number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Eg: 123-456-7890"/>
                </form>
            </section>

            <section className="contact-container">
                <ul className="contacts">
                    <li className="contact">
                        <div className="contact__info">
                            <h2 className="contact__name">John Smith</h2>
                            <div className="contact__email">john@aol.com</div>
                            <div className="contact__phone-number">123-456-7890</div>
                        </div>
                        <div className="contact__modify-contact">
                            <button className="btn delete-btn">Delete</button>
                        </div>
                    </li>

                    <li className="contact">
                        <div className="contact__info">
                            <div className="contact__name">steve Smith</div>
                            <div className="contact__email">sveve@aol.com</div>
                            <div className="contact__phone-number">234-445-7580</div>
                        </div>
                        <div className="contact__modify-contact">
                            <button className="btn delete-btn">Delete</button>
                        </div>
                    </li>
                </ul>
                <button className="btn delete-all-btn">Delete All</button>
            </section>
        </section>
    )
}

export default App
