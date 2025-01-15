import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

function Header() {
  return (
    <div className="gpt3__header section__padding " id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="subtext">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="input_container">
          <input placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="peoples_container">
          <img src={people} alt="peoples" />
          <p className="peoples_text">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="gpt3__header-graphics">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
}

export default Header;
