import React from "react";
import styles from "../../styles/Info.module.css";
const Find_mentor = () => {
  return (
    <div className={styles.body}>
      <div className={styles.main_container}>
        <div>
          <h1 className={styles.title}>
            How to get started if you're looking for a mentor ?
          </h1>
          <h2>
            well, you have two options: create a mentoring request, or search
            for an existing mentoring opportunity
          </h2>
        </div>
        <div className={styles.sections}>
          <h1>Finding an existing mentoring opportunity</h1>
          <div>
            <h1>Step 1</h1>
            <h2>Creating an account or login</h2>
            <p>
              If you don't have an account, first step will be to "create one"
              and login, but if you do just "login"
            </p>
          </div>
          <div>
            <h1>Step 2</h1>
            <h2>Search based on your field</h2>
            <p>
              From the "Home page" or the "Search page" you can search for the
              right mentor according to the field you want to be mentored in,
              and view the available mentoring opportunities and the mentor
              details
            </p>
          </div>
          <div>
            <h1>Step 3</h1>
            <h2>Apply for the opportunity</h2>
            <p>
              For this step, all what you have to do is click on the request
              button on the mentoring opportunity card and the needed
              information will be sent to your potential mentor, now just wait
              for your request to be approved by the mentor.
            </p>
            <p>
              you can send messages to the mentor and ask questions about the
              opportunity or ask in the comment section in the opportunity page
            </p>
          </div>
          <div>
            <div>
              <h1>Creating a new mentoring request</h1>
              <div>
                <h1>Step 1</h1>
                <h2>Creating an account or login</h2>
                <p>
                  If you don't have an account, first step will be to "create
                  one" and login, but if you do just "login"
                </p>
              </div>
              <div>
                <h1>Step 2</h1>
                <h2>Search based on your field</h2>
                <p>
                  From the "Home page" or the "Search page" you can search for
                  the right mentor according to the field you want to be
                  mentored in, and view the available mentoring opportunities
                  and the mentor details
                </p>
              </div>
              <div>
                <h1>Step 3</h1>
                <h2>Apply for the opportunity</h2>
                <p>
                  For this step, all what you have to do is click on the request
                  button on the mentoring opportunity card and the needed
                  information will be sent to your potential mentor, now just
                  wait for your request to be approved by the mentor.
                </p>
                <p>
                  you can send messages to the mentor and ask questions about
                  the opportunity or ask in the comment section in the
                  opportunity page
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find_mentor;
