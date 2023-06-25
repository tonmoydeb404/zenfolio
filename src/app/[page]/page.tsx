import PageHeader from "@/components/pages/common/PageHeader";

const Page = () => {
  return (
    <section className="wrapper">
      <PageHeader
        title="About Me"
        desc="Hey, I'm Tonmoy Deb a self-taught frontend developer from Bangladesh. I love to solve problems and build web applications. I’m passionate about front-end development. Nowadays I spend most of my time creating frontend projects."
      />
      <div className="prose dark:prose-invert">
        <h3>
          <strong>Developer Life</strong>
        </h3>
        <p>
          For development &amp; learning purposes I’ve worked with lots of
          technologies but JavaScript is my favorite language ever. I’m really
          addicted to the JavaScript ecosystem. That’s why I love to work with
          React JS &amp; Next JS.&nbsp;
        </p>
        <p>
          I prefer TailwindCSS for styling web pages. I also use Bootstrap and
          Material UI though it totally depends on the project.&nbsp;
        </p>
        <p>
          Also, I like to use ViteJS as a frontend tool because of its
          blazing-fast development environment and tons of plugins.
        </p>
        <p>
          I use Visual Studio Code for coding and all related stuff. I prefer
          Linux or more specifically Debian Based distros for programming. I use
          Xubuntu as my primary os.
        </p>
        <h3>
          <strong>Education</strong>
        </h3>
        <p>
          I am studying Diploma in Engineering in Computer Science &amp;
          Technology subject.
        </p>
        <h3>
          <strong>Hobbies</strong>
        </h3>
        <p>
          In my leisure time, I love to read books or travel somewhere. But most
          of the time I try to create a website UI though I am not so good at
          this.
        </p>
        <h3>
          <strong>Links</strong>
        </h3>
        <ul>
          <li>
            <div>
              <p>
                GitHub:&nbsp;
                <a
                  title="https://github.com/tonmoydeb404"
                  href="https://github.com/tonmoydeb404"
                >
                  <u>@tonmoydeb404</u>
                </a>
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                Linkedin:&nbsp;
                <a
                  title="https://bd.linkedin.com/in/tonmoydeb"
                  href="https://bd.linkedin.com/in/tonmoydeb"
                >
                  <u>@tonmoydeb</u>
                </a>
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                Facebook:&nbsp;
                <a
                  title="https://www.facebook.com/tonmoydeb"
                  href="https://www.facebook.com/tonmoydeb"
                >
                  <u>@tonmoydeb</u>
                </a>
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                Website:&nbsp;
                <a title="https://tonmoydeb.com" href="https://tonmoydeb.com">
                  <u>https://tonmoydeb.com</u>
                </a>
              </p>
            </div>
          </li>
        </ul>
        <h3>Contacts</h3>
        <ul>
          <li>
            <div>
              Primary Email:{" "}
              <a
                target="_blank"
                title="mailto:mail@tonmoydeb.com"
                href="mailto:mail@tonmoydeb.com"
              >
                mail@tonmoydeb.com
              </a>
            </div>
          </li>
          <li>
            <div>
              Secondary Email:{" "}
              <a
                target="_blank"
                title="mailto:tonmoydeb404@gmail.com"
                href="mailto:tonmoydeb404@gmail.com"
              >
                tonmoydeb404@gmail.com
              </a>
            </div>
          </li>
          <li>
            <div>
              Phone Number:{" "}
              <a
                target="_blank"
                title="tel:+8801571362609"
                href="tel:+8801571362609"
              >
                +8801571362609
              </a>
            </div>
          </li>
          <li>
            <div>
              WhatsApp:{" "}
              <a
                target="_blank"
                title="https://wa.me/8801571362609"
                href="https://wa.me/8801571362609"
              >
                +8801571362609
              </a>
            </div>
          </li>
        </ul>
        <p>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default Page;
