import React, { useState } from "react";
import "./Home.css";
import { Card, Carousel, Collapse, Select } from "antd";
import {
  ArrowRightOutlined,
  ArrowUpOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";

function Home() {
  const { Option } = Select;
  const [selectedValue, setSelectedValue] = useState("ind");
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: 'text',
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: 'text',
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: 'text',
    },
  ];
  return (
    <>
      <header>
        <div className="header-div">
          <h1>ELOXEY</h1>
        </div>
        <div className="header-div">
          <nav>
            <ul>
              <li>Catalogue</li>
              <li>My Orders</li>
              <li>Reviews</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
        <div className="header-div">
          <div>
            <Select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e)}
              style={{ width: 70 }}
            >
              <Option value="ind">IND</Option>
              <Option value="de">DE</Option>
            </Select>
          </div>
          <div className="icon-div">
            <ShoppingOutlined />
          </div>
          <div className="icon-div">
            <HeartOutlined />
          </div>
          <div className="icon-div">
            <UserOutlined />
          </div>
        </div>
      </header>
      <FloatButton
        onClick={() => console.log("onClick")}
        shape="circle"
        type="primary"
        icon={<ArrowUpOutlined />}
      />
      <div className="content">
        <div className="content-first">
          <div className="content-left-div">
            <Card>
              <div className="first-content-left">
                <ArrowUpOutlined className="arrow-link-custom" />
              </div>
            </Card>
            <Card>
              <div className="first-content-left">
                <ArrowUpOutlined className="arrow-link-custom" />
              </div>
            </Card>
            <Card>
              <div className="first-content-left">
                <ArrowUpOutlined className="arrow-link-custom" />
              </div>
              <div>
                <h2 className="second-left-sales">Sales</h2>
              </div>
            </Card>
          </div>
          <div className="content-center-div">
            <Card>
              <h1>New Collectios</h1>
            </Card>
          </div>
          <div className="content-right-div">
            <Card>
              <div className="first-right-content">
                <ArrowUpOutlined className="arrow-link-custom" />
              </div>
              <h2 className="second-right-content">Catalogue</h2>
            </Card>
            <Card>
              <Carousel dotPosition={"bottom"} autoplay dots>
                <div>
                  {/* <h3 className="carousel-content">1</h3> */}
                  <img src="https://via.placeholder.com/400X450" alt="Image1" />
                </div>
                <div>
                  {/* <h3 className="carousel-content">2</h3> */}
                  <img src="https://via.placeholder.com/400X450" alt="Image2" />
                </div>
                <div>
                  <img src="https://via.placeholder.com/400X450" alt="Image3" />
                  {/* <h3 className="carousel-content">3</h3> */}
                </div>
              </Carousel>
            </Card>
          </div>
        </div>
        <div className="content-second">
          <div className="content-second-top">
            <div>
              <h2>New Items</h2>
            </div>
            <div className="content-second-left">
              <div>
                <h4 className="second-left-more">More</h4>
              </div>
              <div className="content-left-child">
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
          <div className="content-second-bottom">
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-second">
          <div className="content-second-top">
            <div>
              <h2>Top Sellers</h2>
            </div>
            <div className="content-second-left">
              <div>
                <h4 className="second-left-more">More</h4>
              </div>
              <div className="content-left-child">
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
          <div className="content-second-bottom">
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-second">
          <div className="content-second-top">
            <div>
              <h2>Sales</h2>
            </div>
            <div className="content-second-left">
              <div>
                <h4 className="second-left-more">More</h4>
              </div>
              <div className="content-left-child">
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
          <div className="content-second-bottom">
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
            <div className="custom-card">
              <img src="https://via.placeholder.com/352X450" alt="Image1" />
              <div>
                <div className="circle-color">
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                  <div className="color-dots"></div>
                </div>
                <div className="cloth-name">Suit Men's Teddy Fleece Polar</div>
                <div className="cloth-amount">$ 199</div>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-review-home">
          <div className="content-second-top-review">
            <div>
              <h2 style={{ color: "white" }}>Customer Reviews</h2>
            </div>
            <div
              className="content-second-left"
              style={{
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white",
              }}
            >
              <div>
                <h4 className="second-left-more">More</h4>
              </div>
              <div
                className="content-left-child"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
          <div className="content-second-bottom-review">
            <div className="custom-card">
              <div className="custom-card-review">
                <div className="review-stars"></div>
                <div className="review-para"></div>
                <div className="review-img-name"></div>
              </div>
            </div>
            <div className="custom-card">
              <div className="custom-card-review">
                <div className="review-stars"></div>
                <div className="review-para"></div>
                <div className="review-img-name"></div>
              </div>
            </div>
            <div className="custom-card">
              <div className="custom-card-review">
                <div className="review-stars"></div>
                <div className="review-para"></div>
                <div className="review-img-name"></div>
              </div>
            </div>
            <div className="custom-card">
              <div className="custom-card-review">
                <div className="review-stars"></div>
                <div className="review-para"></div>
                <div className="review-img-name"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
        </div>
      </div>
      <footer>footer</footer>
    </>
  );
}

export default Home;
