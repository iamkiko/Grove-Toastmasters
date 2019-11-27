import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import faqStyles from "./faq.module.scss"

const FAQ = () => {
  return (
    <Layout>
      <Head title="FAQs" />
      <div>
        <h3>Frequently Asked Questions (FAQs)</h3>
        <div>
          <ul>
            <li className={faqStyles.question}>What is Toastmasters?</li>
            <p>
              Toastmasters is a non-profit educational organization with a focus
              on public speaking and leadership skills through a worldwide
              network of clubs.
            </p>
            <li className={faqStyles.question}>When and where do you meet?</li>
            <p>
              Grove Toastmasters follow the format of a dinner club and we meet
              on the first Wednesday of every month at 18:30, at Kelvin Grove
              Club.
            </p>
            <li className={faqStyles.question}>What are the roles?</li>
            <p>
              <span className={faqStyles.info}> Speaker:</span> You deliver your
              speech based off which project you have and are evaluated.
            </p>
            <p>
              <span className={faqStyles.info}>Evaluator:</span> You evaluate a
              speech from the evening and this is one of the most important
              roles as the focus of our club is self-development.
            </p>
            <p>
              <span className={faqStyles.info}>Table topics:</span> You give an
              impromptu speech, revolving around a theme or question for 1-2
              minutes.
            </p>
            <li className={faqStyles.question}>
              What happens during a meeting?
            </li>
            <a
              href="https://drive.google.com/file/d/12lRPea7oDJCGLdZP0FUVBiCpu5TubTvZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for a sample meeting agenda
            </a>{" "}
            <p>
              Our meetings are led by the Toastmaster of the evening, similar to
              an MC.
            </p>{" "}
            <p>
              The evening starts with a toast and followed by prepared speeches
              which are usually 5-7 minutes long.{" "}
            </p>
            <p>
              {" "}
              Following this, we have a break for dinner. After dinner and
              networking, we sit again for table topics which are impromptu
              speeches and voluntary.{" "}
            </p>
            <p>
              Usually, we will have a speaker from another club give us an
              educational speech on the topic of their choice for around 10
              minutes.{" "}
            </p>
            <p>
              Then, the speeches from the first half of the meeting are
              evaluated.
            </p>{" "}
            <p>
              Once evaluations have been concluded, we have the timekeeper’s
              report and then the members and guests vote for the best speaker,
              evaluator and table topic.
            </p>
            <li className={faqStyles.question}>What are the costs?</li>
            <p>
              <span className={faqStyles.info}>Registration fee:</span> R495.00
              (once off){" "}
            </p>
            <p>
              <span className={faqStyles.info}>Bi-annual membership fee:</span>{" "}
              R720.00 (every March and September
            </p>{" "}
            <p>
              <span className={faqStyles.info}>Meeting/dinner fee:</span>{" "}
              R160.00 (inclusive of 3 course meal)
            </p>
            <li className={faqStyles.question}>
              What are the <span className={faqStyles.emphasis}>benefits</span>{" "}
              of joining Toastmasters?{" "}
            </li>
            <li className={faqStyles.benefits}>
              Mastering public speaking and delivering powerful keynotes and
              speeches.
            </li>
            <li className={faqStyles.benefits}>
              Increased confidence and overcoming your fears of public speaking
              and job interviews.
            </li>
            <li className={faqStyles.benefits}>
              Opportunity to network as we have a varied age group and diverse
              background of members.
            </li>
            <li className={faqStyles.benefits}>
              A platform to hear others, listen to captivating stories and gain
              insight into certain experiences and knowledge shared.
            </li>
            <li className={faqStyles.benefits}>
              Learn how to give and take constructive feedback while improving
              communication skills Improve your listening skills.
            </li>
            <li className={faqStyles.benefits}>
              Cultivate an ability to motivate, persuade and pitch.
            </li>
            <li className={faqStyles.question}>How do I join?</li>
            <p>
              If you have made your mind up, simply contact us (contact page) or
              email us. As always, we suggest you come visit us as a guest first
              so you can get a feel for our club.
            </p>
            <li className={faqStyles.question}>
              Is attendance or speaking compulsory?
            </li>
            <p>
              Neither are compulsory however all guests are required to give a
              quick 10 second introduction.
            </p>
            <li className={faqStyles.question}>What is Pathways?</li>
            <p>
              Pathways is Toastmasters’ learning experience in which you can
              choose a learning path to focus on certain skills. You can find
              in-depth information on the{" "}
              <a
                href="https://www.toastmasters.org/pathways-overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                official Toastmasters’ website
              </a>{" "}
              & we suggest reading the{" "}
              <a
                href="https://www.toastmasters.org/education/pathways/frequently-asked-questions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pathways FAQ page
              </a>
              .
            </p>
            <li className={faqStyles.question}>
              Can I still visit other clubs if I am a member at one?
            </li>
            <p>
              Definitely, we encourage this for all members to get maximum
              exposure. Each club is unique and has something special to offer!
            </p>
            <li className={faqStyles.question}>Do I get a certificate?</li>
            <p>
              All members who complete certain milestones receive certificates
              which help in their careers and always looks good on your CV!
            </p>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ
