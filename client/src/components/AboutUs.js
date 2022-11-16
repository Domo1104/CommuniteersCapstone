import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="about-body">
        <h1>A little about this website</h1>
        When I started this project I wanted to be able to help people. You can
        search for events and sign up with your intended role for that event.
        You can view all your upcoming events and edit your role if you change
        your mind. For more information please do not hesitate to contact us.
        <div className="contact">
          <h2>How to contact us:</h2>
          <h3>Email: </h3>
          Communiteers@communiteers.org
          <h3>Mailing Address: </h3>
          2950 Union St Ste A, PO Box 1104 Queens, NY
          <h3>Phone number:</h3>
          Main Office: (800) 275-8777
          <br />
          Customer Service: (800) 275-9000
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
