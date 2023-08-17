export default function ContactForm(){
    return(
        <div>
            <form action="post" >
                <div>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div>
                    <textarea name="message" id="message" placeholder="Message"/>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
        
    )
}