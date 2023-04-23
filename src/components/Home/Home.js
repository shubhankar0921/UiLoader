import React from 'react'
import Design from '../Design/Design'
import "./home_style.css"

export default function Home() {
  setTimeout(() => {
    document.getElementById("home").style.top = "0"
  }, 7500);
  return (
    <>
    <Design/>
    <div id="home" className='home'>
      <div className="first">
        <h1 className="first_text">Ultimate Guide For Beginner Designers</h1>
      </div>
      <div className="gif" id="gif1"></div>

      <div className="what">
        <h1>What Is Ui?</h1>
        <p>The “UI” in UI design stands for “user interface.” The user interface is the graphical layout of an application. It consists of the buttons users click on, the text they read, the images, sliders, text entry fields, and all the rest of the items the user interacts with. This includes screen layout, transitions, interface animations and every single micro-interaction. Any sort of visual element, interaction, or animation must all be designed.This job falls to UI designers. They decide what the application is going to look like. They have to choose color schemes and button shapes — the width of lines and the fonts used for text. UI designers create the look and feel of an application’s user interface.UI designers are graphic designers. They’re concerned with aesthetics. It’s up to them to make sure the application’s interface is attractive, visually-stimulating and themed appropriately to match the purpose and/or personality of the app. And they need to make sure every single visual element feels united, both aesthetically, and in purpose.

      </p>
      </div>
      <div className="what">
        <h1>What is UX?</h1>
        <p>“UX” stands for “user experience.” A user’s experience of the app is determined by how they interact with it. Is the experience smooth and intuitive or clunky and confusing? Does navigating the app feel logical or does it feel arbitrary? Does interacting with the app give people the sense that they’re efficiently accomplishing the tasks they set out to achieve or does it feel like a struggle? User experience is determined by how easy or difficult it is to interact with the user interface elements that the UI designers have created.So UX designers are also concerned with an application’s user interface, and this is why people get confused about the difference between the two. But whereas UI designers are tasked with deciding how the user interface will look, UX designers are in charge of determining how the user interface operates.

        They determine the structure of the interface and the functionality. How it’s organized and how all the parts relate to one another. In short, they design how the interface works. If it works well and feels seamless, the user will have a good experience. 

        </p>
      </div>
      <div className="gif" id="gif2"></div>

      <div className="what">
        <h1>Research in UI Designs</h1>
        <p>UI designers need to make sure the visual language they choose fits the class of application they’re writing. They’re trying to predict user expectations. If your team is designing a travel app, it’s important to research how other travel apps have been developed in the past. Which ones worked? Which ones didn’t? There are design lessons to be learned from the work others have done before.

        Research might indicate that people prefer outlined icons instead of bold shapes. This is a visual shorthand that people are comfortable with and enjoy. UI designers would then do well to incorporate that lesson.

        The exact aesthetic they choose is up to them, but the basic “rules,” or the need to conform to user expectations, is something designers ignore at their own risk.

        Not to say risks shouldn’t be taken. UI designers want their interface designs to stand out and be memorable. But this must be balanced against making sure people recognize the purpose of the elements you’re placing on screen.

        </p>
      </div>
      <div className="what">
        <h1>Research for UX Design</h1>
        <p>UX design is particularly interested in user expectations. All of the experiences and interactions that users have had with every application they’ve used in their lives have helped set their expectations for how interfaces are supposed to work. If a UX designer isn’t intimately familiar with these expectations, they could inadvertently design an interface interaction that seems logical to them but breaks commonly accepted conventions. Users don’t like when an interface behaves very differently than they were expecting, and this could negatively impact their experience.</p>
      </div>

      <div className="what">
        <h1><a href="https://medium.com/@pallavipareek31/top-ui-ux-design-learning-resources-for-newbies-in-2021-bfac7c3476b9" className="link">Resources To Learn From.....</a></h1>
        
      </div>
        
    </div>
    
    </>
  )
}
