import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard1 from '../components/feature-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Accident Mama</title>
        <meta property="og:title" content="Accident Mama" />
      </Helmet>
      <div className="home-container01">
        <div className="home-container02">
          <header data-role="Header" className="home-header">
            <img
              alt="logo"
              src="/external/pastedimage-x4o-200h-200h.png"
              className="home-image"
            />
            <span className="home-text">
              CALL US 24/7 FOR A FREE CONSULTATION
            </span>
            <div className="home-btn-group"></div>
            <div className="home-container03">
              <div className="home-container04">
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-l7x-200h-200h-200h-200h.png"
                  className="home-pasted-image"
                />
                <span className="home-text001">(855) 5-MY-MAMA</span>
              </div>
              <span className="home-text002">Accident Hotline</span>
            </div>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-container05">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="home-image1"
                  />
                  <div data-role="CloseMobileMenu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
          <div className="home-hero">
            <div className="home-container06">
              <h1 className="home-text003">
                <span className="home-text004">
                  HAVE YOU EVER BEEN INJURED IN A
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <h1 className="home-text007">CAR ACCIDENT?</h1>
              <h2 className="home-text008">
                Call My Mama! Get Award Winning Legal Help.
              </h2>
              <div className="home-container07">
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-l7x-200h-200h-200h-200h.png"
                  className="home-pasted-image1"
                />
                <span className="home-text009">(855) 5-MY-MAMA</span>
              </div>
              <h2 className="home-text010">
                We will not charge you a penny until your case is won.
              </h2>
            </div>
            <img alt="image" src="/1-700w.png" className="home-image2" />
          </div>
          <div className="home-container08">
            <div className="home-stats">
              <span className="home-text011">
                Being involved in a car accident can be a traumatic and
                overwhelming experience. If you or a loved one has been injured
                in a car accident, it&apos;s important to seek the help of an
                experienced car accident lawyer who can protect your rights and
                ensure you receive the compensation you deserve.
              </span>
            </div>
            <div className="home-container09">
              <div className="home-container10">
                <div className="home-container11">
                  <h1 className="home-text012">How can we Help?</h1>
                  <button className="home-button button">
                    <span>No Fees Unless We Win</span>
                  </button>
                  <button className="home-button01 button">
                    We Get Clients Up To 10x The Insurance Company&apos;s Offer
                  </button>
                  <button className="home-button02 button">
                    <span>
                      <span>
                        We Fight For The Maximum Compensation
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>

                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button className="home-button03 button">
                    <span className="home-text018">
                      <span>
                        We Communicate With You Every Step Of The Way
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>

                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button className="home-button04 button">
                    Available 24/7
                  </button>
                  <button className="home-button05 button">
                    <span>
                      <span>
                        We Help You Get Medical Treatment &amp; Manage Bills
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>

                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                  <button className="home-button06 button">
                    <span>
                      <span>
                        We Help Handle Your Property Damage
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>

                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </button>
                </div>
              </div>
              <img alt="image" src="/2-500w.png" className="home-image3" />
            </div>
          </div>
          <div className="home-container12">
            <div className="home-features">
              <h1 className="home-text030">
                Why Choose Our Car Accident Lawyer?
              </h1>
              <span className="home-text031">
                Our car accident lawyer has years of experience handling a wide
                range of car accident cases, including:
              </span>
              <div className="home-separator"></div>
              <div className="home-container13">
                <div className="home-container14">
                  <FeatureCard1
                    title="Rear-end collisions"
                    imageSrc="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/88e3c703-b69b-4157-8869-03b50036125d/e2e68d18-6139-4883-90c6-d93e72a4713a?org_if_sml=12350&amp;force_format=original"
                    rootClassName="rootClassName8"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="T-bone accidents"
                    imageSrc="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/88e3c703-b69b-4157-8869-03b50036125d/bcd739b9-925b-43f3-9c73-659e7cefeb7b?org_if_sml=12583&amp;force_format=original"
                    rootClassName="rootClassName9"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="Rollover crashes"
                    imageSrc="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/88e3c703-b69b-4157-8869-03b50036125d/42a0ae32-5f59-4aa4-a246-7f76e756544a?org_if_sml=13433&amp;force_format=original"
                    rootClassName="rootClassName10"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="Drunk driving accidents"
                    imageSrc="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/88e3c703-b69b-4157-8869-03b50036125d/659af56c-1704-4714-902d-50c675a4e1aa?org_if_sml=12775&amp;force_format=original"
                    rootClassName="rootClassName11"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="Distracted driving accidents"
                    imageSrc="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/88e3c703-b69b-4157-8869-03b50036125d/36b83f43-73e4-409a-bd42-1c30c7301960?org_if_sml=11196&amp;force_format=original"
                    rootClassName="rootClassName17"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="Pedestrian and bicycle accidents"
                    imageSrc="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/88e3c703-b69b-4157-8869-03b50036125d/16df0740-2c68-462a-931a-4130fa2364e0?org_if_sml=12830&amp;force_format=original"
                    rootClassName="rootClassName16"
                  ></FeatureCard1>
                </div>
                <img alt="image" src="/3-600w.png" className="home-image4" />
              </div>
            </div>
          </div>
          <span className="home-text032">
            We have a proven track record of success in securing favorable
            settlements and verdicts for our clients, and we are committed to
            providing personalized, compassionate, and effective legal
            representation.
          </span>
          <div className="home-container15">
            <div className="home-features1">
              <h1 className="home-text033">Our Services</h1>
              <span className="home-text034">
                When you choose our car accident lawyer, you can expect the
                following services:
              </span>
              <div className="home-container16">
                <button className="home-button07 button">
                  <span className="home-text035">
                    1. Free Consultation: We offer a free, no-obligation
                    consultation to discuss the details of your case and
                    determine the best course of action.
                  </span>
                </button>
                <button className="home-button08 button">
                  2. Investigation and Evidence Gathering: Our team will
                  thoroughly investigate the accident, gather all relevant
                  evidence, and work with experts to build a strong case on your
                  behalf.
                </button>
                <button className="home-button09 button">
                  <span className="home-text036">
                    <span className="home-text037">
                      3. Negotiation and Settlement: We will negotiate with the
                      insurance companies to secure a fair settlement that
                      covers your medical expenses, lost wages, and other
                      damages.
                    </span>
                    <br className="home-text038"></br>
                    <br className="home-text039"></br>
                    <span className="home-text040">
                      <span>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                      <span>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
                <button className="home-button10 button">
                  <span className="home-text047">
                    <span className="home-text048">
                      4. Litigation: If necessary, we are prepared to take your
                      case to court and aggressively advocate for your rights in
                      front of a judge and jury.
                    </span>
                    <br className="home-text049"></br>
                    <br className="home-text050"></br>
                  </span>
                </button>
                <button className="home-button11 button">
                  <span className="home-text051">
                    <span className="home-text052">
                      5. Personalized Attention: You will have direct access to
                      your car accident lawyer throughout the entire process,
                      and we will keep you informed every step of the way.
                    </span>
                    <br className="home-text053"></br>
                    <br className="home-text054"></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="home-container17">
            <div className="home-steps">
              <h1 className="home-text055">Why Choose Us?</h1>
              <span className="home-text056">
                <span>
                  When you choose our car accident lawyer, you can expect the
                  following benefits:
                </span>
                <br></br>
              </span>
              <div className="home-container18">
                <div className="home-container19">
                  <div className="home-step">
                    <h1 className="home-text059">
                      <span>1</span>
                    </h1>
                    <span className="home-text061">
                      <span>
                        Decades of experience handling car accident cases
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-step1">
                    <h1 className="home-text064">
                      <span>2</span>
                    </h1>
                    <span className="home-text066">
                      <span>
                        A proven track record of success in securing favorable
                        settlements and verdicts
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="home-container20">
                  <div className="home-step2">
                    <h1 className="home-text069">
                      <span>3</span>
                    </h1>
                    <span className="home-text071">
                      <span>
                        Personalized attention and communication throughout the
                        entire process
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-step3">
                    <h1 className="home-text074">
                      <span>4</span>
                    </h1>
                    <span className="home-text076">
                      <span>
                        No upfront costs – we only get paid if we win your case
                      </span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-step4">
                <h1 className="home-text079">5</h1>
                <span className="home-text080">
                  <span>
                    A commitment to providing compassionate and effective legal
                    representation
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <span className="home-text083">
              <span className="home-text084">
                Even seemingly minor accidents can have hidden complications,
                especially where injuries are concerned. It&apos;s impossible to
                be certain of the accident&apos;s impact until a medical
                professional has evaluated you. Symptoms of injuries can emerge
                or intensify hours, days, or even weeks after the incident.
              </span>
              <br className="home-text085"></br>
              <br className="home-text086"></br>
              <span className="home-text087">
                Consulting with a car accident lawyer is a crucial step to
                ensure you receive adequate compensation for a comprehensive
                recovery, covering both current and future medical expenses.
              </span>
            </span>
            <h1 className="home-text088">
              Contact us for a free consultation!
            </h1>
          </div>
          <div className="home-container21">
            <div className="home-features2">
              <h1 className="home-text089">Contact Us Today</h1>
              <span className="home-text090">
                <span>
                  If you or a loved one has been involved in a car accident,
                  don&apos;t hesitate to contact us today
                </span>
                <br></br>
                <br></br>
                <span>
                  for a free consultation. Our car accident lawyer is here to
                  help you navigate the legal process
                </span>
                <br></br>
                <br></br>
                <span>
                  and ensure you receive the compensation you deserve.
                </span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>
                  Call us at
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text103">(855) 5-MY-MAMA</span>
                <span> or fill out the form below to get started.</span>
              </span>
              <form
                action="https://formsubmit.co/support@accidentmama.com"
                method="POST"
                enctype="application/x-www-form-urlencoded"
                className="home-form"
              >
                <input
                  type="text"
                  name="name"
                  required="true"
                  placeholder="Your Name"
                  autoComplete="name"
                  className="home-textinput input"
                />
                <input
                  type="email"
                  name="email"
                  pattern="+@gmail.com"
                  required="true"
                  placeholder="Email"
                  autoComplete="email"
                  className="home-textinput1 input"
                />
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Message"
                  className="home-textarea textarea input"
                ></textarea>
                <button type="submit" className="home-button12 button">
                  Send
                </button>
              </form>
            </div>
          </div>
          <footer className="home-footer">
            <div className="home-separator1"></div>
            <a
              href="https://www.tickled.app/publisher/signup/accident-mama/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              Referral program
            </a>
            <span className="home-text105">follow us</span>
            <div className="home-socials">
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-223n-200h-200h.png"
                  className="home-pasted-image2"
                />
              </div>
            </div>
            <span className="home-text106">
              © 2024 Accident Mama, All rights reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Home
