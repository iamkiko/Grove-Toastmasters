import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h3 className={aboutStyles.title}>The Team</h3>
        <p className={aboutStyles.quote}>
          "A drinking group with a public speaking problem" - Priyesh Gosai
        </p>
        <div className={aboutStyles.grid}>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Andrea Perumal</h4>
            <h5>President</h5>
            <p>
              Andrea presides at meetings of the Club, has general supervision
              of the operations of the Club. Serves as one of the Club’s
              representatives on Area and District Councils.
            </p>
          </div>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Priyesh Gosai</h4>
            <h5>Immediate Past President (IPP) </h5>
            <p>
              Priyesh supports the club officers. The primary responsibilities
              of this role involve serving as a resource for new officers and
              ensuring continuity with past terms.
            </p>
          </div>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Liz Morris</h4>
            <h5>VP Education</h5>
            <p>
              Liz plans and directs club programs which meet the educational
              needs of the Club members. Plans and publishes regular schedules
              of meeting assignments. Keeps track of member's progress towards
              goals.
            </p>
          </div>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Johan Muller</h4>
            <h5>VP Membership</h5>
            <p>
              Johan plans and directs programs to retain and increase club
              membership.
            </p>
          </div>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Rumbi Paswi</h4>
            <h5>VP Public Relations</h5>
            <p>
              Rumbi develops and directs programs that inform individual members
              and the general public about Toastmasters International and about
              Club activities.
            </p>
          </div>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Michael Clacey</h4>
            <h5>Sergeant-At-Arms</h5>
            <p>
              Michael chairs the Social and Reception committees and prepares
              meeting room for meeting. Maintains Club property, including
              banner, nametags, and supplies. <br /> He is usually the first
              friendly face you encounter when you visit us!
            </p>
          </div>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Hannah Mort</h4>
            <h5>Secretary</h5>
            <p>
              Hannah is responsible for Club records and correspondence.
              Maintains the club roster. Keeps an accurate record of the
              meetings and activities of the Club.
            </p>
          </div>
          <div>
            <img
              className={aboutStyles.member}
              src={require("../assets/dude.jpg")}
              alt="dude"
            />
            <h4>Christos Constantinides</h4>
            <h5>Treasurer</h5>
            <p>
              Christos is responsible for Club financial policies, procedures
              and controls. Collects dues and pays dues to Toastmasters
              International, and maintains records.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
