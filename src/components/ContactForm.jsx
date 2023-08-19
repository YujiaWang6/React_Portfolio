export default function ContactForm(){
    return(
        <div className="contactForm">
            <form action="#" method="post">
                <div>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div>
                    <textarea name="message" id="message" placeholder="Message"/>
                </div>
                <button type="submit" id="formBtn">Send</button>
            </form>
        </div>
        
    )
}