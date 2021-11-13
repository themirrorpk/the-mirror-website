import { Link } from "react-router-dom";
import React from "react";
import "../../App.css";
import "./MeToo.css";

export default function MeToo() {
    return (
        <div className="BlogPost2">
            <div className="wrappingImg">
                <img src={"http://blogs.dunyanews.tv/wp-content/uploads/2021/03/aurat-march.jpg"} alt="imageforpost" />
            </div>
            <div className="About-text2">
                <h3 className="heading-f2">From Zainab till Meesha Shafi - The Rise of #MeToo</h3>
                <h5 className="names">
                    Zakria Akram
                </h5>
                <p className="singlePostDesc2">
                    Harassment is increasing exponentially in Pakistan because the government does not take prompt action to tackle the issue. R*pe cannot be proven unless you get the victim medically examined within two days of the incident. But that is an entirely different debate; the matter of fact is that the state lacks the legal action needed to be taken against harassment. All of us have witnessed the Zainab case and we know that the harasser was hanged, but countless other innocent children are harassed in Kasur and yet government has not taken any notice. In Zainab’s case, social media played a vital role so the government could not afford to let the criminal go. But after that, many other cases were filed for the harassment but to no avail.
                    <br />
                    <br />
                    It is imperative that the government takes responsibility of taking care of people who elected it. It should strictly enforce harassment policies. People now-a-days fear to go to police stations to report harassment as the officers ask you questions about the explicit details of the abuse for their own amusement but unfortunately, it is not entertainment: it is the bitter, ugly reality. Therefore, people usually think it is better to stay quite instead of losing their respect. For this reason, police stations need to be made safe to report such cases effectively. They should make the officers realize that this is NOT a joke. It should be made easy to report a case as well as dealing with its legal procedure.
                    <br />
                    <br />
                    We all know that Meesha Shafi filed a case against Ali Zafar a long time ago, but this case is still pending. I am no one to judge who is right and who is wrong but whoever is right, justice should be served.
                    It is about time. </p>
            </div>
        </div>
    );
}
