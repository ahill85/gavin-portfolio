import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {resumeData.testimonials &&
                    resumeData.testimonials.map(item => {
                      return (
                        <li>

                          <div className="testimonials-container">
                            <div class="img-left">
                              <img src={`${item.imgurl}`} className="item-img" />
                            </div>
                            <div class="text-rb">
                            <blockquote>
                              <p>{item.description}</p>
                              <cite>{item.name}</cite>
                            </blockquote>
                            </div>
                            </div>
                        </li>
                      );
                    })}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
